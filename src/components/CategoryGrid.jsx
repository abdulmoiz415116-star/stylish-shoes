import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { SUBCATEGORY_META } from '../data/products';
import { ArrowRight, Sparkles, Layers, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const MAIN_CATEGORIES = [
  {
    id: 'men',
    title: "MEN'S COLLECTION",
    subtitle: 'Handcrafted Norozi, Traditional Peshawari & Pure Leather Shoes',
    tag: 'HANDCRAFTED HERITAGE',
    image: '/images/products/peshawari_1.jpg',
    subcatCount: 11
  },
  {
    id: 'women',
    title: "WOMEN'S COLLECTION",
    subtitle: 'Royal Crystal Bridal Heels, Luxury Pumps, Sandals & Khussas',
    tag: 'HAUTE COUTURE LUXURY',
    image: '/hero_bridal_heels.jpg',
    subcatCount: 10
  },
  {
    id: 'kids',
    title: "KIDS' COLLECTION",
    subtitle: 'Boys Festive Peshawaris, Girls Ballerinas & School Footwear',
    tag: 'COMFORT & FESTIVITY',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800',
    subcatCount: 4
  },
  {
    id: 'accessories',
    title: 'BAGS & ACCESSORIES',
    subtitle: 'Signature Designer Handbags, French Fragrances & 24K Skincare',
    tag: 'PRESTIGE ESSENTIALS',
    image: '/hero_designer_bag.jpg',
    subcatCount: 3
  }
];

export const CategoryGrid = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    setSearchQuery
  } = useShop();

  const [activeSubcatDrawer, setActiveSubcatDrawer] = useState(
    selectedCategory !== 'all' ? selectedCategory : 'men'
  );

  // Keep drawer synchronized with global selectedCategory
  React.useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      setActiveSubcatDrawer(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryCardClick = (catId) => {
    setSearchQuery('');
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubcategoryClick = (catId, subCat) => {
    setSearchQuery('');
    setSelectedCategory(catId);
    setSelectedSubcategory(subCat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllCategory = (catId) => {
    setSearchQuery('');
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCategoryObj = MAIN_CATEGORIES.find((c) => c.id === activeSubcatDrawer) || MAIN_CATEGORIES[0];
  const activeSubcats = SUBCATEGORY_META[activeSubcatDrawer] || [];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-pink-50/20 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 px-4 py-1.5 rounded-full text-xs font-black text-pink-700 uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
            <span>EXCLUSIVE COLLECTIONS 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 uppercase font-poppins">
            DISCOVER BY CATEGORY
          </h2>
          <p className="text-xs text-neutral-500 font-medium max-w-lg mx-auto">
            Explore our 4 signature departments handcrafted with pure comfort and luxury elegance.
          </p>
        </div>

        {/* 4 Main Category Cards Grid (Pure Bright Image with ZERO Dark Overlay) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAIN_CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;
            const isDrawerOpen = activeSubcatDrawer === cat.id;
            const categoryProductCount = products.filter((p) => p.category === cat.id).length;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => handleCategoryCardClick(cat.id)}
                className={`group relative overflow-hidden rounded-[28px] cursor-pointer bg-white transition-all duration-300 flex flex-col justify-between border-2 shadow-sm ${
                  isSelected || isDrawerOpen
                    ? 'border-pink-600 ring-4 ring-pink-500/20 shadow-xl scale-[1.02]'
                    : 'border-neutral-200/90 hover:border-pink-400 hover:shadow-xl hover:scale-[1.01]'
                }`}
              >
                {/* Visual Stage (100% Bright Studio Image - ZERO Dark Overlay) */}
                <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-neutral-100 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Top Floating Tag & Item Count Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[10px] font-black tracking-wider uppercase bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-pink-700 border border-pink-200 shadow-xs">
                      {cat.tag}
                    </span>
                    <span className="text-[10px] font-extrabold bg-black/85 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full shadow-xs">
                      {categoryProductCount} Items
                    </span>
                  </div>

                  {/* Active Selection Indicator Badge */}
                  {(isSelected || isDrawerOpen) && (
                    <div className="absolute bottom-3 right-3 z-10 bg-pink-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Active</span>
                    </div>
                  )}
                </div>

                {/* Clean Layered Content Footer (White & Pink Aesthetic) */}
                <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-1 border-t border-neutral-100 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-neutral-950 uppercase tracking-tight group-hover:text-pink-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium line-clamp-2 leading-relaxed mt-1">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-black uppercase tracking-wider">
                    <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-pink-500" />
                      <span>{cat.subcatCount} Subcategories</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-pink-600 group-hover:text-black transition-colors font-black">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE SUBCATEGORIES SHOWCASE DRAWER */}
        {/* ========================================================= */}
        <div id="subcategories-showcase" className="mt-10 sm:mt-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-pink-200/80 shadow-xl scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-pink-600">
                  {activeCategoryObj.title} &bull; ALL SUBCATEGORIES
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-neutral-950 tracking-tight">
                Select Subcategory To View Products
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                Click any subcategory below to instantly filter store collection:
              </p>
            </div>

            {/* Quick Button: View All in this Category */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleViewAllCategory(activeSubcatDrawer)}
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider shadow transition-all hover:scale-105 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-pink-400" />
                <span>View All {activeCategoryObj.title.split(' ')[0]} Items →</span>
              </button>
            </div>
          </div>

          {/* Subcategories Horizontal Cards Grid (Clean Bright Zero-Overlay Thumbnails) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {activeSubcats.map((subItem) => {
              const isActiveSub =
                selectedCategory === activeSubcatDrawer && selectedSubcategory === subItem.name;
              const subCount = products.filter(
                (p) => p.category === activeSubcatDrawer && p.subcategory === subItem.name
              ).length;

              return (
                <motion.div
                  key={subItem.name}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSubcategoryClick(activeSubcatDrawer, subItem.name)}
                  className={`group relative overflow-hidden rounded-2xl p-2.5 border-2 transition-all cursor-pointer flex flex-col items-center text-center ${
                    isActiveSub
                      ? 'border-pink-600 bg-pink-50/50 shadow-md ring-2 ring-pink-500/20'
                      : 'border-gray-200/80 bg-white hover:border-pink-400 hover:shadow-md'
                  }`}
                >
                  {/* Clean Bright Thumbnail Image (Zero Dark Overlay) */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-50 mb-2 shadow-2xs border border-gray-100 flex items-center justify-center relative">
                    <img
                      src={subItem.image}
                      alt={subItem.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    {isActiveSub && (
                      <div className="absolute top-1 right-1 bg-pink-600 text-white p-0.5 rounded-full shadow">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Subcategory Label */}
                  <span className={`text-xs font-black uppercase tracking-tight block ${
                    isActiveSub ? 'text-pink-600' : 'text-neutral-900 group-hover:text-pink-600'
                  }`}>
                    {subItem.name}
                  </span>

                  {/* Product Count */}
                  <span className="text-[10px] text-gray-500 font-semibold mt-0.5 block">
                    {subCount} {subCount === 1 ? 'Design' : 'Designs'}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
