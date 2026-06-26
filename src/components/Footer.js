import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const quickLinks = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Register', '/register'],
    ['Login', '/login'],
    ['Contact Us', '/contact']
  ];

  const serviceLinks = [
    ['Fund Transfer', '/services'],
    ['Saving Scheme', '/services'],
    ['Loan Schemes', '/services'],
    ['Digital Banking', '/services'],
    ['Investment Plans', '/services']
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-16 w-72 h-72 rounded-full bg-blue-600/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-emerald-600/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + address */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                <span className="font-bold text-white text-lg">अ</span>
              </div>
              <div>
                <div className="font-devanagari text-lg font-bold leading-tight">अग्रसर सहकारी</div>
                <div className="text-xs text-blue-200/70">Empowering Communities</div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-blue-100/80">
              <p className="flex items-start gap-2">
                <span className="text-emerald-400">📍</span> Chabahil, Kathmandu, Nepal
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">📞</span> 9810052055
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">✉️</span> info@agarasarsahakari.com
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(([label, path]) => (
                <li key={label}>
                  <button onClick={() => go(path)} className="inline-block text-blue-100/80 transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-emerald-400">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(([label, path]) => (
                <li key={label}>
                  <button onClick={() => go(path)} className="inline-block text-blue-100/80 transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-emerald-400">Newsletter</h3>
            <p className="mb-4 text-sm text-blue-100/80">Stay updated with our latest news and offers.</p>
            {subscribed ? (
              <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                ✅ Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 rounded-l-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-blue-200/50 outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button type="submit" className="rounded-r-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:from-emerald-600 hover:to-emerald-700">
                  Join
                </button>
              </form>
            )}
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/santosh.pudasaini1" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-blue-600" title="Facebook">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="https://wa.me/9810052055" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-green-500" title="WhatsApp">
                <span className="text-sm font-bold">w</span>
              </a>
              <a href="mailto:info@agarasarsahakari.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-indigo-500" title="Email">
                <span className="text-sm font-bold">@</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-blue-200/70">
              © {new Date().getFullYear()} <span className="font-devanagari">अग्रसर सहकारी</span>. All rights reserved.
            </p>
            <p className="text-xs text-blue-200/50">
              Built with ❤️ for our community · Privacy Policy · Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
