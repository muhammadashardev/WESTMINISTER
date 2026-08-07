import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function BreedShowcase() {
  const breeds = [
    {
      id: 1,
      category: "Sporting",
      name: "Golden Retriever",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 2,
      category: "Working",
      name: "Siberian Husky",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2fea4?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 3,
      category: "Terrier",
      name: "Jack Russell",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 4,
      category: "Hound",
      name: "Beagle",
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 5,
      category: "Toy",
      name: "Pomeranian",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 6,
      category: "Non-Sporting",
      name: "French Bulldog",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 7,
      category: "Herding",
      name: "Border Collie",
      image: "https://images.unsplash.com/photo-1503771545725-174de055f2d5?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Main Dark Container */}
      <div className="bg-[#130327] rounded-[40px] px-6 py-16 md:px-12 md:py-20 max-w-[1440px] mx-auto flex flex-col items-center shadow-2xl relative overflow-hidden">
        
        {/* Top Pill Badge */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-6 py-2 text-[12px] font-semibold text-white/90 mb-6 tracking-widest uppercase">
          Breed Showcase
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4 text-center">
          MEET REMARKABLE DOG BREEDS
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm text-center max-w-xl mb-10 leading-relaxed font-normal">
          Explore hundreds of breeds, each with its own history, personality, and unique characteristics.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mb-14">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search Your Favorite Breed"
            className="w-full bg-[#200B3B] text-white placeholder-gray-400 text-xs sm:text-sm rounded-full pl-12 pr-6 py-4 border border-white/10 focus:outline-none focus:border-white/30 transition-all shadow-inner"
          />
        </div>

        {/* Breeds Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 w-full mb-12">
          {breeds.map((breed) => (
            <div 
              key={breed.id}
              className="bg-[#1C0834] border border-white/10 rounded-[24px] p-3 flex flex-col items-center group hover:border-white/30 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="w-full h-44 sm:h-48 rounded-[18px] overflow-hidden mb-4 bg-gray-800">
                <img 
                  src={breed.image} 
                  alt={breed.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Text Info */}
              <span className="text-sm font-bold text-white tracking-tight mb-1 text-center">
                {breed.category}
              </span>
              <span className="text-[11px] font-medium text-gray-400 text-center tracking-wide">
                {breed.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <button className="bg-[#200B3B] hover:bg-[#2c104f] border border-white/15 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 flex items-center gap-3 group cursor-pointer">
          <span>Explore All Breeds</span>
          <ArrowRight size={16} className="text-[#F59E0B] transition-transform group-hover:translate-x-1" />
        </button>

      </div>
    </section>
  );
}