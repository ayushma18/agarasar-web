import React, { useState, useEffect } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [counters, setCounters] = useState({
    incoming: 0,
    outgoing: 0,
    users: 0
  });

  // Animate counters when component mounts
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 50);
    };

    // Start animations
    setTimeout(() => {
      animateCounter(60000, 'incoming');
      animateCounter(10000, 'outgoing');
      animateCounter(100, 'users');
    }, 1000);
  }, []);

  const tabContent = {
    intro: {
      title: 'Our Introduction',
      content: 'अग्रसर सहकारी has been a beacon of financial stability and community development for over 5 years. We are committed to providing innovative financial solutions that empower individuals, support businesses, and strengthen our community bonds through cooperative principles and transparent services.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the leading cooperative institution in Nepal that transforms lives through inclusive financial services, fostering economic growth and prosperity for all our members and the wider community while maintaining the highest standards of integrity and transparency.'
    },
    goals: {
      title: 'Our Goals',
      content: 'We aim to achieve financial inclusion for all community members, promote sustainable economic development, provide world-class financial services with modern technology, and build stronger, more resilient communities through cooperative principles and member-focused approach.'
    }
  };

  return (
    <div className="min-h-screen pt-32">
      
      {/* Welcome Section */}
      <section id="home" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to  अग्रसर सहकारी
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Founders' Message */}
            <div className="bg-slate-800 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Message from the founders</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our journey began with a vision to create a financial institution that truly serves its community. 
                Today, we are proud to be a trusted partner in thousands of success stories, helping families achieve 
                their dreams and businesses reach new heights.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Through अग्रसर सहकारी, we have built more than just a financial institution - we have created a 
                community where every member's success contributes to our collective prosperity. Our commitment to 
                transparency, innovation, and member welfare drives everything we do.
              </p>
              <button className="text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300">
                Read More →
              </button>
              
              {/* Founder Profile */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-600">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">अ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">AGRASAR Founders</h4>
                  <p className="text-gray-400 text-sm">Leadership Team</p>
                </div>
              </div>
            </div>

            {/* Right Column - Tabbed Content */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              
              {/* Tab Headers */}
              <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-white text-slate-800 shadow-md'
                        : 'text-gray-600 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tabContent[activeTab].content}
                </p>
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Incoming Money Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-orange-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                {counters.incoming.toLocaleString()}+
              </div>
              <div className="text-gray-600 text-lg font-semibold">Incoming Money</div>
              <div className="text-sm text-gray-500 mt-2">Total deposits received</div>
            </div>

            {/* Outgoing Money Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-teal-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
                {counters.outgoing.toLocaleString()}+
              </div>
              <div className="text-gray-600 text-lg font-semibold">Outgoing Money</div>
              <div className="text-sm text-gray-500 mt-2">Loans disbursed</div>
            </div>

            {/* Total Users Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
                {counters.users}+
              </div>
              <div className="text-gray-600 text-lg font-semibold">Total Users</div>
              <div className="text-sm text-gray-500 mt-2">Active members</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;