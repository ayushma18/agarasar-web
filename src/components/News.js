import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Digital Banking Platform Launched',
      date: '2025-01-15',
      category: 'Technology',
      excerpt: 'अग्रसर सहकारी introduces state-of-the-art digital banking services for enhanced customer experience.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Community Development Program Success',
      date: '2025-01-10',
      category: 'Community',
      excerpt: 'Our rural development initiative has successfully supported over 200 families in the region.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Annual Members Meeting 2025',
      date: '2025-01-05',
      category: 'Events',
      excerpt: 'Join us for our annual members meeting to discuss achievements and future plans.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Financial Literacy Workshop',
      date: '2024-12-28',
      category: 'Education',
      excerpt: 'Free financial literacy workshops conducted for community members across all age groups.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Women Empowerment Loan Scheme',
      date: '2024-12-20',
      category: 'Social Impact',
      excerpt: 'Launching special loan schemes designed to support women entrepreneurs in their business ventures.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Agricultural Support Program',
      date: '2024-12-15',
      category: 'Agriculture',
      excerpt: 'Comprehensive agricultural financing and support services for local farmers.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const activities = [
    {
      title: 'Community Clean-up Drive',
      date: '2025-01-20',
      description: 'Join our monthly community service initiative to keep our neighborhoods clean and green.'
    },
    {
      title: 'Financial Planning Seminar',
      date: '2025-01-25',
      description: 'Learn about investment strategies and retirement planning from our financial experts.'
    },
    {
      title: 'Youth Banking Program',
      date: '2025-02-01',
      description: 'Special banking products and financial education workshops designed for young adults.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">News & Activities</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, events, and community activities from अग्रसर सहकारी. 
            We believe in transparency and keeping our community informed about our progress and initiatives.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Latest News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <article key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                
                {/* News Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                {/* News Content */}
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{news.excerpt}</p>
                  <button className="text-orange-400 hover:text-orange-500 font-semibold transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Upcoming Activities</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-400 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="bg-orange-400 text-slate-800 px-4 py-2 rounded-lg font-semibold text-center">
                      {activity.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white placeholder-gray-400"
              />
              <button className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-r-lg transition-colors duration-300 font-semibold text-slate-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default News;