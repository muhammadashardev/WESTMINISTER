import React from 'react';
import { motion } from 'framer-motion';

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

const FollowSection = () => {
  const cards = [
    {
      id: 1,
      type: 'image',
      badge: 'agility',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      type: 'image',
      badge: 'handler-life',
      image: '/1650fcbc4e32c0c52a2817805ea8974412253ff6.png',
    },
    {
      id: 3,
      type: 'text',
    },
    {
      id: 4,
      type: 'image',
      badge: 'Best-in-show',
      image: '/dc307f15ac43af8306aabf9b777218647843736b.png',
    },
  ];

  return (
    <section className="w-full bg-white p-4 sm:p-6 md:p-8 font-sans">
      {/* Main Purple Container */}
      <motion.div 
        className="bg-[#17062A] rounded-[32px] md:rounded-[48px] px-6 py-16 md:px-12 md:py-20 max-w-[1400px] mx-auto flex flex-col items-center shadow-2xl"
        variants={containerVariants}
      >
         
         {/* Top Pill Badge */}
         <motion.button 
           className="border border-white/20 bg-[#2E145B] hover:bg-white/10 transition-colors rounded-full px-6 py-2 text-[13px] font-medium text-white/90 mb-8 tracking-wide"
           variants={itemVariants}
         >
           Follow us more
         </motion.button>

         {/* Heading */}
         <motion.h2 
           className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-12 text-center"
           variants={itemVariants}
         >
           OUR INSTAGRAM
         </motion.h2>

         {/* Grid Layout */}
         <motion.div 
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl"
           variants={containerVariants}
         >
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <motion.div 
                  key={card.id} 
                  className="relative w-full aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={`Instagram post ${card.badge}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Top Left Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-medium px-4 py-1.5 rounded-full capitalize tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  {/* Top Right Instagram Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-white/30 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37a4 4 0 1 1-7.99-.5 4 4 0 0 1 7.99.5z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    </div>
                   </div>
                 </motion.div>
               );
             }

            // Guess the Breed Text Card
            return (
              <motion.div 
                key={card.id} 
                className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#261346] border border-[#F59E0B] flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-[#2d1752] transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Custom Dog Outline Icon matching the design */}
                <div className="mb-6 text-[#F59E0B]">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 5c0-1.5-1.5-2.5-3.5-2-2.5.5-4 5-3.5 6 .5.8 1.5 2 2 2" />
                    <path d="M14 5c0-1.5 1.5-2.5 3.5-2 2.5.5 4 5 3.5 6-.5.8-1.5 2-2 2" />
                    <path d="M8 14c0 2 2 4 4 4s4-2 4-4" />
                    <circle cx="9" cy="11" r="1" fill="currentColor" />
                    <circle cx="15" cy="11" r="1" fill="currentColor" />
                    <path d="M12 17v1" />
                    <path d="M10 18h4" />
                  </svg>
                </div>

                <h3 className="text-2xl text-white font-serif font-semibold mb-4 tracking-wide">
                  Guess the Breed
                </h3>
                
                <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed max-w-[80%] font-medium">
                  Weekly interactive trivia on our stories!
                 </p>
               </motion.div>
             );
           })}
        </motion.div>

      </motion.div>
    </section>
  );
}
 export default FollowSection;
