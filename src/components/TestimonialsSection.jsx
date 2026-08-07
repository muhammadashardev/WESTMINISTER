import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

export default function TestimonialsSection() {
  return (
    <motion.section 
      className="w-full py-20 bg-white font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={containerVariants}>
         
         {/* ================= HEADER SECTION ================= */}
         <motion.div className="flex flex-col items-center text-center mb-16" variants={itemVariants}>
           <div className="bg-[#17062A] text-white text-[11px] font-bold px-6 py-2 rounded-full uppercase tracking-wider mb-4 shadow-sm">
             Testimonials
           </div>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17062A] uppercase tracking-tight">
             WHAT VISITORS SAY
           </h2>
         </motion.div>

         {/* ================= 3-COLUMN GRID ================= */}
         <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14" variants={containerVariants}>
           
           {/* Card 1: Image Card with Floating Google Rating */}
           <motion.div className="relative w-full h-[420px] rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-gray-100" variants={itemVariants}>
            <img 
              src="2e1af57df64f58375a9e22b43d15eddea9b58096.png"
              alt="Dog Show Handler"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Google Review Box */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-[310px] bg-white/95 backdrop-blur-md rounded-[20px] p-4 shadow-xl border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                {/* Google Logo SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.2v3.15C3.18 21.31 7.23 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.39-1.49-.39-2.24s.14-1.52.39-2.24V6.61H1.2C.43 8.16 0 9.93 0 12s.43 3.84 1.2 5.39l4.07-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.18 2.69 1.2 6.61l4.07 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-black text-[#17062A]">4.9/5</span>
                  <div className="flex text-[#5B21B6]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#5B21B6]" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">
                  Our 120k Happy Customer
                </p>
              </div>
            </div>
           </motion.div>

           {/* Card 2: Testimonial Card */}
           <motion.div className="bg-white rounded-[28px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between" variants={itemVariants}>
            <div>
              <div className="flex gap-1 text-[#5B21B6] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#5B21B6]" />
                ))}
              </div>
              <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal mb-8">
                &ldquo;The practical tools &amp; mindset shifts I gain during coach helped me become a more effective leader &amp; communicator. I highly recommend this coaching to anyone seeking real growth.&rdquo;
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                alt="Jane Cooper"
                className="w-11 h-11 rounded-full object-cover shadow-sm"
              />
              <div>
                <h3 className="text-sm font-bold text-[#17062A]">Jane Cooper</h3>
                <p className="text-[11px] text-gray-500 font-medium">Founder &amp; Lead Coach</p>
              </div>
            </div>
           </motion.div>

            {/* Card 3: Testimonial Card */}
            <motion.div className="bg-white rounded-[28px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between" variants={itemVariants}>
             <div>
               <div className="flex gap-1 text-[#5B21B6] mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} className="fill-[#5B21B6]" />
                 ))}
               </div>
               <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal mb-8">
                 &ldquo;The practical tools & mindset shifts I gain during coach helped me become a more effective leader & communicator. I highly recommend this coaching to anyone seeking real growth.&rdquo;
               </p>
             </div>
             <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" 
                 alt="Emily Rodriguez"
                 className="w-11 h-11 rounded-full object-cover shadow-sm"
               />
               <div>
                 <h3 className="text-sm font-bold text-[#17062A]">Emily Rodriguez</h3>
                 <p className="text-[11px] text-gray-500 font-medium">Career Professional</p>
               </div>
             </div>
           </motion.div>

         </motion.div>

         {/* ================= BOTTOM SUB-FOOTER BAR ================= */}
         <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-4 px-6 rounded-full bg-gray-50/80 border border-gray-100 max-w-4xl mx-auto mb-10 text-xs text-gray-600" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
              alt="Avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span>Where smart design and clean energy come together powerfully – <strong className="text-[#17062A] cursor-pointer hover:underline">View All Reviews</strong></span>
          </div>
          <div className="hidden lg:block text-gray-300">|</div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#17062A]">4.9/5</span>
            <div className="flex text-[#5B21B6]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#5B21B6]" />
              ))}
            </div>
            <span className="text-gray-500">Over 4200 Reviews</span>
          </div>
         </motion.div>

         {/* ================= BOTTOM CENTERED BUTTON ================= */}
         <motion.div className="flex justify-center" variants={itemVariants}>
           <motion.button 
             className="bg-[#17062A] hover:bg-[#250b42] text-white text-xs sm:text-sm font-bold px-10 py-3.5 rounded-full shadow-lg shadow-purple-900/10 transition-all cursor-pointer active:scale-95"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             Blogs
           </motion.button>
         </motion.div>

       </motion.div>
     </motion.section>
   );
 }
