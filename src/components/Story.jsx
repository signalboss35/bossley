"use client";

import { useEffect, useRef } from 'react';

const Story = () => {
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
      id="story" 
      ref={sectionRef}
      className="py-32 px-6 bg-[rgb(var(--stone-dark))] relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[rgb(var(--gold-accent))]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <div className="animate-on-scroll corner-accent delay-100">
          <div className="relative h-[600px] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Premium coffee beans closeup" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105 hover:grayscale-0"
              style={{ filter: 'grayscale(50%) contrast(1.1)' }}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[rgb(var(--gold-primary))]/10"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="animate-on-scroll delay-200">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Sophistication in{' '}
            <span className="text-[rgb(var(--gold-primary))] italic block mt-2">Every Drip</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-[rgb(var(--gold-primary))] to-transparent mb-10"></div>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed">
            <p className="text-lg">
              We believe that coffee is not merely a morning ritual, but a moment of refined indulgence. 
              Like a fine single malt whisky, our beans are treated with patience and precision.
            </p>
            
            <p className="text-lg">
              <span className="text-white font-normal">"The Whisky Drip"</span> creates a bridge between two distinguished worlds. 
              The deep, complex notes of aged whisky meet the bright, aromatic profile of premium washed coffee. 
              The result is a non-alcoholic masterpiece designed for the discerning palate.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="text-center">
              <span className="block font-serif text-4xl text-[rgb(var(--gold-primary))] font-light mb-2">0%</span>
              <span className="text-xs uppercase tracking-[0.15em] text-gray-400 font-light">Alcohol</span>
            </div>
            <div className="text-center border-l border-white/10">
              <span className="block font-serif text-4xl text-[rgb(var(--gold-primary))] font-light mb-2">100%</span>
              <span className="text-xs uppercase tracking-[0.15em] text-gray-400 font-light">Arabica</span>
            </div>
            <div className="text-center border-l border-white/10">
              <span className="block font-serif text-4xl text-[rgb(var(--gold-primary))] font-light mb-2">Honduras</span>
              <span className="text-xs uppercase tracking-[0.15em] text-gray-400 font-light">Origin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;