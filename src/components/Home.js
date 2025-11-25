import React, { useState, useEffect } from 'react';

const Home = () => {
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

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-white via-[#F3F4F6] to-[#FB923C]/10 font-['Poppins',sans-serif] space-y-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full py-28 bg-gradient-to-br from-[#F3F4F6] via-white to-[#FB923C]/10 overflow-hidden mb-16"
      >
        {/* Floating Abstract Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 via-blue-300 to-orange-100 opacity-40 rounded-full blur-3xl -z-10" style={{ filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-orange-200 via-pink-100 to-blue-100 opacity-30 rounded-full blur-2xl -z-10" style={{ filter: 'blur(40px)' }} />
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <span className="inline-block text-lg font-semibold text-[#FB923C] mb-5 tracking-wide bg-white/70 px-4 py-1 rounded-full shadow-sm">Nepali Cooperative • Trusted Since 2077</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mb-6 leading-tight drop-shadow-xl font-['Inter','Poppins','Manrope',sans-serif]">
              Modern Banking<br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#1E3A8A] to-[#FB923C] bg-clip-text text-transparent">for Nepali Families</span>
            </h1>
            <p className="text-gray-600 text-xl mb-10 max-w-xl font-medium">
              Secure savings, digital finance, and a partner you can trust for your family’s growth. Experience the future of Nepali cooperatives.
            </p>
            <div className="flex gap-5 mb-12">
              <a
                href="#register"
                className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg glow-animate"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(59,130,246,0.25), 0 1.5px 8px 0 rgba(251,146,60,0.15)'
                }}
              >
                Join Now
              </a>
              <a
                href="#contact"
                className="px-10 py-4 rounded-full border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold bg-white/80 hover:bg-blue-50 transition-all duration-300 text-lg shadow-md"
                style={{
                  boxShadow: '0 2px 12px 0 rgba(30,58,138,0.08)'
                }}
              >
                Contact Us
              </a>
            </div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3 font-['Inter','Poppins','Manrope',sans-serif]">Moving Forward, Together.</h2>
            <p className="text-gray-500 mb-10 max-w-lg">
              Your hard-earned money deserves the safest home. At Agarasar Cooperative, we turn your small savings into big dreams.
            </p>
          </div>
          {/* Right: Hero Illustration */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-video bg-white/70 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/60 backdrop-blur-xl">
              {/* Replace this div with your hero image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
                {/* Modern 3D-style SVG illustration for trust, family, digital banking */}
                <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="130" cy="150" rx="110" ry="22" fill="#F3F4F6" />
                  <rect x="60" y="70" width="140" height="60" rx="28" fill="#fff" fillOpacity="0.9" stroke="#2563EB" strokeWidth="2" />
                  <ellipse cx="130" cy="100" rx="60" ry="28" fill="#2563EB" fillOpacity="0.08" />
                  <circle cx="100" cy="100" r="18" fill="#2563EB" fillOpacity="0.7" />
                  <circle cx="160" cy="100" r="18" fill="#FB923C" fillOpacity="0.7" />
                  <ellipse cx="100" cy="110" rx="10" ry="4" fill="#2563EB" fillOpacity="0.15" />
                  <ellipse cx="160" cy="110" rx="10" ry="4" fill="#FB923C" fillOpacity="0.15" />
                  <rect x="120" y="85" width="20" height="30" rx="10" fill="#1E3A8A" fillOpacity="0.7" />
                  <ellipse cx="130" cy="120" rx="8" ry="3" fill="#1E3A8A" fillOpacity="0.15" />
                  <path d="M90 90 Q95 80 100 90" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M150 90 Q155 80 160 90" stroke="#fff" strokeWidth="2" fill="none" />
                  <rect x="110" y="60" width="40" height="10" rx="5" fill="#2563EB" fillOpacity="0.5" />
                  <rect x="120" y="50" width="20" height="8" rx="4" fill="#FB923C" fillOpacity="0.5" />
                  <ellipse cx="130" cy="60" rx="8" ry="3" fill="#1E3A8A" fillOpacity="0.10" />
                  <text x="130" y="145" textAnchor="middle" fill="#1E3A8A" fontSize="16" fontWeight="bold" fontFamily="Inter, Poppins, Manrope, sans-serif">Trust & Family</text>
                </svg>
              </div>
              {/* Floating shapes */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-200 opacity-30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tr from-orange-300 to-pink-200 opacity-30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-orange-50 rounded-3xl mx-4 md:mx-auto max-w-[1200px] shadow-lg mb-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-row gap-8 justify-center items-stretch">

            {/* Incoming Money Card */}
            <div className="flex-1 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 flex flex-col items-center glass-card hover:scale-105 transition-transform duration-300 min-w-[220px]">
              <div className="mb-3">
                {/* Deposit Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="20" fill="#2563EB" fillOpacity="0.12" />
                  <path d="M20 10v16m0 0l-6-6m6 6l6-6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#2563EB] mb-2">
                {counters.incoming.toLocaleString()}+
              </div>
              <div className="text-lg font-semibold text-[#1E3A8A] mb-1">Incoming Money</div>
              <div className="text-gray-500">Total deposits received</div>
            </div>

            {/* Outgoing Money Card */}
            <div className="flex-1 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 flex flex-col items-center glass-card hover:scale-105 transition-transform duration-300 min-w-[220px]">
              <div className="mb-3">
                {/* Outgoing Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="20" fill="#FB923C" fillOpacity="0.12" />
                  <path d="M20 30V14m0 0l-6 6m6-6l6 6" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FB923C] mb-2">
                {counters.outgoing.toLocaleString()}+
              </div>
              <div className="text-lg font-semibold text-[#1E3A8A] mb-1">Outgoing Money</div>
              <div className="text-gray-500">Loans disbursed</div>
            </div>

            {/* Total Users Card */}
            <div className="flex-1 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 flex flex-col items-center glass-card hover:scale-105 transition-transform duration-300 min-w-[220px]">
              <div className="mb-3">
                {/* Users Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="20" fill="#1E3A8A" fillOpacity="0.12" />
                  <path d="M20 22c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5zm0 2c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5z" fill="#1E3A8A" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-2">
                {counters.users}+
              </div>
              <div className="text-lg font-semibold text-[#1E3A8A] mb-1">Total Users</div>
              <div className="text-gray-500">Active members</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;