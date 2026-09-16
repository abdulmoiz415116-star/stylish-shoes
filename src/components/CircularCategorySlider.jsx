import React, { useRef, useEffect, useState } from 'react';
import { CIRCULAR_CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CircularCategorySlider = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSearchQuery } = useShop();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 160, behavior: 'smooth' });
        }
      }
    }, 2400);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectCircle = (catId, subCat) => {
    setSearchQuery('');
    setSelectedCategory(catId);
    setSelectedSubcategory(subCat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-600 animate-bounce" />
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-black font-poppins">
              EXPLORE CATEGORIES &amp; SUBCATEGORIES
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white border border-neutral-200 shadow-md text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 cursor-pointer"
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white border border-neutral-200 shadow-md text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 cursor-pointer"
              aria-label="Next categories"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Auto-sliding Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex items-center space-x-8 overflow-x-auto pb-4 custom-scrollbar scroll-smooth no-scrollbar"
        >
          {CIRCULAR_CATEGORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleSelectCircle(item.categoryId, item.subcategory)}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer group space-y-2.5 py-2"
            >
              {/* Circular Avatar with Logo Pink/Black Gradient Ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Title Badge */}
              <span className="text-xs font-extrabold text-neutral-950 group-hover:text-pink-600 transition-colors tracking-wide text-center uppercase font-poppins bg-white px-3 py-1 rounded-full shadow-xs border border-gray-100">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
