import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Star, Check, ShieldCheck, Truck, RefreshCw, Share2, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setIsSizeGuideOpen,
    setIsCartOpen,
    showToast
  } = useShop();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      const defaultColor = quickViewProduct.colors ? quickViewProduct.colors[0] : '';
      setSelectedColor(defaultColor);
      setSelectedSize(quickViewProduct.sizes ? quickViewProduct.sizes[0] : '');
      setQuantity(1);

      if (quickViewProduct.colorImages && defaultColor && quickViewProduct.colorImages[defaultColor]) {
        setActiveImage(quickViewProduct.colorImages[defaultColor]);
      } else {
        setActiveImage(quickViewProduct.image);
      }
    }
  }, [quickViewProduct]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (quickViewProduct?.colorImages && quickViewProduct.colorImages[color]) {
      setActiveImage(quickViewProduct.colorImages[color]);
    } else if (quickViewProduct?.gallery && quickViewProduct.colors) {
      const colorIndex = quickViewProduct.colors.indexOf(color);
      if (colorIndex >= 0 && quickViewProduct.gallery[colorIndex]) {
        setActiveImage(quickViewProduct.gallery[colorIndex]);
      }
    }
  };

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedColor, selectedSize, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  const handleCopyProductLink = () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#product=${quickViewProduct.id}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      if (showToast) showToast('🔗 Product link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      if (showToast) showToast('🔗 Link ready in address bar!');
    }
  };

  const handleShareWhatsApp = () => {
    const url = `${window.location.origin}${window.location.pathname}#product=${quickViewProduct.id}`;
    const text = `Look at *${quickViewProduct.title}* at Stylish Shoes & Bags for Rs. ${quickViewProduct.price.toLocaleString()}!\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 my-4 sm:my-8 border border-pink-100"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-neutral-950 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Images */}
            <div className="p-6 bg-gray-50 flex flex-col items-center justify-center border-r border-gray-100">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner mb-4 group cursor-zoom-in relative">
                <img
                  src={activeImage}
                  alt={quickViewProduct.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-135"
                  onError={(e) => {
                    if (e.target.dataset.triedFallback) return;
                    e.target.dataset.triedFallback = 'true';
                    e.target.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  🔍 Hover to Zoom
                </span>
              </div>

              {/* Multi-Image Gallery Thumbnails */}
              {(() => {
                const imageList = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
                  ? quickViewProduct.gallery
                  : [quickViewProduct.image, quickViewProduct.secondaryImage].filter(Boolean);

                if (imageList.length <= 1) return null;

                return (
                  <div className="flex gap-2.5 overflow-x-auto py-1 max-w-full custom-scrollbar">
                    {imageList.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                          activeImage === imgUrl ? 'border-pink-600 scale-105 shadow-md' : 'border-gray-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Right: Product Details & Buying Controls */}
            <div className="p-6 flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  <span>{quickViewProduct.subcategory || quickViewProduct.category}</span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <span>{quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mt-1 uppercase font-poppins">
                  {quickViewProduct.title}
                </h3>

                {/* Regular Price */}
                <div className="mt-2 text-2xl font-black text-neutral-950 font-poppins">
                  Rs. {quickViewProduct.price.toLocaleString()}
                </div>

                <p className="text-xs text-gray-600 mt-3 font-light leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Color Selector */}
                {quickViewProduct.colors && (
                  <div className="mt-5">
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Color: <span className="text-pink-600 font-extrabold">{selectedColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                            selectedColor === color
                              ? 'bg-neutral-950 text-white border-black shadow-sm ring-1 ring-pink-500'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-pink-600 hover:text-pink-600'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                {quickViewProduct.sizes && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-extrabold text-neutral-950 uppercase tracking-wider">
                        Select Size: <span className="text-pink-600 font-extrabold text-sm">{selectedSize || 'None Selected'}</span>
                      </label>
                      <button
                        onClick={() => {
                          setIsSizeGuideOpen(true);
                        }}
                        className="text-[11px] font-bold text-pink-600 hover:underline uppercase"
                      >
                        Size Chart &rarr;
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`w-11 h-11 rounded-xl text-xs font-extrabold transition-all border shadow-xs ${
                            selectedSize === size
                              ? 'bg-black text-white border-black ring-2 ring-pink-500 shadow-md scale-105'
                              : 'bg-gray-50 text-gray-800 border-gray-200 hover:border-pink-600 hover:bg-pink-50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stock Status Alert */}
                <div className="mt-4">
                  {(() => {
                    const currentStock = quickViewProduct.stockCount !== undefined ? quickViewProduct.stockCount : 15;
                    const isOutOfStock = !quickViewProduct.inStock || currentStock <= 0;
                    if (isOutOfStock) {
                      return (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700 flex items-center gap-2">
                          <span>❌ Currently Completely Sold Out</span>
                        </div>
                      );
                    }
                    if (currentStock <= 5) {
                      return (
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-800 flex items-center justify-between">
                          <span>⚠️ Only {currentStock} pair(s) remaining in stock!</span>
                          <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full uppercase">Fast Selling</span>
                        </div>
                      );
                    }
                    return (
                      <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>In Stock ({currentStock} units available)</span>
                      </div>
                    );
                  })()}
                </div>

                {/* Quantity Control */}
                {(() => {
                  const currentStock = quickViewProduct.stockCount !== undefined ? quickViewProduct.stockCount : 15;
                  const isOutOfStock = !quickViewProduct.inStock || currentStock <= 0;
                  return (
                    <div className="mt-5 flex items-center gap-4">
                      <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Quantity:
                      </label>
                      <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-xs font-bold text-gray-900">{quantity}</span>
                        <button
                          type="button"
                          disabled={isOutOfStock || quantity >= currentStock}
                          onClick={() => {
                            if (quantity < currentStock) {
                              setQuantity(quantity + 1);
                            } else {
                              showToast(`❌ Only ${currentStock} pair(s) left in stock!`);
                            }
                          }}
                          className={`px-3 py-1 font-bold ${
                            isOutOfStock || quantity >= currentStock
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[11px] text-gray-500">Max: {currentStock}</span>
                    </div>
                  );
                })()}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                {(() => {
                  const currentStock = quickViewProduct.stockCount !== undefined ? quickViewProduct.stockCount : 15;
                  const isOutOfStock = !quickViewProduct.inStock || currentStock <= 0;
                  return (
                    <div className="flex gap-3">
                      <button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2 ${
                          isOutOfStock
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-neutral-950 hover:bg-pink-600 text-white cursor-pointer active:scale-[0.99]'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>{isOutOfStock ? 'Currently Out of Stock' : 'Add To Shopping Bag'}</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(quickViewProduct.id)}
                        className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                          isWishlisted
                            ? 'bg-pink-600 text-white border-pink-600 shadow'
                            : 'bg-white text-gray-700 border-gray-300 hover:text-pink-600 hover:border-pink-300'
                        }`}
                        title="Wishlist"
                      >
                        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  );
                })()}

                {/* Share Options */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Share on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyProductLink}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Copy Product Link"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-600" />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                {/* Service Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-gray-500 text-center font-medium">
                  <div className="flex flex-col items-center">
                    <Truck className="w-4 h-4 text-pink-600 mb-1" />
                    <span>Nationwide Delivery</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-4 h-4 text-pink-600 mb-1" />
                    <span>100% Original</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RefreshCw className="w-4 h-4 text-pink-600 mb-1" />
                    <span>7 Days Exchange</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
