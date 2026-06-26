import React from 'react';

const About = () => {
  const stats = [
    { value: '50,000+', label: 'Happy Members', np: 'सन्तुष्ट सदस्य', icon: '👥' },
    { value: '20,000+', label: 'Active Loans', np: 'सक्रिय ऋण', icon: '💳' },
    { value: '100+', label: 'Community Projects', np: 'सामुदायिक परियोजना', icon: '🏗️' }
  ];

  // NOTE: Replace these placeholder portraits with real staff photos.
  // Drop the images into /public/team/ and point `photo` to e.g. "/team/manager.jpg".
  const leadership = {
    name: 'Santosh Pudasaini',
    np: 'सन्तोष पुडासैनी',
    role: 'Chairman & General Manager',
    roleNp: 'अध्यक्ष तथा प्रमुख कार्यकारी',
    photo: '/team/santosh.jpg',
    message:
      'At Agarasar Cooperative, our members are family. For over a decade we have worked to make banking simple, transparent and accessible for every Nepali household. Your trust drives everything we do.'
  };

  const team = [
    {
      name: 'Aayushma Pudasaini',
      np: 'आयुष्मा पुडासैनी',
      role: 'Operations Manager',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80'
    },
    {
      name: 'Bishnu Karki',
      np: 'विष्णु कार्की',
      role: 'Head of Loans',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80'
    },
    {
      name: 'Sita Sharma',
      np: 'सीता शर्मा',
      role: 'Customer Relations',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80'
    },
    {
      name: 'Ramesh Thapa',
      np: 'रमेश थापा',
      role: 'Finance Officer',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80'
    }
  ];

  const values = [
    { icon: '👁️', title: 'Vision', np: 'दृष्टिकोण', tone: 'border-blue-500', text: "To be Nepal's most trusted and innovative cooperative, fostering sustainable growth for all." },
    { icon: '🎯', title: 'Mission', np: 'लक्ष्य', tone: 'border-emerald-500', text: 'Deliver exceptional financial services, promote literacy, and build stronger communities with transparency and care.' },
    { icon: '🤝', title: 'Values', np: 'मूल्य मान्यता', tone: 'border-indigo-500', text: 'Integrity, member-first service, community upliftment, and accountability in every decision we make.' }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50/50 pt-32 pb-20">
        <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-10 w-96 h-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
              About Us · हाम्रोबारे
            </span>
            <h1 className="mt-5 font-devanagari text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              अग्रसर सहकारी
            </h1>
            <p className="mt-2 text-xl text-emerald-600 font-medium">Moving Forward, Together.</p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Agarasar Cooperative is dedicated to empowering our community with accessible, innovative and
              trustworthy financial solutions. Our mission is to help every member achieve their dreams
              through mutual support and modern banking.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-emerald-200/50 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Agarasar team collaborating"
              className="relative rounded-3xl border border-white shadow-2xl object-cover w-full h-80 ring-1 ring-slate-100"
            />
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className={`rounded-3xl border-t-4 ${v.tone} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
              <span className="text-4xl">{v.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{v.title}</h3>
              <p className="font-devanagari text-sm text-gray-400">{v.np}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership message */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/15 to-emerald-500/15 blur-xl" />
              <img
                src={leadership.photo}
                alt={leadership.name}
                className="relative w-full max-w-xs mx-auto rounded-3xl object-cover aspect-square shadow-xl ring-4 ring-white"
              />
            </div>
            <div className="lg:col-span-2">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                Message from Leadership · नेतृत्वको सन्देश
              </span>
              <svg className="mt-5 h-10 w-10 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V6zm9 0A5.17 5.17 0 0011 11.17V18h6.83v-6.83H14.5a1.67 1.67 0 011.67-1.67V6z" />
              </svg>
              <p className="mt-3 text-xl text-gray-700 leading-relaxed italic">{leadership.message}</p>
              <div className="mt-6">
                <p className="text-lg font-bold text-gray-900">{leadership.name}</p>
                <p className="font-devanagari text-gray-500">{leadership.np}</p>
                <p className="mt-1 text-sm font-medium text-blue-600">{leadership.role}</p>
                <p className="font-devanagari text-sm text-gray-400">{leadership.roleNp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Our Team · हाम्रो टोली
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">The people behind Agarasar</h2>
            <p className="mt-2 text-lg text-gray-500">A dedicated team committed to your financial well-being</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="font-devanagari text-sm text-gray-400">{member.np}</p>
                  <p className="mt-1 text-sm font-medium text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500">
        <div className="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Achievements</h2>
            <p className="mt-2 font-devanagari text-blue-50/80">हाम्रा उपलब्धिहरू</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md">
                <div className="text-4xl">{s.icon}</div>
                <div className="mt-4 text-4xl font-bold text-white">{s.value}</div>
                <p className="mt-1 text-lg font-semibold text-blue-50">{s.label}</p>
                <p className="font-devanagari text-sm text-blue-100/70">{s.np}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
