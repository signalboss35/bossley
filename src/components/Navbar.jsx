"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Story', id: 'story' },
  { label: 'Collection', id: 'collection' },
  { label: 'Tasting Notes', id: 'tasting-notes' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[rgb(var(--stone-dark))]/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-serif font-light tracking-wide hover:opacity-80 transition-opacity"
        >
          <span className="text-[rgb(var(--gold-primary))]">The</span>{' '}
          <span className="text-white">Whisky Drip</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm uppercase tracking-[0.15em] font-sans font-light hover:text-[rgb(var(--gold-primary))] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[rgb(var(--gold-primary))] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <a 
            href="https://www.facebook.com/TheWhiskyDrip/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[rgb(var(--gold-primary))] hover:text-[rgb(var(--gold-light))] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[rgb(var(--stone-dark))]/98 backdrop-blur-xl border-b border-white/10 py-8 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-serif font-light hover:text-[rgb(var(--gold-primary))] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://www.facebook.com/TheWhiskyDrip/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;