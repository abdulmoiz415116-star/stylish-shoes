import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, CheckCircle, Truck, CreditCard, Sparkles, Send, Copy, ExternalLink, X, Package, Printer, Download, Tag, AlertCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { printOrderInvoice } from '../utils/printInvoice';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    products,
    cartSubtotal,
    shippingFee,
    cartTotal,
    discountAmount,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    clearCart,
    orderReceipt,
    setOrderReceipt,
    addOrder,
    showToast,
    customerProfile,
    saveCustomerProfile,
    setIsCustomerAccountOpen,
    setCustomerAccountTab
  } = useShop();

  const [checkoutPromoInput, setCheckoutPromoInput] = useState('');
  const [checkoutPromoError, setCheckoutPromoError] = useState('');

  const handleApplyCheckoutPromo = (e) => {
    if (e) e.preventDefault();
    const trimmed = checkoutPromoInput.trim();
    if (!trimmed) {
      setCheckoutPromoError('⚠️ Please enter a promo code.');
      return;
    }
    const res = applyPromoCode(trimmed);
    if (!res.success) {
      setCheckoutPromoError(res.message);
    } else {
      setCheckoutPromoError('');
      setCheckoutPromoInput('');
    }
  };

  const [formData, setFormData] = useState(() => ({
    fullName: customerProfile?.fullName || '',
    phone: customerProfile?.phone || '',
    address: customerProfile?.address || '',
    city: customerProfile?.city || 'Lahore',
    notes: '',
    paymentMethod: 'cod', // 'cod', 'jazzcash'
    jazzcashTid: ''
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen && !orderReceipt) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      if (showToast) showToast('⚠️ Please enter your full name (at least 3 characters)');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 13) {
      if (showToast) showToast('⚠️ Please enter a valid 11-digit mobile number (e.g. 0300-1234567)');
      return;
    }

    if (!formData.address.trim() || formData.address.trim().length < 5) {
      if (showToast) showToast('⚠️ Please provide complete delivery address');
      return;
    }

    // Check every item in cart against current live warehouse stock
    for (const item of cart) {
      const liveProd = products.find((p) => p.id === item.product.id) || item.product;
      const liveStock = liveProd.stockCount !== undefined ? liveProd.stockCount : 15;
      if (!liveProd.inStock || liveStock <= 0) {
        if (showToast) showToast(`❌ "${liveProd.title}" is now Out of Stock! Please remove it to proceed.`);
        return;
      }
      if (item.quantity > liveStock) {
        if (showToast) showToast(`❌ Only ${liveStock} pair(s) available for "${liveProd.title}"! You have ${item.quantity} in order.`);
        return;
      }
    }

    setIsSubmitting(true);

    const generatedOrderId = `STYL-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    const newOrderObj = {
      orderId: generatedOrderId,
      date: orderDate,
      customer: { ...formData },
      items: [...cart],
      paymentMethod: formData.paymentMethod,
      jazzcashTid: formData.jazzcashTid,
      subtotal: cartSubtotal,
      discount: discountAmount,
      shippingFee: shippingFee,
      total: cartTotal,
      status: 'Pending'
    };

    // Construct Formatted WhatsApp Message for 03255964412
    let whatsappMsg = `🛍️ *NEW ORDER RECEIVED - STYLISH SHOES & BAGS*\n\n`;
    whatsappMsg += `🆔 *Order ID:* ${generatedOrderId}\n`;
    whatsappMsg += `📅 *Date:* ${orderDate}\n`;
    whatsappMsg += `👤 *Customer Name:* ${formData.fullName}\n`;
    whatsappMsg += `📞 *Phone Number:* ${formData.phone}\n`;
    whatsappMsg += `📍 *Delivery Address:* ${formData.address}, ${formData.city}\n`;
    whatsappMsg += `💳 *Payment Method:* CASH ON DELIVERY (COD)\n`;
    whatsappMsg += `\n📦 *ORDERED ITEMS (${cart.reduce((a, b) => a + b.quantity, 0)}):*\n`;

    cart.forEach((item, index) => {
      whatsappMsg += `${index + 1}. *${item.product.title}*\n`;
      whatsappMsg += `   • Size: ${item.selectedSize || 'N/A'} | Color: ${item.selectedColor || 'Standard'} | Qty: ${item.quantity}\n`;
      whatsappMsg += `   • Price: Rs. ${(item.product.price * item.quantity).toLocaleString()}\n`;
      if (item.product.image) {
        whatsappMsg += `   • 📷 Photo: ${item.product.image}\n`;
      }
    });

    whatsappMsg += `\n💰 *Subtotal:* Rs. ${cartSubtotal.toLocaleString()}\n`;
    if (discountAmount > 0) {
      whatsappMsg += `🏷️ *Discount:* -Rs. ${discountAmount.toLocaleString()}\n`;
    }
    whatsappMsg += `🚚 *Shipping Fee:* ${shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}\n`;
    whatsappMsg += `💵 *TOTAL PAYABLE:* Rs. ${cartTotal.toLocaleString()}\n\n`;
    whatsappMsg += `Thank you for shopping with Stylish Shoes & Bags! Step Into Style.`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    const whatsappUrl = `https://wa.me/923255964412?text=${encodedMsg}`;

    // Add order to global state & deduct inventory stock automatically
    addOrder(newOrderObj);
    
    // Save order ID to local device memory so it instantly appears under "My Orders"
    try {
      const existingIds = JSON.parse(localStorage.getItem('stylish_my_order_ids') || '[]');
      if (!existingIds.includes(generatedOrderId)) {
        existingIds.unshift(generatedOrderId);
        localStorage.setItem('stylish_my_order_ids', JSON.stringify(existingIds));
      }
    } catch {}

    // Save profile for fast future checkout
    saveCustomerProfile({
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city
    });

    // Set order receipt with whatsapp url and message
    setOrderReceipt({ ...newOrderObj, whatsappUrl, rawMsg: whatsappMsg });

    // Clear active shopping cart
    clearCart();
    setIsSubmitting(false);

    if (showToast) {
      showToast(`🎉 Order ${generatedOrderId} Confirmed!`);
    }

    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // If blocked, receipt modal provides one-click resend button
    }
  };

  const copyReceiptToClipboard = () => {
    if (!orderReceipt || !orderReceipt.rawMsg) return;
    navigator.clipboard.writeText(orderReceipt.rawMsg);
    if (showToast) {
      showToast('📋 Order details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-poppins">
      <AnimatePresence>
        {/* Order Receipt Screen */}
        {orderReceipt ? (
          <motion.div
            id="printable-receipt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5 border border-pink-100 max-h-[90vh] overflow-y-auto font-poppins"
          >
            {/* Header Success Status */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ORDER CONFIRMED &amp; DISPATCHED
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-950 uppercase mt-1">
                THANK YOU FOR YOUR ORDER!
              </h3>
              <p className="text-xs text-gray-500">
                Order Tracking ID: <strong className="text-neutral-950 font-bold">{orderReceipt.orderId}</strong> &bull; {orderReceipt.date}
              </p>
            </div>

            {/* WhatsApp Notification Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 space-y-1.5 font-medium no-print">
              <div className="flex items-center gap-2 font-extrabold text-emerald-700 text-sm">
                <Send className="w-4 h-4" />
                <span>WhatsApp Order Alert Dispatch (+92 325 5964412)</span>
              </div>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                Your order has been recorded in our system and sent to WhatsApp with complete product photos and details.
              </p>
            </div>

            {/* Customer Information Summary */}
            <div className="bg-pink-50/70 p-4 rounded-2xl border border-pink-100 text-xs space-y-2">
              <h4 className="font-extrabold text-neutral-950 uppercase tracking-wider text-[11px] border-b border-pink-200/60 pb-1 flex items-center gap-1.5">
                <span>👤 Customer Details</span>
              </h4>
              <div className="flex justify-between text-gray-700">
                <span className="text-gray-500">Name:</span>
                <span className="font-bold text-neutral-950">{orderReceipt.customer.fullName}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="text-gray-500">WhatsApp Phone:</span>
                <span className="font-bold text-neutral-950">{orderReceipt.customer.phone}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="text-gray-500">Address:</span>
                <span className="font-bold text-neutral-950 text-right">{orderReceipt.customer.address}, {orderReceipt.customer.city}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="text-gray-500">Payment Method:</span>
                <span className="font-bold text-neutral-950 uppercase">{orderReceipt.paymentMethod === 'jazzcash' ? 'JAZZCASH MANUAL' : 'CASH ON DELIVERY'}</span>
              </div>
              {orderReceipt.jazzcashTid && (
                <div className="flex justify-between text-pink-600">
                  <span className="text-gray-500">JazzCash TID:</span>
                  <span className="font-mono font-extrabold">{orderReceipt.jazzcashTid}</span>
                </div>
              )}
            </div>

            {/* ITEMIZED ORDERED ITEMS RECEIPT */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-3">
              <h4 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px] border-b border-gray-200 pb-1.5 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-pink-600" />
                <span>Ordered Items ({orderReceipt.items ? orderReceipt.items.reduce((a, b) => a + b.quantity, 0) : 0})</span>
              </h4>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                {orderReceipt.items && orderReceipt.items.length > 0 ? (
                  orderReceipt.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                      {item.product && item.product.image && (
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-14 h-14 object-cover rounded-xl border border-gray-200 bg-white flex-shrink-0 shadow-xs"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-gray-900 line-clamp-1 text-xs">
                          {item.product ? item.product.title : 'Item'}
                        </h5>
                        <div className="text-[10px] text-gray-500 space-x-2">
                          <span>Size: <strong>{item.selectedSize}</strong></span>
                          <span>Color: <strong>{item.selectedColor}</strong></span>
                          <span>Qty: <strong>{item.quantity}</strong></span>
                        </div>
                      </div>
                      <div className="text-right font-extrabold text-neutral-950 text-xs">
                        Rs. {(item.product ? item.product.price * item.quantity : 0).toLocaleString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center text-xs">Order details recorded.</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 pt-2 space-y-1 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">Rs. {orderReceipt.subtotal ? orderReceipt.subtotal.toLocaleString() : orderReceipt.total.toLocaleString()}</span>
                </div>
                {orderReceipt.discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount:</span>
                    <span>- Rs. {orderReceipt.discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span className="font-bold text-emerald-700">
                    {orderReceipt.shippingFee === 0 ? 'FREE' : `Rs. ${orderReceipt.shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-neutral-950 border-t border-gray-300 pt-2">
                  <span>TOTAL AMOUNT:</span>
                  <span className="text-base text-pink-600">Rs. {orderReceipt.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 no-print">
              <a
                href={orderReceipt.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open WhatsApp / Resend Message</span>
              </a>

              {/* 🖨️ Print & PDF Download Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => printOrderInvoice(orderReceipt)}
                  className="w-full bg-black hover:bg-pink-700 text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-white" />
                  <span>Print Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={() => printOrderInvoice(orderReceipt)}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={copyReceiptToClipboard}
                  className="flex-1 bg-pink-100 hover:bg-pink-200 text-neutral-950 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOrderReceipt(null);
                    setIsCheckoutOpen(false);
                    if (typeof setCustomerAccountTab === 'function') setCustomerAccountTab('orders');
                    setIsCustomerAccountOpen(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-neutral-950 to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <Package className="w-3.5 h-3.5 text-amber-300" />
                  <span>View in My Orders</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOrderReceipt(null);
                    setIsCheckoutOpen(false);
                  }}
                  className="flex-1 bg-black hover:bg-pink-700 text-white py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Checkout Form Screen */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-pink-100 font-poppins max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">CHECKOUT &amp; WHATSAPP CONFIRMATION</span>
                <h3 className="text-xl font-extrabold text-neutral-950 uppercase font-poppins">
                  SHIPPING &amp; PAYMENT DETAILS
                </h3>
              </div>
              <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-400 hover:text-neutral-950">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-neutral-950 uppercase mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your complete name"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-950 uppercase mb-1">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0300-1234567"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-950 uppercase mb-1">City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none font-bold"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-950 uppercase mb-1">Complete Delivery Address *</label>
                <textarea
                  rows={2}
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House #, Street #, Sector / Area Name"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none transition-all font-medium"
                />
              </div>

              {/* Payment Method (100% Cash On Delivery Only) */}
              <div className="space-y-2">
                <label className="block font-bold text-neutral-950 uppercase">Payment Method</label>
                <div className="p-4 rounded-2xl border-2 border-emerald-400 bg-emerald-50/80 text-neutral-950 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Truck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-emerald-950 flex items-center gap-1.5">
                      <span>Cash On Delivery (COD)</span>
                      <span className="bg-emerald-200 text-emerald-900 text-[9px] font-black px-2 py-0.5 rounded-full">Active</span>
                    </span>
                    <span className="text-[11px] text-gray-600 font-medium block mt-0.5">
                      Pay cash upon delivery at your doorstep across Pakistan. No advance payment required.
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code Input in Checkout */}
              <div className="space-y-2 bg-neutral-50/80 p-3.5 rounded-2xl border border-neutral-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-pink-600" />
                    <span>Have a Promo Code?</span>
                  </span>
                  {appliedPromo && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </div>

                {!appliedPromo ? (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Enter Promo Code (e.g. STYLISH10)"
                          value={checkoutPromoInput}
                          onChange={(e) => {
                            setCheckoutPromoInput(e.target.value);
                            if (checkoutPromoError) setCheckoutPromoError('');
                          }}
                          className={`w-full px-3 py-2 text-xs border rounded-xl uppercase font-bold tracking-wider transition-all focus:outline-none ${
                            checkoutPromoError
                              ? 'border-red-500 bg-red-50/60 text-red-900 focus:ring-2 focus:ring-red-200'
                              : 'border-neutral-200 focus:border-pink-600 bg-white'
                          }`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleApplyCheckoutPromo}
                        className="bg-neutral-950 hover:bg-pink-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Inline Error for Fake/Invalid Promo Code */}
                    {checkoutPromoError && (
                      <div className="flex items-start gap-2 p-2.5 bg-red-50 border border-red-200 rounded-xl text-[11px] text-red-700 font-bold">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{checkoutPromoError}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Code <strong>{appliedPromo}</strong> applied (-Rs. {discountAmount.toLocaleString()})</span>
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

              {/* Order Summary Box */}
              <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-100 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount ({appliedPromo}):</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee:</span>
                  <span>{shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-neutral-950 border-t border-pink-200 pt-2">
                  <span>Total Payable:</span>
                  <span>Rs. {cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-black via-neutral-950 to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM ORDER &amp; SEND TO WHATSAPP (03255964412)</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
