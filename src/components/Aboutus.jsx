import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import BgShape from '/bg-shape.png';

export default function AboutSection() {
  const results = [
    "By Group",
    "By Breed",
    "Masters Agility",
    "Junior Showmanship",
    "Flyball"
  ];

  return (
    <section className="relative w-full min-h-screen py-20 lg:py-28 bg-[#FDFDFD] overflow-hidden font-sans flex items-center">
      
      {/* Background Shape via URL with Gray Filter */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none bg-cover bg-center bg-no-repeat grayscale brightness-90 contrast-125 opacity-70"
        style={{ backgroundImage: `url(${BgShape})` }}
      />
        
      {/* Subtle Concentric Rings (Top Right & Bottom Left) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] border-[1px] border-gray-300 rounded-full opacity-40" />
        <div className="absolute top-[-5%] right-[-2%] w-[300px] h-[300px] border-[1px] border-gray-300 rounded-full opacity-40" />
        
        <div className="absolute bottom-[-15%] left-[10%] w-[500px] h-[500px] border-[1px] border-gray-300 rounded-full opacity-40" />
        <div className="absolute bottom-[-10%] left-[15%] w-[400px] h-[400px] border-[1px] border-gray-300 rounded-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: IMAGES ================= */}
          <div className="relative w-full flex justify-center lg:justify-start pt-10 pb-20 lg:py-10">
            <div className="relative w-full max-w-[420px] h-[480px]">
              
              {/* Main Image (Dog Show Winners) */}
              <div className="absolute top-0 left-0 w-[75%] h-[400px] rounded-[32px] overflow-hidden rotate-[-6deg] shadow-xl z-10 border-4 border-white bg-gray-200">
                <img 
                  src="/main-dog-show.jpg" 
                  alt="Dog Show Winners"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Overlapping Image (Agility Course) */}
              <div className="absolute top-[8%] right-0 w-[55%] h-[260px] rounded-[32px] overflow-hidden rotate-[4deg] shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-20 border-4 border-white bg-gray-200">
                <img 
                  src="/agility-course.jpg" 
                  alt="Agility Championship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dotted Arrow SVG connecting Image to Box */}
              <div className="absolute bottom-[20%] right-[32%] z-10 hidden sm:block">
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 0 C70 40, 10 60, 25 110" stroke="#374151" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                  <path d="M21 105 L25 112 L30 104" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 25 Years Badge */}
              <div className="absolute bottom-[5%] right-[15%] bg-[#2E0854] text-white rounded-[20px] p-4 pr-6 flex items-center gap-3 shadow-2xl z-30 transform hover:scale-105 transition-transform cursor-default">
                <span className="text-4xl font-black leading-none">25</span>
                <span className="text-[11px] font-medium leading-tight opacity-90">
                  Years of <br /> experience
                </span>
              </div>

            </div>
          </div>


          {/* ================= RIGHT COLUMN: TEXT CONTENT ================= */}
          <div className="flex flex-col items-start lg:pl-10">
            
            {/* Pill Badge */}
            <div className="inline-flex bg-[#2E0854] text-white text-xs font-semibold px-6 py-2 rounded-full mb-5 shadow-sm">
              About us
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-black leading-[1.1] text-[#11052C] uppercase mb-4 tracking-tight">
              A LEGACY OF EXCELLENCE <br /> SINCE 1877
            </h2>

            {/* Paragraph */}
            <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed mb-8 max-w-xl">
              For over a century, Westminster has celebrated the beauty, athleticism, 
              and heritage of purebred dogs while promoting responsible ownership, 
              education, and canine excellence.
            </p>

            {/* Results Box */}
            <div className="relative w-full bg-[#EFEAF4] rounded-xl p-6 sm:p-7 mb-8 overflow-hidden">
              {/* Left Purple Border accent */}
              <div className="absolute top-0 left-0 bottom-0 w-[5px] bg-[#2E0854] rounded-l-xl"></div>
              
              <h3 className="text-[15px] font-bold text-[#11052C] uppercase mb-5 tracking-wide">
                150TH WESTMINSTER DOG SHOW RESULTS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2">
                {results.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-[18px] h-[18px] text-white fill-[#2E0854] shrink-0" />
                    <span className="text-[13px] font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Button & Founder */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-bold px-7 py-3 rounded-full shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95">
                More About Us
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
                  <img 
                    src="/bessie-cooper.jpg" 
                    alt="Bessie Cooper"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#11052C] leading-tight">
                    Bessie cooper
                  </span>
                  <span className="text-[12px] font-medium text-gray-500">
                    Co-founder
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}