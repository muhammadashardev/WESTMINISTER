import React from 'react';
import { Check, PawPrint, Trophy, Users, MessageCircle, ChevronRight } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Trophy className="w-6 h-6 text-[#4C1D95]" strokeWidth={1.75} />,
      title: "Championship Events",
      description: "Experience prestigious dog shows featuring the world's finest purebred.",
      checklist: [
        "International Championship",
        "Expert Breed Judging",
        "Best in Show Finals"
      ],
      buttonText: "Explore Events"
    },
    {
      icon: <PawPrint className="w-6 h-6 text-[#4C1D95]" strokeWidth={1.75} />,
      title: "Breed Education",
      description: "Expand your knowledge through breed guides.",
      checklist: [
        "Official Breed Standards",
        "Educational Programs",
        "Learning Resources"
      ],
      buttonText: "Learn More"
    },
    {
      icon: <Users className="w-6 h-6 text-[#4C1D95]" strokeWidth={1.75} />,
      title: "Community Membership",
      description: "Become part of a passionate community dedicated.",
      checklist: [
        "Volunteer Opportunities",
        "Club Events & Networking",
        "Exclusive Member Benefits"
      ],
      buttonText: "Join Community"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#4C1D95]" strokeWidth={1.75} />,
      title: "Dog Welfare Support",
      description: "Nullam porta enim vel tellus eget laoreet odiSupporting.",
      checklist: [
        "Responsible Breeding Programs",
        "Health & Welfare Resources",
        "Rescue & Community Support"
      ],
      buttonText: "Get Involved"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden font-sans">
      
      {/* Decorative Paws (Top Right) */}
      <div className="absolute top-16 right-[10%] opacity-90 pointer-events-none hidden md:block select-none">
        <div className="relative">
          <PawPrint className="w-10 h-10 text-[#FCE6D0] rotate-12 absolute -top-6 -left-14 fill-current" />
          <PawPrint className="w-12 h-12 text-[#FCE6D0] -rotate-[15deg] fill-current" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-[#2E0854] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 shadow-sm">
            Our Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black uppercase text-[#11052C] max-w-3xl leading-[1.2] tracking-tight">
            EXPERIENCE WORLD-CLASS<br />CANINE EXCELLENCE
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#F6F4FA] rounded-[32px] overflow-hidden flex flex-col relative transition-transform hover:-translate-y-1 duration-300"
            >
              
              {/* Top Section (Light Purple Background) */}
              <div className="p-8 pb-14">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#11052C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Section (White Card overlapping top part) */}
              <div className="bg-white p-8 rounded-t-[32px] flex-grow flex flex-col -mt-6 relative z-10">
                <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                  {feature.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#11052C] mt-[3px] shrink-0" strokeWidth={3} />
                      <span className="text-[12px] font-medium text-gray-600 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#4C1D95] hover:bg-[#3B0764] text-white text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 active:scale-95 shadow-md shadow-purple-900/10">
                  {feature.buttonText}
                </button>
              </div>

            </div>
          ))}

          {/* Right Floating Arrow (Carousel Indicator) */}
          <button className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-full items-center justify-center text-gray-400 hover:text-[#4C1D95] transition-colors z-20">
            <ChevronRight className="w-5 h-5 ml-0.5" strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </section>
  );
}