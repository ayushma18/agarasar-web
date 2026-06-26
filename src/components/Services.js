import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Header Section with Modern Design */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">Comprehensive Financial Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-sky-200 to-emerald-200 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            अग्रसर सहकारी offers comprehensive financial services designed to meet the diverse needs
            of our community. From traditional banking to modern digital solutions.
          </p>
        </div>
      </section>

      {/* Services Grid - Modern Design */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What We <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of financial services tailored for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const gradients = [
                'from-blue-500 to-cyan-400',
                'from-purple-500 to-pink-400',
                'from-orange-500 to-yellow-400',
                'from-green-500 to-emerald-400',
                'from-indigo-500 to-blue-400',
                'from-rose-500 to-pink-400',
                'from-teal-500 to-cyan-400',
                'from-violet-500 to-purple-400',
                'from-amber-500 to-orange-400'
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="group">
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden border border-gray-100">

                    {/* Gradient Top Border */}
                    <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

                    <div className="p-8">
                      {/* Service Icon with Gradient Background */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-3xl">{service.icon}</span>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">{service.title}</h3>

                      {/* Service Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                      {service.learnMore && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                          <h4 className="text-blue-600 font-semibold mb-1">Learn More</h4>
                          <p className="text-gray-700 text-sm">{service.learnMore}</p>
                        </div>
                      )}

                      {/* Service Features */}
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-emerald-500 rounded"></span>
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                              <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <button
                        className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                        onClick={() => setModalService(service)}
                      >
                        Learn More →
                      </button>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Modern Design */}
      <section className="py-20 mx-4 md:mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500"></div>

          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-8 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust अग्रसर सहकारी for their financial needs.
              Contact us today to achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => navigate('/contact')} className="group px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Contact Us Today
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button onClick={() => navigate('/register')} className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Open an Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits Section - Modern Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Our Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional financial services with personalized attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Benefit 1 */}
            <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Tailored financial solutions designed to meet your specific needs and goals.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Professional financial advice from experienced experts who understand your community.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Processing</h3>
              <p className="text-gray-600">Fast approval processes and efficient service delivery for all your banking needs.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Advanced security measures and reliable systems to protect your financial interests.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {modalService && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setModalService(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                  {modalService.icon}
                </div>
                <h3 className="text-2xl font-bold">{modalService.title}</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed">{modalService.description}</p>
              <h4 className="mt-6 mb-3 font-semibold text-gray-800">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {modalService.features.map((f) => (
                  <li key={f} className="flex items-center text-sm text-gray-600">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => { setModalService(null); navigate('/register'); }}
                  className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                  Get Started
                </button>
                <button
                  onClick={() => setModalService(null)}
                  className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;