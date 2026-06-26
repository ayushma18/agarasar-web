import React, { useState } from 'react';
import { apiUrl } from '../config';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: form.subject || 'General Inquiry'
        })
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, error: '', success: data.message });
        setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, error: data.detail || data.message || 'Something went wrong. Please try again.', success: '' });
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus({ loading: false, error: 'Unable to reach the server. Please make sure the backend is running.', success: '' });
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white';

  const contactCards = [
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      tone: 'from-blue-500 to-blue-600',
      title: 'Visit Our Office',
      np: 'हाम्रो कार्यालयमा आउनुहोस्',
      lines: ['Chabahil, Kathmandu', 'Nepal — 44600'],
      note: 'Sun–Fri: 10 AM – 5 PM · Sat: 10 AM – 3 PM'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      tone: 'from-emerald-500 to-teal-600',
      title: 'Call Us',
      np: 'हामीलाई फोन गर्नुहोस्',
      lines: ['+977 9828722469', '+977 9810052055'],
      note: 'Available 24/7 for urgent matters'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      tone: 'from-indigo-500 to-purple-600',
      title: 'Email Us',
      np: 'हामीलाई इमेल गर्नुहोस्',
      lines: ['info@agarasarsahakari.com', 'support@agarasarsahakari.com'],
      note: 'We respond within 24 hours'
    }
  ];

  const faqs = [
    ['What are your operating hours?', 'We are open Sunday through Friday from 10:00 AM to 5:00 PM, and Saturday from 10:00 AM to 3:00 PM.'],
    ['How can I open an account?', 'You can register online through this website, or visit our branch with the required documents. Our team will guide you through the process.'],
    ['Do you offer online banking services?', 'Yes, we provide comprehensive digital banking including mobile banking, online transfers, and account management.'],
    ['What documents do I need for a loan?', 'Requirements vary by loan type. Generally you will need identification, income proof, and collateral documents. Contact us for specifics.']
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50/50 pt-32 pb-16 text-center">
        <div className="pointer-events-none absolute -top-20 -left-10 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <span className="inline-block rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
            Contact Us · सम्पर्क गर्नुहोस्
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">We're here to help</h1>
          <p className="mt-4 text-lg text-slate-600">
            Reach out to <span className="font-devanagari">अग्रसर सहकारी</span> through any method below — our dedicated team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <p className="mt-2 text-gray-500">Fill out the form and we'll get back to you as soon as possible.</p>

            {status.success && (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-700">
                <p className="font-semibold">✅ Message sent</p>
                <p className="mt-1 text-sm">{status.success}</p>
              </div>
            )}
            {status.error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                <p className="font-semibold">❌ Could not send</p>
                <p className="mt-1 text-sm">{status.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Enter your first name" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Last Name *</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Enter your last name" className={inputClass} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+977 98xxxxxxxx" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Account Services">Account Services</option>
                  <option value="Loan Information">Loan Information</option>
                  <option value="Digital Banking">Digital Banking</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Suggestion">Suggestion</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="6" placeholder="How can we help you?" className={inputClass}></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.loading ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.tone} text-white shadow-lg`}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={card.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                    <p className="font-devanagari text-sm text-gray-400">{card.np}</p>
                    <div className="mt-2 space-y-0.5 text-gray-600">
                      {card.lines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{card.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
            <iframe
              title="Agarasar Cooperative location"
              src="https://www.google.com/maps?q=Chabahil,Kathmandu&output=embed"
              className="w-full h-80 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-gray-500">Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                  {q}
                  <svg className="h-5 w-5 text-blue-600 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
