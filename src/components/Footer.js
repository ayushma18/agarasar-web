import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-400 rounded-full transform -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 transform translate-x-16 translate-y-16 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Office Address Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Office Address</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">Libali - 6, Bhaktapur</p>
                  <p className="text-gray-300">Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <p className="text-gray-300">9810052055</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <p className="text-gray-300">sathisahakari@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Annual Calendar
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Important Links
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Register
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Login
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Services</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Fund Transfer
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Saving Scheme
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Loan Schemes
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Digital Banking
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Investment Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and offers</p>
            
            {/* Newsletter Form */}
            <div className="space-y-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white placeholder-gray-400"
                />
                <button className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-r-lg transition-colors duration-300 font-semibold text-slate-800">
                  Subscribe
                </button>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-4">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-sm font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-sm font-bold">ig</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-800 font-bold">अ</span>
              </div>
              <div>
                <div className="font-bold text-lg font-devanagari">अग्रसर सहकारी</div>
                <div className="text-sm text-gray-400">Empowering Communities</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Copyright © 2025 अग्रसर सहकारी. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with ❤️ for our community | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;