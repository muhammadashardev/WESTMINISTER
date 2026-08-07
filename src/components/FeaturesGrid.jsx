import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bone, Camera, Trophy, GraduationCap, Handshake } from 'lucide-react';

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

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      title: "MEET EXTRAORDINARY DOGS",
      description: "Get up close with hundreds of rare, beautiful, and highly trained breeds from across the country.",
      icon: <Heart className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      title: "ENJOY LIVE COMPETITIONS",
      description: "Feel the electrifying energy of agility, obedience, and conformation events unfolding live.",
      icon: <Bone className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      title: "FAMILY-FRIENDLY FUN",
      description: "An unforgettable experience for dog lovers of all ages, packed with interactive educational events.",
      icon: <Camera className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      title: "WATCH CHAMPIONS COMPETE",
      description: "Witness history in the making as elite purebred dogs vie for the prestigious Best in Show title.",
      icon: <Trophy className="w-5 h-5 text-white" />
    },
    {
      id: 5,
      title: "LEARN FROM EXPERTS",
      description: "Discover breed standards, grooming secrets, and health tips straight from world-class handlers.",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      id: 6,
      title: "CONNECT & SHARE",
      description: "Join a passionate, global community dedicated to canine welfare and responsible ownership.",
      icon: <Handshake className="w-5 h-5 text-white" />
    }
  ];

  return (
    <motion.section 
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto" variants={containerVariants}>
         
         {/* Grid Container (3x2 Layout) */}
         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
           {features.map((item) => (
             <motion.div 
               key={item.id}
               className="bg-white rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100/80"
               variants={itemVariants}
               whileHover={{ y: -8 }}
               transition={{ duration: 0.3 }}
             >
              {/* Purple Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#2E145B] flex items-center justify-center mb-6 shadow-md">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-[17px] font-black text-[#11052C] uppercase tracking-tight mb-3">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal max-w-sm">
                {item.description}
              </p>
             </motion.div>
           ))}
         </motion.div>

       </motion.div>
     </motion.section>
   );
 }
