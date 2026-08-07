import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Star, PawPrint, Menu, X } from 'lucide-react';
import WestminsterHeroright from '/Image.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function WestminsterHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden bg-[#F6F0FD] flex flex-col justify-between font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* Full Hero Background Image */}
      <div className="absolute top-30 lg:-top-2 inset-0 z-0 select-none pointer-events-none hidden lg:block">
        <img
          src={WestminsterHeroright}
          alt="Westminster Background Graphic"
          className="w-full h-full object-right-bottom lg:object-right"
        />
      </div>
      {/* Main Content Layer */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 flex-1 flex flex-col">

        {/* ================= NAVBAR ================= */}
        <header className="relative z-50">
          <nav className="bg-white/60 backdrop-blur-md rounded-3xl shadow-md px-4 sm:px-7 py-5 flex items-center justify-between transition-all">

            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#3B0764] flex items-center justify-center text-white">
                <img src="/logo-shield.png" alt="" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold tracking-wider text-xs sm:text-sm text-[#2E0854] uppercase">
                  THE WESTMINSTER
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-gray-500 font-semibold uppercase">
                  KENNEL CLUB
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
              <a href="#attend" className="hover:text-[#6B21A8] transition-colors">Attend</a>
              <a href="#result" className="hover:text-[#6B21A8] transition-colors">Result</a>

              <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#6B21A8]">
                <span>Learn</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#6B21A8]">
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <a href="#media" className="hover:text-[#6B21A8] transition-colors">Media</a>
              <a href="#about" className="hover:text-[#6B21A8] transition-colors">About Us</a>
            </div>

            {/* Actions (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="bg-[#EAB308] hover:bg-[#D97706] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 active:scale-95">
                Get Ticket Now
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#6B21A8]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 border border-purple-100 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
              <a href="#attend" className="font-semibold text-gray-700 hover:text-[#6B21A8]">Attend</a>
              <a href="#result" className="font-semibold text-gray-700 hover:text-[#6B21A8]">Result</a>
              <a href="#learn" className="font-semibold text-gray-700 hover:text-[#6B21A8]">Learn</a>
              <a href="#shop" className="font-semibold text-gray-700 hover:text-[#6B21A8]">Shop</a>
              <a href="#media" className="font-semibold text-gray-700 hover:text-[#6B21A8]">Media</a>
              <a href="#about" className="font-semibold text-gray-700 hover:text-[#6B21A8]">About Us</a>
              <hr className="border-gray-100 my-1" />
              <div className="flex items-center gap-3 pt-2">
                <button className="w-full bg-[#EAB308] text-white font-bold text-sm py-2.5 rounded-full shadow-sm">
                  Get Ticket Now
                </button>
                <button className="p-2.5 rounded-full bg-gray-100 text-gray-700">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO CONTENT ================= */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto pt-8 pb-12"
          variants={containerVariants}
        >

          {/* Left Column Text Content */}
          <motion.div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start" variants={itemVariants}>

            {/* Top Pill Tag */}
            <motion.div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200/60 shadow-sm px-4 py-1.5 rounded-full mb-6" variants={itemVariants}>
              <Star className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-700 uppercase">
                THE WORLD'S MOST PRESTIGIOUS DOG SHOW
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] tracking-tight text-[#11052C] uppercase mb-8" variants={itemVariants}>
              WHERE CHAMPIONS <br className="hidden sm:inline" />
              ARE CELEBRATED. <br />
              WHERE EVERY <br className="hidden sm:inline" />
              BREED SHINES.
            </motion.h1>

            {/* Action Buttons */}
            <motion.div className="flex  items-center gap-4" variants={itemVariants}>
              <motion.button
                className="bg-[#EAB308] hover:bg-[#D97706] text-white whitespace-nowrap font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="bg-[#0B031A] hover:bg-[#200A40] text-white whitespace-nowrap font-bold text-sm sm:text-base px-4 py-3.5 rounded-full shadow-lg transition-all duration-200 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Event Tickets
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Spacer (Allows the background image's boy & dog to be visible) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[500px]"></div>

        </motion.div>

      </div>
    </motion.div>
  );
}