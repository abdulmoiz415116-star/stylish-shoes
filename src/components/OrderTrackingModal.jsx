import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Package, Clock, CheckCircle2, Truck, AlertCircle, X, ExternalLink, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const OrderTrackingModal = () => {
  const { isTrackingOpen, setIsTrackingOpen, orders, searchTrackingId, setSearchTrackingId } = useShop();
  const [inputQuery, setInputQuery] = useState(searchTrackingId || '');
  const [searchedOrder, setSearchedOrder] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isTrackingOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const clean = inputQuery.trim().toLowerCase();
    if (!clean) return;

    const found = orders.find(
      (o) =>
        o.orderId.toLowerCase() === clean ||
        (o.customer && o.customer.phone && o.customer.phone.replace(/[^0-9]/g, '').includes(clean.replace(/[^0-9]/g, '')))
    );

    setSearchedOrder(found || null);
    setHasSearched(true);
  };

  const getStatusStep = (status) => {
    const s = (status || '').toLowerCase();
    if (s === 'delivered') return 4;
    if (s === 'dispatched') return 3;
    if (s === 'processing') return 2;
    return 1; // Pending / Received
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-poppins">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-pink-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">LIVE ORDER TRACKING</span>
              <h3 className="text-2xl font-extrabold text-neutral-950 uppercase font-poppins">
                TRACK YOUR ORDER STATUS
              </h3>
            </div>
            <button
              onClick={() => {
                setIsTrackingOpen(false);
                setSearchedOrder(null);
                setHasSearched(false);
              }}
              className="text-gray-400 hover:text-neutral-950 p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter Order ID (e.g. STYL-100200) or Phone #"
                className="w-full bg-gray-50 border border-gray-200 pl-11 pr-4 py-3 rounded-xl text-sm font-semibold text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-colors shadow"
            >
              TRACK
            </button>
          </form>

          {/* Search Result */}
          {hasSearched && (
            <div>
              {searchedOrder ? (
                <div className="space-y-6 bg-pink-50/50 p-5 rounded-2xl border border-pink-100">
                  {/* Summary Banner */}
                  <div className="flex flex-wrap justify-between items-center gap-2 border-b border-pink-200/60 pb-3">
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Order Reference</div>
                      <div className="text-lg font-black text-neutral-950">{searchedOrder.orderId}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 font-medium">Order Date</div>
                      <div className="text-sm font-bold text-gray-800">{searchedOrder.date}</div>
                    </div>
                  </div>

                  {/* Status Timeline */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold text-neutral-950 uppercase tracking-wider">Live Status Timeline</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2">
                      {/* Step 1: Pending */}
                      <div
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                          getStatusStep(searchedOrder.status) >= 1
                            ? 'bg-black text-white border-black shadow'
                            : 'bg-gray-100 text-gray-400 border-gray-200'
                        }`}
                      >
                        <Clock className="w-4 h-4 text-pink-400" />
                        <span className="text-[10px] font-extrabold uppercase">1. Received</span>
                      </div>

                      {/* Step 2: Processing */}
                      <div
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                          getStatusStep(searchedOrder.status) >= 2
                            ? 'bg-black text-white border-black shadow'
                            : 'bg-gray-100 text-gray-400 border-gray-200'
                        }`}
                      >
                        <Package className="w-4 h-4 text-amber-400" />
                        <span className="text-[10px] font-extrabold uppercase">2. Processing</span>
                      </div>

                      {/* Step 3: Dispatched */}
                      <div
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                          getStatusStep(searchedOrder.status) >= 3
                            ? 'bg-black text-white border-black shadow'
                            : 'bg-gray-100 text-gray-400 border-gray-200'
                        }`}
                      >
                        <Truck className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-extrabold uppercase">3. Dispatched</span>
                      </div>

                      {/* Step 4: Delivered */}
                      <div
                        className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                          getStatusStep(searchedOrder.status) >= 4
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                            : 'bg-gray-100 text-gray-400 border-gray-200'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                        <span className="text-[10px] font-extrabold uppercase">4. Delivered</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="bg-white p-4 rounded-xl border border-pink-100 space-y-1.5 text-xs text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Customer Name:</span>
                      <strong className="text-neutral-950">{searchedOrder.customer?.fullName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Phone:</span>
                      <strong className="text-neutral-950">{searchedOrder.customer?.phone}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">City & Address:</span>
                      <strong className="text-neutral-950 text-right">{searchedOrder.customer?.address}, {searchedOrder.customer?.city}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Payment Option:</span>
                      <strong className="text-neutral-950 uppercase">{searchedOrder.paymentMethod}</strong>
                    </div>
                    {searchedOrder.jazzcashTid && (
                      <div className="flex justify-between text-pink-600">
                        <span>JazzCash TID:</span>
                        <strong className="font-mono">{searchedOrder.jazzcashTid}</strong>
                      </div>
                    )}
                  </div>

                  {/* Items */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-gray-700 uppercase">Ordered Items:</h5>
                    <div className="space-y-2 max-h-36 overflow-y-auto">
                      {searchedOrder.items?.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-gray-200 text-xs">
                          <div className="font-semibold text-gray-900">{item.product?.title || 'Product'}</div>
                          <div className="text-gray-500">
                            {item.selectedSize} | Qty: {item.quantity} | <strong>Rs. {(item.product?.price * item.quantity).toLocaleString()}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total & WhatsApp Query */}
                  <div className="flex justify-between items-center pt-2 border-t border-pink-200">
                    <div className="text-sm font-extrabold text-neutral-950">
                      Total: Rs. {searchedOrder.total?.toLocaleString()}
                    </div>
                    <a
                      href={`https://wa.me/923255964412?text=${encodeURIComponent(`Assalam-o-Alaikum! I want to inquire about my order ID: *${searchedOrder.orderId}*.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>WhatsApp Support</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-red-50 rounded-2xl border border-red-100 text-red-700 space-y-2">
                  <AlertCircle className="w-8 h-8 mx-auto text-red-500" />
                  <h4 className="font-extrabold text-sm uppercase">No Order Found</h4>
                  <p className="text-xs text-red-600">
                    No order matched ID "{inputQuery}". Please check your order ID from your WhatsApp confirmation receipt or phone number.
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
