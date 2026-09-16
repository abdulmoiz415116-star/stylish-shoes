import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Youtube,
  ShieldCheck,
  Truck,
  RefreshCw,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Heart,
  Clock,
  CreditCard,
  HelpCircle,
  CheckCircle2,
  ChevronUp,
  MessageCircle,
  X,
  FileText,
  Award,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const TRUST_PILLARS = [
  {
    icon: <Truck className="w-5 h-5 text-pink-600" />,
    title: "Free Nationwide Shipping",
    desc: "On all orders above Rs. 4,000",
  },
  {
    icon: <span className="text-sm font-black text-pink-600">PKR</span>,
    title: "Cash On Delivery",
    desc: "Pay safely at your doorstep",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-pink-600" />,
    title: "7 Days Easy Exchange",
    desc: "Guaranteed size & fit swap",
  },
  {
    icon: <Award className="w-5 h-5 text-pink-600" />,
    title: "Master Craftsmanship",
    desc: "100% Genuine leather & materials",
  },
];

export const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState(null);

  const {
    setSelectedCategory,
    setSelectedSubcategory,
    setSearchQuery,
    setIsTrackingOpen,
    setIsSizeGuideOpen,
    setIsCustomerAccountOpen,
    openAdminPanel,
    isAdminAuthenticated
  } = useShop();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim() !== '') {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSearchQuery('');
    if (window.location.hash) {
      try {
        window.history.pushState(null, '', window.location.pathname || '/');
      } catch {
        window.location.hash = '';
      }
    }
    if (window.location.pathname && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const topEl = document.getElementById('home-top') || document.body;
    if (topEl) topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavCategory = (catId, subCat = null) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(subCat);
    setSearchQuery('');
    const gridEl = document.getElementById('product-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  const policyData = {
    shipping: {
      title: 'Shipping & Delivery Policy',
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl">
            <p className="font-bold text-neutral-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Complimentary Shipping Nationwide on orders over Rs. 4,000
            </p>
            <p className="text-xs text-neutral-600 mt-1">A flat delivery fee of Rs. 250 applies to orders below Rs. 4,000.</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Estimated Transit Timelines</h5>
            <ul className="space-y-2 list-disc pl-5 text-neutral-600">
              <li><strong>Major Cities:</strong> Lahore, Karachi, Islamabad, Rawalpindi — <strong>2 to 4 working days</strong>.</li>
              <li><strong>Nationwide &amp; Other Cities:</strong> 3 to 6 working days via premium courier services (TCS, Leopards, Trax).</li>
              <li><strong>Confirmation:</strong> Orders are verified via phone call or WhatsApp before dispatch to confirm precise sizing.</li>
              <li><strong>Live Tracking:</strong> SMS and WhatsApp notification containing your consignment tracking number will be sent once dispatched.</li>
            </ul>
          </div>
        </div>
      )
    },
    exchange: {
      title: '7-Day Return & Exchange Policy',
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <div className="p-4 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
            <p className="font-bold text-neutral-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Guaranteed Fit &amp; Satisfaction
            </p>
            <p className="text-xs text-neutral-600 mt-1">If the size doesn't fit comfortably, exchange it with zero hassle within 7 days.</p>
          </div>
          <ul className="space-y-2 list-disc pl-5 text-neutral-600">
            <li><strong>Eligibility Window:</strong> Requests must be initiated within 7 calendar days of delivery.</li>
            <li><strong>Condition of Merchandise:</strong> Shoes and bags must be unworn, undamaged, with original tags and shoe box intact.</li>
            <li><strong>Process:</strong> WhatsApp our dedicated helpline at <strong>+92 325 5964412</strong> with your Order ID and desired size. Our concierge team arranges doorstep pick-and-swap.</li>
          </ul>
        </div>
      )
    },
    faq: {
      title: 'Frequently Asked Questions (FAQ)',
      icon: <HelpCircle className="w-5 h-5 text-pink-600" />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
            <p className="font-bold text-neutral-900 text-xs">Q: How do I select the exact shoe size?</p>
            <p className="text-xs text-neutral-600 mt-1">Check our interactive "Size Chart Guide" in the footer or product page, with exact measurements in EU, UK, and centimeters.</p>
          </div>
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
            <p className="font-bold text-neutral-900 text-xs">Q: What payment methods do you accept?</p>
            <p className="text-xs text-neutral-600 mt-1">We offer 100% Cash on Delivery (COD) across Pakistan. You only pay when your parcel arrives at your doorstep.</p>
          </div>
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
            <p className="font-bold text-neutral-900 text-xs">Q: Are Peshawari Chappals made of authentic leather?</p>
            <p className="text-xs text-neutral-600 mt-1">Yes, all our Peshawari, Kaptaan, and Norozi chappals are handcrafted from 100% genuine cowhide leather with durable tyre soles.</p>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy & Data Protection',
      icon: <Lock className="w-5 h-5 text-neutral-800" />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            At <strong>Stylish Shoes &amp; Bags</strong>, we value and respect your privacy. Your personal information (such as your full name, delivery address, phone number, and email) is securely encrypted and used strictly for shipping orders and customer care.
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-neutral-600 text-xs">
            <li>We do NOT sell, rent, or trade your contact info to third-party advertisers.</li>
            <li>Payments through JazzCash and digital methods are processed through secure bank-level gateways.</li>
            <li>All transmissions and records are safeguarded using 256-bit SSL encryption.</li>
          </ul>
        </div>
      )
    },
    about: {
      title: 'The Stylish Heritage & Atelier',
      icon: <Award className="w-5 h-5 text-amber-600" />,
      content: (
        <div className="space-y-3.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            <strong>Stylish Shoes &amp; Bags</strong> stands at the crossroads of classic artisanal heritage and contemporary fashion. From traditional handcrafted Peshawari chappals to glamourous bridal heels and luxury handbags, our mission is to deliver uncompromising quality and refined elegance.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
              <span className="block text-lg font-black text-neutral-900">50,000+</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Happy Customers</span>
            </div>
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
              <span className="block text-lg font-black text-pink-600">100%</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Artisanal Quality</span>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#fff5f7] via-[#fff0f4] to-[#fdf2f5] text-neutral-900 font-poppins border-t border-pink-100 selection:bg-pink-600 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. VIP MEMBERSHIP / NEWSLETTER HEADER BAR                 */}
      {/* ========================================================= */}
      <div className="border-b border-pink-100/80 bg-white/75 backdrop-blur-xs py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Headline & Description in Sharp Black & Dark Neutral */}
            <div className="text-center lg:text-left max-w-xl space-y-1.5">
              <div className="inline-flex items-center gap-2 text-pink-600 text-[11px] font-extrabold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>VIP PRIVILEGE CLUB</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight uppercase">
                Step Into Exclusive Style
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Join our circle for seasonal footwear drops, private promotions &amp; enjoy <strong className="text-neutral-950 font-bold">10% OFF</strong> your order.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[440px]">
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full pl-4 pr-36 py-3.5 text-xs bg-white border border-pink-200 text-neutral-950 placeholder-neutral-400 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition-all font-medium shadow-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-neutral-950 hover:bg-pink-600 text-white text-xs font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {subscribed && (
                <div className="mt-2.5 p-2 bg-pink-50 border border-pink-300 rounded-lg text-xs font-bold text-pink-900 text-center animate-fadeIn flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>Welcome to VIP Club! Use code <strong className="text-neutral-950 font-mono font-black">STEPSTYLE</strong> for 10% off.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. THE 4 PILLARS OF EXCELLENCE (Continuous Running Marquee) */}
      {/* ========================================================= */}
      <div className="border-t border-black border-b-[5px] border-neutral-950 py-7 bg-pink-50/40 relative overflow-hidden shadow-xs">
        {/* Soft edge gradients for seamless luxury fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fff5f7] via-[#fff5f7]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fff5f7] via-[#fff5f7]/80 to-transparent z-10" />

        <div className="w-full overflow-hidden">
          <div className="animate-marquee-slow flex items-center gap-5 whitespace-nowrap">
            {/* Half 1: 2 loops of 4 cards = 8 cards */}
            <div className="flex items-center gap-5 flex-shrink-0">
              {[...TRUST_PILLARS, ...TRUST_PILLARS].map((item, idx) => (
                <div
                  key={`pillar-a-${idx}`}
                  className="bg-white/95 border border-pink-100 p-4 rounded-2xl flex items-center gap-4 shadow-xs hover:border-pink-300 hover:shadow-md transition-all w-72 sm:w-80 flex-shrink-0 cursor-default select-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-950">{item.title}</h4>
                    <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Half 2: Identical 8 cards for mathematically 100% seamless infinite loop */}
            <div className="flex items-center gap-5 flex-shrink-0">
              {[...TRUST_PILLARS, ...TRUST_PILLARS].map((item, idx) => (
                <div
                  key={`pillar-b-${idx}`}
                  className="bg-white/95 border border-pink-100 p-4 rounded-2xl flex items-center gap-4 shadow-xs hover:border-pink-300 hover:shadow-md transition-all w-72 sm:w-80 flex-shrink-0 cursor-default select-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-950">{item.title}</h4>
                    <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. MAIN EDITORIAL COLUMNS                                  */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1: BRAND IDENTITY & STORE (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo & Brand Name */}
            <a
              href="/"
              className="flex items-center gap-3.5 cursor-pointer no-underline group"
              onClick={handleGoHome}
              title="Return to Home Page"
            >
              <img
                src="/logo.png"
                alt="Stylish Shoes & Bags Logo"
                className="h-16 w-16 object-contain rounded-full bg-white p-1 border-2 border-neutral-300 shadow-md group-hover:scale-105 transition-transform"
              />
              <div>
                <h2 className="text-2xl font-black tracking-tight text-neutral-950 uppercase leading-none font-poppins group-hover:text-pink-600 transition-colors">
                  STYLISH <span className="text-pink-600">SHOES</span>
                </h2>
                <p className="text-[10px] tracking-[0.25em] font-extrabold text-neutral-600 uppercase mt-1">
                  AND BAGS &bull; STEP INTO STYLE
                </p>
              </div>
            </a>

            {/* Brand Overview */}
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              Pakistan’s premier footwear house. Pure leather handcrafted Peshawari chappals, high-glamour bridal heels, contemporary sneakers, designer handbags, and orthopedic medicated footwear designed for long-lasting comfort.
            </p>

            {/* Verified Trust Emblem */}
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-center gap-3 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-neutral-950 block">Official Verified Merchant</span>
                <span className="text-[10px] text-neutral-600 block">Encrypted Checkout &bull; 100% Genuine Quality Guaranteed</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block">
                Follow Our Social Media
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/923255964412"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white border border-neutral-300 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 flex items-center justify-center transition-all shadow-xs"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white border border-neutral-300 text-pink-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 flex items-center justify-center transition-all shadow-xs"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white border border-neutral-300 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition-all shadow-xs"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-white border border-neutral-300 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 flex items-center justify-center transition-all shadow-xs"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* COLUMN 2: COLLECTIONS (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-neutral-950 border-b-2 border-neutral-300 pb-2.5">
              COLLECTIONS
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-700">
              <li>
                <button
                  onClick={() => handleNavCategory('men', 'kheri')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 transition-colors" />
                  <span className="font-bold text-neutral-900">Men's Kheri Chappal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('men', 'peshawari')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Peshawari Chappal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('men')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Men's Casual &amp; Loafers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('women', 'bridal')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Bridal &amp; Evening Heels</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('accessories', 'bags')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Luxury Handbags &amp; Clutches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('kids')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Kids School &amp; Party Footwear</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('all')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Medicated &amp; Orthopedic</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNavCategory('all')}
                  className="text-neutral-950 font-extrabold hover:text-pink-600 transition-colors flex items-center gap-1"
                >
                  <span>View All Collections &rarr;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CLIENT CARE & PAGES (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-neutral-950 border-b-2 border-neutral-300 pb-2.5">
              CLIENT SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-700">
              <li>
                <button
                  onClick={() => setIsTrackingOpen(true)}
                  className="hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-between w-full p-2.5 rounded-xl bg-neutral-950 text-white group shadow-sm"
                >
                  <span className="font-extrabold text-xs">Track Order Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Size Guide &amp; Fitting Chart</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsCustomerAccountOpen(true)}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Customer Account &bull; Orders</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('exchange')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>7-Day Return &amp; Exchange</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('shipping')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Shipping &amp; Delivery Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('faq')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('about')}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-pink-600 transition-colors" />
                  <span>About Our Brand &amp; Atelier</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONCIERGE & CONTACT (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-neutral-950 border-b-2 border-neutral-300 pb-2.5">
              CONCIERGE &amp; OUTLET
            </h3>

            <div className="space-y-3 text-xs">
              
              {/* Phone & WhatsApp Card */}
              <div className="p-3.5 bg-white border border-neutral-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-700">Helpline &amp; WhatsApp</span>
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:+923255964412"
                    className="text-sm font-mono font-black text-neutral-950 hover:text-emerald-600 transition-colors"
                  >
                    +92 325 5964412
                  </a>
                  <span className="text-[10px] text-neutral-500 mt-0.5">Mon – Sat: 10:00 AM – 10:00 PM</span>
                </div>
              </div>

              {/* Email Address Card */}
              <div className="p-3.5 bg-white border border-neutral-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Mail className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-700">Official Support Email</span>
                </div>
                <a
                  href="mailto:care@stylishshoes.com"
                  className="text-xs font-bold text-neutral-950 hover:text-pink-600 transition-colors block truncate"
                >
                  care@stylishshoes.com
                </a>
              </div>

              {/* Physical Flagship Store Card */}
              <div className="p-3.5 bg-white border border-neutral-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-700">Flagship Boutique</span>
                </div>
                <p className="text-xs text-neutral-900 font-semibold leading-snug">
                  Shop #14, Main Boulevard, Gulberg III, Lahore, Pakistan
                </p>
                <div className="flex items-center gap-1 text-[10px] text-neutral-500 mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>Mon – Sun: 11:00 AM – 10:30 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. PAYMENT METHODS & CURRENCY ROW                         */}
      {/* ========================================================= */}
      <div className="border-t border-pink-100/90 bg-white/60 backdrop-blur-xs py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Accepted Methods */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[10px] font-extrabold uppercase tracking-wider">
            <span className="text-neutral-500 mr-1">Payment Method:</span>
            
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center gap-2 shadow-2xs">
              <span>💵</span>
              <span>100% Cash On Delivery (COD) Available Nationwide</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-pink-600 hover:border-pink-400 transition-colors bg-white hover:bg-pink-50/60 px-4 py-2 rounded-full border border-pink-200 shadow-2xs shrink-0 cursor-pointer"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4 text-pink-600" />
          </button>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. LEGAL & COPYRIGHT BAR                                   */}
      {/* ========================================================= */}
      <div className="border-t border-pink-100 bg-[#faedf0] py-5 text-[11px] text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-medium text-neutral-700">
            &copy; {new Date().getFullYear()} <strong className="text-neutral-950 font-bold">STYLISH SHOES &amp; BAGS</strong>. All rights reserved. Step Into Style.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-4 text-neutral-700 font-semibold">
            <button
              onClick={() => setActivePolicyModal('privacy')}
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActivePolicyModal('exchange')}
              className="hover:text-black transition-colors"
            >
              Exchange Terms
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActivePolicyModal('shipping')}
              className="hover:text-black transition-colors"
            >
              Shipping Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActivePolicyModal('faq')}
              className="hover:text-black transition-colors"
            >
              FAQ
            </button>
            <span>&bull;</span>
            <button
              onClick={() => openAdminPanel()}
              className="hover:text-pink-600 transition-colors flex items-center gap-1 font-bold text-black"
              title="Store Admin Panel Login"
            >
              <Lock className="w-3 h-3 text-pink-600" />
              <span>{isAdminAuthenticated ? 'Admin Panel' : 'Admin Login'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 6. INTERACTIVE POLICY DIALOG MODAL                        */}
      {/* ========================================================= */}
      {activePolicyModal && policyData[activePolicyModal] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActivePolicyModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white border border-neutral-300 rounded-2xl shadow-2xl p-6 sm:p-7 text-left space-y-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200">
                  {policyData[activePolicyModal].icon}
                </div>
                <h3 className="text-base font-extrabold text-neutral-950">
                  {policyData[activePolicyModal].title}
                </h3>
              </div>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-2">
              {policyData[activePolicyModal].content}
            </div>

            <div className="border-t border-neutral-200 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-semibold">Stylish Shoes &amp; Bags</span>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
