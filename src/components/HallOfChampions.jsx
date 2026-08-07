import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Award } from 'lucide-react';

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

export default function HallOfChampions() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 340 : 280;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const champions = [
    {
      id: 1,
      year: "2024",
      name: "Standard Poodle",
      details: "GCHG Stone Run Blackstone • Non-Sp...",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600",
      gis: "G.I.S"
    },
    {
      id: 2,
      year: "2023",
      name: "German Shepherd",
      details: "GCHG Kaleef's Elsa • Herding Group",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=600",
      gis: "G.I.S"
    },
    {
      id: 3,
      year: "2022",
      name: "Bloodhound",
      details: "GCHG Flessner's Toot's • Hound Group",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
      gis: "G.I.S"
    },
    {
      id: 4,
      year: "2021",
      name: "Pekingese",
      details: "GCHG Pequest Wasabi • Toy Group",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
      gis: "G.I.S"
    },
    {
      id: 5,
      year: "2020",
      name: "Siberian Husky",
      details: "GCHG Topaz Decathlon • Working Group",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2fea4?auto=format&fit=crop&q=80&w=600",
      gis: "G.I.S"
    }
  ];

  return (
    <motion.section 
      className="w-full py-20 bg-[#F9F9FB] font-sans overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={containerVariants}>
         
         {/* ================= HEADER SECTION ================= */}
         <motion.div className="flex flex-col items-center text-center mb-16" variants={itemVariants}>
           <div className="bg-[#17062A] text-white text-[11px] font-bold px-6 py-2 rounded-full uppercase tracking-wider mb-4 shadow-sm">
             Winners Spotlight
           </div>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17062A] uppercase tracking-tight">
             HALL OF CHAMPIONS
           </h2>
         </motion.div>

         {/* ================= CARDS SLIDER CONTAINER ================= */}
         <motion.div 
           ref={scrollRef}
           className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 px-2 snap-x snap-mandatory scroll-smooth"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
           variants={containerVariants}
         >
           {champions.map((item) => (
             <motion.div 
               key={item.id}
               className="min-w-[280px] sm:min-w-[310px] lg:min-w-[320px] flex-1 bg-white rounded-[28px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between snap-start group"
               variants={itemVariants}
               whileHover={{ y: -5 }}
               transition={{ duration: 0.3 }}
             >
               <div>
                 <div className="relative w-full h-[220px] sm:h-[230px] rounded-[20px] overflow-hidden mb-4 bg-gray-100">
                   <img 
                     src={item.image} 
                     alt={item.name}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   
                   {/* Year Badge (Yellow/Amber) */}
                   <div className="absolute top-3 left-3 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                     {item.year}
                   </div>

                   {/* G.I.S Badge */}
                   <div className="absolute top-3 right-3 bg-[#17062A]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
                     <Award size={12} className="text-[#F59E0B]" />
                     <span>{item.gis}</span>
                   </div>
                 </div>

                 {/* Content Details */}
                 <h3 className="text-lg font-black text-[#17062A] tracking-tight mb-1">
                   {item.name}
                 </h3>
                 <p className="text-[12px] text-gray-500 font-medium leading-relaxed mb-4 line-clamp-1">
                   {item.details}
                 </p>
               </div>

               {/* Bottom Action inside Card */}
               <div className="pt-3 border-t border-gray-100 flex items-center justify-between cursor-pointer group/link">
                 <span className="text-xs font-bold text-[#17062A] uppercase tracking-wide group-hover/link:text-amber-600 transition-colors">
                   View Pedigree
                 </span>
                 <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#17062A] group-hover/link:bg-[#17062A] group-hover/link:text-white transition-all">
                   <ArrowRight size={14} />
                 </div>
               </div>

             </motion.div>
           ))}
         </motion.div>

         {/* ================= BOTTOM CONTROLS & BUTTONS ================= */}
         <motion.div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-6" variants={itemVariants}>
          
          {/* Left & Right Slider Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:bg-[#17062A] hover:text-white hover:border-[#17062A] text-[#17062A] flex items-center justify-center shadow-sm transition-all cursor-pointer active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:bg-[#17062A] hover:text-white hover:border-[#17062A] text-[#17062A] flex items-center justify-center shadow-sm transition-all cursor-pointer active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-white hover:bg-gray-50 text-[#17062A] border border-gray-300 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-sm transition-all cursor-pointer active:scale-95">
              Breed Standards
            </button>
            
            <button className="bg-[#17062A] hover:bg-[#270b47] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-purple-900/10 transition-all flex items-center gap-2 group cursor-pointer active:scale-95">
              <span>View Winners Archive</span>
              <ArrowRight size={16} className="text-[#F59E0B] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

         </motion.div>

       </motion.div>
     </motion.section>
   );
}