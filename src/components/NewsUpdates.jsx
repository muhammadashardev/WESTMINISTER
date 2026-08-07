import React from 'react';
import { Calendar, User, ChevronsRight } from 'lucide-react';

export default function NewsUpdates() {
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
      date: "24 Jun, 2025",
      author: "by admin",
      title: "A Complete Guide To Planning Your First International"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600",
      date: "24 Jun, 2025",
      author: "by admin",
      title: "First Time Abroad? A Simple Guide To Stress-Free Planning"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
      date: "24 Jun, 2025",
      author: "by admin",
      title: "Planning Your First Trip Overseas? Start Here!"
    }
  ];

  return (
    <section className="w-full py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-[#17062A] text-white text-[11px] font-bold px-6 py-2 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            News &amp; Articles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17062A] uppercase tracking-tight">
            NEWS &amp; UPDATES
          </h2>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-[32px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-[230px] sm:h-[240px] rounded-[24px] overflow-hidden mb-5 bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Metadata (Date & Author) */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#17062A]" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={13} className="text-[#17062A]" />
                    <span>{item.author}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-black text-[#17062A] tracking-tight leading-snug mb-6">
                  {item.title}
                </h3>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between cursor-pointer group/link">
                <span className="text-xs font-bold text-[#17062A] uppercase tracking-wider group-hover/link:text-purple-700 transition-colors flex items-center gap-1">
                  Read More <ChevronsRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}