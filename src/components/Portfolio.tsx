
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Serene Sanctuary',
      subtitle: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      year: '2024'
    },
    {
      id: 2,
      title: 'Urban Elegance',
      subtitle: 'Luxury Apartment',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      year: '2024'
    },
    {
      id: 3,
      title: 'Timeless Classic',
      subtitle: 'Heritage Home',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 4,
      title: 'Modern Minimalism',
      subtitle: 'Contemporary Villa',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
      year: '2023'
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 tracking-wide">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each project is a unique journey, a story of transformation where vision meets reality. 
            Discover spaces that inspire and endure.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8 rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Project Year */}
                <div className="absolute top-6 right-6 text-white bg-navy-900/70 backdrop-blur-sm px-4 py-2 text-sm font-medium tracking-wide rounded-full">
                  {project.year}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-navy-900 tracking-wide group-hover:text-navy-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 font-light">
                  {project.subtitle}
                </p>
                
                {/* View Project Link */}
                <div className="pt-4">
                  <span className="text-navy-800 font-medium tracking-wide group-hover:text-navy-600 transition-colors cursor-pointer">
                    View Project →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-20">
          <button className="border-2 border-navy-800 text-navy-800 px-12 py-4 font-medium tracking-wide hover:bg-navy-800 hover:text-white transition-all duration-300 rounded-full">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
