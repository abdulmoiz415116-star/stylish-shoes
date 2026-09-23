import React from 'react';
import { ShieldCheck, Truck, Award, RefreshCw, Sparkles, Heart, CheckCircle2, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutUsSection = () => {
  const highlights = [
    {
      icon: <Award className="w-7 h-7 text-pink-500" />,
      title: 'Pure Leather Craftsmanship',
      titleUrdu: 'خالص چمڑا اور روایتی کاریگری',
      desc: '100% genuine full-grain leather, hand-selected materials, and master artisan stitching that ensures lifetime durability.'
    },
    {
      icon: <Truck className="w-7 h-7 text-rose-500" />,
      title: 'Fast Nationwide Delivery',
      titleUrdu: 'پورے پاکستان میں تیز رفتار ڈیلیوری',
      desc: 'Safe & swift delivery in 2 to 4 working days to Karachi, Lahore, Islamabad, Peshawar, Quetta, and over 300+ cities with Cash on Delivery.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-500" />,
      title: 'Ergonomic All-Day Comfort',
      titleUrdu: 'بے مثال آرام دہ سول',
      desc: 'Double-cushioned memory foam insoles and authentic double soles designed to keep your feet relaxed throughout the day.'
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-pink-600" />,
      title: '7-Day Easy Exchange Policy',
      titleUrdu: 'آسان اور بے فکر ایکسچینج',
      desc: 'Size issue or change of mind? Enjoy hassle-free exchanges with our dedicated WhatsApp support team.'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Happy Customers', sublabel: 'خوش مطمئن خریدار' },
    { value: '100%', label: 'Genuine Materials', sublabel: 'اصلی اور پائیدار' },
    { value: '300+', label: 'Cities Covered', sublabel: 'ملک گیر ترسیل' },
    { value: '4.9 / 5.0', label: 'Average Rating', sublabel: 'کسٹمر ریٹنگ' }
  ];

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-white via-pink-50/20 to-white text-neutral-900 font-poppins relative overflow-hidden border-t border-neutral-100">
      {/* Decorative ambient background accents */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-neutral-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-black border border-pink-500/40 px-4 py-1.5 rounded-full text-xs font-black text-pink-400 uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>EST. 2018 • OUR HERITAGE & STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black font-poppins">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-pink-600 to-rose-600">STYLISH SHOES & BAGS</span>
          </h2>

          <p className="text-base sm:text-lg font-urdu text-neutral-950 font-bold">
            ہماری پہچان: روایتی ہنر، پائیدار چمڑا اور جدید خوبصورتی کا منفرد سنگم
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto pt-2">
            <strong>Stylish Shoes & Bags</strong> is Pakistan’s trusted destination for handcrafted heritage footwear and contemporary luxury accessories. We blend centuries-old artisan shoemaking traditions with modern comfort ergonomics to deliver footwear and bags that look royal, feel weightless, and last for years.
          </p>
        </div>

        {/* Narrative & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-pink-600 block">
                CRAFTED WITH PASSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                From Artisan Hands in Khyber to Runways in Lahore & Karachi
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every pair of our <strong>Handmade Peshawari, Charsadda, and Norozi Chappals</strong> is individually shaped by master shoemakers who have inherited this heritage across generations. Using pure vegetable-tanned leather, heavy-duty stitching, and recycled tyre or soft rubber soles, each step carries authentic Pakistani pride.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                For women, our collection features <strong>luxury crystal bridal heels, festive khussas, and designer bags</strong> made for grand celebrations, Eid gatherings, and stylish daily office wear.
              </p>
            </div>

            {/* Checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-900 bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>100% Genuine Pure Leather</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-900 bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Double Memory Foam Sole</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-900 bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Cash on Delivery Nationwide</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-900 bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Direct Artisan Pricing (No Middlemen)</span>
              </div>
            </div>

            {/* WhatsApp direct line quote */}
            <div className="bg-black text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 shadow-xl border border-neutral-800">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-black tracking-widest text-pink-400 block">
                  PERSONAL CONSULTATION
                </span>
                <p className="text-xs font-bold text-white">
                  Need custom sizing, bridal advice, or order queries?
                </p>
              </div>
              <a
                href="https://wa.me/923255964412?text=Assalam-o-Alaikum%20Stylish%20Store!%20I%20want%20more%20details%20about%20your%20shoes%20and%20bags."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 flex items-center justify-center gap-1.5 shadow-lg shadow-pink-900/40 transition-all active:scale-95 w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Feature Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all group"
              >
                <div className="p-3 bg-pink-50 rounded-xl inline-block mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-black text-sm text-neutral-950 mb-0.5">{item.title}</h4>
                <div className="text-[11px] font-urdu font-bold text-pink-600 mb-2">{item.titleUrdu}</div>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Key Stats Banner in Luxury Black & Pink */}
        <div className="bg-gradient-to-r from-black via-neutral-950 to-black text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            {stats.map((st, i) => (
              <div key={i} className={`space-y-1 ${i > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 font-poppins">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {st.label}
                </div>
                <div className="text-[11px] font-urdu text-neutral-400 font-semibold">
                  {st.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
