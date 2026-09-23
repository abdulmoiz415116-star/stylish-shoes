import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Layers, Heart, ShoppingBag, User } from 'lucide-react';

export const MobileBottomNav = () => {
  const {
    cart,
    wishlist,
    setIsCartOpen,
    setIsCustomerAccountOpen,
    setCustomerAccountTab,
    setSelectedCategory,
    setSelectedSubcategory,
    setSearchQuery,
    setIsAdminMode
  } = useShop();

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistCount = wishlist.length;

  const handleGoHome = () => {
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSearchQuery('');
    if (typeof setIsAdminMode === 'function') setIsAdminMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCategories = () => {
    setSelectedSubcategory(null);
    setSearchQuery('');
    const el = document.getElementById('category-grid-section') || document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCategory('all');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-pink-100 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] px-2 py-1.5 transition-all">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home */}
        <button
          onClick={handleGoHome}
          className="flex flex-col items-center justify-center p-1.5 text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer group"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Home</span>
        </button>

        {/* 2. Categories */}
        <button
          onClick={handleOpenCategories}
          className="flex flex-col items-center justify-center p-1.5 text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer group"
        >
          <Layers className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Categories</span>
        </button>

        {/* 3. Wishlist */}
        <button
          onClick={() => {
            if (typeof setCustomerAccountTab === 'function') setCustomerAccountTab('wishlist');
            setIsCustomerAccountOpen(true);
          }}
          className="flex flex-col items-center justify-center p-1.5 text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer relative group"
        >
          <div className="relative">
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {totalWishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-pink-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalWishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Wishlist</span>
        </button>

        {/* 4. Cart Button (Highlighted) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center p-1.5 text-neutral-950 hover:text-pink-600 transition-colors cursor-pointer relative group"
        >
          <div className="relative bg-neutral-950 group-hover:bg-pink-600 text-white p-2 rounded-2xl shadow-md transition-all">
            <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                {totalCartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-extrabold tracking-tight mt-0.5">Cart</span>
        </button>

        {/* 5. Account / Tracking */}
        <button
          onClick={() => {
            if (typeof setCustomerAccountTab === 'function') setCustomerAccountTab('orders');
            setIsCustomerAccountOpen(true);
          }}
          className="flex flex-col items-center justify-center p-1.5 text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer group"
        >
          <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Account</span>
        </button>
      </div>
    </div>
  );
};
