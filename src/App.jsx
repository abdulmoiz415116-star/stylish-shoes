import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CircularCategorySlider } from './components/CircularCategorySlider';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { AdminPanel } from './components/AdminPanel';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { CustomerAccountModal } from './components/CustomerAccountModal';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileBottomNav } from './components/MobileBottomNav';
import { motion, AnimatePresence } from 'framer-motion';

const ToastNotification = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-lg shadow-2xl border border-pink-500 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
        <span>{toastMessage}</span>
      </motion.div>
    </AnimatePresence>
  );
};

const MainLayout = () => {
  const {
    isAdminMode,
    isAdminAuthenticated,
    setIsAdminMode,
    lockAdminSession,
    adminEmail,
    selectedCategory,
    searchQuery
  } = useShop();

  // Admin Mode Route Guard (Exact same workflow as Salon Management Portal)
  if (isAdminMode) {
    if (isAdminAuthenticated) {
      return (
        <>
          <AdminPanel />
          <ToastNotification />
        </>
      );
    }
    // If not logged in, render the full-screen Salon-style Management Login Page!
    return (
      <>
        <AdminAuthModal fullPage={true} />
        <ToastNotification />
      </>
    );
  }

  const isCategoryOrSearchPage = selectedCategory !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-black selection:text-pink-400 relative pb-16 md:pb-0">
      <div id="home-top" className="absolute top-0 left-0 w-full h-1 pointer-events-none" tabIndex={-1} />

      <div>
        <Header />

        {isCategoryOrSearchPage ? (
          /* ======================================================== */
          /* DEDICATED CATEGORY / SEARCH PAGE                        */
          /* Shows ONLY the products & subcategories for this category */
          /* ======================================================== */
          <main className="min-h-[70vh]">
            <ProductGrid />
          </main>
        ) : (
          /* ======================================================== */
          /* CLEAN HOME PAGE                                          */
          /* No product cards! Only banners, category slider, and    */
          /* department discovery cards to enter categories.         */
          /* ======================================================== */
          <main>
            <HeroBanner />
            <MarqueeTicker />
            <CircularCategorySlider />
            <CategoryGrid />
            <AboutUsSection />
            <CustomerReviewsSection />
          </main>
        )}
      </div>
      <Footer />

      {/* Modals and Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <CheckoutModal />
      <CustomerAccountModal />
      <SizeGuideModal />
      <OrderTrackingModal />
      <AdminAuthModal />
      <ToastNotification />
      <WhatsAppFloatingButton />
      <MobileBottomNav />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainLayout />
    </ShopProvider>
  );
}

