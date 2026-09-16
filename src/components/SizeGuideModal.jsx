import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SizeGuideModal = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [activeTab, setActiveTab] = useState('women');

  if (!isSizeGuideOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSizeGuideOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 space-y-5 border border-gray-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-clive-gold" />
              <h3 className="text-lg font-extrabold text-clive-dark uppercase font-poppins">
                FOOTWEAR SIZE GUIDE
              </h3>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-clive-dark"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Gender Selector Tabs */}
          <div className="flex border-b border-gray-200 gap-4">
            {['women', 'men', 'kids'].map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveTab(gender)}
                className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                  activeTab === gender ? 'text-clive-gold border-b-2 border-clive-gold' : 'text-gray-500 hover:text-clive-dark'
                }`}
              >
                {gender}'s Sizing
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-center text-xs">
              <thead className="bg-clive-dark text-white uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-2.5 px-3">EU Size</th>
                  <th className="py-2.5 px-3">US Size</th>
                  <th className="py-2.5 px-3">UK Size</th>
                  <th className="py-2.5 px-3">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-gray-700">
                {activeTab === 'women' && (
                  <>
                    <tr className="hover:bg-clive-cream"><td className="py-2">36</td><td>5.5</td><td>3.5</td><td>22.5 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">37</td><td>6.5</td><td>4.5</td><td>23.5 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">38</td><td>7.5</td><td>5.5</td><td>24.0 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">39</td><td>8.5</td><td>6.5</td><td>24.8 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">40</td><td>9.5</td><td>7.5</td><td>25.5 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">41</td><td>10.5</td><td>8.5</td><td>26.2 cm</td></tr>
                  </>
                )}
                {activeTab === 'men' && (
                  <>
                    <tr className="hover:bg-clive-cream"><td className="py-2">40</td><td>7.0</td><td>6.5</td><td>25.0 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">41</td><td>8.0</td><td>7.5</td><td>25.8 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">42</td><td>9.0</td><td>8.5</td><td>26.5 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">43</td><td>10.0</td><td>9.5</td><td>27.3 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">44</td><td>11.0</td><td>10.5</td><td>28.0 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">45</td><td>12.0</td><td>11.5</td><td>28.8 cm</td></tr>
                  </>
                )}
                {activeTab === 'kids' && (
                  <>
                    <tr className="hover:bg-clive-cream"><td className="py-2">28</td><td>10.5K</td><td>9.5K</td><td>17.5 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">30</td><td>12.0K</td><td>11.0K</td><td>18.8 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">32</td><td>1.0Y</td><td>13.0K</td><td>20.0 cm</td></tr>
                    <tr className="hover:bg-clive-cream"><td className="py-2">34</td><td>2.5Y</td><td>2.0Y</td><td>21.5 cm</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-clive-cream/80 p-3.5 rounded text-[11px] text-gray-600 space-y-1 border border-gray-200">
            <strong className="text-clive-dark uppercase font-bold block">How to Measure Your Foot:</strong>
            <p>1. Stand straight on a piece of paper on a flat surface.</p>
            <p>2. Mark the longest tip of your toe and the back of your heel.</p>
            <p>3. Measure the distance with a ruler in centimeters and compare with the table above.</p>
          </div>

          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full bg-clive-dark hover:bg-clive-gold text-white py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors shadow"
          >
            Got It
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
