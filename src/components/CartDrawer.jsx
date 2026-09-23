import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    products,
    updateCartQuantity,
    removeFromCart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    amountForFreeShipping,
    freeShippingThreshold,
    applyPromoCode,
    appliedPromo,
    removePromoCode,
    setIsCheckoutOpen,
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    if (e) e.preventDefault();
    const trimmed = promoInput.trim();
    if (!trimmed) {
      setPromoError('⚠️ Please enter a promo code first.');
      return;
    }
    const res = applyPromoCode(trimmed);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          {/* Slide-in Drawer Window */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-neutral-950 text-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-pink-500" />
                <h2 className="text-lg font-black uppercase tracking-wider font-poppins">
                  YOUR SHOPPING BAG ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-pink-50/80 p-4 border-b border-pink-100 text-xs">
              {amountForFreeShipping > 0 ? (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-gray-800 font-medium">
                    <Truck className="w-4 h-4 text-pink-600" />
                    <span>
                      Add <strong className="text-neutral-950 font-black">Rs. {amountForFreeShipping.toLocaleString()}</strong> more to qualify for <strong className="text-pink-600 font-black">FREE SHIPPING</strong>!
                    </span>
                  </div>
                  <div className="w-full h-2 bg-pink-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-600 to-rose-500 transition-all duration-500 rounded-full"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>CONGRATULATIONS! YOU QUALIFY FOR FREE NATIONWIDE SHIPPING!</span>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-gray-400 space-y-3">
                  <ShoppingBag className="w-16 h-16 text-gray-300 stroke-1" />
                  <p className="text-base font-bold text-gray-700 uppercase tracking-wider">
                    Your Shopping Bag is Empty
                  </p>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Explore our latest collection of premium footwear and handcrafted bags.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 bg-neutral-950 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors shadow"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {cart.map((item) => {
                    const itemKey = `${item.product.id}-${item.selectedColor || 'std'}-${item.selectedSize || 'std'}`;
                    return (
                      <motion.div
                        key={itemKey}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0, padding: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.22 }}
                        className="flex gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-200/90 relative group shadow-2xs"
                      >
                        {/* Item Thumbnail */}
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-20 h-20 object-cover rounded-xl border border-gray-200 bg-white shrink-0"
                        />

                        {/* Item Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 line-clamp-1">
                              {item.product.title}
                            </h4>
                            <div className="text-[11px] text-gray-500 mt-0.5 space-x-2">
                              {item.selectedColor && <span>Color: <strong>{item.selectedColor}</strong></span>}
                              {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                            </div>
                            {(() => {
                              const liveProd = products.find((p) => p.id === item.product.id) || item.product;
                              const liveStock = liveProd.stockCount !== undefined ? liveProd.stockCount : 15;
                              if (liveStock <= 3) {
                                return (
                                  <span className="text-[10px] text-amber-700 font-bold block mt-1">
                                    ⚠️ Only {liveStock} left in stock!
                                  </span>
                                );
                              }
                              return null;
                            })()}
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity controls */}
                            <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                              <button
                                onClick={() =>
                                  updateCartQuantity(item.product.id, item.selectedColor, item.selectedSize, -1)
                                }
                                className="px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-100 font-bold cursor-pointer transition-colors"
                              >
                                -
                              </button>
                              <span className="px-2.5 py-1 text-xs font-bold text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateCartQuantity(item.product.id, item.selectedColor, item.selectedSize, 1)
                                }
                                className="px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-100 font-bold cursor-pointer transition-colors"
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <span className="text-xs font-black text-neutral-950 font-poppins">
                              Rs. {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Delete Item Button */}
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer self-start"
                          title="Remove from Shopping Bag"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-gray-200 bg-white space-y-4">
                {/* Promo Code Input */}
                <div className="space-y-2">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${promoError ? 'text-red-500' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. STYLISH10)"
                        value={promoInput}
                        onChange={(e) => {
                          setPromoInput(e.target.value);
                          if (promoError) setPromoError('');
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-xs border rounded-xl uppercase font-bold tracking-wider transition-all focus:outline-none ${
                          promoError
                            ? 'border-red-500 bg-red-50/60 text-red-900 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-200 focus:border-pink-600 focus:ring-2 focus:ring-pink-100'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-neutral-950 hover:bg-pink-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Inline Error for Fake/Invalid Promo Codes */}
                  {promoError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 p-2.5 bg-red-50 border border-red-200 rounded-xl text-[11px] text-red-700 font-bold"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{promoError}</span>
                    </motion.div>
                  )}

                  {appliedPromo && (
                    <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200 font-medium">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Promo Applied: <strong className="text-emerald-950 font-black">{appliedPromo}</strong></span>
                      </span>
                      <button
                        type="button"
                        onClick={removePromoCode}
                        className="text-[10px] font-extrabold text-red-600 hover:text-red-800 hover:underline uppercase cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Subtotal calculations */}
                <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">Rs. {cartSubtotal.toLocaleString()}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount</span>
                      <span>- Rs. {discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shippingFee === 0 ? (
                        <strong className="text-emerald-600 uppercase">FREE</strong>
                      ) : (
                        `Rs. ${shippingFee}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-neutral-950 pt-2 border-t border-gray-200">
                    <span>TOTAL</span>
                    <span className="text-base text-neutral-950 font-black font-poppins">Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-neutral-950 hover:bg-pink-600 text-white py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-pink-400" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
