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
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const sectionRef = useRef(null);

    const minSwipeDistance = 50;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

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

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[rgb(var(--color-bg))] to-[rgb(var(--stone-dark))] relative overflow-hidden"
        >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-8 md:mb-16 animate-on-scroll">
                <span className="text-[rgb(var(--gold-primary))] tracking-[0.3em] uppercase text-xs font-light mb-2 md:mb-4 block">
                    Our Collection
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl font-light text-white">
                    Explore Our Range
                </h2>
            </div>

            {/* Slider Container */}
            <div className="max-w-7xl mx-auto relative animate-on-scroll delay-200">
                <div
                    className="relative rounded-sm overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Slides */}
                    {bannerSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-1000 ease-out ${index === currentSlide
                                    ? 'opacity-100 relative'
                                    : 'opacity-0 absolute inset-0 pointer-events-none'
                                }`}
                        >
                            {/* Mobile Layout (Stacked) */}
                            <div className="md:hidden">
                                {/* Full Width Image Section */}
                                <div className="relative w-full bg-gradient-to-b from-black/40 to-black/80">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} opacity-30`}></div>
                                    <div className="relative px-6 pt-8 pb-6">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-auto max-h-[400px] object-contain drop-shadow-2xl mx-auto"
                                        />
                                    </div>
                                </div>

                                {/* Content Below Image */}
                                <div className={`relative bg-gradient-to-br ${slide.accentColor} bg-opacity-20 px-6 py-8`}>
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <div className="relative z-10">
                                        <p className="text-[rgb(var(--gold-light))] tracking-[0.15em] uppercase text-[10px] font-light mb-2">
                                            {slide.subtitle}
                                        </p>
                                        <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3 leading-tight">
                                            {slide.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                                            {slide.description}
                                        </p>
                                        <a
                                            href="https://www.facebook.com/TheWhiskyDrip/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-2.5 border border-[rgb(var(--gold-primary))] text-[rgb(var(--gold-primary))] hover:bg-[rgb(var(--gold-primary))] hover:text-white transition-all duration-300 text-xs tracking-wide"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout (Side by Side) */}
                            <div className="hidden md:grid md:grid-cols-2 gap-0 h-[600px] lg:h-[700px]">
                                {/* Left Side - Image */}
                                <div className="relative bg-black/20">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="relative w-full max-w-[400px] h-full">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} blur-[80px] opacity-20`}></div>
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
                                    <div className="relative p-8 lg:p-16 max-w-xl">
                                        <p className="text-[rgb(var(--gold-light))] tracking-[0.2em] uppercase text-xs font-light mb-4">
                                            {slide.subtitle}
                                        </p>
                                        <h3 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight">
                                            {slide.title}
                                        </h3>
                                        <p className="text-gray-300 text-base lg:text-lg font-light leading-relaxed mb-8">
                                            {slide.description}
                                        </p>
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

                    {/* Navigation Arrows - Desktop Only */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:border-[rgb(var(--gold-primary))] transition-all duration-300 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:border-[rgb(var(--gold-primary))] transition-all duration-300 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-6 md:mt-8">
                    {bannerSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentSlide
                                    ? 'w-8 sm:w-12 h-1.5 sm:h-2 bg-[rgb(var(--gold-primary))]'
                                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/50'
                                } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-4 md:mt-6">
                    <span className="text-gray-400 text-xs sm:text-sm font-light tracking-wider">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(bannerSlides.length).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BannerSlider;