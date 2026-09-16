import React from 'react';
import { Truck, ShieldCheck, CreditCard, Banknote, Star, Sparkles } from 'lucide-react';

export const MarqueeTicker = () => {
  const tickerItems = [
    { icon: <Truck className="w-4 h-4 text-amber-400" />, text: 'Nationwide Delivery' },
    { icon: <ShieldCheck className="w-4 h-4 text-pink-400" />, text: '7 Days Easy Exchange' },
    { icon: <CreditCard className="w-4 h-4 text-amber-400" />, text: 'Baadmay 3 Installments' },
    { icon: <Banknote className="w-4 h-4 text-emerald-400" />, text: 'Cash On Delivery' },
    { icon: <Star className="w-4 h-4 text-amber-300 fill-amber-300 stroke-none" />, text: '100% Genuine Leather' },
    { icon: <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />, text: 'Stylish Shoes & Bags • Step Into Style' },
  ];

  return (
    <div className="w-full bg-black text-white border-y border-neutral-800 py-3 overflow-hidden font-poppins relative shadow-inner z-20">
      {/* Side Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
        {/* First Set */}
        {tickerItems.map((item, idx) => (
          <div key={`set1-${idx}`} className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-100 flex-shrink-0">
            {item.icon}
            <span>{item.text}</span>
            <span className="text-pink-500 ml-6 text-sm">&bull;</span>
          </div>
        ))}
        {/* Second Set (Duplicate for seamless loop) */}
        {tickerItems.map((item, idx) => (
          <div key={`set2-${idx}`} className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-100 flex-shrink-0">
            {item.icon}
            <span>{item.text}</span>
            <span className="text-pink-500 ml-6 text-sm">&bull;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
