import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS as INITIAL_PRODUCTS, PROMO_CODES } from '../data/products';
import {
  listenToProductsCloud,
  listenToOrdersCloud,
  listenToReviewsCloud,
  saveOrderCloud,
  updateOrderStatusCloud,
  saveProductCloud,
  updateStockCloud,
  deleteProductCloud,
  saveReviewCloud,
  deleteReviewCloud,
  loginAdminCloud,
  logoutAdminCloud
} from '../services/firebaseService';

const ShopContext = createContext();


const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Saima Rafique',
    city: 'Lahore',
    rating: 5,
    date: '25 Aug 2026',
    comment: 'Peshawari Chappal quality is absolute perfection! Genuine leather with extremely soft double sole. Delivered in 2 days.',
    verified: true,
    productId: 'm-1'
  },
  {
    id: 'rev-2',
    author: 'Hamza Farooq',
    city: 'Karachi',
    rating: 5,
    date: '22 Aug 2026',
    comment: 'Ordered Ladies Bag for my mother. Premium finish, gold hardware, and sturdy stitching. Very satisfied with JazzCash payment process!',
    verified: true,
    productId: 'a-1'
  },
  {
    id: 'rev-3',
    author: 'Zainab Bibi',
    city: 'Islamabad',
    rating: 5,
    date: '20 Aug 2026',
    comment: 'The Fancy Bridal heels are stunning! Look exactly like high-end luxury stores but at half the price.',
    verified: true,
    productId: 'w-6'
  }
];

