import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'events',
      title: 'Annual Members Meeting 2024',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80',
      description: 'Community gathering for annual members meeting'
    },
    {
      id: 2,
      category: 'community',
      title: 'Community Development Project',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80',
      description: 'Rural development initiative in progress'
    },
    {
      id: 3,
      category: 'training',
      title: 'Financial Literacy Workshop',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80',
      description: 'Educational workshop for community members'
    },
    {
      id: 4,
      category: 'events',
      title: 'Branch Opening Ceremony',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=500&q=80',
      description: 'New branch inauguration celebration'
    },
    {
      id: 5,
      category: 'community',
      title: 'Women Empowerment Program',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      description: 'Supporting women entrepreneurs in the community'
    },
    {
      id: 6,
      category: 'training',
      title: 'Agricultural Finance Seminar',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=500&q=80',
      description: 'Training session for farmers and agricultural workers'
    },
    {
      id: 7,
      category: 'technology',
      title: 'Digital Banking Launch',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
      description: 'Introduction of new digital banking services'
    },
    {
      id: 8,
      category: 'events',
      title: 'Youth Banking Program',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80',
      description: 'Special banking program for young adults'
    },
    {
      id: 9,
      category: 'community',
      title: 'Environmental Initiative',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80',
      description: 'Community clean-up and tree planting drive'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'community', name: 'Community' },
    { id: 'training', name: 'Training' },
    { id: 'technology', name: 'Technology' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our visual journey through the years. From community events to training programs, 
            witness the impact of अग्रसर सहकारी in our community and the lives we've touched.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-400 text-slate-800 shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No photos found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Photos Captured</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Events Documented</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15</div>
              <div className="text-gray-300">Years of Memories</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Share Your Moments</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have photos from our events or activities? We'd love to feature them in our gallery. 
            Share your memories with the अग्रसर सहकारी community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-400 hover:bg-orange-500 text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Submit Photos
            </button>
            <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;