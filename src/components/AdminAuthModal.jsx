import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Lock,
  User,
  Shield,
  Scissors,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  X,
  KeyRound,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminAuthModal = ({ fullPage = false }) => {
  const { isAdminAuthOpen, setIsAdminAuthOpen, verifyAdminAuth, setIsAdminMode } = useShop();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('owner'); // 'owner' or 'staff'
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If not full-page and modal is closed, don't render
  if (!fullPage && !isAdminAuthOpen) return null;

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await verifyAdminAuth(username, password, rememberMe, selectedRole);
      if (res && res.success) {
        setIsAdminMode(true);
        setIsAdminAuthOpen(false);
      } else {
        setErrorMsg(res?.message || 'Invalid credentials. Please check your username and password.');
      }
    } catch {
      setErrorMsg('An error occurred during authentication. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleReturnToStore = () => {
    setErrorMsg('');
    setIsAdminAuthOpen(false);
    setIsAdminMode(false);
    if (window.location.hash || window.location.search || (window.location.pathname && window.location.pathname !== '/' && window.location.pathname !== '/index.html')) {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 12 }}
      transition={{ duration: 0.22 }}
      className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 relative font-poppins my-auto text-gray-900"
    >
      {/* Top Close Button (if popup modal) */}
      {!fullPage && (
        <button
          onClick={handleReturnToStore}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Brand Logo & Heading */}
      <div className="flex flex-col items-center text-center mb-5">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleReturnToStore();
          }}
          className="relative mb-3 group cursor-pointer block no-underline"
          title="Return to Home Page"
        >
          <img
            src="/logo.png"
            alt="Store Logo"
            className="h-16 sm:h-20 w-auto object-contain rounded-full shadow-md border-2 border-pink-200 group-hover:scale-105 transition-transform"
          />
          <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full shadow border border-white">
            <Shield className="w-3.5 h-3.5 text-pink-400" />
          </div>
        </a>

        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-600 mb-1">
          MANAGEMENT PORTAL
        </span>
        <h1 className="text-2xl font-black text-neutral-950 tracking-tight leading-tight">
          Admin Sign In
        </h1>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          Sign in to manage store catalog, orders &amp; inventory
        </p>
      </div>

      {/* Role Selector (Owner / Admin vs Staff / Manager) */}
      <div className="flex justify-center items-center gap-3 my-4 p-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
        <button
          type="button"
          onClick={() => setSelectedRole('owner')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedRole === 'owner'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 hover:text-pink-600'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Owner / Admin</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedRole('staff')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedRole === 'staff'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 hover:text-pink-600'
          }`}
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>Staff / Manager</span>
        </button>
      </div>



      {/* Error Message Box */}
      {errorMsg && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2.5 font-semibold"
        >
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </motion.div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Username input */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-pink-600" />
              <span>Username / Email</span>
            </span>
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="rubina or admin"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-xs sm:text-sm pl-3.5 pr-4 py-2.5 sm:py-3 rounded-xl focus:bg-white focus:border-pink-600 focus:ring-2 focus:ring-pink-100 outline-none transition-all font-medium"
              autoComplete="username"
            />
          </div>
        </div>

        {/* Password input */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-gray-700 uppercase">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-pink-600" />
                <span>Password</span>
              </span>
            </label>
            <span className="text-[10px] text-pink-600 font-bold hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-xs sm:text-sm pl-3.5 pr-11 py-2.5 sm:py-3 rounded-xl focus:bg-white focus:border-pink-600 focus:ring-2 focus:ring-pink-100 outline-none transition-all font-mono tracking-wider"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-700 cursor-pointer p-1"
              tabIndex={-1}
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember me & security indicator */}
        <div className="flex items-center justify-between text-xs pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600 font-medium">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded text-black border-gray-300 focus:ring-pink-500 cursor-pointer accent-pink-600"
            />
            <span>Remember session</span>
          </label>
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Secure SSL</span>
          </span>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 bg-gradient-to-r from-black via-neutral-900 to-pink-600 hover:from-neutral-900 hover:to-pink-700 text-white font-extrabold py-3.5 px-5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-[0.99] disabled:opacity-75"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Authenticating...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Sign In to Admin Panel</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </button>

        {/* Return to storefront */}
        <div className="pt-2 text-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleReturnToStore();
            }}
            className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer no-underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </a>
        </div>
      </form>
    </motion.div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4 font-poppins">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 font-poppins">
      <AnimatePresence>{content}</AnimatePresence>
    </div>
  );
};
