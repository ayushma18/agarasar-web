import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] via-white to-[#e0e7ff] space-y-20 pt-32">
      {/* About Us Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Left: Image/Visual */}
            <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
              <div className="w-72 h-72 rounded-full shadow-2xl bg-gradient-to-tr from-[#1E3A8A] via-[#F59E0B] to-[#F3F4F6] flex items-center justify-center overflow-hidden border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
                  alt="Agarasar Team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold text-[#1E3A8A] mb-4 tracking-tight drop-shadow-sm">About Agarasar</h1>
              <p className="text-lg text-[#F59E0B] mb-6 font-medium">Moving Forward, Together.</p>
              <p className="text-gray-700 text-lg mb-6">
                अग्रसर सहकारी (Agrasar Sahakari) is dedicated to empowering our community with accessible, innovative, and trustworthy financial solutions. Our mission is to help every member achieve their dreams through mutual support and modern banking.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#1E3A8A]">
                  <span className="text-3xl mb-2">👁️</span>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be Nepal’s most trusted and innovative cooperative, fostering sustainable growth for all.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#F59E0B]">
                  <span className="text-3xl mb-2">🎯</span>
                  <h3 className="text-lg font-bold text-[#F59E0B] mb-1">Mission</h3>
                  <p className="text-gray-600 text-sm">
                    Deliver exceptional financial services, promote literacy, and build stronger communities with transparency and care.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-[#1E3A8A]">
                  <span className="text-3xl mb-2">🏆</span>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">Goals</h3>
                  <ul className="text-gray-600 text-sm list-disc list-inside text-left">
                    <li>Expand financial inclusion</li>
                    <li>99%+ member satisfaction</li>
                    <li>Support 1000+ local businesses</li>
                    <li>Sustainable growth & profitability</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F3F4F6] rounded-2xl shadow-inner p-6">
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">Who We Are</h2>
                <p className="text-gray-700 text-base mb-2">
                  Founded on the principles of mutual support and shared prosperity, Agarasar Cooperative is more than a financial institution—we are a community partner. Our experienced team delivers a full range of banking, lending, and digital services, always putting members first.
                </p>
                <p className="text-gray-700 text-base">
                  We actively invest in local development, financial literacy, and sustainable practices to ensure every member and our region thrive together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements/Statistics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Achievements</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Happy Members */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-cooperative-green rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                👥
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Happy Members</p>
              <p className="text-gray-600">Trusted families and individuals who chose us as their financial partner</p>
            </div>

            {/* Active Loans */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-cooperative-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                💳
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">20,000+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Active Loans</p>
              <p className="text-gray-600">Successful loan disbursements helping dreams become reality</p>
            </div>

            {/* Community Projects */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🏗️
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Community Projects</p>
              <p className="text-gray-600">Development initiatives supporting local growth and prosperity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Savings Accounts */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cooperative-green to-cooperative-green-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🏦
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Savings Accounts</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure your future with our competitive savings options and flexible deposit schemes.
              </p>
            </div>

            {/* Loan Services */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cooperative-blue to-cooperative-blue-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                💰
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Loan Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible lending solutions for personal, business, and agricultural needs at competitive rates.
              </p>
            </div>

            {/* Digital Banking */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-cooperative-earth-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                📱
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Digital Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern online and mobile banking services for convenient 24/7 account management.
              </p>
            </div>

            {/* Financial Advisory */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-cooperative-blue-dark rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                📊
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Financial Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on investments, financial planning, and wealth management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;