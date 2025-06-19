
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wider mb-2">SPACE COUTURE</h3>
            <p className="text-sm font-light tracking-widest text-gray-400">BY NUPUR</p>
          </div>

          {/* Navigation */}
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center space-x-8 lg:space-x-12">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Our Story</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Portfolio</a></li>
              <li><a href="#collections" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Collections</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Contact</a></li>
            </ul>
          </nav>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://instagram.com/spacecouturebynupur" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 text-gray-400 text-sm">
            <p>Interior Design & Vastu Consultancy</p>
            <p className="mt-4">nupur@spacecouture.in</p>
            <p>+91 93157 48516</p>
            <p className="mt-2">@spacecouturebynupur</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2025 SpaceCoutureByNupur. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
