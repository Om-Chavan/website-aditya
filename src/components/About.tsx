
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 tracking-wide">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-navy-800 mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every space tells a story. We believe in crafting narratives through design, 
            where each element speaks to the soul and every detail matters.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Our Design Philosophy"
                className="w-full h-[600px] object-cover shadow-2xl rounded-3xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-navy-200 rounded-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6 tracking-wide">
                Interior Design & Vastu Harmony
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At SpaceCoutureByNupur, we believe that beautiful spaces should also nurture positive energy. 
                Our unique approach combines contemporary interior design with ancient Vastu principles, 
                creating homes and offices that are both aesthetically stunning and energetically balanced.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Led by Nupur, our design philosophy centers on creating spaces that reflect your personality 
                while promoting harmony, prosperity, and well-being. Every project is a thoughtful blend of 
                modern design sensibilities and time-tested Vastu wisdom.
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="space-y-6">
              <div className="border-l-4 border-navy-800 pl-6">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Design Excellence</h4>
                <p className="text-gray-600">
                  Every element is thoughtfully selected to create spaces that are both 
                  visually stunning and functionally perfect for modern living.
                </p>
              </div>
              
              <div className="border-l-4 border-navy-800 pl-6">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Vastu Wisdom</h4>
                <p className="text-gray-600">
                  We integrate ancient Vastu principles to ensure your space promotes 
                  positive energy, prosperity, and overall well-being.
                </p>
              </div>
              
              <div className="border-l-4 border-navy-800 pl-6">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Personalized Approach</h4>
                <p className="text-gray-600">
                  Each project reflects your unique style and needs, creating spaces that 
                  truly feel like home while supporting your lifestyle goals.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">15+</div>
                <div className="text-sm text-gray-600 tracking-wide">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">200+</div>
                <div className="text-sm text-gray-600 tracking-wide">Curated Spaces</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
                <div className="text-sm text-gray-600 tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
