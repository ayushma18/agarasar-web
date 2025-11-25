import React, { useState } from 'react';

const Services = () => {
  const [modalService, setModalService] = useState(null);
  // Add vertical spacing between sections
  // and increase padding for better separation
  const services = [
    {
      icon: '🏦',
      title: 'Banking Services',
      description: 'Comprehensive banking solutions including savings, checking, and investment accounts with competitive rates.',
      features: ['Savings Account', 'Current Account', 'Fixed Deposits', 'Recurring Deposits']
    },
    {
      icon: '💰',
      title: 'Loan Solutions',
      description: 'Flexible loan options for personal, business, and agricultural needs with quick approval processes.',
      features: ['Personal Loans', 'Business Loans', 'Agricultural Loans', 'Home Loans']
    },
    {
      icon: '📱',
      title: 'Digital Banking',
      description: 'Modern online and mobile banking services for convenient 24/7 account management and transactions.',
      features: ['Mobile Banking', 'Online Banking', 'Digital Payments', 'E-Statements']
    },
    {
      icon: '📈',
      title: 'Investment Planning',
      description: 'Smart investment strategies and financial advisory services for long-term wealth building.',
      features: ['Mutual Funds', 'Investment Advisory', 'Portfolio Management', 'Financial Planning']
    },
    {
      icon: '🏠',
      title: 'Home Loans',
      description: 'Affordable home financing solutions with flexible terms and competitive interest rates.',
      features: ['Home Purchase Loans', 'Home Construction Loans', 'Plot Purchase Loans', 'Home Improvement Loans']
    },
    {
      icon: '🛡️',
      title: 'Insurance Services',
      description: 'Comprehensive insurance coverage for life, health, property, and business protection needs.',
      features: ['Life Insurance', 'Health Insurance', 'Property Insurance', 'Business Insurance']
    },
    {
      icon: '💸',
      title: 'Fund Transfer',
      description: 'Fast and secure money transfer services for domestic and international transactions.',
      features: ['Domestic Transfer', 'International Remittance', 'Real-time Transfer', 'Mobile Money']
    },
    {
      icon: '🌾',
      title: 'Agricultural Finance',
      description: 'Specialized financial products designed to support farmers and agricultural businesses.',
      features: ['Crop Loans', 'Equipment Finance', 'Seasonal Credit', 'Agricultural Insurance']
    },
    {
      icon: '💼',
      title: 'Business Banking',
      description: 'Tailored banking solutions for small and medium enterprises to support business growth.',
      features: ['Business Accounts', 'Trade Finance', 'Cash Management', 'Merchant Services']
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            अग्रसर सहकारी (Agarasar Sahakari) offers a comprehensive range of financial services designed to meet the diverse needs
            of our community members. From traditional banking to modern digital solutions, we are committed
            to providing excellent service and competitive rates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">

                  {/* Service Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>

                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  {service.learnMore && (
                    <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-4 rounded-lg mb-4 mt-2">
                      <h4 className="text-[#1E3A8A] font-semibold mb-1">Learn More</h4>
                      <p className="text-gray-700 text-sm">{service.learnMore}</p>
                    </div>
                  )}

                  {/* Service Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    <button
                      className="w-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                      onClick={() => setModalService(service)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563EB] via-[#1E3A8A] to-[#FB923C] text-white rounded-3xl mx-4 md:mx-auto max-w-4xl shadow-xl my-16">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-medium drop-shadow">
            Join thousands of satisfied customers who trust अग्रसर सहकारी for their financial needs.
            Contact us today to learn more about our services and how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#1E3A8A] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:text-[#2563EB] transition-all duration-300 transform hover:scale-105 border-2 border-white">
              Contact Us Today
            </button>
            <button className="bg-white/10 border-2 border-white text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-[#FB923C] transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional financial services with personalized attention and competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Tailored financial solutions designed to meet your specific needs and goals.</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Professional financial advice from experienced experts who understand your community.</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quick Processing</h3>
              <p className="text-gray-600">Fast approval processes and efficient service delivery for all your banking needs.</p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Advanced security measures and reliable systems to protect your financial interests.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;