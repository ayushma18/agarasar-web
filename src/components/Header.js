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
      {/* Top Banner Area */}
      <div className="bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 text-white py-3 relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full transform -translate-x-10 -translate-y-10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 transform translate-x-16 -translate-y-16 rotate-45"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-orange-300 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center">
            
            {/* Left: Logo and Tagline */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">अ</span>
                </div>
                <div>
                  <div className="font-bold text-xl font-devanagari">अग्रसर सहकारी</div>
                  <div className="text-sm opacity-90">Our Quest To Make Banking Better Starts Here</div>
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
                <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-white text-xs font-bold">f</span>
                </button>
                <button className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-white text-xs font-bold">t</span>
                </button>
                <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-white text-xs font-bold">in</span>
                </button>
                <button className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-white text-xs font-bold">ig</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-slate-800 text-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8 py-4">
              <button
                onClick={() => handleNavigation('home')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                ABOUT US
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                SERVICES
              </button>
              <button
                onClick={() => handleNavigation('news')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                NEWS & ACTIVITIES
              </button>
              <button
                onClick={() => handleNavigation('gallery')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                GALLERY
              </button>
              <button
                onClick={() => handleNavigation('login')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                LOGIN
              </button>
              <button
                onClick={() => handleNavigation('register')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium uppercase tracking-wide text-sm"
              >
                REGISTER
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col items-center justify-center p-4 text-white hover:text-orange-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'my-1'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavigation('home')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">HOME</button>
                <button onClick={() => handleNavigation('about')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">ABOUT US</button>
                <button onClick={() => handleNavigation('services')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">SERVICES</button>
                <button onClick={() => handleNavigation('news')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">NEWS & ACTIVITIES</button>
                <button onClick={() => handleNavigation('gallery')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">GALLERY</button>
                <button onClick={() => handleNavigation('login')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">LOGIN</button>
                <button onClick={() => handleNavigation('register')} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium uppercase tracking-wide text-sm text-center">REGISTER</button>
                <button onClick={() => handleNavigation('contact')} className="text-left text-white hover:text-orange-400 py-2 font-medium uppercase tracking-wide text-sm">CONTACT US</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;