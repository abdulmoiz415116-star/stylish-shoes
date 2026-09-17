import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { isFirebaseConfigured } from '../services/firebaseService';
import { AdminReportsView } from './AdminReportsView';
import { BulkProductImportModal } from './BulkProductImportModal';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Tag,
  Star,
  Layers,
  Settings,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  Truck,
  DollarSign,
  ArrowLeft,
  X,
  Search,
  Image as ImageIcon,
  Eye,
  EyeOff,
  MessageCircle,
  FileText,
  Printer,
  ShieldCheck,
  LogOut,
  Edit,
  TrendingUp,
  Download,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Filter,
  Check,
  Phone,
  MapPin,
  Sparkles,
  Menu,
  BarChart3,
  Calendar,
  PieChart,
  TrendingDown,
  AlertCircle,
  Mail,
  Copy
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminPanel = () => {
  const {
    products,
    orders,
    reviews,
    addNewProduct,
    addBulkProducts,
    updateProduct,
    updateProductStock,
    deleteProduct,
    restoreMasterCatalog,
    toggleProductStatus,
    updateOrderStatus,
    deleteOrder,
    deleteReview,
    addCustomerReview,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
    setIsAdminMode,
    setIsAdminAuthOpen,
    lockAdminSession,
    adminEmail,
    showToast,
    subscribers,
    deleteSubscriber
  } = useShop();

  const handleExitToStorefront = () => {
    setIsAdminMode(false);
    setIsAdminAuthOpen(false);
    if (window.location.hash || window.location.search || (window.location.pathname && window.location.pathname !== '/' && window.location.pathname !== '/index.html')) {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Strict Security: Eject unauthenticated visitors immediately
  useEffect(() => {
    if (!isAdminAuthenticated) {
      setIsAdminMode(false);
      setIsAdminAuthOpen(true);
    }
  }, [isAdminAuthenticated, setIsAdminMode, setIsAdminAuthOpen]);

  if (!isAdminAuthenticated) {
    return null;
  }

  // Active Navigation Tab
  // Options: 'dashboard', 'products', 'orders', 'customers', 'coupons', 'reviews', 'categories', 'settings'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkAddModal, setShowBulkAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedOrderModal, setSelectedOrderModal] = useState(null);
  const [imageInputType, setImageInputType] = useState('file'); // 'file' or 'url'

  // Product Filters
  const [productSearch, setProductSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockStatusFilter, setStockStatusFilter] = useState('all'); // 'all', 'in-stock', 'low-stock', 'out-of-stock'
  const [visibilityFilter, setVisibilityFilter] = useState('all'); // 'all', 'enabled', 'disabled'
  const [productSort, setProductSort] = useState('newest');

  // Order Filters
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all'); // 'all', 'Pending', 'Processing', 'Dispatched', 'Delivered'

  // Customer Filter
  const [customerSearch, setCustomerSearch] = useState('');

  // Promo Codes State
  const [coupons, setCoupons] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_admin_coupons');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      { id: 'c-1', code: 'STYLISH10', type: 'percentage', value: 10, minOrder: 3000, active: true, usageCount: 42 },
      { id: 'c-2', code: 'WELCOME500', type: 'fixed', value: 500, minOrder: 4000, active: true, usageCount: 28 },
      { id: 'c-3', code: 'FREESHIP', type: 'free_shipping', value: 250, minOrder: 2500, active: true, usageCount: 65 },
      { id: 'c-4', code: 'EID2026', type: 'percentage', value: 15, minOrder: 5000, active: false, usageCount: 19 }
    ];
  });

  const [newCoupon, setNewCoupon] = useState({
    code: '',
    type: 'percentage',
    value: '',
    minOrder: '3000',
    active: true
  });

  // Store Settings State
  const [storeSettings, setStoreSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('stylish_store_settings');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      storeName: 'Stylish Shoes & Bags',
      tagline: 'Step Into Style - Pure Elegance & Comfort',
      whatsappNumber: '03255964412',
      jazzcashTitle: 'Stylish Shoes Store',
      jazzcashNumber: '0325-5964412',
      freeShippingThreshold: 4000,
      standardShippingFee: 250,
      announcementMessage: '✨ FLAT 20% OFF ON NEW ARRIVALS & EID COLLECTION | FREE DELIVERY OVER RS. 4,000 ✨'
    };
  });

  // Business Reports Analytics State
  const [activeReportSubTab, setActiveReportSubTab] = useState('monthly'); // 'monthly', 'sales', 'out-of-stock', 'income'
  const [reportDateFilter, setReportDateFilter] = useState('all'); // 'all', 'this-month', 'last-month', 'year'

  // New Product Form Data
  const [newProductData, setNewProductData] = useState({
    title: '',
    category: 'men',
    subcategory: 'Peshawari',
    price: '',
    stockCount: '20',
    image: '',
    secondaryImage: '',
    colors: 'Brown, Black, Mustard',
    sizes: '39, 40, 41, 42, 43',
    description: '',
    enabled: true,
    isNew: true
  });

  // Calculate Metrics
  const totalRevenue = useMemo(() => orders.reduce((sum, o) => sum + (o.total || 0), 0), [orders]);
  const pendingOrders = useMemo(() => orders.filter((o) => o.status === 'Pending').length, [orders]);
  const processingOrders = useMemo(() => orders.filter((o) => o.status === 'Processing').length, [orders]);
  const dispatchedOrders = useMemo(() => orders.filter((o) => o.status === 'Dispatched').length, [orders]);
  const deliveredOrders = useMemo(() => orders.filter((o) => o.status === 'Delivered').length, [orders]);
  const activeUndeliveredOrdersCount = useMemo(() => orders.filter((o) => (o.status || '').toLowerCase() !== 'delivered').length, [orders]);
  const aov = useMemo(() => (orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0), [totalRevenue, orders]);

  const enabledProductsCount = useMemo(() => {
    return products.filter((p) => p.enabled !== false).length;
  }, [products]);

  const disabledProductsCount = useMemo(() => {
    return products.filter((p) => p.enabled === false).length;
  }, [products]);

  const lowStockProducts = useMemo(() => {
    return products.filter((p) => (p.stockCount !== undefined ? p.stockCount : 15) <= 5);
  }, [products]);

  const totalPairsInStock = useMemo(() => {
    return products.reduce((sum, p) => sum + (p.stockCount !== undefined ? p.stockCount : 15), 0);
  }, [products]);

  const totalInventoryValuation = useMemo(() => {
    return products.reduce((sum, p) => sum + (p.price || 0) * (p.stockCount !== undefined ? p.stockCount : 15), 0);
  }, [products]);

  const getProductUnitLabel = (product) => {
    if (!product) return 'Pairs';
    if (product.category === 'accessories') {
      const sub = (product.subcategory || '').toLowerCase();
      if (sub.includes('bag')) return 'Handbags';
      if (sub.includes('fragrance')) return 'Bottles';
      if (sub.includes('skin')) return 'Units';
      return 'Units';
    }
    return 'Pairs';
  };

  const handleQuickRestock = (productId, addAmount = 10) => {
    const target = products.find((p) => p.id === productId);
    if (!target) return;
    const current = target.stockCount !== undefined ? target.stockCount : 0;
    const newCount = current + addAmount;
    updateProductStock(productId, newCount);
  };

  // Business Report Computations
  const monthlyReportData = useMemo(() => {
    const monthlyMap = {};
    orders.forEach((order) => {
      const date = order.date ? new Date(order.date) : new Date();
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const monthLabel = date.toLocaleString('default', { month: 'short', year: 'numeric' });

      if (!monthlyMap[monthKey]) {
        monthlyMap[monthKey] = {
          monthKey,
          label: monthLabel,
          orderCount: 0,
          grossRevenue: 0,
          deliveredRevenue: 0,
          discounts: 0,
          shippingFees: 0,
          itemsSold: 0
        };
      }

      monthlyMap[monthKey].orderCount += 1;
      monthlyMap[monthKey].grossRevenue += order.total || 0;
      if (order.status === 'Delivered') {
        monthlyMap[monthKey].deliveredRevenue += order.total || 0;
      }
      monthlyMap[monthKey].discounts += order.discount || 0;
      monthlyMap[monthKey].shippingFees += order.shippingFee || 0;
      monthlyMap[monthKey].itemsSold += (order.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0);
    });

    const list = Object.values(monthlyMap).sort((a, b) => b.monthKey.localeCompare(a.monthKey));
    return list;
  }, [orders]);

  const salesReportData = useMemo(() => {
    const statusCounts = {
      Delivered: { count: 0, revenue: 0 },
      Dispatched: { count: 0, revenue: 0 },
      Processing: { count: 0, revenue: 0 },
      Pending: { count: 0, revenue: 0 },
      Cancelled: { count: 0, revenue: 0 }
    };

    const categorySales = {
      men: { count: 0, revenue: 0, name: "Men's Collection" },
      women: { count: 0, revenue: 0, name: "Women's Footwear" },
      kids: { count: 0, revenue: 0, name: "Kids' Collection" },
      accessories: { count: 0, revenue: 0, name: "Bags & Accessories" }
    };

    const productSalesMap = {};

    orders.forEach((order) => {
      const st = order.status || 'Pending';
      if (!statusCounts[st]) {
        statusCounts[st] = { count: 0, revenue: 0 };
      }
      statusCounts[st].count += 1;
      statusCounts[st].revenue += order.total || 0;

      (order.items || []).forEach((item) => {
        const cat = item.category || 'men';
        if (categorySales[cat]) {
          categorySales[cat].count += item.quantity || 1;
          categorySales[cat].revenue += (item.price || 0) * (item.quantity || 1);
        }

        const pId = item.id || item.title;
        if (!productSalesMap[pId]) {
          productSalesMap[pId] = {
            id: pId,
            title: item.title,
            image: item.image,
            price: item.price,
            category: item.category,
            quantitySold: 0,
            revenueGenerated: 0
          };
        }
        productSalesMap[pId].quantitySold += item.quantity || 1;
        productSalesMap[pId].revenueGenerated += (item.price || 0) * (item.quantity || 1);
      });
    });

    const topSellingProducts = Object.values(productSalesMap)
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, 8);

    return {
      statusCounts,
      categorySales,
      topSellingProducts,
      totalItemsSold: Object.values(categorySales).reduce((s, c) => s + c.count, 0)
    };
  }, [orders]);

  const outOfStockReportData = useMemo(() => {
    const soldOut = products.filter((p) => (p.stockCount !== undefined ? p.stockCount : 15) === 0);
    const lowStock = products.filter((p) => {
      const stock = p.stockCount !== undefined ? p.stockCount : 15;
      return stock > 0 && stock <= 5;
    });
    const healthyStock = products.filter((p) => (p.stockCount !== undefined ? p.stockCount : 15) > 5);

    const lostRevenuePotential = soldOut.reduce((sum, p) => sum + (p.price || 0) * 5, 0);

    return {
      soldOut,
      lowStock,
      healthyStock,
      totalAlerts: soldOut.length + lowStock.length,
      lostRevenuePotential
    };
  }, [products]);

  const incomeReportData = useMemo(() => {
    const grossBilled = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const cashRealized = orders
      .filter((o) => o.status === 'Delivered')
      .reduce((sum, o) => sum + (o.total || 0), 0);
    const inTransit = orders
      .filter((o) => o.status === 'Dispatched' || o.status === 'Processing')
      .reduce((sum, o) => sum + (o.total || 0), 0);
    const pendingCollection = orders
      .filter((o) => o.status === 'Pending')
      .reduce((sum, o) => sum + (o.total || 0), 0);
    const totalDiscountsGiven = orders.reduce((sum, o) => sum + (o.discount || 0), 0);
    const estimatedCOGS = Math.round(cashRealized * 0.58);
    const estimatedPackagingShipping = orders.filter((o) => o.status === 'Delivered').length * 200;
    const netProfitEstimated = cashRealized - estimatedCOGS - estimatedPackagingShipping;

    return {
      grossBilled,
      cashRealized,
      inTransit,
      pendingCollection,
      totalDiscountsGiven,
      estimatedCOGS,
      estimatedPackagingShipping,
      netProfitEstimated
    };
  }, [orders]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search
      if (productSearch.trim()) {
        const q = productSearch.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchSub = p.subcategory && p.subcategory.toLowerCase().includes(q);
        if (!matchTitle && !matchCat && !matchSub) return false;
      }
      // Category filter
      if (categoryFilter !== 'all' && p.category !== categoryFilter) {
        return false;
      }
      // Stock status filter
      const stock = p.stockCount !== undefined ? p.stockCount : 15;
      if (stockStatusFilter === 'in-stock' && stock <= 5) return false;
      if (stockStatusFilter === 'low-stock' && stock > 5) return false;
      if (stockStatusFilter === 'out-of-stock' && stock > 0) return false;

      // Visibility filter (Enable / Disable)
      if (visibilityFilter === 'enabled' && p.enabled === false) return false;
      if (visibilityFilter === 'disabled' && p.enabled !== false) return false;

      return true;
    }).sort((a, b) => {
      if (stockStatusFilter === 'low-stock') return (a.stockCount || 0) - (b.stockCount || 0);
      if (productSort === 'price-low') return a.price - b.price;
      if (productSort === 'price-high') return b.price - a.price;
      if (productSort === 'stock-low') return (a.stockCount || 0) - (b.stockCount || 0);
      if (productSort === 'title') return a.title.localeCompare(b.title);
      return 0; // default newest
    });
  }, [products, productSearch, categoryFilter, stockStatusFilter, visibilityFilter, productSort]);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      if (orderStatusFilter !== 'all' && o.status !== orderStatusFilter) {
        return false;
      }
      if (orderSearch.trim()) {
        const q = orderSearch.toLowerCase();
        const matchId = (o.orderId || '').toLowerCase().includes(q);
        const matchName = (o.customer?.fullName || '').toLowerCase().includes(q);
        const matchPhone = (o.customer?.phone || '').toLowerCase().includes(q);
        const matchCity = (o.customer?.city || '').toLowerCase().includes(q);
        if (!matchId && !matchName && !matchPhone && !matchCity) return false;
      }
      return true;
    });
  }, [orders, orderStatusFilter, orderSearch]);

  // Unique Customers compiled from Orders & Profiles
  const customersList = useMemo(() => {
    const map = new Map();
    orders.forEach((o) => {
      if (!o.customer) return;
      const phone = (o.customer.phone || '').trim();
      if (!phone) return;

      if (!map.has(phone)) {
        map.set(phone, {
          fullName: o.customer.fullName || 'Valued Customer',
          phone: phone,
          address: o.customer.address || '',
          city: o.customer.city || '',
          ordersCount: 1,
          totalSpent: o.total || 0,
          lastOrderDate: o.date || 'Recent'
        });
      } else {
        const existing = map.get(phone);
        existing.ordersCount += 1;
        existing.totalSpent += o.total || 0;
        existing.lastOrderDate = o.date || existing.lastOrderDate;
      }
    });

    return Array.from(map.values()).filter((c) => {
      if (!customerSearch.trim()) return true;
      const q = customerSearch.toLowerCase();
      return (
        c.fullName.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q)
      );
    });
  }, [orders, customerSearch]);

  // Handle File Upload for Product Image
  const handleFileUpload = (e, targetField = 'image') => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProductData((prev) => ({
          ...prev,
          [targetField]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Product Submit
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProductData.title || !newProductData.price || !newProductData.image) {
      showToast('⚠️ Please fill in Title, Price, and Product Image!');
      return;
    }

    const resolvedSubcat = newProductData.subcategory === 'Other'
      ? (newProductData.customSubcategory?.trim() || 'General')
      : newProductData.subcategory;

    addNewProduct({
      ...newProductData,
      subcategory: resolvedSubcat,
      price: parseFloat(newProductData.price),
      stockCount: parseInt(newProductData.stockCount) || 20,
      inStock: (parseInt(newProductData.stockCount) || 20) > 0,
      enabled: newProductData.enabled !== false,
      colors: newProductData.colors.split(',').map((c) => c.trim()).filter(Boolean),
      sizes: newProductData.sizes.split(',').map((s) => s.trim()).filter(Boolean)
    });

    setShowAddModal(false);
    setNewProductData({
      title: '',
      category: 'men',
      subcategory: 'Peshawari',
      price: '',
      stockCount: '20',
      image: '',
      secondaryImage: '',
      colors: 'Brown, Black, Mustard',
      sizes: '39, 40, 41, 42, 43',
      description: '',
      enabled: true,
      isNew: true
    });
  };

  // Export Orders as CSV
  const handleExportOrdersCSV = () => {
    if (orders.length === 0) {
      showToast('⚠️ No orders to export!');
      return;
    }

    const headers = ['Order ID', 'Date', 'Customer Name', 'Phone', 'Address', 'City', 'Payment Method', 'JazzCash TID', 'Total (PKR)', 'Status', 'Items Count'];
    const rows = orders.map((o) => [
      `"${o.orderId || ''}"`,
      `"${o.date || ''}"`,
      `"${o.customer?.fullName || ''}"`,
      `"${o.customer?.phone || ''}"`,
      `"${(o.customer?.address || '').replace(/"/g, '""')}"`,
      `"${o.customer?.city || ''}"`,
      `"${o.paymentMethod || 'COD'}"`,
      `"${o.jazzcashTid || ''}"`,
      o.total || 0,
      `"${o.status || 'Pending'}"`,
      o.items ? o.items.length : 0
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Stylish_Shoes_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('📥 Orders CSV Sheet Downloaded Successfully!');
  };

  // Add Coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCoupon.code || !newCoupon.value) return;

    const item = {
      id: `c-${Date.now()}`,
      code: newCoupon.code.trim().toUpperCase(),
      type: newCoupon.type,
      value: parseFloat(newCoupon.value) || 0,
      minOrder: parseFloat(newCoupon.minOrder) || 0,
      active: newCoupon.active,
      usageCount: 0
    };

    const updated = [item, ...coupons];
    setCoupons(updated);
    localStorage.setItem('stylish_admin_coupons', JSON.stringify(updated));
    setNewCoupon({ code: '', type: 'percentage', value: '', minOrder: '3000', active: true });
    showToast(`🏷️ Coupon "${item.code}" created!`);
  };

  const toggleCouponStatus = (id) => {
    const updated = coupons.map((c) => (c.id === id ? { ...c, active: !c.active } : c));
    setCoupons(updated);
    localStorage.setItem('stylish_admin_coupons', JSON.stringify(updated));
    showToast('Promo code status updated');
  };

  const deleteCoupon = (id) => {
    const updated = coupons.filter((c) => c.id !== id);
    setCoupons(updated);
    localStorage.setItem('stylish_admin_coupons', JSON.stringify(updated));
    showToast('Promo code removed');
  };

  // Save Store Settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    localStorage.setItem('stylish_store_settings', JSON.stringify(storeSettings));
    showToast('⚙️ Store Settings Saved Successfully!');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins flex flex-col md:flex-row antialiased">
      
      {/* ======================================================== */}
      {/* ⚪ SIDEBAR: CRISP WHITE THEME WITH ROYAL PINK ACCENTS */}
      {/* ======================================================== */}
      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
        />
      )}

      {/* ⚪ SIDEBAR: CRISP WHITE THEME WITH ROYAL PINK ACCENTS */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 sm:w-80 md:w-72 bg-white text-gray-900 flex flex-col justify-between p-5 border-r border-gray-200 shadow-2xl md:shadow-sm transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Brand Logo & Tagline with Mobile Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <a
              href="/"
              className="flex items-center gap-3.5 min-w-0 cursor-pointer group no-underline"
              onClick={(e) => {
                e.preventDefault();
                handleExitToStorefront();
              }}
              title="Return to Home Page"
            >
              <div className="w-11 h-11 rounded-2xl bg-pink-50 p-1 shadow-sm border border-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src="/logo.png" alt="Stylish Logo" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-sm font-black tracking-wider uppercase text-neutral-950 truncate group-hover:text-pink-600 transition-colors">
                    STYLISH <span className="text-pink-700">PRO</span>
                  </h2>
                  <span className="text-[9px] bg-neutral-950 text-white font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Admin
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium block truncate">
                  E-Commerce Control Suite
                </span>
              </div>
            </a>

            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
              title="Close Menu"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin Info Profile Badge */}
          <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-neutral-950 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
                {adminEmail ? adminEmail.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-neutral-950 block truncate leading-tight">
                  {adminEmail || 'admin'}
                </span>
                {isFirebaseConfigured() ? (
                  <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Cloud Sync Active
                  </span>
                ) : (
                  <span className="text-[9px] text-amber-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Local Mode (Ready for Cloud)
                  </span>
                )}
              </div>
            </div>
            <ShieldCheck className="w-4 h-4 text-pink-700 flex-shrink-0" />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest px-3 pt-1">
              Store Operations
            </div>

            {/* 1. Dashboard */}
            <button
              onClick={() => { setActiveTab('dashboard'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-amber-300' : 'text-pink-700'}`} />
                <span>Dashboard Overview</span>
              </div>
            </button>

            {/* 2. Inventory / Products */}
            <button
              onClick={() => { setActiveTab('products'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'products'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Package className={`w-4 h-4 ${activeTab === 'products' ? 'text-amber-300' : 'text-pink-600'}`} />
                <span>Products &amp; Stock</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === 'products' ? 'bg-white/20 text-white' : 'bg-pink-100 text-neutral-950'
              }`}>
                {products.length}
              </span>
            </button>

            {/* 3. Orders */}
            <button
              onClick={() => { setActiveTab('orders'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'orders'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className={`w-4 h-4 ${activeTab === 'orders' ? 'text-emerald-300' : 'text-emerald-600'}`} />
                <span>Orders &amp; Dispatch</span>
              </div>
              {activeUndeliveredOrdersCount > 0 && (
                <span className="text-[10px] bg-amber-500 text-white font-black px-2 py-0.5 rounded-full shadow-xs animate-pulse" title={`${activeUndeliveredOrdersCount} active orders pending fulfillment`}>
                  {activeUndeliveredOrdersCount}
                </span>
              )}
            </button>

            {/* 3B. Business Reports & Analytics */}
            <button
              onClick={() => { setActiveTab('reports'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'reports'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <BarChart3 className={`w-4 h-4 ${activeTab === 'reports' ? 'text-pink-300' : 'text-pink-600'}`} />
                <span>Business Reports</span>
              </div>
              <span className="text-[10px] bg-pink-100 text-pink-700 font-extrabold px-2 py-0.5 rounded-full uppercase">
                Analytics
              </span>
            </button>

            {/* 3B. Manager Record */}
            <button
              onClick={() => { setActiveTab('manager'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'manager'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className={`w-4 h-4 ${activeTab === 'manager' ? 'text-amber-300' : 'text-pink-600'}`} />
                <span>Manager Record</span>
              </div>
              <span className="text-[10px] bg-pink-100 text-neutral-950 font-bold px-2 py-0.5 rounded-full">
                Supervisor
              </span>
            </button>

            {/* 4. Customers CRM */}
            <button
              onClick={() => { setActiveTab('customers'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'customers'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className={`w-4 h-4 ${activeTab === 'customers' ? 'text-sky-300' : 'text-sky-600'}`} />
                <span>Customer CRM</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === 'customers' ? 'bg-white/20 text-white' : 'bg-pink-100 text-neutral-950'
              }`}>
                {customersList.length}
              </span>
            </button>

            <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest px-3 pt-3">
              Marketing &amp; Content
            </div>

            {/* 5. Coupons */}
            <button
              onClick={() => { setActiveTab('coupons'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'coupons'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Tag className={`w-4 h-4 ${activeTab === 'coupons' ? 'text-rose-300' : 'text-rose-600'}`} />
                <span>Coupons &amp; Offers</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === 'coupons' ? 'bg-white/20 text-white' : 'bg-pink-100 text-neutral-950'
              }`}>
                {coupons.length}
              </span>
            </button>

            {/* 6. Customer Reviews */}
            <button
              onClick={() => { setActiveTab('reviews'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Star className={`w-4 h-4 ${activeTab === 'reviews' ? 'text-amber-300' : 'text-amber-500'}`} />
                <span>Reviews &amp; Ratings</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === 'reviews' ? 'bg-white/20 text-white' : 'bg-pink-100 text-neutral-950'
              }`}>
                {reviews.length}
              </span>
            </button>

            {/* 7. Categories */}
            <button
              onClick={() => { setActiveTab('categories'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'categories'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className={`w-4 h-4 ${activeTab === 'categories' ? 'text-pink-300' : 'text-pink-600'}`} />
                <span>Categories</span>
              </div>
            </button>

            {/* 8. Settings */}
            <button
              onClick={() => { setActiveTab('settings'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'settings'
                  ? 'bg-neutral-950 text-white shadow-md font-extrabold translate-x-1'
                  : 'text-gray-600 hover:text-neutral-950 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-indigo-300' : 'text-indigo-600'}`} />
                <span>Store Settings</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Bottom Actions: Storefront & Logout */}
        <div className="pt-6 border-t border-gray-100 space-y-2 mt-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleExitToStorefront();
            }}
            className="w-full flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-neutral-950 py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors border border-pink-200 shadow-xs cursor-pointer no-underline"
          >
            <ArrowLeft className="w-4 h-4 text-pink-700" />
            <span>View Live Storefront</span>
          </a>

          <button
            onClick={() => lockAdminSession()}
            className="w-full flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-900 py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors border border-rose-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Lock / Logout Admin</span>
          </button>
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 🤍 MAIN CONTENT AREA (LIGHT LUXURY THEME MATCHING FRONTEND) */}
      {/* ======================================================== */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-pink-100 px-3 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 shadow-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="md:hidden p-2 rounded-xl bg-pink-50 text-neutral-950 hover:bg-pink-100 transition-colors flex-shrink-0"
              title="Open Navigation"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold text-pink-700 uppercase tracking-widest">
                <span>Stylish Backoffice</span>
                <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                <span className="text-gray-600 capitalize truncate">{activeTab}</span>
              </div>
              <h1 className="text-sm sm:text-xl md:text-2xl font-extrabold text-neutral-950 uppercase tracking-tight font-poppins truncate">
                {activeTab === 'dashboard' && 'Executive Performance Dashboard'}
                {activeTab === 'products' && 'Inventory Management & Catalogue'}
                {activeTab === 'orders' && 'Order Processing & Dispatch Hub'}
                {activeTab === 'reports' && 'Executive Business Reports & Financial Analytics'}
                {activeTab === 'manager' && 'Store Manager Record & Audit'}
                {activeTab === 'customers' && 'Customer Relationship Management'}
                {activeTab === 'coupons' && 'Promotions & Coupons'}
                {activeTab === 'reviews' && 'Customer Feedback & Ratings'}
                {activeTab === 'categories' && 'Category Architecture'}
                {activeTab === 'settings' && 'Store Configuration & Policies'}
              </h1>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Firebase Cloud: Live</span>
            </div>

            <button
              onClick={handleExitToStorefront}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-950 bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-200 active:scale-[0.98]"
              title="Return to Storefront"
            >
              <ExternalLink className="w-3.5 h-3.5 text-pink-700" />
              <span className="hidden xs:inline sm:inline">Storefront</span>
            </button>

            {activeTab === 'products' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowBulkAddModal(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  title="Bulk Import Multiple Products"
                >
                  <Layers className="w-4 h-4" />
                  <span>Bulk Import (بلک ایڈ)</span>
                </button>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-gradient-to-r from-black to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Product</span>
                </button>
              </div>
            )}

            {activeTab === 'orders' && (
              <button
                onClick={handleExportOrdersCSV}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            )}
          </div>
        </header>

        {/* Dynamic Body Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">

          {/* ======================================================== */}
          {/* 📊 TAB 1: EXECUTIVE DASHBOARD OVERVIEW */}
          {/* ======================================================== */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              
              {/* 🚨 BLINKING EMERGENCY LOW-STOCK RESTOCK ALERT BANNER */}
              {lowStockProducts.length > 0 && (
                <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-red-300 animate-pulse">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white text-red-600 flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0 animate-bounce">
                      🚨
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-white text-red-700 font-black px-2 py-0.5 rounded uppercase tracking-wider">
                          CRITICAL RESTOCK ALERT
                        </span>
                        <span className="text-xs text-red-100 font-bold">5 or fewer items remaining</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight mt-0.5">
                        {lowStockProducts.length} Products running low on inventory!
                      </h3>
                      <p className="text-xs text-red-100 mt-0.5">
                        Key stock items are running out fast. Restock before customer orders are impacted.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => { setActiveTab('products'); setStockStatusFilter('low-stock'); }}
                    className="px-5 py-2.5 bg-white text-red-700 hover:bg-red-50 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg whitespace-nowrap transition-all hover:scale-105"
                  >
                    View Low Stock Items ({lowStockProducts.length}) &rarr;
                  </button>
                </div>
              )}

              {/* Top 4 KPI Cards (Salon & Pro Boutique Inventory Analytics) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* 1. Revenue */}
                <div className="bg-white p-6 rounded-2xl border border-pink-100/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-pink-100 transition-all" />
                  <div className="flex items-center justify-between text-pink-700 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">Gross Sales Revenue</span>
                    <div className="p-2.5 bg-pink-50 rounded-xl text-pink-700">
                      <DollarSign className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-neutral-950 tracking-tight">
                    Rs. {totalRevenue.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-emerald-600 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+24.6% growth this month</span>
                  </div>
                </div>

                {/* 2. Total Orders */}
                <div className="bg-white p-6 rounded-2xl border border-pink-100/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-amber-100 transition-all" />
                  <div className="flex items-center justify-between text-amber-600 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">Total Store Orders</span>
                    <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-neutral-950 tracking-tight">
                    {orders.length} Orders
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px]">
                    <span className="text-amber-600 font-bold">{pendingOrders} Pending</span>
                    <span className="text-gray-300">&bull;</span>
                    <span className="text-emerald-600 font-bold">{deliveredOrders} Delivered</span>
                  </div>
                </div>

                {/* 3. Total Stock in Warehouse & Total Valuation */}
                <div className="bg-white p-6 rounded-2xl border border-pink-100/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-pink-100 transition-all" />
                  <div className="flex items-center justify-between text-pink-600 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">Total Warehouse Stock</span>
                    <div className="p-2.5 bg-pink-50 rounded-xl text-pink-600">
                      <Package className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-neutral-950 tracking-tight">
                    {totalPairsInStock.toLocaleString()} <span className="text-sm font-bold text-gray-500">Units / Pairs</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-pink-800 font-extrabold">
                    <span>Valuation: Rs. {totalInventoryValuation.toLocaleString()}</span>
                  </div>
                </div>

                {/* 4. 🚨 Critical Low Stock Alert (Blinking) */}
                <div className={`p-6 rounded-2xl border transition-all relative overflow-hidden group ${
                  lowStockProducts.length > 0
                    ? 'bg-red-50 border-red-300 shadow-md animate-pulse'
                    : 'bg-white border-pink-100/80 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between text-red-600 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                      Critical Low Stock (≤ 5)
                    </span>
                    <div className="p-2.5 bg-red-100 text-red-700 rounded-xl shadow-xs">
                      <AlertTriangle className="w-5 h-5 animate-bounce" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-red-700 tracking-tight">
                    {lowStockProducts.length} Items
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-red-600 font-extrabold">
                    <span>🚨 Immediate Restock Alert!</span>
                  </div>
                </div>

              </div>

              {/* Visual Sales Trajectory Chart & Quick Dispatch */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Visual Chart Card */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-pink-100 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-950">
                        Sales Performance &amp; Revenue Trajectory
                      </h3>
                      <p className="text-xs text-gray-500">Simulated monthly trajectory based on store activity</p>
                    </div>
                    <span className="text-xs font-extrabold text-pink-700 bg-pink-50 px-3 py-1 rounded-full border border-pink-200 self-start sm:self-auto">
                      Year 2026 Peak Season
                    </span>
                  </div>

                  {/* SVG Multi-Bar Trend Graph */}
                  <div className="pt-4">
                    <div className="flex items-end justify-between gap-3 h-44 border-b border-gray-200 pb-2 px-2">
                      {[
                        { month: 'Apr', val: 45, rev: '120k' },
                        { month: 'May', val: 60, rev: '185k' },
                        { month: 'Jun', val: 75, rev: '230k' },
                        { month: 'Jul', val: 55, rev: '160k' },
                        { month: 'Aug', val: 90, rev: '310k' },
                        { month: 'Sep', val: 100, rev: '360k' }
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
                          <span className="text-[10px] font-bold text-gray-400 group-hover:text-neutral-950 transition-colors">
                            {bar.rev}
                          </span>
                          <div
                            style={{ height: `${bar.val}%` }}
                            className="w-full max-w-[42px] bg-gradient-to-t from-neutral-950 to-pink-600 rounded-t-xl group-hover:from-pink-600 group-hover:to-amber-500 transition-all shadow-sm"
                          />
                          <span className="text-xs font-extrabold text-gray-700">{bar.month}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-gray-500 pt-3">
                      <span>Gross Sales Index</span>
                      <span className="font-extrabold text-neutral-950">Projected Q4 Trend: +35%</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Station */}
                <div className="bg-white border-2 border-pink-200 text-gray-900 p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-extrabold text-pink-600 bg-pink-100 px-2.5 py-0.5 rounded-full tracking-widest">
                        COMMAND SHORTCUTS
                      </span>
                      <Sparkles className="w-4 h-4 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-black uppercase text-neutral-950 leading-tight">
                      Admin Quick Actions
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Instant operations to streamline catalog updates and daily orders fulfillment.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      onClick={() => { setActiveTab('products'); setShowBulkAddModal(true); }}
                      className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-between shadow-sm cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-purple-200" />
                        <span>Bulk Import (بلک ایڈ - 100+ Products)</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-purple-200" />
                    </button>

                    <button
                      onClick={() => { setActiveTab('products'); setShowAddModal(true); }}
                      className="w-full bg-black hover:bg-neutral-950 text-white py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-between shadow-sm cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Plus className="w-4 h-4 text-pink-300" />
                        <span>Add Single Product</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-pink-200" />
                    </button>

                    <button
                      onClick={handleExportOrdersCSV}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-emerald-600" />
                        <span>Export Courier CSV Sheet</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </button>

                    <button
                      onClick={() => setActiveTab('orders')}
                      className="w-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-amber-600" />
                        <span>Pending Orders ({pendingOrders})</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-amber-600" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Recent Orders & Top Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-pink-100 shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-950">
                        Recent Store Orders
                      </h3>
                      <p className="text-xs text-gray-500">Live incoming customer orders from store &amp; WhatsApp</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className="text-xs font-extrabold text-pink-700 hover:text-neutral-950 flex items-center gap-1"
                    >
                      <span>View All ({orders.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-pink-50/70 text-neutral-950 uppercase font-extrabold border-b border-pink-100">
                        <tr>
                          <th className="p-3">Order ID</th>
                          <th className="p-3">Customer</th>
                          <th className="p-3">City</th>
                          <th className="p-3">Total</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Invoice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-medium">
                        {orders.slice(0, 5).map((o) => (
                          <tr key={o.orderId} className="hover:bg-pink-50/40 transition-colors">
                            <td className="p-3 font-extrabold text-neutral-950">{o.orderId}</td>
                            <td className="p-3 font-bold text-gray-900">{o.customer?.fullName}</td>
                            <td className="p-3 text-gray-500">{o.customer?.city || 'N/A'}</td>
                            <td className="p-3 font-extrabold text-pink-800">Rs. {o.total.toLocaleString()}</td>
                            <td className="p-3">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                  o.status === 'Delivered'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : o.status === 'Dispatched'
                                    ? 'bg-blue-100 text-blue-800'
                                    : o.status === 'Processing'
                                    ? 'bg-pink-100 text-neutral-900'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {o.status || 'Pending'}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedOrderModal(o)}
                                className="p-1.5 bg-pink-100 hover:bg-pink-700 hover:text-white text-neutral-950 rounded-lg transition-colors inline-flex items-center"
                                title="View Order Receipt"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Top Selling Products Showcase */}
                <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-950">
                      Popular Products
                    </h3>
                    <span className="text-[10px] text-pink-700 font-bold uppercase bg-pink-50 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  </div>

                  <div className="space-y-3">
                    {products.slice(0, 4).map((p) => (
                      <div key={p.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-pink-50/50 transition-colors border border-gray-100">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-12 h-12 object-cover rounded-xl bg-white border border-gray-200 shadow-xs flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-extrabold text-gray-900 text-xs truncate">{p.title}</h4>
                          <span className="text-[10px] text-pink-700 uppercase font-bold">{p.category} &bull; {p.subcategory}</span>
                          <div className="text-[11px] font-black text-neutral-950">Rs. {p.price.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full block">
                            {p.stockCount !== undefined ? p.stockCount : 15} left
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* 🚨 URGENT RESTOCK LEADERBOARD (ITEMS WITH UNDER 5 PAIRS) */}
              {lowStockProducts.length > 0 && (
                <div className="bg-white rounded-2xl border-2 border-red-200 shadow-sm p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
                      <h3 className="text-sm font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
                        <span>🚨 Urgent Low Stock Items (≤ 5 Units)</span>
                      </h3>
                    </div>
                    <button
                      onClick={() => { setActiveTab('products'); setStockStatusFilter('low-stock'); }}
                      className="text-xs font-black text-red-700 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl border border-red-200 self-start sm:self-auto transition-colors"
                    >
                      View all {lowStockProducts.length} low stock items &rarr;
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {lowStockProducts.slice(0, 6).map((p) => {
                      const stock = p.stockCount !== undefined ? p.stockCount : 3;
                      const unit = getProductUnitLabel(p);
                      return (
                        <div key={p.id} className="p-3 bg-red-50/50 rounded-2xl border border-red-200 flex items-center justify-between gap-3 shadow-xs">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-14 h-14 object-cover rounded-xl bg-white border border-red-200 shadow-xs flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-extrabold text-gray-900 text-xs truncate">{p.title}</h5>
                            <span className="text-[10px] text-pink-800 font-bold uppercase">{p.category} &bull; {p.subcategory}</span>
                            
                            <div className="mt-1">
                              <span className="inline-flex items-center gap-1 bg-red-100 border border-red-400 text-red-800 px-2 py-0.5 rounded-full text-[10px] font-black animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                                Only {stock} {unit} left
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 flex-shrink-0">
                            <button
                              onClick={() => handleQuickRestock(p.id, 5)}
                              className="px-2.5 py-1 bg-white hover:bg-neutral-950 hover:text-white text-neutral-950 rounded-lg text-[10px] font-extrabold border border-pink-300 shadow-2xs transition-colors"
                              title="Add +5 units"
                            >
                              +5 {unit}
                            </button>
                            <button
                              onClick={() => handleQuickRestock(p.id, 10)}
                              className="px-2.5 py-1 bg-neutral-950 hover:bg-pink-700 text-white rounded-lg text-[10px] font-extrabold shadow-2xs transition-colors"
                              title="Add +10 units"
                            >
                              +10 {unit}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ======================================================== */}
          {/* 📦 TAB 2: PRODUCTS & INVENTORY MASTER CRUD */}
          {/* ======================================================== */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              
              {/* 🚨 BLINKING EMERGENCY LOW-STOCK ALERT BANNER IN PRODUCTS TAB */}
              {lowStockProducts.length > 0 && (
                <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-red-300 animate-pulse">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white text-red-600 flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0 animate-bounce">
                      🚨
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-white text-red-700 font-black px-2 py-0.5 rounded uppercase tracking-wider">
                          LOW STOCK WARNING
                        </span>
                        <span className="text-xs text-red-100 font-bold">5 or fewer items remaining</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight mt-0.5">
                        {lowStockProducts.length} Products running low on inventory!
                      </h3>
                      <p className="text-xs text-red-100 mt-0.5">
                        Check items highlighted in red and click +5 or +10 to restock immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setStockStatusFilter(stockStatusFilter === 'low-stock' ? 'all' : 'low-stock')}
                      className="px-5 py-2.5 bg-white text-red-700 hover:bg-red-50 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg whitespace-nowrap transition-all"
                    >
                      {stockStatusFilter === 'low-stock' ? 'Show All Products' : `Show Low Stock Only (${lowStockProducts.length})`}
                    </button>
                  </div>
                </div>
              )}

              {/* Product Stat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-pink-100 shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase text-gray-400 block">Total Items</span>
                  <div className="text-lg font-black text-neutral-950">{products.length} Products</div>
                  <span className="text-[10px] text-gray-500">{totalPairsInStock.toLocaleString()} Total Units</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase text-emerald-600 block flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Live / Enabled
                  </span>
                  <div className="text-lg font-black text-emerald-700">
                    {enabledProductsCount} Active
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Visible to Customers</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase text-gray-500 block flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
                    Disabled / Hidden
                  </span>
                  <div className="text-lg font-black text-gray-700">
                    {disabledProductsCount} Inactive
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">Hidden from Store</span>
                </div>
                <div className={`p-3.5 rounded-xl border shadow-xs transition-all ${
                  lowStockProducts.length > 0 ? 'bg-red-50 border-red-300 animate-pulse' : 'bg-white border-amber-100'
                }`}>
                  <span className="text-[10px] font-extrabold uppercase text-red-700 block flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                    Low Stock (≤ 5)
                  </span>
                  <div className="text-lg font-black text-red-700">{lowStockProducts.length} Items</div>
                  <span className="text-[10px] text-red-600 font-bold">🚨 Needs Restock</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-rose-100 shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase text-rose-600 block">Out of Stock (0)</span>
                  <div className="text-lg font-black text-rose-700">
                    {products.filter((p) => (p.stockCount || 0) <= 0).length}
                  </div>
                  <span className="text-[10px] text-rose-600 font-semibold">Depleted Items</span>
                </div>
              </div>

              {/* Rich Filtering & Search Bar */}
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-3 w-full lg:w-auto flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by title, SKU, category..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl pl-9 pr-4 py-2 font-medium focus:bg-white focus:border-pink-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <span className="text-xs text-gray-500 font-bold hidden sm:inline">
                    Showing {filteredProducts.length} of {products.length}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end flex-wrap">
                  {/* Category Filter */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2 font-bold text-gray-700 focus:border-pink-600 focus:outline-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="men">Men's Collection</option>
                    <option value="women">Women's Shoes</option>
                    <option value="kids">Kids' Collection</option>
                    <option value="accessories">Accessories</option>
                  </select>

                  {/* Visibility / Status Filter */}
                  <select
                    value={visibilityFilter}
                    onChange={(e) => setVisibilityFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2 font-bold text-gray-700 focus:border-pink-600 focus:outline-none"
                  >
                    <option value="all">👁️ All Status</option>
                    <option value="enabled">🟢 Enabled Only (Live)</option>
                    <option value="disabled">⚪ Disabled Only (Hidden)</option>
                  </select>

                  {/* Stock Status Filter */}
                  <select
                    value={stockStatusFilter}
                    onChange={(e) => setStockStatusFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2 font-bold text-gray-700 focus:border-pink-600 focus:outline-none"
                  >
                    <option value="all">All Stock Statuses</option>
                    <option value="in-stock">✅ In Stock (&gt; 5)</option>
                    <option value="low-stock">🚨 Low Stock (≤ 5)</option>
                    <option value="out-of-stock">❌ Out of Stock (0)</option>
                  </select>

                  {/* Sort Order */}
                  <select
                    value={productSort}
                    onChange={(e) => setProductSort(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2 font-bold text-gray-700 focus:border-pink-600 focus:outline-none"
                  >
                    <option value="newest">Sort: Default</option>
                    <option value="stock-low">Stock: Lowest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="title">Title (A-Z)</option>
                  </select>

                  {/* Restore / Sync All Catalog Products Button */}
                  <button
                    onClick={() => {
                      if (window.confirm('Reload all 280 products and subcategories from Master Catalog with 10 images per subcategory?')) {
                        restoreMasterCatalog();
                      }
                    }}
                    className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Reload all 280 products across all subcategories"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-pink-600" />
                    <span>Sync All Products ({products.length})</span>
                  </button>

                  {/* Bulk Import Button */}
                  <button
                    onClick={() => setShowBulkAddModal(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                    title="Import 10, 50, or 100+ Products at Once"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Bulk Import (بلک ایڈ)</span>
                  </button>

                  {/* Add Product Button */}
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-gradient-to-r from-black to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Product</span>
                  </button>
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-pink-50/80 text-neutral-950 uppercase font-extrabold border-b border-pink-100">
                      <tr>
                        <th className="p-3.5">Image</th>
                        <th className="p-3.5">Product Title &amp; Details</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Price</th>
                        <th className="p-3.5">Stock Quantity</th>
                        <th className="p-3.5">Stock Status</th>
                        <th className="p-3.5 text-center">Status / Visibility</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {filteredProducts.map((p) => {
                        const stock = p.stockCount !== undefined ? p.stockCount : 15;
                        const unit = getProductUnitLabel(p);
                        const isLowStock = stock <= 5 && stock > 0;
                        const isOutOfStock = stock <= 0;
                        const isEnabled = p.enabled !== false;

                        return (
                          <tr
                            key={p.id}
                            className={`transition-colors ${
                              !isEnabled
                                ? 'bg-gray-50/70 hover:bg-gray-100/90 border-l-4 border-l-gray-400 opacity-80'
                                : isLowStock
                                ? 'bg-red-50/50 hover:bg-red-50 border-l-4 border-l-red-600'
                                : isOutOfStock
                                ? 'bg-gray-50/70 hover:bg-gray-100 border-l-4 border-l-gray-400 opacity-75'
                                : 'hover:bg-pink-50/40'
                            }`}
                          >
                            <td className="p-3.5">
                              <img
                                src={p.image}
                                alt={p.title}
                                className={`w-12 h-12 object-cover rounded-xl bg-white border shadow-xs flex-shrink-0 ${
                                  !isEnabled ? 'grayscale contrast-75 border-gray-300' : isLowStock ? 'border-red-400' : 'border-gray-200'
                                }`}
                              />
                            </td>
                            <td className="p-3.5 max-w-xs">
                              <div className="flex items-center gap-1.5">
                                <span className={`font-extrabold text-xs line-clamp-1 ${!isEnabled ? 'text-gray-500 line-through decoration-gray-400' : 'text-gray-900'}`}>
                                  {p.title}
                                </span>
                                {!isEnabled && (
                                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded-md shrink-0">
                                    Hidden
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-gray-500 space-x-1 mt-0.5">
                                <span>Colors: {Array.isArray(p.colors) ? p.colors.slice(0, 3).join(', ') : p.colors}</span>
                              </div>
                            </td>
                            <td className="p-3.5">
                              <span className="px-2.5 py-1 bg-pink-100 text-neutral-950 font-bold rounded-lg text-[10px] uppercase">
                                {p.category}
                              </span>
                              <div className="text-[10px] text-gray-400 font-semibold mt-0.5">{p.subcategory}</div>
                            </td>
                            <td className="p-3.5 font-black text-neutral-950 text-sm">
                              Rs. {p.price.toLocaleString()}
                            </td>
                            <td className="p-3.5">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 bg-white border border-gray-200 p-1 rounded-xl shadow-xs">
                                  <button
                                    onClick={() => updateProductStock(p.id, Math.max(0, stock - 1))}
                                    className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-black"
                                    title="Decrease stock by 1"
                                  >
                                    -
                                  </button>
                                  <span className={`font-black w-10 text-center text-sm ${
                                    isLowStock ? 'text-red-700 animate-pulse font-black' : isOutOfStock ? 'text-gray-400' : 'text-neutral-950'
                                  }`}>
                                    {stock}
                                  </span>
                                  <button
                                    onClick={() => updateProductStock(p.id, stock + 1)}
                                    className="w-6 h-6 rounded-lg bg-neutral-950 hover:bg-pink-700 text-white flex items-center justify-center font-black"
                                    title="Increase stock by 1"
                                  >
                                    +
                                  </button>
                                </div>

                                {/* Quick Restock Buttons (+5 and +10) */}
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => handleQuickRestock(p.id, 5)}
                                    className="px-2 py-1 bg-pink-100 hover:bg-pink-200 text-neutral-950 rounded-lg text-[10px] font-extrabold whitespace-nowrap"
                                    title="Add +5 units"
                                  >
                                    +5
                                  </button>
                                  <button
                                    onClick={() => handleQuickRestock(p.id, 10)}
                                    className="px-2 py-1 bg-pink-100 hover:bg-pink-200 text-neutral-950 rounded-lg text-[10px] font-extrabold whitespace-nowrap"
                                    title="Add +10 units"
                                  >
                                    +10
                                  </button>
                                </div>
                              </div>
                              <span className={`text-[10px] font-semibold block mt-1 ${isLowStock ? 'text-red-600 font-bold' : 'text-gray-400'}`}>
                                {stock} {unit} in stock
                              </span>
                            </td>
                            <td className="p-3.5">
                              {isLowStock ? (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 border-2 border-red-500 rounded-full text-red-700 font-black text-[11px] animate-pulse shadow-sm shadow-red-200">
                                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block" />
                                  <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                                  <span>🚨 Only {stock} {unit} left!</span>
                                </div>
                              ) : isOutOfStock ? (
                                <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 border border-red-400 rounded-full text-red-800 font-extrabold text-[11px]">
                                  <X className="w-3.5 h-3.5 text-red-600" />
                                  <span>❌ Out of Stock (0 {unit})</span>
                                </div>
                              ) : (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 rounded-full text-emerald-800 font-bold text-[11px]">
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>✅ {stock} {unit} in stock</span>
                                </div>
                              )}
                            </td>
                            {/* Enable / Disable Status Toggle */}
                            <td className="p-3.5 text-center">
                              <button
                                type="button"
                                onClick={() => toggleProductStatus(p.id)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black transition-all cursor-pointer shadow-xs border ${
                                  isEnabled
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                                    : 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'
                                }`}
                                title={isEnabled ? 'Click to Disable (Hide from website)' : 'Click to Enable (Show on website)'}
                              >
                                <span
                                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] text-white font-black transition-all ${
                                    isEnabled ? 'bg-emerald-600' : 'bg-gray-400'
                                  }`}
                                >
                                  {isEnabled ? '✓' : '✕'}
                                </span>
                                <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
                              </button>
                              <div className="text-[10px] text-gray-400 font-semibold mt-0.5">
                                {isEnabled ? '🟢 Live on Store' : '⚪ Hidden'}
                              </div>
                            </td>
                            <td className="p-3.5 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => toggleProductStatus(p.id)}
                                  className={`p-2 rounded-xl transition-colors border ${
                                    isEnabled
                                      ? 'bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 border-emerald-200'
                                      : 'bg-gray-100 hover:bg-gray-700 hover:text-white text-gray-600 border-gray-300'
                                  }`}
                                  title={isEnabled ? 'Disable Product (Hide from website)' : 'Enable Product (Show on website)'}
                                >
                                  {isEnabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                                <button
                                  onClick={() => setEditingProduct({ ...p })}
                                  className="p-2 bg-pink-50 hover:bg-pink-700 hover:text-white text-neutral-950 rounded-xl transition-colors border border-pink-200"
                                  title="Edit Product"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                 <button
                                  onClick={() => {
                                    if (window.confirm(`Delete "${p.title}" permanently?`)) {
                                      deleteProduct(p.id);
                                    }
                                  }}
                                  className="p-2 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 rounded-xl transition-colors border border-rose-200"
                                  title="Delete Product"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {filteredProducts.length === 0 && (
                        <tr>
                          <td colSpan={8} className="p-8 text-center">
                            <div className="flex flex-col items-center justify-center space-y-2 text-gray-500">
                              <Package className="w-8 h-8 text-pink-300" />
                              <p className="font-bold text-sm text-neutral-900">No products matched the current filter or search criteria.</p>
                              <p className="text-xs text-gray-500">Total products in database: {products.length}</p>
                              {(productSearch || categoryFilter !== 'all' || stockStatusFilter !== 'all' || visibilityFilter !== 'all') && (
                                <button
                                  onClick={() => {
                                    setProductSearch('');
                                    setCategoryFilter('all');
                                    setStockStatusFilter('all');
                                    setVisibilityFilter('all');
                                  }}
                                  className="mt-2 px-4 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
                                >
                                  Reset All Filters
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
                  <span>Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> items</span>
                  <span className="text-pink-700 font-bold">Cloud Synced Real-Time</span>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 🛍️ TAB 3: ORDERS & DISPATCH FULFILLMENT */}
          {/* ======================================================== */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              
              {/* Order Status Filters & Search */}
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
                
                {/* Search */}
                <div className="relative w-full lg:w-80">
                  <input
                    type="text"
                    placeholder="Search by Order ID, Customer Name, Phone, City..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 pl-9 pr-4 py-2.5 text-xs rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
                  {['all', 'Pending', 'Processing', 'Dispatched', 'Delivered'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setOrderStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                        orderStatusFilter === st
                          ? 'bg-neutral-950 text-white shadow'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {st === 'all' ? `All (${orders.length})` : st}
                    </button>
                  ))}

                  <button
                    onClick={handleExportOrdersCSV}
                    className="ml-auto lg:ml-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all shadow flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-pink-50/80 text-neutral-950 uppercase font-extrabold border-b border-pink-100">
                      <tr>
                        <th className="p-3.5">Order ID &amp; Date</th>
                        <th className="p-3.5">Customer Contact</th>
                        <th className="p-3.5">Shipping Address</th>
                        <th className="p-3.5">Payment</th>
                        <th className="p-3.5">Items</th>
                        <th className="p-3.5">Total</th>
                        <th className="p-3.5">Status Update</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {filteredOrders.map((o) => (
                        <tr key={o.orderId} className="hover:bg-pink-50/40 transition-colors">
                          <td className="p-3.5">
                            <span className="font-black text-neutral-950 block">{o.orderId}</span>
                            <span className="text-[10px] text-gray-500">{o.date || 'Recent'}</span>
                          </td>
                          <td className="p-3.5">
                            <div className="font-extrabold text-gray-900">{o.customer?.fullName}</div>
                            <a
                              href={`https://wa.me/${(o.customer?.phone || '').replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-emerald-700 font-bold hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <Phone className="w-3 h-3 text-emerald-600" />
                              <span>{o.customer?.phone}</span>
                            </a>
                          </td>
                          <td className="p-3.5 max-w-xs">
                            <div className="text-gray-700 font-medium line-clamp-2">{o.customer?.address}</div>
                            <span className="text-[10px] font-bold text-black uppercase">{o.customer?.city}</span>
                          </td>
                          <td className="p-3.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                                o.paymentMethod === 'jazzcash'
                                  ? 'bg-pink-100 text-pink-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {o.paymentMethod === 'jazzcash' ? 'JazzCash' : 'COD'}
                            </span>
                            {o.jazzcashTid && (
                              <div className="text-[9px] font-mono text-neutral-950 font-bold mt-0.5 truncate max-w-[100px]" title={o.jazzcashTid}>
                                TID: {o.jazzcashTid}
                              </div>
                            )}
                          </td>
                          <td className="p-3.5">
                            <span className="font-bold text-gray-700">
                              {o.items ? o.items.reduce((a, b) => a + b.quantity, 0) : 1} items
                            </span>
                          </td>
                          <td className="p-3.5 font-black text-pink-800 text-sm">
                            Rs. {o.total.toLocaleString()}
                          </td>
                          <td className="p-3.5">
                            <select
                              value={o.status || 'Pending'}
                              onChange={(e) => updateOrderStatus(o.orderId, e.target.value)}
                              className="bg-white border border-gray-300 text-xs text-gray-900 rounded-xl px-2.5 py-1 font-extrabold focus:border-pink-600 focus:outline-none shadow-2xs"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Dispatched">Dispatched</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => {
                                  if (window.printInvoice) window.printInvoice(o);
                                  else setSelectedOrderModal(o);
                                }}
                                className="p-2 bg-pink-100 hover:bg-neutral-950 hover:text-white text-neutral-950 rounded-xl transition-colors border border-pink-200"
                                title="Print Invoice"
                              >
                                <Printer className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (window.downloadPdfInvoice) window.downloadPdfInvoice(o);
                                  else setSelectedOrderModal(o);
                                }}
                                className="p-2 bg-pink-50 hover:bg-pink-700 hover:text-white text-pink-800 rounded-xl transition-colors border border-pink-200"
                                title="Download PDF Invoice"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => setSelectedOrderModal(o)}
                                className="p-2 bg-pink-50 hover:bg-pink-700 hover:text-white text-neutral-950 rounded-xl transition-colors border border-pink-200"
                                title="View Order Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Delete order ${o.orderId}?`)) {
                                    deleteOrder(o.orderId);
                                  }
                                }}
                                className="p-2 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 rounded-xl transition-colors border border-rose-200"
                                title="Delete Order"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
                  <span>Showing <strong>{filteredOrders.length}</strong> of <strong>{orders.length}</strong> orders</span>
                  <span className="text-emerald-700 font-bold">Auto WhatsApp Notification on Status Change</span>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 👔 TAB 3B: MANAGER RECORD & SHIFT AUDIT REGISTER */}
          {/* ======================================================== */}
          {activeTab === 'manager' && (
            <div className="space-y-6">
              {/* Executive Manager Header */}
              <div className="bg-gradient-to-r from-neutral-950 via-black to-pink-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-pink-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    👔
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-black tracking-tight">Irshad Khan</h2>
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        ON DUTY (ACTIVE SUPERVISOR)
                      </span>
                    </div>
                    <p className="text-pink-200 text-xs font-medium mt-1">
                      Senior Store &amp; Inventory Operations Manager &bull; Terminal: Central Lahore Dispatch &amp; Online Hub
                    </p>
                    <div className="text-[11px] text-pink-300 mt-1 flex items-center gap-3">
                      <span>🕒 Shift: <strong>10:00 AM – 10:00 PM</strong></span>
                      <span>&bull;</span>
                      <span>📅 Date: <strong>{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                  <button
                    onClick={() => {
                      if (window.printManagerReport) {
                        window.printManagerReport(orders, products, 'Irshad Khan');
                      } else {
                        window.print();
                      }
                    }}
                    className="flex-1 md:flex-initial bg-white hover:bg-pink-50 text-neutral-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Printer className="w-4 h-4 text-black" />
                    <span>Print Shift Report</span>
                  </button>
                  <button
                    onClick={() => {
                      const csvContent = "data:text/csv;charset=utf-8," + 
                        ["Order ID,Customer,Phone,City,Amount,Status,Payment"].join(",") + "\n" +
                        orders.map(o => `"${o.orderId}","${o.customer?.fullName||''}","${o.customer?.phone||''}","${o.customer?.city||''}","${o.total}","${o.status}","${o.paymentMethod||'COD'}"`).join("\n");
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", `manager_manifest_${new Date().toISOString().slice(0,10)}.csv`);
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="flex-1 md:flex-initial bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Export Manifest</span>
                  </button>
                </div>
              </div>

              {/* Manager Shift Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                  <div className="flex justify-between items-center text-gray-400 text-xs font-bold uppercase">
                    <span>Shift Orders</span>
                    <ShoppingBag className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="text-2xl font-black text-neutral-950 mt-2">{orders.length}</div>
                  <div className="text-[11px] text-gray-500 mt-1">Total customer orders supervised</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                  <div className="flex justify-between items-center text-gray-400 text-xs font-bold uppercase">
                    <span>Gross Cash Flow</span>
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-emerald-700 mt-2">
                    Rs. {orders.reduce((sum, o) => sum + (o.total || 0), 0).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">COD + Verified online payments</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                  <div className="flex justify-between items-center text-gray-400 text-xs font-bold uppercase">
                    <span>Dispatched / Delivered</span>
                    <Truck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-black text-indigo-900 mt-2">
                    {orders.filter(o => o.status === 'Dispatched' || o.status === 'Delivered').length}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">Courier handover verified</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                  <div className="flex justify-between items-center text-gray-400 text-xs font-bold uppercase">
                    <span>Low Stock SKUs</span>
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-2xl font-black text-red-600 mt-2">
                    {products.filter(p => (p.stockCount || 0) <= 5).length}
                  </div>
                  <div className="text-[11px] text-red-500 font-bold mt-1">&le; 5 pairs remaining</div>
                </div>
              </div>

              {/* Manager Order Audit & Invoicing Table */}
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-pink-50/40">
                  <div>
                    <h3 className="font-black text-neutral-950 text-sm uppercase tracking-wide">
                      Manager Real-Time Invoicing &amp; Order Verification Desk
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      1-click official invoice printing and PDF downloading for each order.
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-pink-100 text-black px-3 py-1 rounded-full self-start sm:self-auto">
                    {orders.length} Orders in Register
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 uppercase tracking-wider font-extrabold text-[10px] border-b border-gray-100">
                        <th className="p-3.5">Order ID &amp; Date</th>
                        <th className="p-3.5">Customer &amp; Phone</th>
                        <th className="p-3.5">Items Summary</th>
                        <th className="p-3.5">Total Amount</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Manager Invoicing Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {orders.map((o) => (
                        <tr key={o.orderId} className="hover:bg-pink-50/40 transition-colors">
                          <td className="p-3.5 align-top">
                            <div className="font-black text-neutral-950">{o.orderId}</div>
                            <div className="text-[10px] text-gray-400 mt-0.5">{o.date || 'Recent'}</div>
                          </td>
                          <td className="p-3.5 align-top">
                            <div className="font-bold text-gray-900">{o.customer?.fullName}</div>
                            <div className="text-pink-600 font-medium text-[11px]">{o.customer?.phone}</div>
                            <div className="text-[10px] text-gray-500 mt-0.5">{o.customer?.city || 'Pakistan'}</div>
                          </td>
                          <td className="p-3.5 align-top">
                            <div className="text-gray-700 font-semibold">
                              {o.items ? o.items.length : 0} product(s) &bull; {o.items ? o.items.reduce((a,b)=>a+b.quantity,0) : 0} unit(s)
                            </div>
                            <div className="text-[10px] text-gray-400 truncate max-w-xs">
                              {o.items && o.items[0]?.product?.title}
                            </div>
                          </td>
                          <td className="p-3.5 align-top font-black text-pink-800 text-sm">
                            Rs. {o.total.toLocaleString()}
                          </td>
                          <td className="p-3.5 align-top">
                            <select
                              value={o.status || 'Pending'}
                              onChange={(e) => updateOrderStatus(o.orderId, e.target.value)}
                              className="bg-white border border-gray-300 text-xs text-gray-900 rounded-xl px-2 py-1 font-extrabold focus:border-pink-600 focus:outline-none"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Dispatched">Dispatched</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </td>
                          <td className="p-3.5 align-top text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => {
                                  if (window.printInvoice) window.printInvoice(o);
                                  else setSelectedOrderModal(o);
                                }}
                                className="bg-neutral-950 hover:bg-black text-white px-2.5 py-1.5 rounded-xl text-[11px] font-black uppercase flex items-center gap-1 shadow-xs transition-colors"
                                title="Print Official Invoice"
                              >
                                <Printer className="w-3.5 h-3.5 text-white" />
                                <span>Print</span>
                              </button>
                              <button
                                onClick={() => {
                                  if (window.downloadPdfInvoice) window.downloadPdfInvoice(o);
                                  else setSelectedOrderModal(o);
                                }}
                                className="bg-pink-700 hover:bg-pink-800 text-white px-2.5 py-1.5 rounded-xl text-[11px] font-black uppercase flex items-center gap-1 shadow-xs transition-colors"
                                title="Download PDF Invoice"
                              >
                                <Download className="w-3.5 h-3.5 text-white" />
                                <span>PDF</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Manager Shift Register / Daily Closing Notes */}
              <div className="bg-white rounded-2xl border border-pink-100 p-5 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-100 pb-3">
                  <div>
                    <h3 className="font-black text-neutral-950 text-sm uppercase tracking-wide">
                      Store Manager Shift Register &amp; Cash Tally Log
                    </h3>
                    <p className="text-xs text-gray-500">
                      Record daily shift closing notes, courier rider parcel handover logs, and cash reconciliation notes.
                    </p>
                  </div>
                  <span className="text-xs bg-pink-50 text-neutral-900 font-bold px-2.5 py-1 rounded-full">
                    Supervisor Log
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-pink-50/50 border border-pink-100 rounded-xl flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-medium text-gray-900">Morning opening inventory verified. 12 pairs of Peshawari Tan and 8 pairs of Bridal Stilettos ready for dispatch.</div>
                      <div className="text-[10px] text-gray-400 mt-1">🕒 Today 10:30 AM &bull; Manager: <strong>Irshad Khan</strong></div>
                    </div>
                    <span className="bg-pink-200 text-black font-bold px-2 py-0.5 rounded text-[10px] shrink-0 uppercase">
                      Verified
                    </span>
                  </div>
                  <div className="p-3 bg-pink-50/50 border border-pink-100 rounded-xl flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-medium text-gray-900">Trax Courier rider arrived. Dispatched customer parcels with printed invoice slips attached.</div>
                      <div className="text-[10px] text-gray-400 mt-1">🕒 Today 02:15 PM &bull; Manager: <strong>Irshad Khan</strong></div>
                    </div>
                    <span className="bg-indigo-100 text-indigo-900 font-bold px-2 py-0.5 rounded text-[10px] shrink-0 uppercase">
                      Dispatched
                    </span>
                  </div>
                  <div className="p-3 bg-pink-50/50 border border-pink-100 rounded-xl flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-medium text-gray-900">COD cash reconciliation complete with delivery riders. All amounts matched.</div>
                      <div className="text-[10px] text-gray-400 mt-1">🕒 Today 05:00 PM &bull; Manager: <strong>Irshad Khan</strong></div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-[10px] shrink-0 uppercase">
                      Reconciled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* 👥 TAB 4: CUSTOMER RELATIONSHIP MANAGEMENT (CRM) */}
          {/* ======================================================== */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <input
                    type="text"
                    placeholder="Search customers by name, phone or city..."
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 pl-9 pr-4 py-2.5 text-xs rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                <span className="text-xs font-bold text-gray-500">
                  Total Active Customers: <strong className="text-neutral-950">{customersList.length}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {customersList.map((c, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-neutral-950 to-pink-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                          {c.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-gray-900 text-sm">{c.fullName}</h4>
                          <span className="text-[10px] text-gray-500 block">{c.city || 'Pakistan'}</span>
                        </div>
                      </div>
                      {c.ordersCount > 1 ? (
                        <span className="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded-full">
                          ⭐ VIP Customer
                        </span>
                      ) : (
                        <span className="text-[10px] bg-pink-100 text-black font-bold px-2 py-0.5 rounded-full">
                          Customer
                        </span>
                      )}
                    </div>

                    <div className="bg-pink-50/50 p-3 rounded-xl border border-pink-100/60 text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Orders Placed:</span>
                        <strong className="text-neutral-950">{c.ordersCount}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total Spent (LTV):</span>
                        <strong className="text-pink-800 font-extrabold">Rs. {c.totalSpent.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Order:</span>
                        <span className="text-gray-700">{c.lastOrderDate}</span>
                      </div>
                      <div className="pt-1 text-[11px] text-gray-600 truncate border-t border-pink-100">
                        📍 {c.address}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Assalam-o-Alaikum ${c.fullName}! Thank you for being a valued customer at Stylish Shoes & Bags.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Customer ({c.phone})</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* ======================================================== */}
              {/* 📧 NEWSLETTER & EMAIL SUBSCRIBERS / MARKETING LEADS    */}
              {/* ======================================================== */}
              <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-pink-600" />
                      <h3 className="font-black text-neutral-950 text-sm uppercase tracking-wide">
                        Newsletter Subscribers &amp; Email Leads ({subscribers?.length || 0})
                      </h3>
                      <span className="text-[10px] bg-pink-100 text-pink-700 font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Marketing
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Storefront footer subscribers captured for marketing announcements, promotional codes &amp; sales alerts.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!subscribers || subscribers.length === 0) {
                          showToast('⚠️ No subscribers found to copy!');
                          return;
                        }
                        const emailList = subscribers.map((s) => s.email).join(', ');
                        navigator.clipboard.writeText(emailList);
                        showToast(`📋 Copied ${subscribers.length} subscriber email(s) to clipboard!`);
                      }}
                      className="px-3 py-1.5 bg-pink-50 hover:bg-pink-100 text-neutral-950 rounded-xl text-xs font-bold border border-pink-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Copy all subscriber emails separated by comma"
                    >
                      <Copy className="w-3.5 h-3.5 text-pink-600" />
                      <span>Copy All Emails</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!subscribers || subscribers.length === 0) {
                          showToast('⚠️ No subscribers found to export!');
                          return;
                        }
                        const headers = ['Email Address', 'Date Subscribed', 'Lead Source'];
                        const rows = subscribers.map((s) => [`"${s.email}"`, `"${s.date || ''}"`, `"${s.source || 'Storefront Footer'}"`]);
                        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
                        const encodedUri = encodeURI(csvContent);
                        const link = document.createElement('a');
                        link.setAttribute('href', encodedUri);
                        link.setAttribute('download', `Stylish_Shoes_Subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showToast('📥 Subscribers CSV exported successfully!');
                      }}
                      className="px-3 py-1.5 bg-neutral-950 hover:bg-pink-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>

                {subscribers && subscribers.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-pink-100 text-[11px] font-black text-gray-500 uppercase tracking-wider bg-pink-50/40">
                          <th className="py-2.5 px-3">#</th>
                          <th className="py-2.5 px-3">Subscriber Email</th>
                          <th className="py-2.5 px-3">Date Joined</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-pink-100/60">
                        {subscribers.map((sub, idx) => (
                          <tr key={sub.id || idx} className="hover:bg-pink-50/30 transition-colors">
                            <td className="py-2.5 px-3 font-mono text-gray-400 font-bold">{idx + 1}</td>
                            <td className="py-2.5 px-3">
                              <div className="flex items-center gap-2 font-bold text-neutral-950">
                                <Mail className="w-3.5 h-3.5 text-pink-500" />
                                <span>{sub.email}</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-gray-500">{sub.date || 'Recent'}</td>
                            <td className="py-2.5 px-3">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 uppercase">
                                Subscribed
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                type="button"
                                onClick={() => deleteSubscriber(sub.id || sub.email)}
                                className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                title="Remove subscriber"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-400 space-y-1">
                    <Mail className="w-8 h-8 mx-auto text-gray-300" />
                    <p className="text-xs font-semibold">No subscribers recorded yet.</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 🏷️ TAB 5: COUPONS & DISCOUNT PROMOTIONS */}
          {/* ======================================================== */}
          {activeTab === 'coupons' && (
            <div className="space-y-6">
              
              {/* Create New Coupon */}
              <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-950 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-pink-700" />
                  <span>Create New Discount Coupon</span>
                </h3>

                <form onSubmit={handleAddCoupon} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">Coupon Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FLASH20"
                      value={newCoupon.code}
                      onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold uppercase focus:border-pink-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">Discount Type</label>
                    <select
                      value={newCoupon.type}
                      onChange={(e) => setNewCoupon({ ...newCoupon, type: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold focus:border-pink-600 focus:outline-none"
                    >
                      <option value="percentage">Percentage (%)</option>
                      <option value="fixed">Fixed PKR Off (Rs.)</option>
                      <option value="free_shipping">Free Shipping</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">Discount Value *</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 15 or 500"
                      value={newCoupon.value}
                      onChange={(e) => setNewCoupon({ ...newCoupon, value: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold focus:border-pink-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">Min Order (PKR)</label>
                    <input
                      type="number"
                      placeholder="3000"
                      value={newCoupon.minOrder}
                      onChange={(e) => setNewCoupon({ ...newCoupon, minOrder: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold focus:border-pink-600 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full bg-neutral-950 hover:bg-pink-700 text-white py-2.5 rounded-xl font-extrabold uppercase tracking-wider transition-all shadow"
                    >
                      Save Coupon
                    </button>
                  </div>
                </form>
              </div>

              {/* Coupons List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {coupons.map((c) => (
                  <div key={c.id} className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-neutral-950 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-200 tracking-wider">
                        {c.code}
                      </span>
                      <button
                        onClick={() => toggleCouponStatus(c.id)}
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                          c.active ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {c.active ? 'Active' : 'Paused'}
                      </button>
                    </div>

                    <div className="text-xl font-black text-pink-800">
                      {c.type === 'percentage' && `${c.value}% OFF`}
                      {c.type === 'fixed' && `Rs. ${c.value} OFF`}
                      {c.type === 'free_shipping' && 'FREE DELIVERY'}
                    </div>

                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Min Cart Order: <strong>Rs. {c.minOrder.toLocaleString()}</strong></div>
                      <div>Total Redeemed: <strong>{c.usageCount} times</strong></div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex justify-end">
                      <button
                        onClick={() => deleteCoupon(c.id)}
                        className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* ⭐ TAB 6: CUSTOMER REVIEWS MODERATION */}
          {/* ======================================================== */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              
              <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                <div>
                  <h3 className="text-sm font-extrabold uppercase text-neutral-950">
                    Customer Reviews &amp; Testimonials ({reviews.length})
                  </h3>
                  <p className="text-xs text-gray-500">Live verified customer reviews shown on the storefront</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ⭐ 5.0 Average Rating
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-400">{rev.date || 'Recent'}</span>
                      </div>

                      <p className="text-xs text-gray-700 italic leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h5 className="font-extrabold text-xs text-neutral-950">{rev.author}</h5>
                        <span className="text-[10px] text-gray-400">{rev.city} &bull; Verified Buyer</span>
                      </div>
                      <button
                        onClick={() => deleteReview(rev.id)}
                        className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Remove Review"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* 🗂️ TAB 7: CATEGORIES & SUBCATEGORIES ARCHITECTURE */}
          {/* ======================================================== */}
          {activeTab === 'categories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const catProductsCount = products.filter((p) => p.category === cat.id).length;
                return (
                  <div key={cat.id} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <h3 className="text-base font-extrabold uppercase text-neutral-950">
                          {cat.name} Department
                        </h3>
                        <span className="text-xs text-gray-500">{catProductsCount} active items in catalogue</span>
                      </div>
                      <span className="text-xs font-black bg-pink-100 text-neutral-950 px-3 py-1 rounded-full">
                        {cat.subcategories ? cat.subcategories.length : 0} Subcategories
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.subcategories?.map((sub) => {
                        const count = products.filter((p) => p.category === cat.id && p.subcategory === sub).length;
                        return (
                          <span
                            key={sub}
                            className="px-3 py-1.5 bg-gray-50 hover:bg-pink-50 text-gray-800 border border-gray-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                          >
                            <span>{sub}</span>
                            <span className="text-[10px] bg-white text-neutral-950 font-black px-1.5 py-0.2 rounded border border-gray-200">
                              {count}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ======================================================== */}
          {/* ⚙️ TAB 8: STORE SETTINGS & BUSINESS PROFILE */}
          {/* ======================================================== */}
          {activeTab === 'settings' && (
            <div className="max-w-3xl space-y-6">
              <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-2xl border border-pink-100 shadow-sm space-y-6 text-xs">
                <div>
                  <h3 className="text-base font-extrabold uppercase text-neutral-950">Store Branding &amp; Contact Info</h3>
                  <p className="text-xs text-gray-500">Configure public business details and checkout policies</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Store Name</label>
                    <input
                      type="text"
                      value={storeSettings.storeName}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Official WhatsApp Hotline</label>
                    <input
                      type="text"
                      value={storeSettings.whatsappNumber}
                      onChange={(e) => setStoreSettings({ ...storeSettings, whatsappNumber: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">JazzCash Account Title</label>
                    <input
                      type="text"
                      value={storeSettings.jazzcashTitle}
                      onChange={(e) => setStoreSettings({ ...storeSettings, jazzcashTitle: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">JazzCash Account Number</label>
                    <input
                      type="text"
                      value={storeSettings.jazzcashNumber}
                      onChange={(e) => setStoreSettings({ ...storeSettings, jazzcashNumber: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Free Shipping Threshold (PKR)</label>
                    <input
                      type="number"
                      value={storeSettings.freeShippingThreshold}
                      onChange={(e) => setStoreSettings({ ...storeSettings, freeShippingThreshold: parseInt(e.target.value) || 0 })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Standard Shipping Fee (PKR)</label>
                    <input
                      type="number"
                      value={storeSettings.standardShippingFee}
                      onChange={(e) => setStoreSettings({ ...storeSettings, standardShippingFee: parseInt(e.target.value) || 0 })}
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-bold text-gray-900 focus:border-pink-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Announcement Marquee Ticker</label>
                  <input
                    type="text"
                    value={storeSettings.announcementMessage}
                    onChange={(e) => setStoreSettings({ ...storeSettings, announcementMessage: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl font-medium text-gray-900 focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-700 to-neutral-950 hover:from-pink-600 hover:to-black text-white px-6 py-3 rounded-xl font-extrabold uppercase tracking-wider transition-all shadow-md"
                  >
                    Save &amp; Apply Store Settings
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ======================================================== */}
          {/* 📊 BUSINESS REPORTS & FINANCIAL ANALYTICS TAB */}
          {/* ======================================================== */}
          {activeTab === 'reports' && (
            <AdminReportsView
              activeReportSubTab={activeReportSubTab}
              setActiveReportSubTab={setActiveReportSubTab}
              monthlyReportData={monthlyReportData}
              salesReportData={salesReportData}
              outOfStockReportData={outOfStockReportData}
              incomeReportData={incomeReportData}
              handleQuickRestock={handleQuickRestock}
              getProductUnitLabel={getProductUnitLabel}
            />
          )}

        </div>
      </main>

      {/* ======================================================== */}
      {/* 🧾 ORDER INVOICE & PACKING SLIP MODAL */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedOrderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-gray-900 max-h-[90vh] overflow-y-auto font-poppins border border-pink-100"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div>
                  <span className="text-[10px] text-pink-700 font-extrabold uppercase tracking-widest block">
                    CUSTOMER ORDER INVOICE
                  </span>
                  <h3 className="text-xl font-black text-neutral-950 uppercase">{selectedOrderModal.orderId}</h3>
                  <span className="text-xs text-gray-500">{selectedOrderModal.date || 'Recent'}</span>
                </div>
                <button
                  onClick={() => setSelectedOrderModal(null)}
                  className="p-1.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Customer Info Card */}
              <div className="bg-pink-50/70 p-4 rounded-2xl border border-pink-100 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Customer Name:</span>
                  <strong className="text-neutral-950">{selectedOrderModal.customer?.fullName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone Number:</span>
                  <strong className="text-pink-800">{selectedOrderModal.customer?.phone}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping Address:</span>
                  <strong className="text-gray-900 text-right max-w-[240px]">
                    {selectedOrderModal.customer?.address}, {selectedOrderModal.customer?.city}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Method:</span>
                  <span className="font-extrabold text-emerald-700 uppercase">
                    {selectedOrderModal.paymentMethod === 'jazzcash' ? 'JazzCash Manual' : 'Cash On Delivery (COD)'}
                  </span>
                </div>
                {selectedOrderModal.jazzcashTid && (
                  <div className="flex justify-between text-neutral-950 font-mono font-bold pt-1 border-t border-pink-200/60">
                    <span>JazzCash TID / Ref #:</span>
                    <span>{selectedOrderModal.jazzcashTid}</span>
                  </div>
                )}
              </div>

              {/* Ordered Items List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-950 uppercase tracking-wider">
                  Ordered Products ({selectedOrderModal.items ? selectedOrderModal.items.length : 0})
                </h4>
                <div className="divide-y divide-gray-100 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  {selectedOrderModal.items?.map((item, idx) => (
                    <div key={idx} className="p-3 flex items-center gap-3 bg-white">
                      {item.product?.image && (
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-12 h-12 object-cover rounded-xl bg-white border border-gray-200 flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0 text-xs">
                        <h5 className="font-extrabold text-gray-900 truncate">{item.product?.title}</h5>
                        <div className="text-[10px] text-gray-500 flex items-center gap-2 mt-0.5">
                          <span>Size: <strong>{item.selectedSize}</strong></span>
                          <span>&bull;</span>
                          <span>Color: <strong>{item.selectedColor}</strong></span>
                          <span>&bull;</span>
                          <span>Qty: <strong>{item.quantity}</strong></span>
                        </div>
                      </div>
                      <span className="text-xs font-black text-neutral-950">
                        Rs. {(item.product?.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Total */}
              <div className="bg-neutral-950 text-white p-4 rounded-2xl flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-pink-200">Total Payable Amount:</span>
                <span className="text-xl font-black text-amber-300">Rs. {selectedOrderModal.total.toLocaleString()}</span>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (window.printInvoice) {
                        window.printInvoice(selectedOrderModal);
                      } else {
                        window.print();
                      }
                    }}
                    className="w-full bg-neutral-950 hover:bg-black text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <Printer className="w-4 h-4 text-white" />
                    <span>Print Invoice</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.downloadPdfInvoice) {
                        window.downloadPdfInvoice(selectedOrderModal);
                      } else if (window.printInvoice) {
                        window.printInvoice(selectedOrderModal);
                      } else {
                        window.print();
                      }
                    }}
                    className="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Download PDF</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${(selectedOrderModal.customer?.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Assalam-o-Alaikum ${selectedOrderModal.customer?.fullName}, your order ${selectedOrderModal.orderId} status is: ${selectedOrderModal.status}. Total: Rs. ${selectedOrderModal.total}. Thank you for shopping with Stylish Shoes & Bags!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Customer</span>
                  </a>

                  <button
                    onClick={() => setSelectedOrderModal(null)}
                    className="px-5 bg-neutral-950 hover:bg-pink-700 text-white py-3 rounded-xl text-xs font-extrabold uppercase transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* ➕ ADD NEW PRODUCT MODAL (DUAL FILE / URL INPUT) */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative text-gray-900 max-h-[90vh] overflow-y-auto font-poppins border border-pink-100"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[10px] text-pink-700 font-extrabold uppercase tracking-widest block">
                    INVENTORY MASTER
                  </span>
                  <h3 className="text-base font-black uppercase text-neutral-950">
                    Add New Product To Catalogue
                  </h3>
                </div>
                <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={newProductData.title}
                    onChange={(e) => setNewProductData({ ...newProductData, title: e.target.value })}
                    placeholder="e.g. Handmade Charsadda Leather Chappal"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Department / Category *</label>
                    <select
                      value={newProductData.category}
                      onChange={(e) => {
                        const cat = e.target.value;
                        const catObj = CATEGORIES.find(c => c.id === cat);
                        const firstSub = catObj?.subcategories?.[0] || 'General';
                        setNewProductData({ ...newProductData, category: cat, subcategory: firstSub });
                      }}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 font-extrabold cursor-pointer"
                    >
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                      <option value="accessories">Accessories</option>
                      <option value="kids">Kids</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Subcategory *</label>
                    <select
                      required
                      value={newProductData.subcategory}
                      onChange={(e) => setNewProductData({ ...newProductData, subcategory: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold cursor-pointer"
                    >
                      {(CATEGORIES.find(c => c.id === newProductData.category)?.subcategories || []).map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                      <option value="Other">➕ Other (Custom Subcategory)</option>
                    </select>
                    {newProductData.subcategory === 'Other' && (
                      <input
                        type="text"
                        placeholder="Type custom subcategory..."
                        required
                        value={newProductData.customSubcategory || ''}
                        onChange={(e) => setNewProductData({ ...newProductData, customSubcategory: e.target.value })}
                        className="w-full mt-2 bg-white border border-pink-300 p-2.5 rounded-xl text-gray-900 text-xs font-semibold"
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Price (PKR) *</label>
                    <input
                      type="number"
                      required
                      value={newProductData.price}
                      onChange={(e) => setNewProductData({ ...newProductData, price: e.target.value })}
                      placeholder="4950"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Stock Quantity</label>
                    <input
                      type="number"
                      value={newProductData.stockCount}
                      onChange={(e) => setNewProductData({ ...newProductData, stockCount: e.target.value })}
                      placeholder="20"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold"
                    />
                  </div>
                </div>

                {/* Dual Image Input */}
                <div className="space-y-2 border border-pink-200/80 p-3.5 rounded-2xl bg-pink-50/50">
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-extrabold text-neutral-950 uppercase flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-pink-700" />
                      <span>Product Image *</span>
                    </label>
                    <div className="flex gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setImageInputType('file')}
                        className={`px-2.5 py-1 rounded-lg font-bold uppercase transition-colors ${
                          imageInputType === 'file'
                            ? 'bg-neutral-950 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        📁 File Upload
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageInputType('url')}
                        className={`px-2.5 py-1 rounded-lg font-bold uppercase transition-colors ${
                          imageInputType === 'url'
                            ? 'bg-neutral-950 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        🔗 Web URL
                      </button>
                    </div>
                  </div>

                  {imageInputType === 'file' ? (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'image')}
                        className="w-full bg-white border border-gray-200 p-2 rounded-xl text-gray-700 text-xs file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-extrabold file:bg-neutral-950 file:text-white hover:file:bg-pink-800 cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <input
                        type="url"
                        value={newProductData.image}
                        onChange={(e) => setNewProductData({ ...newProductData, image: e.target.value })}
                        placeholder="https://..."
                        className="w-full bg-white border border-gray-200 p-2.5 rounded-xl text-gray-900 focus:border-pink-600 focus:outline-none"
                      />
                    </div>
                  )}

                  {/* Preview */}
                  {newProductData.image && (
                    <div className="mt-2 flex items-center gap-3 bg-white p-2 rounded-xl border border-pink-200">
                      <img src={newProductData.image} alt="Preview" className="w-14 h-14 object-cover rounded-lg bg-gray-50 border border-gray-200" />
                      <div className="text-[11px] min-w-0">
                        <span className="text-emerald-700 font-extrabold block">✓ Image Ready</span>
                        <span className="text-gray-400 truncate block max-w-xs">{newProductData.image}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Available Colors</label>
                    <input
                      type="text"
                      value={newProductData.colors}
                      onChange={(e) => setNewProductData({ ...newProductData, colors: e.target.value })}
                      placeholder="Brown, Black, Mustard"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Available Sizes</label>
                    <input
                      type="text"
                      value={newProductData.sizes}
                      onChange={(e) => setNewProductData({ ...newProductData, sizes: e.target.value })}
                      placeholder="39, 40, 41, 42, 43"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={newProductData.description}
                    onChange={(e) => setNewProductData({ ...newProductData, description: e.target.value })}
                    placeholder="High quality craftsmanship, durable and comfortable..."
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Product Status (Enable / Disable) */}
                <div className="bg-pink-50/70 p-3.5 rounded-2xl border border-pink-200 flex items-center justify-between">
                  <div>
                    <label className="font-extrabold text-neutral-950 text-xs block uppercase">Product Status (Visibility)</label>
                    <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">
                      {newProductData.enabled !== false ? '🟢 Visible & available on customer storefront' : '⚪ Hidden from store catalogue (Draft)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNewProductData({ ...newProductData, enabled: newProductData.enabled === false ? true : false })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer border flex items-center gap-1.5 ${
                      newProductData.enabled !== false
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-gray-200 text-gray-700 border-gray-300'
                    }`}
                  >
                    <span>{newProductData.enabled !== false ? '✓' : '✕'}</span>
                    <span>{newProductData.enabled !== false ? 'Enabled' : 'Disabled'}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-700 to-neutral-950 hover:from-pink-600 hover:to-black text-white py-3.5 rounded-xl font-extrabold uppercase tracking-wider shadow-lg transition-all"
                >
                  Save Product To Inventory
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* ✏️ EDIT PRODUCT MODAL */}
      {/* ======================================================== */}
      <AnimatePresence>
        {editingProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative text-gray-900 max-h-[90vh] overflow-y-auto font-poppins border border-pink-100"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <Edit className="w-5 h-5 text-pink-700" />
                  <h3 className="text-base font-black uppercase text-neutral-950">
                    Edit Product Details
                  </h3>
                </div>
                <button onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const resolvedSubcat = editingProduct.subcategory === 'Other'
                    ? (editingProduct.customSubcategory?.trim() || 'General')
                    : editingProduct.subcategory;

                  updateProduct({
                    ...editingProduct,
                    subcategory: resolvedSubcat,
                    price: parseFloat(editingProduct.price) || 0,
                    stockCount: parseInt(editingProduct.stockCount) || 0,
                    inStock: (parseInt(editingProduct.stockCount) || 0) > 0,
                    enabled: editingProduct.enabled !== false,
                    colors: Array.isArray(editingProduct.colors)
                      ? editingProduct.colors
                      : String(editingProduct.colors || '').split(',').map((c) => c.trim()).filter(Boolean),
                    sizes: Array.isArray(editingProduct.sizes)
                      ? editingProduct.sizes
                      : String(editingProduct.sizes || '').split(',').map((s) => s.trim()).filter(Boolean)
                  });
                  setEditingProduct(null);
                }}
                className="space-y-4 text-xs font-medium"
              >
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.title || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Department / Category *</label>
                    <select
                      value={editingProduct.category || 'women'}
                      onChange={(e) => {
                        const cat = e.target.value;
                        const catObj = CATEGORIES.find(c => c.id === cat);
                        const firstSub = catObj?.subcategories?.[0] || 'General';
                        setEditingProduct({ ...editingProduct, category: cat, subcategory: firstSub });
                      }}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 font-extrabold cursor-pointer"
                    >
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                      <option value="accessories">Accessories</option>
                      <option value="kids">Kids</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Subcategory *</label>
                    <select
                      required
                      value={editingProduct.subcategory || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, subcategory: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold cursor-pointer"
                    >
                      {(CATEGORIES.find(c => c.id === (editingProduct.category || 'women'))?.subcategories || []).map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                      <option value="Other">➕ Other (Custom Subcategory)</option>
                    </select>
                    {editingProduct.subcategory === 'Other' && (
                      <input
                        type="text"
                        placeholder="Type custom subcategory..."
                        required
                        value={editingProduct.customSubcategory || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, customSubcategory: e.target.value })}
                        className="w-full mt-2 bg-white border border-pink-300 p-2.5 rounded-xl text-gray-900 text-xs font-semibold"
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Price (PKR) *</label>
                    <input
                      type="number"
                      required
                      value={editingProduct.price || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-1">Stock Count</label>
                    <input
                      type="number"
                      value={editingProduct.stockCount !== undefined ? editingProduct.stockCount : 15}
                      onChange={(e) => setEditingProduct({ ...editingProduct, stockCount: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Product Image URL</label>
                  <input
                    type="url"
                    value={editingProduct.image || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none"
                  />
                  {editingProduct.image && (
                    <div className="mt-2 flex items-center gap-3 bg-pink-50 p-2 rounded-xl border border-pink-100">
                      <img src={editingProduct.image} alt="Preview" className="w-12 h-12 object-cover rounded-lg bg-white border border-gray-200" />
                      <span className="text-[11px] text-gray-500 truncate max-w-xs">{editingProduct.image}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingProduct.description || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:border-pink-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Product Status Toggle */}
                <div className="bg-pink-50/70 p-3.5 rounded-2xl border border-pink-200 flex items-center justify-between">
                  <div>
                    <label className="font-extrabold text-neutral-950 text-xs block uppercase">Product Status (Visibility)</label>
                    <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">
                      {editingProduct.enabled !== false ? '🟢 Visible on customer storefront' : '⚪ Hidden from customers (Disabled)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditingProduct({ ...editingProduct, enabled: editingProduct.enabled === false ? true : false })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer border flex items-center gap-1.5 ${
                      editingProduct.enabled !== false
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-gray-200 text-gray-700 border-gray-300'
                    }`}
                  >
                    <span>{editingProduct.enabled !== false ? '✓' : '✕'}</span>
                    <span>{editingProduct.enabled !== false ? 'Enabled' : 'Disabled'}</span>
                  </button>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-700 to-neutral-950 hover:from-pink-600 hover:to-black text-white py-3 rounded-xl font-extrabold uppercase tracking-wider shadow-lg transition-all"
                  >
                    Save &amp; Update Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold uppercase transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 📦 BULK PRODUCT & STOCK IMPORT MODAL (100+ PRODUCTS)   */}
      {/* ======================================================== */}
      <BulkProductImportModal
        isOpen={showBulkAddModal}
        onClose={() => setShowBulkAddModal(false)}
        onBulkImport={addBulkProducts}
      />

    </div>
  );
};
