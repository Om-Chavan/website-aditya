
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
          alt="Elegant Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider">
            <span className="block elegant-spacing text-shadow">SPACE COUTURE</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl lg:text-2xl font-light tracking-widest mb-12 text-white/90">
            BY NUPUR
          </div>

          {/* Tagline */}
          <p className="text-lg lg:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed text-white/80">
            Creating harmonious spaces where beautiful design meets positive energy through 
            expert interior design and Vastu consultancy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-white text-navy-900 hover:bg-white/90 px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              Explore Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-white/20 transform rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-2 h-20 bg-white/20 transform rotate-45 hidden lg:block"></div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-white w-0 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
