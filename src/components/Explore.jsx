import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TraditionSection() {
  return (
    <motion.section 
      className="relative w-full min-h-screen py-20 lg:py-28 bg-white overflow-hidden font-sans flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 w-full" variants={containerVariants}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: IMAGES & BADGE ================= */}
          <motion.div className="relative w-full flex justify-center lg:justify-start" variants={itemVariants}>
            <div className="relative w-full max-w-[500px] h-[520px]">
              
              {/* Main Background/Right Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 right-0 w-[78%] h-[420px] rounded-[32px] overflow-hidden shadow-2xl z-10 bg-gray-100 border-4 border-white"
              >
                <img 
                  src="/1aed4646c4cedec9f1e77e7af9bc7bb44126242f copy.jpg" 
                  alt="Dog Show Competition"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlapping Bottom-Left Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-[22%] left-0 w-[55%] h-[300px] rounded-[32px] overflow-hidden shadow-2xl z-20 bg-gray-100 border-4 border-white"
              >
                <img 
                  src="/About Us Image Box 1 Start → About Us Image Start → Figure.png"
                  alt="Handler with Dog"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Experience Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 left-[28%] bg-[#11052C] text-white rounded-[24px] p-6 shadow-2xl z-30 w-[270px] border border-white/10"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black tracking-tight text-white">25+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Years Experience
                  </span>
                </div>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  With 25 years experience in agent finding and championship pedigree.
                </p>
              </motion.div>

            </div>
          </motion.div>


          {/* ================= RIGHT COLUMN: CONTENT ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-start lg:pl-6"
          >
            
            {/* Explore More Badge */}
            <div className="inline-flex bg-[#11052C] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide shadow-sm">
              Explore more
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.1] text-[#11052C] uppercase mb-6 tracking-tight">
              MORE THAN A SHOW. <br />
              IT'S A TRADITION.
            </h2>

            {/* Paragraph */}
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-xl font-normal">
              Founded in 1877, The Westminster Kennel Club is America's oldest organization 
              dedicated to the sport of purebred dogs. We champion health, breed integrity, and the 
              deep, lifelong bond between dogs and humans.
            </p>

            {/* Features List */}
            <motion.div className="space-y-6 mb-10 w-full" variants={containerVariants}>
              
              {/* Feature 1 */}
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#11052C] shrink-0 bg-gray-50/50">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#11052C] mb-1">
                    Prestige & Tradition
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                    Celebrating over 140 years of championship history and unmatched canine heritage.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#11052C] shrink-0 bg-gray-50/50">
                  <Trophy size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#11052C] mb-1">
                    Breed Excellence
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                    The highest standards of canine conformation and athletic performance on earth.
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2E145B] hover:bg-[#200a4d] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-full shadow-lg shadow-purple-900/10 transition-all duration-200 flex items-center gap-3 group cursor-pointer"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.button>

          </motion.div>

        </div>
      </motion.div>
    </motion.section>
  );
}