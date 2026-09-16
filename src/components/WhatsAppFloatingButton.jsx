import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phone = '923255964412';
  const defaultMessage = 'Hello Stylish Shoes & Bags! I want to inquire about products and place an order.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-poppins flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-emerald-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
                    {/* Official WhatsApp Logo SVG */}
                    <svg className="w-7 h-7 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.334 5.006L2 22l5.127-1.341a9.94 9.94 0 004.881 1.28h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.667-1.039-5.174-2.926-7.062A9.92 9.92 0 0012.012 2zm.003 16.486h-.003a8.27 8.27 0 01-4.22-1.157l-.303-.18-3.04.796.81-2.961-.197-.314a8.27 8.27 0 01-1.272-4.474c0-4.564 3.714-8.277 8.28-8.277 2.21 0 4.288.862 5.852 2.427a8.23 8.23 0 012.422 5.857c0 4.565-3.715 8.279-8.281 8.279zm4.536-6.2c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.053-.388-2.006-1.238-.742-.662-1.243-1.48-1.388-1.729-.145-.249-.015-.384.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.406 1.016 2.572.124.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.596.19 1.138.163 1.567.099.479-.071 1.472-.602 1.679-1.182.207-.581.207-1.079.145-1.182-.062-.103-.228-.166-.477-.29z"/>
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white"></span>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider font-poppins">STYLISH SHOES HELP DESK</h4>
                  <p className="text-[10px] text-emerald-100 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    Online &bull; Replies in seconds
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gradient-to-b from-emerald-50/60 to-white text-xs space-y-3 font-poppins">
              <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-emerald-100/80 text-gray-800 leading-relaxed text-[11px]">
                Assalam-o-Alaikum! 👋<br />
                Welcome to <strong>Stylish Shoes &amp; Bags</strong>! Need help with product inquiry, shoe sizes, or direct WhatsApp ordering?
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>Start WhatsApp Chat</span>
              </a>

              <div className="text-[10px] text-center text-gray-400 font-semibold pt-1 border-t border-emerald-50">
                Official WhatsApp Helpline: <strong className="text-emerald-700">+92 325 5964412</strong>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button (Positioned at RIGHT-6) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba5a] hover:to-[#0e7065] text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 ring-4 ring-emerald-400/20 active:scale-95"
        title="WhatsApp Support & Order (+92 325 5964412)"
      >
        {/* Official WhatsApp Logo SVG Icon */}
        <svg className="w-7 h-7 fill-white filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.334 5.006L2 22l5.127-1.341a9.94 9.94 0 004.881 1.28h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.667-1.039-5.174-2.926-7.062A9.92 9.92 0 0012.012 2zm.003 16.486h-.003a8.27 8.27 0 01-4.22-1.157l-.303-.18-3.04.796.81-2.961-.197-.314a8.27 8.27 0 01-1.272-4.474c0-4.564 3.714-8.277 8.28-8.277 2.21 0 4.288.862 5.852 2.427a8.23 8.23 0 012.422 5.857c0 4.565-3.715 8.279-8.281 8.279zm4.536-6.2c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.053-.388-2.006-1.238-.742-.662-1.243-1.48-1.388-1.729-.145-.249-.015-.384.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.406 1.016 2.572.124.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.596.19 1.138.163 1.567.099.479-.071 1.472-.602 1.679-1.182.207-.581.207-1.079.145-1.182-.062-.103-.228-.166-.477-.29z"/>
        </svg>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-extrabold uppercase tracking-wider pr-1">
          WhatsApp Order
        </span>

        {/* Pulse Notification Ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-xs"></span>
        </span>
      </button>
    </div>
  );
};
