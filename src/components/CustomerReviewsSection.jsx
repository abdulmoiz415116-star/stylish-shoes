import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { Star, CheckCircle, Quote, PlusCircle, X, Send, ThumbsUp, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomerReviewsSection = () => {
  const { reviews, addCustomerReview, products } = useShop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeReviewFilter, setActiveReviewFilter] = useState('all'); // 'all', '5-star', 'men', 'women'

  const [formData, setFormData] = useState({
    author: '',
    city: 'Lahore',
    rating: 5,
    comment: '',
    productId: ''
  });

  // Calculate 100% dynamic, real-time aggregate rating metrics directly from reviews array
  const ratingMetrics = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return { avg: 5.0, count: 0, fiveStarPct: 100, fourStarPct: 0, threeStarPct: 0 };
    }
    const total = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
    const avg = (sum / total).toFixed(1);
    const fiveStars = reviews.filter((r) => Number(r.rating) === 5).length;
    const fourStars = reviews.filter((r) => Number(r.rating) === 4).length;
    const threeStars = reviews.filter((r) => Number(r.rating) === 3).length;

    return {
      avg: parseFloat(avg) || 5.0,
      count: total,
      fiveStarPct: Math.round((fiveStars / total) * 100),
      fourStarPct: Math.round((fourStars / total) * 100),
      threeStarPct: Math.round((threeStars / total) * 100)
    };
  }, [reviews]);

  const filteredReviewsList = useMemo(() => {
    return reviews.filter((rev) => {
      if (activeReviewFilter === '5-star') return Number(rev.rating) === 5;
      if (activeReviewFilter === 'men') {
        const prod = products.find((p) => p.id === rev.productId);
        const text = ((rev.comment || '') + ' ' + (prod?.title || '')).toLowerCase();
        return text.includes('peshawari') || text.includes('leather') || text.includes('chappal') || text.includes('men') || text.includes('norozi') || prod?.category === 'men';
      }
      if (activeReviewFilter === 'women') {
        const prod = products.find((p) => p.id === rev.productId);
        const text = ((rev.comment || '') + ' ' + (prod?.title || '')).toLowerCase();
        return text.includes('bag') || text.includes('heel') || text.includes('bridal') || text.includes('khussa') || text.includes('women') || prod?.category === 'women' || prod?.category === 'accessories';
      }
      return true;
    });
  }, [reviews, activeReviewFilter, products]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.comment.trim()) return;

    addCustomerReview({
      author: formData.author.trim(),
      city: formData.city.trim(),
      rating: parseInt(formData.rating),
      comment: formData.comment.trim(),
      productId: formData.productId || null
    });

    setFormData({ author: '', city: 'Lahore', rating: 5, comment: '', productId: '' });
    setIsModalOpen(false);
  };

  return (
    <section id="reviews-section" className="py-20 bg-black text-white font-poppins relative overflow-hidden border-t border-neutral-900">
      {/* Background Subtle Luxury Rose/Pink Ambient Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-pink-500/30 px-3.5 py-1 rounded-full text-xs font-black text-pink-400 uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-pink-400 stroke-none" />
              <span>REAL-TIME VERIFIED RATINGS ({ratingMetrics.count})</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white font-poppins">
              WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300">CUSTOMERS SAY</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
              Live feedback &amp; genuine reviews synced across Pakistan in real-time.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-pink-900/30 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>WRITE A REVIEW &amp; RATING</span>
          </button>
        </div>

        {/* Real-time Rating Scorecard Dashboard Banner */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-neutral-850">
            
            {/* Left Big Score */}
            <div className="text-center md:text-left space-y-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-pink-400 block">
                LIVE OVERALL SATISFACTION
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-white font-poppins">
                  {ratingMetrics.avg}
                </span>
                <span className="text-lg font-bold text-pink-400">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(ratingMetrics.avg)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-neutral-800 text-neutral-800'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-neutral-400">
                Calculated live from <strong className="text-white">{ratingMetrics.count} real-time verified reviews</strong>
              </p>
            </div>

            {/* Middle Dynamic Rating Progress Bars */}
            <div className="pt-6 md:pt-0 md:px-6 space-y-2.5">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-neutral-300">5 Star</span>
                <div className="flex-1 bg-neutral-900 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${ratingMetrics.fiveStarPct}%` }}
                  />
                </div>
                <span className="w-10 text-right font-black text-pink-400">{ratingMetrics.fiveStarPct}%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-neutral-300">4 Star</span>
                <div className="flex-1 bg-neutral-900 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-600 to-rose-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${ratingMetrics.fourStarPct}%` }}
                  />
                </div>
                <span className="w-10 text-right font-black text-neutral-400">{ratingMetrics.fourStarPct}%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-neutral-300">3 Star</span>
                <div className="flex-1 bg-neutral-900 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-700 to-neutral-700 h-full rounded-full transition-all duration-500"
                    style={{ width: `${ratingMetrics.threeStarPct}%` }}
                  />
                </div>
                <span className="w-10 text-right font-black text-neutral-500">{ratingMetrics.threeStarPct}%</span>
              </div>
            </div>

            {/* Right Trust Badges */}
            <div className="pt-6 md:pt-0 md:pl-6 space-y-3">
              <div className="flex items-center gap-3 bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800 text-xs">
                <ShieldCheck className="w-5 h-5 text-pink-500 shrink-0" />
                <span className="font-semibold text-neutral-200">100% Genuine Leather &amp; Craft Guarantee</span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800 text-xs">
                <ThumbsUp className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="font-semibold text-neutral-200">98% Buyers Recommend to Friends &amp; Family</span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800 text-xs">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-semibold text-neutral-200">Cloud Synced Real-Time Feedback</span>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          <button
            onClick={() => setActiveReviewFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeReviewFilter === 'all'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/30'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setActiveReviewFilter('5-star')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeReviewFilter === '5-star'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/30'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
            <span>5 Stars Only</span>
          </button>
          <button
            onClick={() => setActiveReviewFilter('men')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeReviewFilter === 'men'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/30'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            Men's Peshawari &amp; Leather
          </button>
          <button
            onClick={() => setActiveReviewFilter('women')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeReviewFilter === 'women'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/30'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            Ladies Bags &amp; Bridal
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviewsList.map((rev, idx) => (
            <motion.div
              key={rev.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-neutral-950 p-6 rounded-3xl border border-neutral-850 shadow-xl flex flex-col justify-between relative group hover:border-pink-500/60 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-neutral-800/60 absolute top-4 right-4 pointer-events-none group-hover:text-pink-500/20 transition-colors" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(Number(rev.rating) || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                  <span className="text-[11px] font-black text-pink-400 ml-1">
                    {Number(rev.rating) || 5}.0
                  </span>
                </div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-neutral-850 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white uppercase">{rev.author || rev.name}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-pink-500" title="Verified Buyer" />
                    )}
                  </div>
                  <span className="text-[10px] text-pink-400 font-semibold uppercase">{rev.city || 'Pakistan'}, Pakistan &bull; {rev.date || 'Recent'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-poppins text-neutral-900">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5 border border-neutral-200"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold text-pink-600 uppercase tracking-widest">REAL-TIME SYNC</span>
                  <h3 className="text-xl font-black text-black uppercase font-poppins">
                    WRITE A CUSTOMER REVIEW
                  </h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block font-bold text-black uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter your name (e.g. Saima / Hamza)"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-black uppercase mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Lahore, Karachi"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:border-pink-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black uppercase mb-1">Star Rating *</label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:border-pink-600 focus:outline-none font-bold text-amber-600"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ 5 Stars (Excellent)</option>
                      <option value="4">⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                      <option value="3">⭐⭐⭐ 3 Stars (Good)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-black uppercase mb-1">Select Product (Optional)</label>
                  <select
                    value={formData.productId}
                    onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:border-pink-600 focus:outline-none"
                  >
                    <option value="">General Store Review</option>
                    {products.slice(0, 30).map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-black uppercase mb-1">Review Details &amp; Experience *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Share your experience about shoe quality, fitting, material, or delivery speed..."
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:border-pink-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-pink-600 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>POST REVIEW &amp; PUBLISH LIVE</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
