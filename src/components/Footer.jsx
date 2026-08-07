import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="relative bg-[#11052C] text-white pt-28 pb-10 overflow-hidden font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      
      {/* Top Wavy Shape SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[70px] sm:h-[100px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32 C320,96 640,96 960,64 C1280,32 1380,64 1440,80 L1440,0 L0,0 Z" fill="#ffffff"></path>
        </svg>
      </div>

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20" variants={containerVariants}>
        
        {/* Main Footer Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10 items-start" variants={containerVariants}>
          
          {/* Column 1: Brand & Socials (Span 4) */}
          <motion.div className="lg:col-span-4 flex flex-col items-start" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#11052C] font-bold shadow-md">
                W
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">THE WESTMINSTER</h3>
                <p className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">KENNEL CLUB</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-6 max-w-xs font-normal">
              We pride ourselves on building meaningful relationships with our dog-loving community.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.94C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Contact Info with White Circular Badges (Span 4) */}
          <motion.div className="lg:col-span-4 flex flex-col space-y-6 lg:border-x lg:border-white/10 lg:px-8" variants={itemVariants}>
            
            {/* Contact Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0 shadow-md">
                <Phone size={18} className="text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-0.5">Help For Call</span>
                <span className="text-sm font-black text-white tracking-tight">+07-528-5698-58</span>
              </div>
            </div>

            {/* Contact Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0 shadow-md">
                <MapPin size={18} className="text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-0.5">Our Address</span>
                <span className="text-sm font-black text-white tracking-tight">+07-528-5698-58</span>
              </div>
            </div>

            {/* Contact Item 3 */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0 shadow-md">
                <MessageSquare size={18} className="text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-0.5">WhatsApp</span>
                <span className="text-sm font-black text-white tracking-tight">+07-528-5698-58</span>
              </div>
            </div>

          </motion.div>

          {/* Column 3 & 4: Quick Links & Media (Span 4) */}
          <motion.div className="lg:col-span-4 grid grid-cols-2 gap-6 lg:pl-4" variants={itemVariants}>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-5">Quick Links</h4>
              <ul className="space-y-3 text-xs text-gray-300 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Buy Tickets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dog Shows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Field Trial</a></li>
              </ul>
            </div>

            {/* Media */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-5">Media</h4>
              <ul className="space-y-3 text-xs text-gray-300 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Videos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Viewing Schedule</a></li>
              </ul>
            </div>

          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-50 text-xs text-gray-400" variants={itemVariants}>
          <p className="font-medium">
            Copyright 2025 <span className="text-[#F59E0B] font-bold">Babét</span>. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions.</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Get Support</a>
          </div>
        </motion.div>

      </motion.div>
    </motion.footer>
  );
}
