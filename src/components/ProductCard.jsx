import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct, setIsCartOpen } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(() => (product.sizes ? product.sizes[0] : ''));
  const [selectedColor, setSelectedColor] = useState(() => (product.colors ? product.colors[0] : ''));

  const isWishlisted = wishlist.includes(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize);
    setIsCartOpen(true);
  };

  const handleShareWhatsApp = (e) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}#product=${product.id}`;
    const text = `Check out *${product.title}* at Stylish Shoes & Bags for Rs. ${product.price.toLocaleString()}!\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
      onClick={() => setQuickViewProduct(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            if (e.target.dataset.triedFallback) return;
            e.target.dataset.triedFallback = 'true';
            e.target.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800';
          }}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {(!product.inStock || product.stockCount <= 0) ? (
            <span className="bg-red-600 text-white text-[8px] sm:text-[10px] font-black tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md animate-pulse">
              SOLD OUT
            </span>
          ) : product.isNew ? (
            <span className="bg-neutral-950 text-white text-[8px] sm:text-[10px] font-black tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs">
              NEW
            </span>
          ) : null}

          {product.inStock && product.stockCount <= 5 && product.stockCount > 0 && (
            <span className="bg-amber-500 text-white text-[8px] sm:text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full shadow-xs">
              {product.stockCount} LEFT
            </span>
          )}
        </div>

        {/* Top Right Action Buttons (Wishlist & WhatsApp Share) */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 shadow-md ${
              isWishlisted
                ? 'bg-pink-600 text-white scale-110'
                : 'bg-white text-gray-700 hover:bg-white hover:text-pink-600 hover:scale-110'
            }`}
            aria-label="Wishlist"
            title="Add to Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="p-1.5 sm:p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-md hover:scale-110"
            aria-label="Share on WhatsApp"
            title="Share on WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Desktop Hover Quick Actions Bar */}
        <div className="hidden md:flex absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex-1 bg-white hover:bg-pink-50 text-neutral-950 text-xs font-extrabold py-2 px-3 rounded-xl shadow transition-all duration-200 flex items-center justify-center gap-1.5 uppercase tracking-wider"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock || product.stockCount <= 0}
            className="bg-neutral-950 hover:bg-pink-600 disabled:bg-gray-400 text-white p-2.5 rounded-xl shadow transition-all duration-200 flex items-center gap-1 font-bold text-xs"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-grow space-y-2 font-poppins">
        <div>
          {/* Subcategory & Rating */}
          <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">
            <span className="truncate pr-1">{product.subcategory || product.category}</span>
            <div className="flex items-center gap-0.5 text-amber-500 flex-shrink-0">
              <Star className="w-3 h-3 fill-amber-400 stroke-none" />
              <span className="font-bold text-gray-700">{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-xs sm:text-sm font-extrabold text-neutral-950 group-hover:text-pink-600 transition-colors duration-200 line-clamp-1 leading-snug">
            {product.title}
          </h4>

          {/* Interactive Size Selector Pills */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-1.5" onClick={(e) => e.stopPropagation()}>
              <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex justify-between items-center">
                <span>Size: <strong className="text-pink-600 font-extrabold">{selectedSize || 'Choose'}</strong></span>
              </div>
              <div className="flex flex-wrap gap-1">
                {product.sizes.slice(0, 4).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(sz);
                    }}
                    className={`px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black rounded-md transition-all border ${
                      selectedSize === sz
                        ? 'bg-neutral-950 text-white border-black shadow-xs ring-1 ring-pink-500'
                        : 'bg-pink-50/50 text-gray-700 border-gray-200 hover:border-pink-500'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
                {product.sizes.length > 4 && (
                  <span className="text-[9px] text-gray-400 self-center font-bold">
                    +{product.sizes.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Add/Select Action */}
        <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs sm:text-sm font-black text-neutral-950 font-poppins">
            Rs. {product.price.toLocaleString()}
          </span>
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock || product.stockCount <= 0}
            className={`w-full sm:w-auto text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-1.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 ${
              (!product.inStock || product.stockCount <= 0)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-neutral-950 hover:bg-pink-600 text-white'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>{(!product.inStock || product.stockCount <= 0) ? 'Sold Out' : 'Add'}</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};
