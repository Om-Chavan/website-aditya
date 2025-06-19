import React from 'react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Classic Heritage',
      description: 'Timeless pieces that honor traditional craftsmanship while embracing contemporary living.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      items: '24 Pieces'
    },
    {
      id: 2,
      title: 'Modern Minimalist',
      description: 'Clean lines and purposeful design create spaces of serene sophistication.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      items: '18 Pieces'
    },
    {
      id: 3,
      title: 'Artisan Luxe',
      description: 'Handcrafted elements and premium materials define this exclusive collection.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      items: '32 Pieces'
    }
  ];

  return (
    <section id="collections" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 tracking-wide">
            Collections
          </h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Curated collections that tell stories of craftsmanship, heritage, and innovation. 
            Each piece is carefully selected to create harmonious living spaces.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-all duration-500"></div>
                </div>
                
                {/* Collection Items Count */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-navy-900 font-medium">
                  {collection.items}
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-4xl font-bold text-navy-900 mb-6 tracking-wide">
                    {collection.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {collection.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-navy-800 rounded-full"></div>
                    <span className="text-gray-700">Handcrafted Excellence</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-navy-800 rounded-full"></div>
                    <span className="text-gray-700">Premium Materials</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-navy-800 rounded-full"></div>
                    <span className="text-gray-700">Timeless Design</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <button className="border-2 border-navy-800 text-navy-800 px-8 py-3 font-medium tracking-wide hover:bg-navy-800 hover:text-white transition-all duration-300">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32">
          <div className="inline-block p-16 bg-navy-50">
            <h3 className="text-3xl font-bold text-navy-900 mb-6 tracking-wide">
              Create Your Custom Collection
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Work with our artisans to create bespoke pieces that reflect your unique vision 
              and complement your lifestyle perfectly.
            </p>
            <button className="bg-navy-800 text-white px-12 py-4 font-medium tracking-wide hover:bg-navy-900 transition-colors">
              Start Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;