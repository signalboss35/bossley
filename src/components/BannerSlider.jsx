"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerSlides = [
    {
        id: 1,
        title: "Honduras Shirley",
        subtitle: "Whisky Aged Washed Coffee",
        description: "Premium AA beans aged in oak barrels, delivering rich vanilla, caramel, and subtle oak notes with 0% alcohol",
        image: "/assets/banner-1.jpg",
        accentColor: "from-amber-600 to-amber-800",
    },
    {
        id: 2,
        title: "Chiang Rai Single Origin",
        subtitle: "Premium Roastery from Northern Thailand",
        description: "Expertly roasted Arabica from 1,200m highlands, featuring vibrant citrus notes, a chocolatey body, and a smooth honey-like finish.",
        image: "/assets/banner-2.png",
        accentColor: "from-purple-600 to-pink-800",
    },
    {
        id: 3,
        title: "Barrel Aged Reserve",
        subtitle: "Jack Daniel's Oak Barrel Process",
        description: "Green beans aged 30 days in authentic whiskey barrels, developing deep caramel and toasted marshmallow flavors",
        image: "/assets/banner-3.png",
        accentColor: "from-orange-600 to-red-800",
    },
    {
        id: 4,
        title: "Authentic Honduras Origin",
        subtitle: "Exotic Central American Arabica",
        description: "Premium beans sourced directly from Honduras, offering a sophisticated flavor profile with clean acidity and a rich, velvety body.",
        image: "/assets/banner-4.png",
        accentColor: "from-green-600 to-teal-800",
    },
    {
        id: 5,
        title: "Master Roaster's Selection",
        subtitle: "Light Roast for Filter Brewing",
        description: "Artisan roasted to preserve delicate whisky barrel notes and natural coffee sweetness, perfect for pour-over and drip",
        image: "/assets/banner-5.png",
        accentColor: "from-stone-600 to-stone-900",
    },
];

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sectionRef = useRef(null);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Intersection Observer for animations
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 bg-gradient-to-b from-[rgb(var(--color-bg))] to-[rgb(var(--stone-dark))] relative overflow-hidden"
        >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 animate-on-scroll">
                <span className="text-[rgb(var(--gold-primary))] tracking-[0.3em] uppercase text-xs font-light mb-4 block">
                    Our Collection
                </span>
                <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
                    Explore Our Range
                </h2>
            </div>

            {/* Slider Container */}
            <div className="max-w-7xl mx-auto relative animate-on-scroll delay-200">
                <div className="relative h-[600px] md:h-[700px] rounded-sm overflow-hidden">
                    {/* Slides */}
                    {bannerSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-out ${
                                index === currentSlide
                                    ? 'opacity-100 translate-x-0'
                                    : index < currentSlide
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            {/* Split Layout for Vertical Images */}
                            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-0">
                                
                                {/* Left Side - Image */}
                                <div className="relative h-full bg-black/20">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="relative w-full max-w-[400px] h-full">
                                            {/* Glow Effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} blur-[80px] opacity-20`}></div>
                                            
                                            {/* Vertical Image */}
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="relative w-full h-full object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="relative flex items-center bg-gradient-to-r from-black/60 to-transparent">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} opacity-20`}></div>
                                    
                                    <div className="relative p-8 md:p-16 max-w-xl">
                                        <p className="text-[rgb(var(--gold-light))] tracking-[0.2em] uppercase text-xs font-light mb-4">
                                            {slide.subtitle}
                                        </p>
                                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                                            {slide.title}
                                        </h3>
                                        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">
                                            {slide.description}
                                        </p>
                                        
                                        {/* Optional CTA Button */}
                                        <a 
                                            href="https://www.facebook.com/TheWhiskyDrip/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-8 py-3 border border-[rgb(var(--gold-primary))] text-[rgb(var(--gold-primary))] hover:bg-[rgb(var(--gold-primary))] hover:text-white transition-all duration-300 text-sm tracking-wide"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-[rgb(var(--gold-primary))] transition-all duration-300 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-[rgb(var(--gold-primary))] transition-all duration-300 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {bannerSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-12 h-2 bg-[rgb(var(--gold-primary))]'
                                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                            } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-6">
                    <span className="text-gray-400 text-sm font-light tracking-wider">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(bannerSlides.length).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BannerSlider;