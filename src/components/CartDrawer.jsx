import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
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
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
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
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-clive-dark text-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-clive-gold" />
                <h2 className="text-lg font-bold uppercase tracking-wider font-poppins">
                  YOUR SHOPPING BAG ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-clive-cream p-4 border-b border-gray-200 text-xs">
              {amountForFreeShipping > 0 ? (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                    <Truck className="w-4 h-4 text-clive-gold" />
                    <span>
                      Add <strong className="text-clive-dark font-bold">Rs. {amountForFreeShipping.toLocaleString()}</strong> more to qualify for <strong className="text-clive-gold font-bold">FREE SHIPPING</strong>!
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-clive-gold transition-all duration-500 rounded-full"
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
                    className="mt-4 bg-clive-dark text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-clive-gold transition-colors shadow"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}
                    className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100 relative group"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-20 h-20 object-cover rounded border border-gray-200 bg-white"
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
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-gray-300 rounded bg-white overflow-hidden">
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedColor, item.selectedSize, -1)
                            }
                            className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-bold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedColor, item.selectedSize, 1)
                            }
                            className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 font-bold"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-xs font-bold text-clive-dark font-poppins">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Delete Item Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-gray-200 bg-white space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo Code (e.g. CLIVE10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded uppercase font-semibold focus:outline-none focus:border-clive-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-clive-gold text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {promoError && <p className="text-[11px] text-red-500 font-medium">{promoError}</p>}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2 rounded border border-emerald-200">
                    <span>Promo Applied: <strong>{appliedPromo}</strong></span>
                    <button
                      onClick={removePromoCode}
                      className="text-[10px] font-bold text-emerald-900 hover:underline uppercase"
                    >
                      Remove
                    </button>
                  </div>
                )}

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
                  <div className="flex justify-between text-sm font-extrabold text-clive-dark pt-2 border-t border-gray-200">
                    <span>TOTAL</span>
                    <span className="text-base text-clive-dark font-poppins">Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-clive-dark hover:bg-clive-gold text-white py-3.5 px-4 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200 shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
