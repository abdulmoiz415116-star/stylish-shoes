import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, SUBCATEGORY_META } from '../data/products';
import { ProductCard } from './ProductCard';
import { Filter, SlidersHorizontal, RefreshCw, Search, X, ArrowLeft, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductGrid = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    maxPriceFilter,
    setMaxPriceFilter,
    inStockOnlyFilter,
    setInStockOnlyFilter,
  } = useShop();

  const [visibleCount, setVisibleCount] = useState(24);

  // When filters or category change, reset visible count to 24 for optimal mobile performance
  useEffect(() => {
    setVisibleCount(24);
  }, [selectedCategory, selectedSubcategory, searchQuery, sortBy, maxPriceFilter, inStockOnlyFilter]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);
  const subcategoriesList = currentCategoryObj ? currentCategoryObj.subcategories || [] : [];

  // Filter products real-time
  let filteredProducts = products.filter((p) => {
    // Hide disabled / inactive products from customer storefront
    if (p.enabled === false) return false;

    // Price range filter
    if (p.price > maxPriceFilter) return false;

    // Stock filter
    if (inStockOnlyFilter && (!p.inStock || p.stockCount <= 0)) return false;

    // If search query is active, search across ALL products dynamically
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchSubcategory = p.subcategory && p.subcategory.toLowerCase().includes(q);
      const matchColor = p.colors && p.colors.some((c) => c.toLowerCase().includes(q));
      const matchDesc = p.description && p.description.toLowerCase().includes(q);
      return matchTitle || matchCategory || matchSubcategory || matchColor || matchDesc;
    }

    // Category check
    if (selectedCategory !== 'all' && (p.category || '').toLowerCase().trim() !== selectedCategory.toLowerCase().trim()) {
      return false;
    }

    // Subcategory check
    if (selectedSubcategory && (p.subcategory || '').toLowerCase().trim() !== selectedSubcategory.toLowerCase().trim()) {
      return false;
    }

    return true;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  const handleResetFilters = () => {
    setSelectedSubcategory(null);
    setSearchQuery('');
    setSortBy('featured');
    setMaxPriceFilter(10000);
    setInStockOnlyFilter(false);
  };

  const handleBackToCategories = () => {
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="product-section" className="py-10 sm:py-14 bg-white font-poppins relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Top Breadcrumb Navigation & Return to Home Button */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-pink-50/70 via-white to-pink-50/70 border border-pink-100 p-4 sm:p-5 rounded-2xl shadow-xs">
            <button
              onClick={handleBackToCategories}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-pink-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Return to Home (ہوم پیج پر واپس جائیں)</span>
            </button>

            {/* Breadcrumb path */}
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
              <button
                onClick={handleBackToCategories}
                className="hover:text-pink-600 transition-colors cursor-pointer text-neutral-600 font-semibold"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-neutral-950 font-black uppercase">
                {searchQuery.trim() !== ''
                  ? 'Search'
                  : currentCategoryObj
                  ? currentCategoryObj.name
                  : 'Department'}
              </span>
              {selectedSubcategory && (
                <>
                  <span>/</span>
                  <span className="text-pink-600 font-black">{selectedSubcategory}</span>
                </>
              )}
            </div>
          </div>

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-pink-600">
                  STYLISH COLLECTION
                </span>
                <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase font-poppins mt-1">
                  {searchQuery.trim() !== ''
                    ? `SEARCH RESULTS FOR "${searchQuery.toUpperCase()}"`
                    : selectedSubcategory
                    ? `${selectedSubcategory} (${currentCategoryObj?.name})`
                    : `${currentCategoryObj?.name || 'STORE'} COLLECTION`}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Showing <span className="font-extrabold text-neutral-950">{filteredProducts.length}</span> items in real-time
                </p>
              </div>

              {/* Price Range & Sorting Controls Bar */}
              <div className="flex flex-wrap items-center gap-4 bg-pink-50/70 p-3 rounded-2xl border border-gray-100 text-xs">
                {/* Price Range Slider */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-950 uppercase text-[11px]">Max Price:</span>
                  <input
                    type="range"
                    min="2000"
                    max="10000"
                    step="500"
                    value={maxPriceFilter}
                    onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                    className="w-24 sm:w-32 accent-pink-600 cursor-pointer"
                  />
                  <span className="font-extrabold text-pink-600 font-mono text-xs">Rs. {maxPriceFilter.toLocaleString()}</span>
                </div>

                {/* In-Stock Only Toggle */}
                <label className="flex items-center gap-1.5 font-bold text-neutral-950 cursor-pointer text-[11px] uppercase">
                  <input
                    type="checkbox"
                    checked={inStockOnlyFilter}
                    onChange={(e) => setInStockOnlyFilter(e.target.checked)}
                    className="rounded text-pink-600 focus:ring-pink-500 w-4 h-4 cursor-pointer"
                  />
                  <span>In Stock Only</span>
                </label>

                {/* Sorting Dropdown */}
                <div className="flex items-center gap-1.5 ml-auto">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-pink-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs font-bold border border-gray-200 rounded-xl py-1.5 px-2.5 bg-white text-neutral-950 focus:outline-none focus:border-pink-600 shadow-xs cursor-pointer"
                  >
                    <option value="featured">Featured &amp; Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Real-time Active Search / Filter Badge Bar */}
            {searchQuery.trim() !== '' && (
              <div className="mb-6 flex items-center justify-between bg-pink-50/70 border border-gray-200 p-3.5 rounded-2xl text-xs text-neutral-950 font-medium shadow-xs">
                <div className="flex items-center gap-2 font-extrabold">
                  <Search className="w-4 h-4 text-pink-600" />
                  <span>
                    Active Search: <span className="text-pink-600">"{searchQuery}"</span> &bull; {filteredProducts.length} items found
                  </span>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-1 text-[11px] font-bold text-pink-600 hover:text-neutral-950 uppercase bg-white px-3 py-1 rounded-xl shadow-xs border border-gray-200 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear Search</span>
                </button>
              </div>
            )}

            {/* Main Category Tabs */}
            {searchQuery.trim() === '' && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 custom-scrollbar">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubcategory(null);
                      }}
                      className={`px-5 py-2.5 rounded-2xl text-xs font-black tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? 'bg-black text-white shadow-lg ring-2 ring-pink-500'
                          : 'bg-white text-neutral-800 border-2 border-neutral-200 hover:border-pink-300 hover:text-pink-600'
                      }`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Subcategory Pills Filter Bar with Visual Thumbnails */}
            {searchQuery.trim() === '' && subcategoriesList.length > 0 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 custom-scrollbar">
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`px-4 py-2 rounded-2xl text-xs font-black tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedSubcategory === null
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'bg-pink-50/80 text-neutral-900 border border-pink-200 hover:bg-pink-100 hover:text-pink-700'
                  }`}
                >
                  <span>All {currentCategoryObj?.name}</span>
                  <span className="text-[10px] opacity-80 font-normal">
                    ({products.filter(p => p.category === selectedCategory).length})
                  </span>
                </button>
                {subcategoriesList.map((subCat) => {
                  const meta = SUBCATEGORY_META[selectedCategory]?.find(m => m.name.toLowerCase() === subCat.toLowerCase());
                  const count = products.filter(
                    (p) =>
                      (p.category || '').toLowerCase() === selectedCategory.toLowerCase() &&
                      (p.subcategory || '').toLowerCase() === subCat.toLowerCase() &&
                      p.enabled !== false
                  ).length;
                  return (
                    <button
                      key={subCat}
                      onClick={() => setSelectedSubcategory(subCat)}
                      className={`pl-1.5 pr-3.5 py-1.5 rounded-2xl text-xs font-black tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        selectedSubcategory === subCat
                          ? 'bg-black text-white shadow-md ring-2 ring-pink-500'
                          : 'bg-white text-neutral-900 border-2 border-gray-100 hover:border-pink-300 hover:text-pink-700 shadow-2xs'
                      }`}
                    >
                      {meta && (
                        <img
                          src={meta.image}
                          alt={subCat}
                          className="w-7 h-7 rounded-xl object-cover border border-gray-200"
                        />
                      )}
                      <span>{subCat}</span>
                      <span className={`text-[10px] font-bold ${selectedSubcategory === subCat ? 'text-pink-300' : 'text-gray-400'}`}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
                >
                  <AnimatePresence>
                    {(searchQuery.trim() !== '' ? filteredProducts : filteredProducts.slice(0, visibleCount)).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Load More / Progressive Pagination Controls */}
                {searchQuery.trim() === '' && filteredProducts.length > visibleCount && (
                  <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
                    <p className="text-xs text-gray-500 font-semibold">
                      Showing <span className="font-extrabold text-neutral-950">{Math.min(visibleCount, filteredProducts.length)}</span> of <span className="font-extrabold text-neutral-950">{filteredProducts.length}</span> items
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setVisibleCount((prev) => prev + 24)}
                        className="bg-black hover:bg-pink-600 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-pink-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>Load More Products (مزید دیکھیں)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setVisibleCount(filteredProducts.length)}
                        className="bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-2xl transition-all cursor-pointer"
                      >
                        Show All ({filteredProducts.length})
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty Search / Filter State */
              <div className="text-center py-20 bg-pink-50/50 rounded-2xl border border-dashed border-gray-200 max-w-md mx-auto my-8 font-poppins">
                <Filter className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                <h3 className="text-lg font-extrabold text-neutral-950 uppercase tracking-wide">
                  No Products Found
                </h3>
                <p className="text-xs text-gray-500 mt-1 px-6">
                  We couldn't find any items matching "{searchQuery || selectedSubcategory || selectedCategory}". Try resetting your filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-5 inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-pink-600 transition-colors shadow-md cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };
