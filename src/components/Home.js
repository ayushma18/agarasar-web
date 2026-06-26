import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [counters, setCounters] = useState({
    incoming: 0,
    outgoing: 0,
    users: 0
  });
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Trigger counter animation only when the stats section scrolls into view
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const animateCounter = (target, key, duration = 1800) => {
      let start = 0;
      const steps = duration / 40;
      const increment = target / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 40);
      return timer;
    };

    const t1 = animateCounter(60000, 'incoming');
    const t2 = animateCounter(10000, 'outgoing');
    const t3 = animateCounter(100, 'users');
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, [statsVisible]);

  return (
    <div className="bg-white">
      {/* ============================ HERO ============================ */}
      <section className="relative flex items-center min-h-[88vh] overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50/50">
        {/* Soft color glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-16 w-[32rem] h-[32rem] bg-blue-300/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 -right-20 w-[34rem] h-[34rem] bg-emerald-300/30 rounded-full blur-[130px]" />
        </div>

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(37,99,235,0.07) 1px, transparent 0)',
            backgroundSize: '34px 34px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-32 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left column */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm animate-fade-in">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-devanagari text-sm font-medium text-slate-700">
                  १०००+ परिवारहरूले विश्वास गर्नुहुन्छ
                </span>
                <span className="hidden sm:inline text-xs text-slate-400 border-l border-slate-200 pl-2.5">
                  Trusted by 1000+ families
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-7 font-devanagari font-bold leading-[1.08] text-5xl md:text-6xl lg:text-7xl text-slate-900 animate-slide-up">
                तपाईंको सपना
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  हाम्रो जिम्मेवारी
                </span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-slate-700 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Your Dreams, Our Responsibility
              </p>

              {/* Description */}
              <p className="mt-6 max-w-xl font-devanagari text-lg text-slate-600 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                सजिलो बचत, छिटो ऋण, र डिजिटल बैंकिङ। अग्रसर सहकारीमा तपाईंको पैसा सुरक्षित छ र भविष्य उज्यालो छ।
              </p>
              <p className="mt-2 max-w-xl text-base text-slate-500 leading-relaxed animate-slide-up" style={{ animationDelay: '0.25s' }}>
                Easy savings, quick loans, and digital banking — your money is safe and your future is bright.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
                <Link to="/register"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                >
                  <span className="font-devanagari">खाता खोल्नुहोस्</span>
                  <span className="text-sm font-normal text-emerald-50/90">· Open Account</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-200 bg-white px-7 py-4 font-semibold text-blue-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-0.5"
                >
                  <span className="font-devanagari">सम्पर्क गर्नुहोस्</span>
                  <span className="text-sm font-normal text-blue-400">· Contact Us</span>
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-600 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {[
                  { en: '100% Secure', np: 'पूर्ण सुरक्षित' },
                  { en: 'Instant Approval', np: 'तुरुन्त स्वीकृति' },
                  { en: '24/7 Support', np: '२४/७ सेवा' }
                ].map((item) => (
                  <div key={item.en} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-devanagari">{item.np}</span>
                    <span className="text-slate-400">{item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — floating account card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/40 to-emerald-200/40 blur-2xl" />

                {/* White panel */}
                <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl ring-1 ring-slate-100">
                  {/* Debit card mockup */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 p-6 text-white shadow-xl animate-float">
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/70">Agarasar Card</p>
                        <p className="font-devanagari mt-1 text-lg font-semibold">अग्रसर सहकारी</p>
                      </div>
                      <div className="h-9 w-11 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-inner" />
                    </div>
                    <p className="mt-7 font-mono text-lg tracking-[0.25em]">5547 •••• •••• 2055</p>
                    <div className="mt-5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/60">Card Holder</p>
                        <p className="text-sm font-medium">Member</p>
                      </div>
                      <p className="text-xl font-bold italic tracking-tight">VISA</p>
                    </div>
                  </div>

                  {/* Mini stat tiles */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span className="text-2xl font-bold text-slate-800">5.5%</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">Savings Interest</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-2xl font-bold text-slate-800">24h</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">Loan Approval</p>
                    </div>
                  </div>

                  {/* Members pill */}
                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-4 text-white">
                    <div>
                      <p className="text-xs text-white/80">Happy Members</p>
                      <p className="text-2xl font-bold">1000+</p>
                    </div>
                    <div className="flex -space-x-2">
                      {['from-blue-300 to-blue-500', 'from-sky-300 to-sky-500', 'from-emerald-300 to-emerald-500', 'from-teal-300 to-teal-500'].map((g, i) => (
                        <span key={i} className={`h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br ${g}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section ref={statsRef} className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Our Achievement · हाम्रो उपलब्धि
            </span>
            <h2 className="mt-4 font-devanagari text-3xl md:text-4xl font-bold text-slate-900">
              संख्याहरूले बोल्छन्
            </h2>
            <p className="mt-2 text-lg text-slate-500">Numbers speak — your trust is our strength</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                value: `रु. ${counters.incoming.toLocaleString()}+`,
                np: 'जम्मा बचत', en: 'Total Savings',
                ring: 'from-blue-500 to-blue-600',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                value: `रु. ${counters.outgoing.toLocaleString()}+`,
                np: 'दिइएको ऋण', en: 'Loans Disbursed',
                ring: 'from-emerald-500 to-teal-600',
                icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
              },
              {
                value: `${counters.users}+`,
                np: 'सक्रिय सदस्य', en: 'Active Members',
                ring: 'from-sky-500 to-blue-600',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              }
            ].map((card) => (
              <div
                key={card.en}
                className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.ring} text-white shadow-lg`}>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-slate-900">{card.value}</div>
                <div className="mt-2 font-devanagari text-lg font-semibold text-slate-700">{card.np}</div>
                <div className="text-sm text-slate-400">{card.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY CHOOSE US ============================ */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Why Agarasar · किन अग्रसर?
            </span>
            <h2 className="mt-4 font-devanagari text-3xl md:text-4xl font-bold text-slate-900">
              हामी बैंक मात्र होइनौं, तपाईंको जीवनभरको साथी हौं
            </h2>
            <p className="mt-2 text-lg text-slate-500">We're not just a bank — we're your lifelong partner</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                np: 'पूर्ण सुरक्षा', en: 'Complete Security',
                descNp: 'तपाईंको पैसा एकदम सुरक्षित छ। हामी नेपाल राष्ट्र बैंकबाट मान्यता प्राप्त र नियमित निरीक्षण हुने संस्था हौं।',
                descEn: 'Your money is completely safe. We are NRB-approved and regularly audited.',
                tone: 'blue',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                items: [['उच्च स्तरीय सुरक्षा', 'High-level Security'], ['NRB मान्यता प्राप्त', 'NRB Approved'], ['बीमा सुरक्षित', 'Insurance Protected']]
              },
              {
                np: 'छिटो सेवा', en: 'Fast Service',
                descNp: 'केही मिनेटमा खाता खोल्नुहोस्। २४ घण्टामा ऋण पाउनुहोस्। तुरुन्तै पैसा पठाउनुहोस्।',
                descEn: 'Open an account in minutes. Get a loan in 24 hours. Send money instantly.',
                tone: 'emerald',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                items: [['५ मिनेटमा खाता', '5-Min Account'], ['२४ घण्टामा ऋण', '24-Hour Loan'], ['तुरुन्त पैसा पठाउनुहोस्', 'Instant Transfer']]
              },
              {
                np: 'सधैं तपाईंको साथमा', en: 'Always With You',
                descNp: 'जुनसुकै समयमा सहयोग चाहिन्छ? हाम्रो टिम २४/७ तपाईंको सेवामा, नेपाली र अंग्रेजी दुवै भाषामा।',
                descEn: 'Need help anytime? Our team is at your service 24/7, in both Nepali and English.',
                tone: 'sky',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                items: [['२४/७ सेवा', '24/7 Service'], ['नेपाली र अंग्रेजी', 'Nepali & English'], ['फोन, च्याट र इमेल', 'Phone, Chat & Email']]
              }
            ].map((card) => {
              const tones = {
                blue: 'from-blue-500 to-blue-600',
                emerald: 'from-emerald-500 to-teal-600',
                sky: 'from-sky-500 to-blue-600'
              };
              return (
                <div
                  key={card.en}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tones[card.tone]} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="font-devanagari text-2xl font-bold text-slate-900">{card.np}</h3>
                  <p className="text-sm font-medium text-slate-400">{card.en}</p>
                  <p className="mt-4 font-devanagari text-slate-600 leading-relaxed">{card.descNp}</p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{card.descEn}</p>
                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                    {card.items.map(([np, en]) => (
                      <li key={en} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          <span className="block font-devanagari text-slate-700">{np}</span>
                          <span className="block text-sm text-slate-400">{en}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ CTA BANNER ============================ */}
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 px-8 py-14 text-center shadow-xl">
            <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-devanagari text-3xl md:text-4xl font-bold text-white">
                आजै सुरु गर्नुहोस्
              </h2>
              <p className="mt-3 text-lg text-blue-50/90">
                Join 1000+ families building a brighter future with Agarasar Cooperative.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="font-devanagari">खाता खोल्नुहोस्</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/services"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/60 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
