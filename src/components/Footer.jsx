"use client";

import { Instagram, Facebook } from 'lucide-react';

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Our Story', id: 'story' },
  { label: 'Shop Bottle', id: 'collection' },
  { label: 'Tasting Notes', id: 'tasting-notes' },
];

const Footer = () => {
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
    <footer 
      id="contact" 
      className="bg-[rgb(var(--stone-dark))] pt-24 pb-8 border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[rgb(var(--gold-primary))]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-serif font-light mb-6">
              <span className="text-[rgb(var(--gold-primary))]">The</span>{' '}
              <span className="text-white">Whisky Drip</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
              Crafting non-alcoholic coffee experiences that rival the finest spirits. 
              Elevate your daily ritual with sophistication and refinement.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg font-light mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 text-sm hover:text-[rgb(var(--gold-primary))] transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-white font-serif text-lg font-light mb-6 tracking-wide">
              Connect
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a 
                href="https://www.facebook.com/TheWhiskyDrip/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[rgb(var(--gold-primary))] hover:text-[rgb(var(--gold-primary))] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/whisky.drip/"
                target="_blank"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[rgb(var(--gold-primary))] hover:text-[rgb(var(--gold-primary))] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm font-light">
              BossBangRak Project
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>&copy; 2026 The Whisky Drip. All rights reserved.</p>
          <p>Designed for Bossley Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;