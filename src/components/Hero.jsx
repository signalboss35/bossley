"use client";

import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-view');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Refined Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/banner_1.jpg" 
          alt="Atmospheric whisky bar setting" 
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.8) contrast(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))]/70 to-transparent"></div>
        
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <p className="animate-on-view text-[rgb(var(--gold-primary))] tracking-[0.3em] uppercase text-xs font-light mb-8 delay-100">
          BossBangRak Presents
        </p>
        
        <h1 className="animate-on-view font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] delay-200">
          <span className="block text-white text-balance">The Spirit of</span>
          <span className="gold-gradient-text text-balance">Coffee</span>
        </h1>
        
        <div className="animate-on-view max-w-2xl mx-auto mb-12 delay-300">
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed text-balance">
            Whisky-aged washed coffee, meticulously crafted for depth and aroma.
          </p>
          <p className="text-[rgb(var(--gold-light))] text-sm font-light mt-3 tracking-wider">
            Product of Thailand
          </p>
        </div>
        
        <div className="animate-on-view flex flex-col sm:flex-row justify-center gap-6 delay-400">
          <button 
            onClick={() => scrollToSection('collection')} 
            className="btn-primary"
          >
            Discover the Collection
          </button>
          <button 
            onClick={() => scrollToSection('story')} 
            className="btn-secondary"
          >
            Our Craft
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;