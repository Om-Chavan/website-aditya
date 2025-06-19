
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Collections', href: '#collections' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className={`text-2xl lg:text-3xl font-bold tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-navy-900' : 'text-white text-shadow'
            }`}>
              <span className="block text-center elegant-spacing">SPACE COUTURE</span>
            </div>
            <div className={`text-xs lg:text-sm font-light tracking-widest mt-1 transition-colors duration-300 ${
              isScrolled ? 'text-navy-600' : 'text-white/90'
            }`}>
              BY NUPUR
            </div>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-navy-700 hover:text-navy-900' 
                      : 'text-white/90 hover:text-white text-shadow'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="outline" 
              className={`border-2 px-8 py-2 font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-navy-900'
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <ul className="space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 text-navy-700 hover:text-navy-900 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6">
              <Button className="w-full bg-navy-800 hover:bg-navy-900 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
