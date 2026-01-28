"use client";

import { useEffect, useRef } from 'react';

const tastingNotes = [
  { note: "Ice Cream", color: "from-orange-200 to-orange-100" },
  { note: "Vanilla", color: "from-yellow-200 to-yellow-100" },
  { note: "Whiskey", color: "from-amber-700 to-amber-600" },
  { note: "Honey", color: "from-yellow-600 to-yellow-500" },
  { note: "Resin Lemon Mint", color: "from-emerald-700 to-green-800" },
];

const TastingNotes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="tasting-notes" 
      ref={sectionRef}
      className="py-32 px-6 bg-[rgb(var(--color-bg))] relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--stone-dark))]/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="animate-on-scroll mb-20">
          <span className="text-[rgb(var(--gold-primary))] tracking-[0.3em] uppercase text-xs font-light mb-4 block">
            Flavor Profile
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            Tasting Notes
          </h2>
        </div>
        
        {/* Notes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-20">
          {tastingNotes.map((item, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll group cursor-default delay-${(index + 1) * 100}`}
            >
              {/* Colored orb */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full opacity-70 blur-2xl group-hover:opacity-90 group-hover:blur-xl transition-all duration-500`}
                ></div>
                <div 
                  className={`absolute inset-4 bg-gradient-to-br ${item.color} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>
              </div>
              
              {/* Label */}
              <h3 className="font-serif text-xl font-light text-gray-300 group-hover:text-[rgb(var(--gold-light))] transition-colors duration-300">
                {item.note}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="animate-on-scroll delay-600">
          <div className="max-w-3xl mx-auto p-12 border border-white/10 backdrop-blur-sm relative">
            {/* Decorative quotes */}
            <div className="absolute -top-4 left-8 text-6xl font-serif text-[rgb(var(--gold-primary))]/30">"</div>
            <div className="absolute -bottom-4 right-8 text-6xl font-serif text-[rgb(var(--gold-primary))]/30 rotate-180">"</div>
            
            <p className="font-serif italic text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              A sophisticated melody of sweet vanilla and deep oak, finishing with a refreshing hint of mint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingNotes;