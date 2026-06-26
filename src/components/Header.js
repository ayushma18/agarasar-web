import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId) => {
    // Check if we're on the home page and the section exists
    if (location.pathname === '/' && document.getElementById(sectionId)) {
      const element = document.getElementById(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    } else {
      // Navigate to separate pages
      switch (sectionId) {
        case 'home':
          navigate('/');
          break;
        case 'about':
          navigate('/about');
          break;
        case 'services':
          navigate('/services');
          break;
        case 'news':
          navigate('/news');
          break;
        case 'gallery':
          navigate('/gallery');
          break;
        case 'contact':
          navigate('/contact');
          break;
        case 'login':
          navigate('/login');
          break;
        case 'register':
          navigate('/register');
          break;
        default:
          // Try scrolling if on home page
          if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
      }
      closeMenu();
    }
  };

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Top Banner Area - Modernized */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-2.5 relative overflow-hidden shadow-lg">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full transform -translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 transform translate-x-12 -translate-y-12 rotate-45 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-sky-200 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center">

            {/* Left: Logo and Tagline */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/30">
                  <span className="text-blue-600 font-bold text-xl">अ</span>
                </div>
                <div>
                  <div className="font-bold text-lg font-devanagari leading-tight">अग्रसर सहकारी</div>
                  <div className="text-xs opacity-90 leading-tight">Making Banking Better</div>
                </div>
              </div>
            </div>

            {/* Right: Nepali Text and Social Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-right">
                <div className="font-devanagari text-lg font-semibold">हाम्रो नेपाल</div>
                <div className="font-devanagari text-lg font-semibold"> हाम्रो सहकारी</div>
                <div className="font-devanagari text-lg font-semibold">हाम्रो भविष्य</div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-2">
                {/* Email */}
                <a href="mailto:infopudasaini@gmail.com" className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" title="Email">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="6" fill="none" /><path d="M4 6.5A1.5 1.5 0 015.5 5h9A1.5 1.5 0 0116 6.5v7A1.5 1.5 0 0114.5 15h-9A1.5 1.5 0 014 13.5v-7zm1.6.4l4.4 3.3 4.4-3.3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/santosh.pudasaini1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" title="Facebook">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="6" fill="none" /><path d="M13.5 10H11v5H9v-5H7.5V8.5H9V7.75A2.25 2.25 0 0111.25 5.5H13v1.5h-1.75a.25.25 0 00-.25.25V8.5h2L13.5 10z" fill="#fff" /></svg>
                </a>
                {/* Viber */}
                <a href="viber://chat?number=9810052055" className="w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" title="Viber">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="6" fill="none" /><path d="M6.5 5.5h7A1.5 1.5 0 0115 7v6a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 13V7a1.5 1.5 0 011.5-1.5zm2.5 7h2m-2-2h2m-2-2h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/9810052055" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110" title="WhatsApp">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="6" fill="none" /><path d="M10 3.5a6.5 6.5 0 016.5 6.5c0 1.4-.45 2.7-1.23 3.75l.73 2.75-2.82-.74A6.5 6.5 0 1110 3.5zm0 1.5a5 5 0 100 10 5 5 0 000-10zm2.1 6.6c-.1-.05-.6-.3-1.1-.5-.15-.05-.25-.1-.35.1-.1.15-.4.5-.5.6-.1.1-.2.1-.35.05a4.1 4.1 0 01-2.1-2.1c-.05-.15 0-.25.05-.35.05-.1.5-.4.6-.5.1-.1.15-.2.1-.35-.2-.5-.45-1-.5-1.1-.1-.2-.2-.2-.35-.2h-.3c-.15 0-.4.05-.55.2-.3.3-.6.8-.6 1.3 0 .2.05.4.1.6.3.8.9 1.6 1.6 2.1.7.5 1.5.8 2.3.8.5 0 1-.3 1.3-.6.15-.15.2-.4.2-.55v-.3c0-.15 0-.25-.2-.35z" fill="#fff" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Modernized */}
      <nav className={`backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-xl' : 'bg-white/90 shadow-lg'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-2 py-3">
              <button
                onClick={() => handleNavigation('home')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                ABOUT US
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                SERVICES
              </button>
              <button
                onClick={() => handleNavigation('gallery')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                GALLERY
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                CONTACT
              </button>
              <button
                onClick={() => handleNavigation('login')}
                className="text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm transition-all duration-300 px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                LOGIN
              </button>
              <button
                onClick={() => handleNavigation('register')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold uppercase tracking-wide text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                REGISTER
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col items-center justify-center p-4 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'my-1'
                  }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button onClick={() => handleNavigation('home')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">HOME</button>
                <button onClick={() => handleNavigation('about')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">ABOUT US</button>
                <button onClick={() => handleNavigation('services')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">SERVICES</button>
                <button onClick={() => handleNavigation('gallery')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">GALLERY</button>
                <button onClick={() => handleNavigation('contact')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">CONTACT</button>
                <button onClick={() => handleNavigation('login')} className="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-all">LOGIN</button>
                <button onClick={() => handleNavigation('register')} className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold uppercase tracking-wide text-sm text-center shadow-lg">REGISTER</button>
              </div>
            </div>
          )}
        </div>
      </nav >
    </div >
  );
}

export default Header;