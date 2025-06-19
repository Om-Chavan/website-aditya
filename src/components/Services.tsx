
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Residential Interior Design',
      description: 'Transform your home into a harmonious sanctuary with our personalized design solutions that blend aesthetics with Vastu principles.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Vastu Consultancy',
      description: 'Optimize the energy flow in your space with expert Vastu guidance to promote prosperity, health, and happiness.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Commercial Interior Design',
      description: 'Create productive and positive work environments that enhance business success through thoughtful design and Vastu compliance.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Space Planning & Layout',
      description: 'Maximize your space potential with strategic planning that combines functional design with Vastu-compliant layouts.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 tracking-wide">
            Services
          </h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive interior design and Vastu consultancy services, creating 
            spaces that are beautiful, functional, and energetically balanced.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/40 transition-all duration-500"></div>
                
                {/* Service Number */}
                <div className="absolute top-6 left-6 text-white">
                  <span className="text-6xl font-light opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-navy-900 tracking-wide group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="pt-4">
                  <span className="text-navy-800 font-medium tracking-wide group-hover:text-navy-600 transition-colors cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-12 bg-gray-50">
            <h3 className="text-3xl font-bold text-navy-900 mb-6 tracking-wide">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your space into something extraordinary. 
              Every great design begins with a conversation.
            </p>
            <button className="bg-navy-800 text-white px-12 py-4 font-medium tracking-wide hover:bg-navy-900 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
