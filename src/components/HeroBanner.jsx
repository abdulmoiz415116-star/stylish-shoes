import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Truck, 
  ShoppingBag, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setSelectedCategory, setSelectedSubcategory } = useShop();
  const touchStartX = useRef(null);

  // Auto-advance slides every 6.5s unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = (category, subcategory = null) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    const gridEl = document.getElementById('product-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (diffX < -50) {
      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative w-full bg-white border-b border-neutral-200/80 overflow-hidden font-poppins select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 flex flex-col justify-between min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
        
        {/* ========================================================= */}
        {/* MAIN SHOWCASE: PURE 2-COLUMN LAYOUT (ZERO OVERLAPPING)     */}
        {/* Desktop: Left Text / Right Dedicated Transparent Product  */}
        {/* Mobile: Top Product / Bottom Clean Readable Text          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto">
          
          {/* Visual Showcase: Dedicated Clean Area (On Mobile: Top, On Desktop: Right) */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`showcase-img-${slide.id}`}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="w-full flex items-center justify-center relative py-2 sm:py-4"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-auto h-auto max-h-[200px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[420px] xl:max-h-[450px] max-w-[95%] object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.14)] hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Column: Pure Transparent Text with Zero Image Behind It */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-5 text-left"
              >
                {/* Category Pill Tag & Department Badge */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 border border-pink-200 px-3.5 py-1 rounded-full shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]">
                      {slide.tag}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 px-3 py-1 rounded-full shadow-xs">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    <span className="font-bold text-neutral-900">{slide.badge}</span>
                  </span>
                </div>

                {/* Main Headline (Black & Radiant Pink) */}
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-neutral-950 tracking-tight leading-[1.15] uppercase">
                    {slide.title}
                  </h1>
                  <span className="block text-xl sm:text-3xl lg:text-[34px] font-black text-pink-600 tracking-tight leading-[1.15]">
                    {slide.subtitlePart2}
                  </span>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm lg:text-base text-neutral-700 font-medium leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Featured Product Pill */}
                <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-white border border-neutral-200 p-2 sm:p-2.5 rounded-2xl shadow-xs">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-200">
                    <img src={slide.image} alt={slide.productTitle} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left pr-2">
                    <span className="text-[8px] sm:text-[9px] uppercase font-bold text-neutral-500 tracking-wider block">
                      FEATURED MASTERPIECE
                    </span>
                    <span className="text-xs sm:text-sm font-black text-neutral-900 block truncate max-w-[160px] sm:max-w-xs">
                      {slide.productTitle}
                    </span>
                  </div>
                  <div className="bg-pink-600 text-white font-black text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl ml-auto shadow-xs">
                    {slide.price}
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <button
                    onClick={() => handleCtaClick(slide.category, slide.subcategory || null)}
                    className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-pink-600 hover:bg-neutral-950 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg shadow-pink-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleCtaClick(slide.category, null)}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-pink-50 text-neutral-950 hover:text-pink-600 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-neutral-200 hover:border-pink-500 transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-pink-600" />
                    <span>{slide.ctaSecondary}</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-neutral-700 font-medium">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <span className="font-extrabold text-neutral-900">4.9 / 5.0</span>
                    <span className="text-neutral-500 font-normal hidden sm:inline">(15k+ Reviews)</span>
                  </div>
                  <span className="text-neutral-300 hidden sm:inline">&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-pink-600" />
                    <span className="font-semibold text-neutral-800">Free Delivery Above Rs. 4,000</span>
                  </div>
                  <span className="text-neutral-300 hidden sm:inline">&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-neutral-800">COD Across Pakistan</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM CONTROLS & INTERACTIVE 5 LOOKBOOK TABS          */}
        {/* ========================================================= */}
        <div className="pt-6 sm:pt-8 mt-4 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 5 Category Navigation Tabs with Live Progress */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl transition-all duration-300 text-left shrink-0 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-white border-2 border-pink-600 shadow-md text-neutral-950 scale-102'
                      : 'bg-neutral-50 hover:bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {/* Miniature Thumbnail */}
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border ${isActive ? 'border-pink-600' : 'border-neutral-200'}`}>
                    <img src={s.image} alt={s.badge} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono leading-none text-pink-600 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold whitespace-nowrap">
                      {s.badge}
                    </span>
                  </div>

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-pulse ml-1" />
                  )}

                  {/* Bottom Line Progress when Active */}
                  {isActive && !isPaused && (
                    <motion.div
                      layoutId="tabProgress"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6.5, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-pink-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Slide Arrows & Counter */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-neutral-950 text-neutral-800 hover:text-white border border-neutral-200 shadow-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Count Indicator */}
            <div className="px-3 py-1.5 rounded-xl bg-white border border-neutral-200 text-xs font-mono font-bold text-neutral-700 shadow-xs">
              <span className="text-pink-600">0{currentSlide + 1}</span> / 0{HERO_SLIDES.length}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-neutral-950 text-neutral-800 hover:text-white border border-neutral-200 shadow-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
