import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { ShoppingBag, Heart, Search, Menu, X, ChevronDown, Sparkles, LayoutDashboard, ArrowRight, Truck, Lock, Unlock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const {
    products,
    cart,
    wishlist,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    searchQuery,
    setSearchQuery,
    setIsCartOpen,
    setIsSizeGuideOpen,
    isAdminMode,
    setIsAdminMode,
    isAdminAuthOpen,
    setIsAdminAuthOpen,
    openAdminPanel,
    lockAdminSession,
    isAdminAuthenticated,
    adminEmail,
    setIsTrackingOpen,
    setIsCustomerAccountOpen,
    setQuickViewProduct,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHoverCategory, setActiveHoverCategory] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Real-time search matches
  const searchResults = searchQuery.trim() !== ''
    ? products.filter((p) => {
        const q = searchQuery.toLowerCase().trim();
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
          (p.colors && p.colors.some((c) => c.toLowerCase().includes(q))) ||
          (p.description && p.description.toLowerCase().includes(q))
        );
      }).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGoHome = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Reset filters & views
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSearchQuery('');
    setMobileMenuOpen(false);
    setActiveHoverCategory(null);
    if (typeof setIsAdminMode === 'function') setIsAdminMode(false);
    if (typeof setIsAdminAuthOpen === 'function') setIsAdminAuthOpen(false);
    if (typeof setIsCartOpen === 'function') setIsCartOpen(false);
    if (typeof setIsSizeGuideOpen === 'function') setIsSizeGuideOpen(false);
    if (typeof setIsTrackingOpen === 'function') setIsTrackingOpen(false);
    if (typeof setIsCustomerAccountOpen === 'function') setIsCustomerAccountOpen(false);

    // Clear hash if any
    if (window.location.hash) {
      try {
        window.history.pushState(null, '', window.location.pathname || '/');
      } catch {
        window.location.hash = '';
      }
    }

    // If on a different sub-route, navigate to root
    if (window.location.pathname && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      window.location.href = '/';
      return;
    }

    // Smooth scroll to top of homepage
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {}
    try {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {}
    try {
      document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {}

    const topEl = document.getElementById('home-top') || document.body;
    if (topEl) {
      topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategorySelect = (catId, subCat = null) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(subCat);
    setSearchQuery('');
    setMobileMenuOpen(false);
    setActiveHoverCategory(null);
    if (catId === 'all') {
      handleGoHome();
      return;
    }
    if (subCat) {
      const gridEl = document.getElementById('product-section');
      if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const showcaseEl = document.getElementById('subcategories-showcase');
      if (showcaseEl) {
        showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const gridEl = document.getElementById('product-section');
        if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSearchFocused(false);
    const gridEl = document.getElementById('product-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm transition-all duration-300 font-poppins">
      {/* Top Announcement Bar with Continuous Marquee Animation */}
      <div className="bg-neutral-950 border-b border-pink-900/30 text-white text-xs py-2 px-4 shadow-inner overflow-hidden">
        {/* Animated Marquee Announcement Ticker */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
            {/* Set 1 */}
            <div className="flex items-center gap-6 text-[11px] sm:text-xs font-semibold flex-shrink-0">
              <span className="flex items-center gap-1.5 text-pink-300 font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                STYLISH SHOES &amp; BAGS
              </span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-gray-200 uppercase tracking-wider">Step Into Style</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-amber-300 font-bold">Free Delivery on Orders Above Rs. 4,000</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-emerald-400 font-bold">Cash On Delivery &amp; JazzCash Available</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-pink-300 font-bold">7 Days Easy Size Exchange</span>
              <span className="text-pink-500">&bull;</span>
            </div>
            {/* Set 2 (Duplicate for smooth infinite seamless loop) */}
            <div className="flex items-center gap-6 text-[11px] sm:text-xs font-semibold flex-shrink-0">
              <span className="flex items-center gap-1.5 text-pink-300 font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                STYLISH SHOES &amp; BAGS
              </span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-gray-200 uppercase tracking-wider">Step Into Style</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-amber-300 font-bold">Free Delivery on Orders Above Rs. 4,000</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-emerald-400 font-bold">100% Cash On Delivery (COD) Available Nationwide</span>
              <span className="text-pink-500">&bull;</span>
              <span className="text-pink-300 font-bold">7 Days Easy Size Exchange</span>
              <span className="text-pink-500">&bull;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-950 hover:text-pink-600 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Official Brand Logo & Name */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center cursor-pointer gap-3 group select-none no-underline"
            onClick={handleGoHome}
            title="Return to Home Page"
          >
            <img
              src="/logo.png"
              alt="Stylish Shoes & Bags Logo"
              className="h-14 w-auto object-contain rounded-full shadow-md border-2 border-pink-200 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-950 font-poppins uppercase leading-none group-hover:text-pink-600 transition-colors">
                STYLISH <span className="text-pink-600">SHOES</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] font-bold text-black uppercase mt-0.5">
                AND BAGS &bull; STEP INTO STYLE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Category Links with Subcategories Dropdown */}
          <nav className="hidden lg:flex items-center space-x-7">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              const hasSubcategories = category.subcategories && category.subcategories.length > 0;

              return (
                <div
                  key={category.id}
                  className="relative group py-6"
                  onMouseEnter={() => setActiveHoverCategory(category.id)}
                  onMouseLeave={() => setActiveHoverCategory(null)}
                >
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className={`flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 relative cursor-pointer ${
                      isActive ? 'text-pink-600 font-extrabold' : 'text-gray-900 hover:text-pink-600'
                    }`}
                  >
                    <span>{category.name}</span>
                    {hasSubcategories && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-pink-500" />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryLine"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-pink-600"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasSubcategories && (
                    <AnimatePresence>
                      {activeHoverCategory === category.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full -mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl py-3 z-50 overflow-hidden"
                        >
                          <div className="px-4 py-1.5 text-[10px] font-extrabold text-pink-600 tracking-wider uppercase border-b border-gray-50 mb-1">
                            {category.name} Collections
                          </div>
                          <button
                            onClick={() => handleCategorySelect(category.id, null)}
                            className="w-full text-left px-4 py-2 text-xs font-black text-neutral-950 hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between cursor-pointer"
                          >
                            <span>All {category.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-pink-500" />
                          </button>
                          <div className="max-h-60 overflow-y-auto custom-scrollbar divide-y divide-gray-50">
                            {category.subcategories.map((subCat) => (
                              <button
                                key={subCat}
                                onClick={() => handleCategorySelect(category.id, subCat)}
                                className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                  selectedCategory === category.id && selectedSubcategory === subCat
                                    ? 'bg-pink-50 text-pink-600 font-extrabold border-l-2 border-pink-600'
                                    : 'text-neutral-950 font-bold hover:bg-pink-50 hover:text-pink-600'
                                }`}
                              >
                                <span>{subCat}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Real-time Search Box & Dropdown */}
            <div ref={searchContainerRef} className="relative">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search shoes, bags..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchFocused(true);
                  }}
                  onFocus={() => setSearchFocused(true)}
                  className="w-32 sm:w-48 md:w-56 pl-8 pr-7 py-1.5 text-xs bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full focus:bg-white focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all font-medium text-gray-900 placeholder-gray-400"
                />
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 font-bold text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </form>

              {/* REAL-TIME INSTANT SEARCH DROPDOWN POPUP */}
              <AnimatePresence>
                {searchFocused && searchQuery.trim() !== '' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2 font-poppins"
                  >
                    <div className="px-3 py-2 text-[10px] font-extrabold text-neutral-950 uppercase tracking-widest bg-pink-50 rounded-xl flex items-center justify-between border border-pink-100">
                      <span>Live Results ({searchResults.length})</span>
                      <span className="text-pink-600">"{searchQuery}"</span>
                    </div>

                    <div className="mt-2 divide-y divide-neutral-100 max-h-80 overflow-y-auto custom-scrollbar">
                      {searchResults.length > 0 ? (
                        searchResults.map((prod) => (
                          <div
                            key={prod.id}
                            onClick={() => {
                              setQuickViewProduct(prod);
                              setSearchFocused(false);
                            }}
                            className="p-2.5 hover:bg-pink-50 rounded-xl transition-colors cursor-pointer flex items-center gap-3 group"
                          >
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-12 h-12 object-cover rounded-xl border border-pink-100 group-hover:scale-105 transition-transform"
                            />
                            <div className="flex-1 min-w-0 text-left">
                              <span className="text-[10px] font-bold text-pink-600 uppercase block">
                                {prod.subcategory || prod.category}
                              </span>
                              <h5 className="text-xs font-extrabold text-neutral-950 group-hover:text-pink-600 line-clamp-1 transition-colors">
                                {prod.title}
                              </h5>
                              <span className="text-xs font-bold text-pink-900 font-poppins block">
                                Rs. {prod.price.toLocaleString()}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center text-xs text-gray-500 font-medium">
                          No matching products found for "{searchQuery}".
                        </div>
                      )}
                    </div>

                    {searchResults.length > 0 && (
                      <button
                        onClick={() => handleSearchSubmit()}
                        className="w-full mt-2 bg-gradient-to-r from-black to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
                      >
                        <span>View All Matching Items ({searchResults.length})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Discreet Management Portal Trigger (Small icon only, no giveaway text) */}
            <button
              onClick={() => openAdminPanel(true)}
              className="p-2 text-gray-500 hover:text-neutral-950 hover:bg-pink-50 rounded-full transition-all cursor-pointer"
              title="Secure Access"
              aria-label="Secure Access"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => handleCategorySelect('all')}
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute 0 top-1 right-1 bg-pink-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors flex items-center gap-1 cursor-pointer"
              title="View Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-pink-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="space-y-2 mb-3">
                <button
                  onClick={handleGoHome}
                  className="w-full bg-pink-50 hover:bg-pink-100 text-pink-700 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border border-pink-200 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>🏠 Return to Home Page</span>
                </button>

              </div>

              {CATEGORIES.map((category) => (
                <div key={category.id} className="border-b border-neutral-100 pb-2">
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full text-left font-extrabold text-xs tracking-wider uppercase text-neutral-950 py-1 hover:text-pink-600"
                  >
                    {category.name}
                  </button>
                  {category.subcategories && (
                    <div className="pl-3 mt-1 grid grid-cols-2 gap-1">
                      {category.subcategories.map((subCat) => (
                        <button
                          key={subCat}
                          onClick={() => handleCategorySelect(category.id, subCat)}
                          className="text-left text-xs text-neutral-900 font-semibold py-1 hover:text-pink-600"
                        >
                          &bull; {subCat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
