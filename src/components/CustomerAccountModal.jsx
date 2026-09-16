import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { User, Package, MapPin, Phone, Mail, X, CheckCircle2, Clock, Truck, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomerAccountModal = () => {
  const {
    isCustomerAccountOpen,
    setIsCustomerAccountOpen,
    customerProfile,
    saveCustomerProfile,
    orders,
    setOrderReceipt,
    setIsCheckoutOpen,
    showToast
  } = useShop();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'profile'
  const [profileForm, setProfileForm] = useState(() => ({
    fullName: customerProfile?.fullName || '',
    phone: customerProfile?.phone || '',
    email: customerProfile?.email || '',
    address: customerProfile?.address || '',
    city: customerProfile?.city || 'Lahore'
  }));

  if (!isCustomerAccountOpen) return null;

  const handleProfileSave = (e) => {
    e.preventDefault();
    saveCustomerProfile(profileForm);
    if (showToast) showToast('✅ Customer profile saved! Addresses will now auto-fill at checkout.');
  };

  // Filter orders matching customer's phone or show all placed orders from this browser
  const customerOrders = orders.filter((o) => {
    if (!profileForm.phone) return true;
    const cleanP = profileForm.phone.replace(/[^0-9]/g, '');
    const orderP = (o.customer?.phone || '').replace(/[^0-9]/g, '');
    return cleanP === '' || orderP.includes(cleanP) || cleanP.includes(orderP);
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-poppins">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-pink-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 text-black rounded-2xl flex items-center justify-center shadow-inner">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-pink-600 uppercase tracking-widest block">
                  CUSTOMER DASHBOARD
                </span>
                <h3 className="text-xl font-extrabold text-neutral-950 uppercase font-poppins">
                  MY ACCOUNT &amp; ORDERS
                </h3>
              </div>
            </div>
            <button
              onClick={() => setIsCustomerAccountOpen(false)}
              className="text-gray-400 hover:text-neutral-950 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Tabs */}
          <div className="flex gap-2 border-b border-gray-100 pb-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'orders'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Package className="w-4 h-4 text-amber-400" />
              <span>My Orders ({customerOrders.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'profile'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Shipping Profile</span>
            </button>
          </div>

          {/* TAB 1: CUSTOMER ORDERS LIST */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {customerOrders.length > 0 ? (
                <div className="space-y-3">
                  {customerOrders.map((o) => (
                    <div
                      key={o.orderId}
                      className="p-4 bg-pink-50/50 rounded-2xl border border-pink-100 hover:border-pink-200 transition-all space-y-3"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <div>
                          <span className="text-xs font-extrabold text-neutral-950">{o.orderId}</span>
                          <span className="text-[11px] text-gray-500 block">{o.date} &bull; {o.items?.length || 1} Item(s)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                              o.status === 'Delivered'
                                ? 'bg-emerald-100 text-emerald-800'
                                : o.status === 'Dispatched'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {o.status || 'Pending'}
                          </span>
                          <button
                            onClick={() => {
                              setOrderReceipt(o);
                              setIsCustomerAccountOpen(false);
                            }}
                            className="p-1.5 bg-white hover:bg-pink-100 text-neutral-950 rounded-lg border border-pink-200 transition-colors"
                            title="View Receipt"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Items mini list */}
                      <div className="divide-y divide-pink-100/60 bg-white p-2.5 rounded-xl border border-pink-100 text-xs">
                        {o.items?.map((it, idx) => (
                          <div key={idx} className="py-1.5 flex items-center justify-between">
                            <span className="font-semibold text-gray-800 truncate max-w-xs">{it.product.title}</span>
                            <span className="font-extrabold text-neutral-950">Rs. {(it.product.price * it.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-xs pt-1">
                        <span className="text-gray-500 font-semibold">Payment: <strong className="text-gray-800 uppercase">{o.paymentMethod}</strong></span>
                        <span className="text-sm font-black text-pink-600">Total: Rs. {o.total.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500 space-y-2">
                  <Package className="w-10 h-10 mx-auto text-gray-400" />
                  <p className="text-xs font-semibold">No past orders found on this device.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SHIPPING PROFILE & FAST CHECKOUT */}
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSave} className="space-y-4 text-xs font-semibold">
              <div className="bg-pink-50 p-3.5 rounded-2xl border border-pink-100 text-[11px] text-black leading-relaxed">
                💡 <strong>Auto-Fill Feature:</strong> Save your details once, and your name, phone, and delivery address will be filled automatically every time you checkout!
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={profileForm.fullName}
                  onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                  placeholder="e.g. Ayesha Khan"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    placeholder="0300-1234567"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">Delivery Street Address</label>
                <input
                  type="text"
                  required
                  value={profileForm.address}
                  onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                  placeholder="House #, Street, Phase, Area"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 focus:bg-white focus:border-pink-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase mb-1">City</label>
                <select
                  value={profileForm.city}
                  onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-gray-900 font-bold focus:bg-white focus:border-pink-600"
                >
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white py-3 rounded-xl font-extrabold uppercase tracking-wider transition-all shadow-lg"
              >
                Save My Details
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