const assignInitialStock = (productsList) => {
  return productsList.map((p, idx) => {
    let stock = 12;
    const mod = idx % 11;
    if (mod === 0) stock = 3; // 🚨 Low Stock: 3 pairs
    else if (mod === 1) stock = 5; // 🚨 Low Stock: 5 pairs
    else if (mod === 4) stock = 2; // 🚨 Low Stock: 2 pairs
    else if (mod === 7) stock = 4; // 🚨 Low Stock: 4 pairs
    else if (mod === 10) stock = 1; // 🚨 Critical: 1 pair
    else if (idx % 29 === 0) stock = 0; // ❌ Out of stock
    else if (idx % 3 === 0) stock = 8;
    else if (idx % 5 === 0) stock = 15;
    else if (idx % 7 === 0) stock = 22;
    else stock = 10 + (idx % 14);

    // Specific user requested items:
    if (p.subcategory === 'Kheri') {
      if (idx % 3 === 0) stock = 3; // 3 pairs of Kheri
      else if (idx % 2 === 0) stock = 5; // 5 pairs of Kheri
      else stock = 10;
    }
    if (p.subcategory === 'Ladies Bags') {
      if (idx % 3 === 0) stock = 4; // 4 Handbags
      else if (idx % 2 === 0) stock = 5; // 5 Handbags
      else stock = 12;
    }

    return {
      ...p,
      enabled: p.enabled !== undefined ? p.enabled : true,
      stockCount: stock,
      inStock: stock > 0
    };
  });
};

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    try {
      const CURRENT_VERSION = 'v14.0_complete_280_products_catalog_all_subcategories';
      const savedVersion = localStorage.getItem('stylish_products_version');
      const saved = localStorage.getItem('stylish_products');

      if (savedVersion === CURRENT_VERSION && saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_PRODUCTS.length) {
          return parsed.map((p) => ({
            ...p,
            enabled: p.enabled !== undefined ? p.enabled : true,
            inStock: (p.stockCount !== undefined ? p.stockCount : 15) > 0,
            stockCount: p.stockCount !== undefined ? p.stockCount : 15
          }));
        }
      }

      // Merge / refresh so all 280 products across all subcategories exist
      localStorage.setItem('stylish_products_version', CURRENT_VERSION);
      const initialized = assignInitialStock(INITIAL_PRODUCTS);
      localStorage.setItem('stylish_products', JSON.stringify(initialized));
      return initialized;
    } catch {
      return assignInitialStock(INITIAL_PRODUCTS);
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const INITIAL_ORDERS = [];

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_orders');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Exclude legacy mock sample orders
        const cleaned = parsed.filter((o) => o.orderId !== 'STYL-849201' && o.orderId !== 'STYL-739102');
        localStorage.setItem('stylish_orders', JSON.stringify(cleaned));
        return cleaned;
      }
      return INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [reviews, setReviews] = useState(() => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('stylish_deleted_review_ids') || '[]');
      const saved = localStorage.getItem('stylish_reviews');
      const baseReviews = saved ? JSON.parse(saved) : INITIAL_REVIEWS;
      return baseReviews.filter((r) => !deletedIds.includes(r.id));
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // UI & Filter States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPriceFilter, setMaxPriceFilter] = useState(10000);
  const [selectedColorFilter, setSelectedColorFilter] = useState('');
  const [inStockOnlyFilter, setInStockOnlyFilter] = useState(false);

  // Modals & Panels
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [searchTrackingId, setSearchTrackingId] = useState('');
  const [isCustomerAccountOpen, setIsCustomerAccountOpen] = useState(false);
  const [customerAccountTab, setCustomerAccountTab] = useState('orders'); // 'orders' | 'wishlist' | 'profile'
  const [customerProfile, setCustomerProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_customer_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const saveCustomerProfile = (profile) => {
    setCustomerProfile(profile);
    try {
      localStorage.setItem('stylish_customer_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  };

  // Newsletter Email Subscribers for Admin CRM & Marketing
  const [subscribers, setSubscribers] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_newsletter_subscribers');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      { id: 'sub-1', email: 'irshad.customer@gmail.com', date: '25 Aug 2026', source: 'Storefront Footer' },
      { id: 'sub-2', email: 'ayesha.style@yahoo.com', date: '24 Aug 2026', source: 'Storefront Footer' },
      { id: 'sub-3', email: 'hamza.leather@outlook.com', date: '23 Aug 2026', source: 'Storefront Footer' }
    ];
  });

  const addSubscriber = (email) => {
    if (!email || !email.includes('@')) {
      showToast('⚠️ Please provide a valid email address!');
      return false;
    }
    const cleanEmail = email.trim().toLowerCase();
    const exists = subscribers.some((s) => s.email.toLowerCase() === cleanEmail);
    if (exists) {
      showToast('ℹ️ You are already subscribed to our VIP newsletter!');
      return true;
    }
    const newSub = {
      id: `sub-${Date.now()}`,
      email: cleanEmail,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      source: 'Storefront Footer'
    };
    const updated = [newSub, ...subscribers];
    setSubscribers(updated);
    try {
      localStorage.setItem('stylish_newsletter_subscribers', JSON.stringify(updated));
    } catch {}
    showToast('🎉 Thank you for subscribing! VIP discount unlocked.');
    return true;
  };

  const deleteSubscriber = (idOrEmail) => {
    const updated = subscribers.filter((s) => s.id !== idOrEmail && s.email !== idOrEmail);
    setSubscribers(updated);
    try {
      localStorage.setItem('stylish_newsletter_subscribers', JSON.stringify(updated));
    } catch {}
    showToast('Subscriber removed.');
  };

  // Admin Security & Auth State with Persistent Session
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      const session = localStorage.getItem('stylish_session') || localStorage.getItem('velvet_session');
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed && (parsed.role === 'owner' || parsed.role === 'staff')) return true;
      }
      return (
        sessionStorage.getItem('stylish_admin_auth') === 'true' ||
        localStorage.getItem('stylish_admin_auth') === 'true'
      );
    } catch {
      return false;
    }
  });

  const [adminEmail, setAdminEmail] = useState(() => {
    try {
      const session = localStorage.getItem('stylish_session') || localStorage.getItem('velvet_session');
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed?.name || parsed?.username) return parsed.name || parsed.username;
      }
      return (
        sessionStorage.getItem('stylish_admin_email') ||
        localStorage.getItem('stylish_admin_email') ||
        'admin'
      );
    } catch {
      return 'admin';
    }
  });

  const [isAdminMode, setIsAdminMode] = useState(() => {
    try {
      const hash = (window.location.hash || '').toLowerCase();
      const path = (window.location.pathname || '').toLowerCase();
      const search = (window.location.search || '').toLowerCase();
      return hash.includes('admin') || path.includes('admin') || search.includes('admin');
    } catch {
      return false;
    }
  });

  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);

  // Auto-detect routes in URL (admin, product, category, cart, tracking)
  useEffect(() => {
    const handleRouteChange = () => {
      try {
        const hash = window.location.hash || '';
        const search = window.location.search || '';
        const path = window.location.pathname || '';
        const combined = (hash + ' ' + search + ' ' + path).toLowerCase();

        // 1. Admin route
        const isAdminRoute =
          combined.includes('admin') ||
          combined.includes('login') ||
          combined.includes('dashboard');

        setIsAdminMode(isAdminRoute);

        // 2. Product Deep Link (#product=m-1 or ?product=m-1)
        const prodMatch = hash.match(/product=([a-zA-Z0-9_-]+)/i) || search.match(/product=([a-zA-Z0-9_-]+)/i);
        if (prodMatch && prodMatch[1]) {
          const target = products.find((p) => p.id.toLowerCase() === prodMatch[1].toLowerCase());
          if (target) {
            setQuickViewProduct(target);
          }
        } else if (!hash.includes('product=') && !search.includes('product=')) {
          if (!isAdminRoute) {
            setQuickViewProduct(null);
          }
        }

        // 3. Category Deep Link (#category=women or ?category=women)
        const catMatch = hash.match(/category=([a-zA-Z0-9_-]+)/i) || search.match(/category=([a-zA-Z0-9_-]+)/i);
        if (catMatch && catMatch[1]) {
          setSelectedCategory(catMatch[1]);
        }

        // 4. Cart Deep Link (#cart)
        if (hash.includes('#cart')) {
          setIsCartOpen(true);
        }

        // 5. Tracking Deep Link (#tracking)
        if (hash.includes('#tracking')) {
          setIsTrackingOpen(true);
        }
      } catch (e) {
        console.warn('Route listener warning:', e);
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [products]);

  // Sync quickViewProduct with browser hash for shareable URLs & back-button support
  const setQuickViewProductWithUrl = (prod) => {
    setQuickViewProduct(prod);
    try {
      if (prod && prod.id) {
        if (!window.location.hash.includes(`product=${prod.id}`)) {
          window.location.hash = `product=${prod.id}`;
        }
      } else {
        if (window.location.hash.includes('product=')) {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
      }
    } catch {}
  };

  const [appliedPromo, setAppliedPromo] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Firebase Cloud Firestore Subscriptions & Real-Time Sync
  useEffect(() => {
    const unsubscribeProducts = listenToProductsCloud((cloudProducts) => {
      if (Array.isArray(cloudProducts) && cloudProducts.length >= INITIAL_PRODUCTS.length) {
        setProducts(cloudProducts);
      } else if (Array.isArray(cloudProducts) && cloudProducts.length > 0) {
        // Merge cloud updates into our full 280-product catalog so no subcategory is ever lost
        setProducts((prev) => {
          const map = new Map(prev.map(p => [p.id, p]));
          cloudProducts.forEach(cp => {
            map.set(cp.id, { ...(map.get(cp.id) || {}), ...cp });
          });
          return Array.from(map.values());
        });
      }
    });
    const unsubscribeOrders = listenToOrdersCloud((cloudOrders) => {
      setOrders(cloudOrders);
    });
    const unsubscribeReviews = listenToReviewsCloud((cloudReviews) => {
      try {
        const deletedIds = JSON.parse(localStorage.getItem('stylish_deleted_review_ids') || '[]');
        setReviews(cloudReviews.filter((r) => !deletedIds.includes(r.id)));
      } catch {
        setReviews(cloudReviews);
      }
    });

    return () => {
      if (unsubscribeProducts) unsubscribeProducts();
      if (unsubscribeOrders) unsubscribeOrders();
      if (unsubscribeReviews) unsubscribeReviews();
    };
  }, []);

  // LocalStorage Persistence
  useEffect(() => {
    localStorage.setItem('stylish_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('stylish_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('stylish_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('stylish_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('stylish_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Admin Auth Methods (Username & Password Verification)
  const verifyAdminAuth = async (username, password, rememberMe = true, role = 'owner') => {
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    if (!cleanUser) {
      showToast('❌ Please enter username!');
      return { success: false, message: 'Username cannot be empty!' };
    }

    if (!cleanPassword) {
      showToast('❌ Please enter password!');
      return { success: false, message: 'Password cannot be empty!' };
    }

    // 1. Cloud Firebase Authentication Attempt (if email provided)
    if (cleanUser.includes('@')) {
      try {
        const res = await loginAdminCloud(cleanUser, cleanPassword);
        if (res && res.success) {
          const authedEmail = res.user?.email || cleanUser;
          setIsAdminAuthenticated(true);
          setAdminEmail(authedEmail);
          setIsAdminMode(true);
          setIsAdminAuthOpen(false);

          const sessionObj = {
            role: 'owner',
            username: authedEmail,
            name: authedEmail,
            title: 'Store Owner'
          };
          sessionStorage.setItem('stylish_admin_auth', 'true');
          sessionStorage.setItem('stylish_admin_email', authedEmail);
          localStorage.setItem('stylish_session', JSON.stringify(sessionObj));

          if (rememberMe) {
            localStorage.setItem('stylish_admin_auth', 'true');
            localStorage.setItem('stylish_admin_email', authedEmail);
          }
          showToast(`🔒 Welcome back! Cloud login successful.`);
          return { success: true };
        }
      } catch (cloudErr) {
        console.warn('Firebase login attempt:', cloudErr.message);
      }
    }

    // 2. Custom Saved Credentials from Store Settings
    let customCreds = null;
    try {
      const savedCustom = localStorage.getItem('stylish_custom_admin_creds');
      if (savedCustom) customCreds = JSON.parse(savedCustom);
    } catch {}

    const isCustomMatch =
      customCreds &&
      customCreds.username &&
      customCreds.password &&
      cleanUser === customCreds.username.toLowerCase().trim() &&
      cleanPassword === customCreds.password.trim();

    // 3. Authorized Store Owner Credential Pairs
    const defaultOwnerPairs = [
      { u: 'admin', p: 'admin123' },
      { u: 'admin', p: 'stylish123' },
      { u: 'admin', p: 'admin12' },
      { u: 'irshad', p: 'admin123' },
      { u: 'irshad', p: 'stylish123' },
      { u: 'rubina', p: 'admin12' },
      { u: 'owner', p: 'stylish123' }
    ];

    const isDefaultMatch = defaultOwnerPairs.some(
      (pair) => pair.u === cleanUser && pair.p === cleanPassword
    );

    if (isCustomMatch || isDefaultMatch) {
      const displayName =
        cleanUser === 'rubina' ? 'Rubina (Owner)' :
        cleanUser === 'irshad' ? 'Irshad (Owner)' :
        cleanUser.charAt(0).toUpperCase() + cleanUser.slice(1);

      setIsAdminAuthenticated(true);
      setAdminEmail(displayName);
      setIsAdminMode(true);
      setIsAdminAuthOpen(false);

      const sessionObj = {
        role: role || 'owner',
        username: cleanUser,
        name: displayName,
        title: role === 'owner' ? 'Store Owner' : 'Store Staff'
      };

      sessionStorage.setItem('stylish_admin_auth', 'true');
      sessionStorage.setItem('stylish_admin_email', displayName);
      localStorage.setItem('stylish_session', JSON.stringify(sessionObj));
      localStorage.setItem('velvet_session', JSON.stringify(sessionObj));

      if (rememberMe) {
        localStorage.setItem('stylish_admin_auth', 'true');
        localStorage.setItem('stylish_admin_email', displayName);
      }

      showToast('🔒 Welcome back! Admin authenticated successfully.');
      return { success: true };
    }

    showToast('❌ Invalid username or password!');
    return {
      success: false,
      message: 'Invalid credentials. Please enter valid details (e.g. rubina / admin12 or admin / admin123).'
    };
  };

  // Helper
  const verifyAdminPassword = (enteredPassword, rememberMe = true) => {
    return verifyAdminAuth('admin', enteredPassword, rememberMe);
  };

  const lockAdminSession = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('stylish_admin_auth');
    sessionStorage.removeItem('stylish_admin_email');
    localStorage.removeItem('stylish_admin_auth');
    localStorage.removeItem('stylish_admin_email');
    localStorage.removeItem('stylish_session');
    localStorage.removeItem('velvet_session');
    logoutAdminCloud();
    setIsAdminMode(true); // Stay on admin mode to display login screen, exactly like salon
    setIsAdminAuthOpen(true);
    showToast('🔒 Admin session locked & logged out.');
  };

  const openAdminPanel = (forceVerification = true) => {
    if (forceVerification) {
      setIsAdminAuthenticated(false);
      sessionStorage.removeItem('stylish_admin_auth');
    }
    setIsAdminMode(true);
    setIsAdminAuthOpen(true);
  };

  const updateAdminCredentials = (newUsername, newPassword) => {
    if (!newPassword || newPassword.trim().length < 4) {
      showToast('⚠️ Password must be at least 4 characters long.');
      return false;
    }
    const creds = {
      username: (newUsername || 'admin').trim().toLowerCase(),
      password: newPassword.trim()
    };
    localStorage.setItem('stylish_custom_admin_creds', JSON.stringify(creds));
    showToast('✅ New admin credentials saved successfully!');
    return true;
  };

  // Cart Operations
  const addToCart = (product, selectedColor = null, selectedSize = null, qty = 1) => {
    // Find current live product in products array to get freshest stock
    const currentProd = products.find((p) => p.id === product.id) || product;
    const availableStock = currentProd.stockCount !== undefined ? currentProd.stockCount : 15;

    if (!currentProd.inStock || availableStock <= 0) {
      showToast(`⚠️ Sorry, "${currentProd.title}" is completely Out of Stock!`);
      return;
    }

    const color = selectedColor || (product.colors && product.colors[0]) || 'Standard';
    const size = selectedSize || (product.sizes && product.sizes[0]) || 'Standard';

    // Check quantity already in cart for this product
    const existingInCart = cart.find(
      (item) => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
    );
    const existingQty = existingInCart ? existingInCart.quantity : 0;

    if (existingQty + qty > availableStock) {
      const allowedToAdd = availableStock - existingQty;
      if (allowedToAdd <= 0) {
        showToast(`❌ Only ${availableStock} pair(s) left in stock! You already have all in your bag.`);
      } else {
        showToast(`❌ Only ${availableStock} pair(s) in stock! You can only add ${allowedToAdd} more.`);
      }
      return;
    }

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prevCart, { product: currentProd, selectedColor: color, selectedSize: size, quantity: qty }];
      }
    });

    showToast(`Added "${product.title}" (${qty} pair) to Cart`);
  };

  const updateCartQuantity = (productId, color, size, delta) => {
    const currentProd = products.find((p) => p.id === productId);
    const availableStock = currentProd ? (currentProd.stockCount !== undefined ? currentProd.stockCount : 15) : 99;

    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.product.id === productId && item.selectedColor === color && item.selectedSize === size) {
          const newQty = item.quantity + delta;
          if (newQty > availableStock) {
            showToast(`❌ Only ${availableStock} in stock for "${item.product.title}"!`);
            return item;
          }
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId, color, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedColor === color && item.selectedSize === size)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo('');
    setDiscountRate(0);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist');
        return [...prev, productId];
      }
    });
  };

  // Real-time Stock Deduction & Order Creation with Firebase Cloud Sync
  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
    saveOrderCloud(order);

    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        const orderedItem = order.items.find((item) => item.product.id === p.id);
        if (orderedItem) {
          const newStock = Math.max(0, (p.stockCount !== undefined ? p.stockCount : 15) - orderedItem.quantity);
          updateStockCloud(p.id, newStock);
          return {
            ...p,
            stockCount: newStock,
            inStock: newStock > 0
          };
        }
        return p;
      });
    });
  };

  // Real-time Admin CRUD with Firebase Cloud Sync
  const addNewProduct = (newProd) => {
    const p = {
      ...newProd,
      id: `p-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1,
      inStock: (newProd.stockCount ? parseInt(newProd.stockCount) : 20) > 0,
      enabled: newProd.enabled !== undefined ? newProd.enabled : true,
      stockCount: newProd.stockCount ? parseInt(newProd.stockCount) : 20
    };
    
    setProducts((prev) => [p, ...prev]);
    saveProductCloud(p);

    // Keep admin session safely locked in Admin Mode
    setIsAdminMode(true);
    if (!window.location.hash.includes('admin')) {
      window.location.hash = 'admin';
    }

    showToast(`✨ Product "${p.title}" created & LIVE on Firebase Cloud!`);
  };

  const updateProductStock = (id, newStockCount) => {
    const count = Math.max(0, parseInt(newStockCount) || 0);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stockCount: count, inStock: count > 0 } : p))
    );
    updateStockCloud(id, count);
    showToast(`📦 Stock updated in Firebase Cloud`);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    deleteProductCloud(id);
    showToast('Product deleted from Firebase inventory');
  };

  const updateProduct = (updatedProd) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === updatedProd.id
          ? {
              ...p,
              ...updatedProd,
              enabled:
                updatedProd.enabled !== undefined
                  ? updatedProd.enabled
                  : p.enabled !== undefined
                  ? p.enabled
                  : true
            }
          : p
      )
    );
    saveProductCloud(updatedProd);
    showToast(`✏️ Product "${updatedProd.title}" updated & saved!`);
  };

  const restoreMasterCatalog = () => {
    const initialized = assignInitialStock(INITIAL_PRODUCTS);
    setProducts(initialized);
    localStorage.setItem('stylish_products', JSON.stringify(initialized));
    localStorage.setItem('stylish_products_version', 'v14.0_complete_280_products_catalog_all_subcategories');
    showToast(`🔄 Master Catalog refreshed! All 280 products restored with images.`);
  };

  const toggleProductStatus = (id) => {
    let updatedTarget = null;
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const currentStatus = p.enabled !== undefined ? p.enabled : true;
          const nextStatus = !currentStatus;
          updatedTarget = { ...p, enabled: nextStatus };
          return updatedTarget;
        }
        return p;
      })
    );
    if (updatedTarget) {
      saveProductCloud(updatedTarget);
      showToast(
        updatedTarget.enabled
          ? `🟢 "${updatedTarget.title}" is now ENABLED (Live on website)`
          : `⚪ "${updatedTarget.title}" is now DISABLED (Hidden from website)`
      );
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) => {
      return prev.map((o) => (o.orderId === orderId ? { ...o, status: newStatus } : o));
    });

    updateOrderStatusCloud(orderId, newStatus);
    if (newStatus === 'Delivered') {
      showToast(`✅ Order ${orderId} delivered & archived from active notifications.`);
    } else {
      showToast(`⚡ Order ${orderId} status set to ${newStatus}`);
    }
  };

  // Add Customer Review with Firebase Cloud Sync
  const addCustomerReview = (newReview) => {
    const revObj = {
      id: `rev-${Date.now()}`,
      author: newReview.author || 'Valued Customer',
      city: newReview.city || 'Pakistan',
      rating: parseInt(newReview.rating) || 5,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      comment: newReview.comment,
      verified: true,
      productId: newReview.productId || null
    };

    setReviews((prev) => [revObj, ...prev]);
    saveReviewCloud(revObj);

    if (newReview.productId) {
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id === newReview.productId) {
            const newCount = (p.reviewsCount || 1) + 1;
            const newRating = Number((((p.rating || 5) * (p.reviewsCount || 1) + revObj.rating) / newCount).toFixed(1));
            const updatedProd = { ...p, rating: newRating, reviewsCount: newCount };
            saveProductCloud(updatedProd);
            return updatedProd;
          }
          return p;
        })
      );
    }

    showToast('⭐ Review submitted & synced to Firebase Cloud!');
  };

  const deleteOrder = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
    showToast(`🗑️ Order ${orderId} deleted`);
  };

  const deleteReview = (reviewId) => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('stylish_deleted_review_ids') || '[]');
      if (!deletedIds.includes(reviewId)) {
        deletedIds.push(reviewId);
        localStorage.setItem('stylish_deleted_review_ids', JSON.stringify(deletedIds));
      }
    } catch {}

    setReviews((prev) => {
      const updated = prev.filter((r) => r.id !== reviewId);
      localStorage.setItem('stylish_reviews', JSON.stringify(updated));
      return updated;
    });

    deleteReviewCloud(reviewId);
    showToast('🗑️ Review removed & synced');
  };


  const freeShippingThreshold = 4000;

  // Promo Code Validation & Application
  const applyPromoCode = (code) => {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) {
      return { success: false, message: '⚠️ Please enter a promo code.' };
    }

    // Load coupons from admin panel or fallback to initial store promotions
    let availableCoupons = [
      { id: 'c-1', code: 'STYLISH10', type: 'percentage', value: 10, minOrder: 0, active: true },
      { id: 'c-2', code: 'WELCOME500', type: 'fixed', value: 500, minOrder: 2000, active: true },
      { id: 'c-3', code: 'FREESHIP', type: 'free_shipping', value: 250, minOrder: 0, active: true },
      { id: 'c-4', code: 'CLIVE10', type: 'percentage', value: 10, minOrder: 0, active: true },
      { id: 'c-5', code: 'WELCOME', type: 'percentage', value: 5, minOrder: 0, active: true },
    ];

    try {
      const saved = localStorage.getItem('stylish_admin_coupons');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          availableCoupons = parsed;
        }
      }
    } catch {}

    const match = availableCoupons.find(
      (c) => (c.code || '').trim().toUpperCase() === cleanCode
    );

    // FAKE OR INVALID PROMO CODE:
    // DO NOT trigger positive notification on screen!
    if (!match) {
      return {
        success: false,
        message: `❌ "${cleanCode}" is an invalid or fake promo code!`
      };
    }

    if (match.active === false) {
      return {
        success: false,
        message: `⚠️ Promo code "${match.code}" has expired or is currently inactive.`
      };
    }

    // Minimum order requirement check
    const currentSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    if (match.minOrder && currentSubtotal < Number(match.minOrder)) {
      return {
        success: false,
        message: `⚠️ Minimum order of Rs. ${Number(match.minOrder).toLocaleString()} required for code "${match.code}".`
      };
    }

    // Apply Discount
    if (match.type === 'percentage') {
      setDiscountRate(Number(match.value) / 100);
    } else if (match.type === 'fixed') {
      const rate = currentSubtotal > 0 ? Number(match.value) / currentSubtotal : 0;
      setDiscountRate(rate);
    } else if (match.type === 'free_shipping') {
      setDiscountRate(0);
    }

    setAppliedPromo(match.code);
    showToast(`🎉 Promo code "${match.code}" applied successfully!`);
    return { success: true, message: `Promo code "${match.code}" applied!` };
  };

  const removePromoCode = () => {
    setAppliedPromo('');
    setDiscountRate(0);
    showToast('Promo code removed');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = cartSubtotal * discountRate;
  const shippingFee = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 250;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        orders,
        reviews,
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        maxPriceFilter,
        setMaxPriceFilter,
        selectedColorFilter,
        setSelectedColorFilter,
        inStockOnlyFilter,
        setInStockOnlyFilter,
        quickViewProduct,
        setQuickViewProduct: setQuickViewProductWithUrl,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isTrackingOpen,
        setIsTrackingOpen,
        searchTrackingId,
        setSearchTrackingId,
        isCustomerAccountOpen,
        setIsCustomerAccountOpen,
        customerAccountTab,
        setCustomerAccountTab,
        customerProfile,
        saveCustomerProfile,
        subscribers,
        addSubscriber,
        deleteSubscriber,
        isAdminMode,
        setIsAdminMode,
        isAdminAuthOpen,
        setIsAdminAuthOpen,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        adminEmail,
        setAdminEmail,
        verifyAdminAuth,
        verifyAdminPassword,
        updateAdminCredentials,
        lockAdminSession,
        openAdminPanel,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        freeShippingThreshold,
        discountRate,
        discountAmount,
        cartSubtotal,
        shippingFee,
        cartTotal,
        amountForFreeShipping,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        addNewProduct,
        updateProduct,
        updateProductStock,
        deleteProduct,
        restoreMasterCatalog,
        toggleProductStatus,
        updateOrderStatus,
        deleteOrder,
        addOrder,
        deleteReview,
        addCustomerReview,
        orderReceipt,
        setOrderReceipt,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

