"use client";

import { useEffect, useRef } from 'react';
import { ArrowRight, Droplets, Star, Coffee } from 'lucide-react';

const productDetails = [
  { icon: Droplets, label: 'Process', value: 'Washed / Whisky Aged' },
  { icon: Coffee, label: 'Roast Level', value: 'Light (Filter Brewing)' },
  { icon: Star, label: 'Size', value: '200 ml' },
];

const Collection = () => {
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
      id="collection" 
      ref={sectionRef}
      className="py-32 px-6 relative bg-gradient-to-b from-[rgb(var(--stone-dark))] to-[rgb(var(--color-bg))] overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[rgb(var(--gold-accent))]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgb(var(--gold-primary))]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="text-[rgb(var(--gold-primary))] tracking-[0.3em] uppercase text-xs font-light">
            Signature Release
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light mt-6 text-white">
            Honduras Shirley
          </h2>
          <p className="text-gray-400 mt-4 italic font-serif text-lg">
            Light Roasted for Filter Brewing
          </p>
        </div>

        {/* Product Showcase */}
        <div className="glass-panel p-8 md:p-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll delay-200">
          
          {/* Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group max-w-[350px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[rgb(var(--gold-primary))] blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <img 
                src="/assets/bottle_coffee_3.jpg" 
                alt="Honduras Shirley Bottle"
                className="relative w-full h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">
                Whisky Infused Coffee
              </h3>
              <p className="text-[rgb(var(--gold-primary))] font-medium tracking-[0.15em] text-sm uppercase">
                Product of Thailand
              </p>
            </div>

            <p className="text-gray-300 font-light text-lg leading-relaxed">
              Experience the complex character of Honduras Shirley beans, carefully washed and aged 
              to capture the essence of fine whisky without the alcohol.
            </p>

            {/* Specifications */}
            <ul className="space-y-4">
              {productDetails.map((detail, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-300">
                  <detail.icon className="text-[rgb(var(--gold-primary))]" size={20} />
                  <span className="font-light">
                    {detail.label}: <span className="text-white font-normal">{detail.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-8">
              <a 
                href="https://www.facebook.com/TheWhiskyDrip/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 btn-primary"
              >
                <span>Purchase on Facebook</span>
                <ArrowRight 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;