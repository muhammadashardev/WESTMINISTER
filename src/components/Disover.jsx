import React from 'react';
import { Trophy, Zap, Award, Star } from 'lucide-react';

export default function SignatureEvents() {
  const events = [
    {
      id: 1,
      title: "Dog Show Championship",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
      icon: <Trophy className="w-5 h-5 text-[#11052C]" />,
      showBadge: false
    },
    {
      id: 2,
      title: "Masters Agility Championship",
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-5 h-5 text-[#11052C]" />,
      showBadge: false
    },
    {
      id: 3,
      title: "Masters Agility Championship",
      image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-5 h-5 text-[#11052C]" />,
      showBadge: false
    },
    {
      id: 4,
      title: "Masters Obedience Championship",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
      icon: <Award className="w-5 h-5 text-[#11052C]" />,
      showBadge: false
    },
    {
      id: 5,
      title: "Junior Showmanship",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
      icon: <Star className="w-5 h-5 text-[#11052C]" />,
      showBadge: true
    },
    {
      id: 6,
      title: "Junior Showmanship",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800",
      icon: <Star className="w-5 h-5 text-[#11052C]" />,
      showBadge: true
    }
  ];

  return (
    <section className="w-full min-h-screen py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11052C] uppercase tracking-tight leading-[1.1]">
              DISCOVER OUR <br />
              SIGNATURE EVENTS
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              Experience world-class competitions that celebrate excellence, skill, 
              and the incredible bond between humans and dogs.
            </p>
          </div>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="relative w-full h-[400px] sm:h-[420px] rounded-[32px] overflow-hidden shadow-xl group bg-gray-100"
            >
              {/* Background Image */}
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Optional Top-Right "ENTER NOW" Badge */}
              {event.showBadge && (
                <div className="absolute top-5 right-5 w-16 h-16 rounded-full bg-[#11052C] border border-white/20 flex items-center justify-center text-center shadow-lg transition-transform group-hover:scale-105 cursor-pointer">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">
                    ENTER <br /> NOW
                  </span>
                </div>
              )}

              {/* Bottom Floating Title Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <h3 className="text-sm sm:text-base font-bold text-[#11052C] tracking-tight pr-2">
                  {event.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
                  {event.icon}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}