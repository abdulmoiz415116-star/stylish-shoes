import React from 'react';
import {
  BarChart3,
  Calendar,
  PieChart,
  AlertTriangle,
  DollarSign,
  Printer,
  CheckCircle,
  Clock,
  Truck,
  XCircle,
  Sparkles
} from 'lucide-react';

export const AdminReportsView = ({
  activeReportSubTab,
  setActiveReportSubTab,
  monthlyReportData,
  salesReportData,
  outOfStockReportData,
  incomeReportData,
  handleQuickRestock,
  getProductUnitLabel
}) => {
  return (
    <div className="space-y-6">
      {/* Subtab Navigation Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveReportSubTab('monthly')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeReportSubTab === 'monthly'
                ? 'bg-neutral-950 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Calendar className="w-4 h-4 text-pink-500" />
            ماہانہ رپورٹ (Monthly Report)
          </button>

          <button
            onClick={() => setActiveReportSubTab('sales')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeReportSubTab === 'sales'
                ? 'bg-neutral-950 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-pink-500" />
            سیلز رپورٹ (Sales Report)
          </button>

          <button
            onClick={() => setActiveReportSubTab('out-of-stock')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeReportSubTab === 'out-of-stock'
                ? 'bg-neutral-950 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            اسٹاک ختم رپورٹ (Out-of-Stock)
            {outOfStockReportData.totalAlerts > 0 && (
              <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                {outOfStockReportData.totalAlerts}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveReportSubTab('income')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeReportSubTab === 'income'
                ? 'bg-neutral-950 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <DollarSign className="w-4 h-4 text-emerald-500" />
            آمدنی و منافع رپورٹ (Income Report)
          </button>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 text-pink-800 hover:bg-pink-100 font-bold text-xs uppercase tracking-wider border border-pink-200 transition-colors"
        >
          <Printer className="w-4 h-4" />
          پرنٹ رپورٹ (Print)
        </button>
      </div>

      {/* 1. MONTHLY REPORT */}
      {activeReportSubTab === 'monthly' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Total Active Months</span>
              <p className="text-2xl font-black text-gray-900">{monthlyReportData.length} Months</p>
              <span className="text-[11px] text-gray-400 mt-1 block">Recording order transactions</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Lifetime Gross Bookings</span>
              <p className="text-2xl font-black text-pink-700">
                Rs. {monthlyReportData.reduce((s, m) => s + m.grossRevenue, 0).toLocaleString()}
              </p>
              <span className="text-[11px] text-emerald-600 font-bold mt-1 block">All recorded months</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Realized Cash (Delivered)</span>
              <p className="text-2xl font-black text-emerald-700">
                Rs. {monthlyReportData.reduce((s, m) => s + m.deliveredRevenue, 0).toLocaleString()}
              </p>
              <span className="text-[11px] text-gray-500 mt-1 block">Successfully received cash</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Total Items Shipped</span>
              <p className="text-2xl font-black text-indigo-700">
                {monthlyReportData.reduce((s, m) => s + m.itemsSold, 0).toLocaleString()} Units
              </p>
              <span className="text-[11px] text-gray-500 mt-1 block">Shoes & Handbags sold</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase">ماہانہ کارکردگی کا جدول (Monthly Performance Breakdown)</h3>
                <p className="text-xs text-gray-500">Comprehensive breakdown of all orders, gross volume and net realized sales per month.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 font-extrabold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Month / Period</th>
                    <th className="p-4">Total Orders</th>
                    <th className="p-4">Items Sold</th>
                    <th className="p-4">Gross Revenue</th>
                    <th className="p-4">Discounts Given</th>
                    <th className="p-4">Cash Realized</th>
                    <th className="p-4">Avg Order Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {monthlyReportData.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="p-8 text-center text-gray-400 font-medium">
                        No orders recorded yet to compute monthly statistics.
                      </td>
                    </tr>
                  ) : (
                    monthlyReportData.map((m) => {
                      const mAvg = m.orderCount > 0 ? Math.round(m.grossRevenue / m.orderCount) : 0;
                      return (
                        <tr key={m.monthKey} className="hover:bg-pink-50/40 transition-colors">
                          <td className="p-4 font-black text-gray-900 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-pink-600" />
                            {m.label}
                          </td>
                          <td className="p-4 font-bold text-gray-900">{m.orderCount} Orders</td>
                          <td className="p-4 font-semibold text-gray-700">{m.itemsSold} Units</td>
                          <td className="p-4 font-bold text-pink-700">Rs. {m.grossRevenue.toLocaleString()}</td>
                          <td className="p-4 font-medium text-amber-600">
                            {m.discounts > 0 ? `-Rs. ${m.discounts.toLocaleString()}` : 'Rs. 0'}
                          </td>
                          <td className="p-4 font-black text-emerald-700">Rs. {m.deliveredRevenue.toLocaleString()}</td>
                          <td className="p-4 font-semibold text-gray-800">Rs. {mAvg.toLocaleString()}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. SALES REPORT */}
      {activeReportSubTab === 'sales' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-base font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-pink-600" />
              آرڈرز کی صورتحال کا جائزہ (Order Status Performance)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase">Delivered</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-2xl font-black text-emerald-900">{salesReportData.statusCounts.Delivered?.count || 0}</p>
                <p className="text-xs text-emerald-700 font-bold mt-1">
                  Rs. {(salesReportData.statusCounts.Delivered?.revenue || 0).toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-800 uppercase">Dispatched</span>
                  <Truck className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-2xl font-black text-blue-900">{salesReportData.statusCounts.Dispatched?.count || 0}</p>
                <p className="text-xs text-blue-700 font-bold mt-1">
                  Rs. {(salesReportData.statusCounts.Dispatched?.revenue || 0).toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-purple-800 uppercase">Processing</span>
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-2xl font-black text-purple-900">{salesReportData.statusCounts.Processing?.count || 0}</p>
                <p className="text-xs text-purple-700 font-bold mt-1">
                  Rs. {(salesReportData.statusCounts.Processing?.revenue || 0).toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-800 uppercase">Pending</span>
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-2xl font-black text-amber-900">{salesReportData.statusCounts.Pending?.count || 0}</p>
                <p className="text-xs text-amber-700 font-bold mt-1">
                  Rs. {(salesReportData.statusCounts.Pending?.revenue || 0).toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-800 uppercase">Cancelled</span>
                  <XCircle className="w-4 h-4 text-rose-600" />
                </div>
                <p className="text-2xl font-black text-rose-900">{salesReportData.statusCounts.Cancelled?.count || 0}</p>
                <p className="text-xs text-rose-700 font-bold mt-1">
                  Rs. {(salesReportData.statusCounts.Cancelled?.revenue || 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-base font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-pink-600" />
                کیٹیگری کے حساب سے سیلز (Sales By Category)
              </h3>
              <div className="space-y-4">
                {Object.entries(salesReportData.categorySales).map(([key, data]) => {
                  const total = salesReportData.totalItemsSold || 1;
                  const pct = Math.round((data.count / total) * 100);
                  return (
                    <div key={key} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-gray-800">{data.name}</span>
                        <span className="text-pink-700">
                          {data.count} units ({pct}%) • Rs. {data.revenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-pink-600 to-neutral-900 h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-base font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                سب سے زیادہ فروخت ہونے والی پروڈکٹس (Top Best Sellers)
              </h3>
              <div className="divide-y divide-gray-100">
                {salesReportData.topSellingProducts.length === 0 ? (
                  <p className="text-xs text-gray-400 py-6 text-center">No sales recorded yet.</p>
                ) : (
                  salesReportData.topSellingProducts.map((prod, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-800 text-xs font-black flex items-center justify-center flex-shrink-0">
                          #{idx + 1}
                        </span>
                        {prod.image && (
                          <img
                            src={prod.image}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-gray-900 truncate">{prod.title}</p>
                          <span className="text-[10px] text-gray-500 capitalize">{prod.category}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-black text-pink-700 block">{prod.quantitySold} Sold</span>
                        <span className="text-[10px] text-gray-500">Rs. {prod.revenueGenerated.toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. OUT-OF-STOCK & LOW STOCK REPORT */}
      {activeReportSubTab === 'out-of-stock' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-rose-50 p-5 rounded-2xl border border-rose-200">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                ختم شدہ اسٹاک (Completely Sold Out)
              </span>
              <p className="text-3xl font-black text-rose-900">{outOfStockReportData.soldOut.length} Items</p>
              <span className="text-[11px] text-rose-600 mt-1 block">0 units available in warehouse</span>
            </div>

            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                کم اسٹاک الرٹ (Critical Low Stock &le; 5)
              </span>
              <p className="text-3xl font-black text-amber-900">{outOfStockReportData.lowStock.length} Items</p>
              <span className="text-[11px] text-amber-600 mt-1 block">Less than or equal to 5 units left</span>
            </div>

            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                محفوظ اسٹاک (Healthy Inventory &gt; 5)
              </span>
              <p className="text-3xl font-black text-emerald-900">{outOfStockReportData.healthyStock.length} Items</p>
              <span className="text-[11px] text-emerald-600 mt-1 block">Sufficient inventory ready for dispatch</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-gray-900 uppercase flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  فوری اسٹاک شامل کریں (Restock Action Required)
                </h3>
                <p className="text-xs text-gray-500">
                  Quickly add new inventory units to sold-out and low-stock items with 1 click.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 font-extrabold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Product Details</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Current Stock</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Quick Restock Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {[...outOfStockReportData.soldOut, ...outOfStockReportData.lowStock].length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-emerald-600 font-bold">
                        🎉 Mashallah! All products in the store currently have healthy stock levels (&gt; 5 units).
                      </td>
                    </tr>
                  ) : (
                    [...outOfStockReportData.soldOut, ...outOfStockReportData.lowStock].map((item) => {
                      const stock = item.stockCount !== undefined ? item.stockCount : 15;
                      const isSoldOut = stock === 0;
                      return (
                        <tr key={item.id} className="hover:bg-pink-50/30 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt=""
                                className="w-10 h-10 rounded-xl object-cover border border-gray-200 flex-shrink-0"
                              />
                              <div>
                                <span className="font-bold text-gray-900 block">{item.title}</span>
                                <span className="text-[11px] text-gray-500 font-mono">ID: {item.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 capitalize font-semibold text-gray-700">{item.category}</td>
                          <td className="p-4 font-bold text-gray-900">Rs. {item.price?.toLocaleString()}</td>
                          <td className="p-4 font-black">
                            <span className={isSoldOut ? 'text-rose-700 text-base' : 'text-amber-700 text-base'}>
                              {stock} {getProductUnitLabel(item)}
                            </span>
                          </td>
                          <td className="p-4">
                            {isSoldOut ? (
                              <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-[10px] font-black rounded-full uppercase tracking-wider">
                                Sold Out
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-black rounded-full uppercase tracking-wider">
                                Low Stock ({stock})
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleQuickRestock(item.id, 10)}
                                className="px-3 py-1.5 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-800 text-xs font-bold transition-colors"
                              >
                                +10
                              </button>
                              <button
                                onClick={() => handleQuickRestock(item.id, 25)}
                                className="px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors"
                              >
                                +25
                              </button>
                              <button
                                onClick={() => handleQuickRestock(item.id, 50)}
                                className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition-colors"
                              >
                                +50
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. INCOME & FINANCIAL PROFIT REPORT */}
      {activeReportSubTab === 'income' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Total Booked (Gross)</span>
              <p className="text-2xl font-black text-gray-900">Rs. {incomeReportData.grossBilled.toLocaleString()}</p>
              <span className="text-[11px] text-gray-400 mt-1 block">All orders placed</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                وصول شدہ نقد (Cash Collected)
              </span>
              <p className="text-2xl font-black text-emerald-700">Rs. {incomeReportData.cashRealized.toLocaleString()}</p>
              <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">From delivered orders</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                راستے میں رقم (In Transit / Processing)
              </span>
              <p className="text-2xl font-black text-blue-700">Rs. {incomeReportData.inTransit.toLocaleString()}</p>
              <span className="text-[11px] text-blue-600 mt-1 block">Dispatched with courier</span>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-pink-950 text-white p-5 rounded-2xl shadow-lg border border-pink-900/30">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-300 block mb-1">
                تخمینہ شدہ خالص منافع (Est. Net Profit)
              </span>
              <p className="text-3xl font-black text-pink-400">Rs. {incomeReportData.netProfitEstimated.toLocaleString()}</p>
              <span className="text-[11px] text-gray-300 mt-1 block">After COGS & courier expenses</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase">مالیاتی آمدنی کا بیان (Financial Income Statement)</h3>
                <p className="text-xs text-gray-500">Breakdown of gross turnover, discounts, estimated procurement cost, and net margins.</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full uppercase">
                Audited Live
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm max-w-2xl">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-sans font-medium">1. Gross Booked Orders Revenue:</span>
                <span className="font-bold text-gray-900">Rs. {incomeReportData.grossBilled.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 text-amber-700">
                <span className="font-sans font-medium">2. Customer Discounts & Promo Subsidies:</span>
                <span className="font-bold">- Rs. {incomeReportData.totalDiscountsGiven.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 text-emerald-800">
                <span className="font-sans font-medium">3. Realized Cash In Hand (Delivered):</span>
                <span className="font-black">Rs. {incomeReportData.cashRealized.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 text-gray-600">
                <span className="font-sans font-medium">4. Estimated Cost of Goods Sold (COGS ~58%):</span>
                <span className="font-bold text-gray-800">- Rs. {incomeReportData.estimatedCOGS.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 text-gray-600">
                <span className="font-sans font-medium">5. Estimated Courier & Packaging Overhead:</span>
                <span className="font-bold text-gray-800">
                  - Rs. {incomeReportData.estimatedPackagingShipping.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-3 border-t-2 border-dashed border-gray-300 text-base">
                <span className="font-sans font-black text-gray-900 uppercase">Estimated Net Realized Profit:</span>
                <span className="font-black text-pink-700 text-lg">
                  Rs. {incomeReportData.netProfitEstimated.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
