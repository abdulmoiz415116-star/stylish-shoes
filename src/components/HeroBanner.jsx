import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Star, ShieldCheck, Truck, ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setSelectedCategory } = useShop();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = (category) => {
    setSelectedCategory(category);
    const gridEl = document.getElementById('product-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white border-b border-neutral-200/80 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ========================================================= */}
          {/* LEFT: EDITORIAL LUXURY BRANDING & CALL-TO-ACTION */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${slide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-5"
              >
                {/* Couture Badge */}
                <div className="inline-flex items-center gap-2 bg-pink-50/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-pink-200 shadow-xs">
                  <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
                  <span className="text-[11px] font-black tracking-[0.2em] text-pink-900 uppercase">
                    {slide.tag}
                  </span>
                </div>

                {/* Main Headline (Black & Pink) */}
                <div className="space-y-1.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-black tracking-tight leading-[1.15] uppercase">
                    {slide.title}
                  </h1>
                  <span className="block text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-pink-600 tracking-tight">
                    {slide.subtitlePart2}
                  </span>
                </div>

                {/* Subtitle Description */}
                <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed max-w-lg">
                  {slide.description}
                </p>

                {/* Action Buttons (Pink & Hover Black) */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => handleCtaClick(slide.category)}
                    className="group inline-flex items-center gap-3 bg-pink-600 hover:bg-black text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-pink-600/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleCtaClick(slide.category === 'women' ? 'men' : 'women')}
                    className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-neutral-950 hover:text-pink-600 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-wider border-2 border-pink-200 hover:border-pink-500 transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-pink-600" />
                    <span>{slide.ctaSecondary}</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-600">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                    <span className="font-extrabold text-neutral-900">4.9 / 5.0</span>
                    <span className="text-neutral-400 font-normal">(15,000+ Happy Customers)</span>
                  </div>
                  <span className="text-neutral-300 hidden sm:inline">&bull;</span>
                  <div className="flex items-center gap-1.5 text-neutral-800">
                    <Truck className="w-4 h-4 text-pink-600" />
                    <span>Free Nationwide Express Delivery Available</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Lookbook Thumbnails */}
            <div className="pt-6 border-t border-neutral-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block mb-2.5">
                SELECT LOOKBOOK:
              </span>
              <div className="flex gap-3">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`flex items-center gap-2 p-1.5 pr-3 rounded-2xl border-2 transition-all cursor-pointer ${
                      currentSlide === idx
                        ? 'border-pink-600 bg-pink-50/40 shadow-sm scale-105'
                        : 'border-neutral-200 bg-white hover:bg-neutral-50 opacity-75'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.productTitle}
                      className="w-10 h-10 object-cover rounded-xl bg-neutral-100"
                    />
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-neutral-400 block leading-none">0{idx + 1}</span>
                      <span className="text-xs font-black text-neutral-900 block leading-tight truncate max-w-[90px]">
                        {s.productTitle.split(' ')[0]} {s.productTitle.split(' ')[1]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: PRO MASTERPIECE PRODUCT STAGE (STUDIO PHOTOGRAPHY) */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`stage-${slide.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative"
              >
                {/* Main Product Showcase Box - Pure Studio Look with ZERO OVERLAY */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-xl group">
                  <img
                    src={slide.image}
                    alt={slide.productTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Luxury Tag */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-black text-neutral-900 uppercase tracking-wider shadow-md border border-neutral-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{slide.highlightTag}</span>
                  </div>

                  {/* Clean Minimalist Corner Price Badge (No Heavy Overlay) */}
                  <div className="absolute right-4 bottom-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-neutral-900 shadow-xl border border-neutral-200 flex items-center gap-3">
                    <div>
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                        AUTHENTIC COLLECTION
                      </span>
                      <h4 className="text-xs font-black text-neutral-900">{slide.productTitle}</h4>
                    </div>
                    <span className="text-xs font-black text-neutral-900 bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200">
                      {slide.price}
                    </span>
                  </div>
                </div>

                {/* Prev / Next Slide Floating Navigation */}
                <div className="absolute -bottom-5 right-6 flex items-center gap-2 z-20">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                    className="p-3 rounded-2xl bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white shadow-xl border border-neutral-200 transition-all hover:scale-110"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                    className="p-3 rounded-2xl bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white shadow-xl border border-neutral-200 transition-all hover:scale-110"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
