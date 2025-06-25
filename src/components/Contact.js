import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're here to help you with all your financial needs. Get in touch with अग्रसर सहकारी 
            through any of the convenient methods below. Our dedicated team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your first name"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your last name"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="account">Account Services</option>
                    <option value="loan">Loan Information</option>
                    <option value="digital">Digital Banking</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="6"
                    placeholder="Enter your message here..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-300"
                  ></textarea>
                </div>
                
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Office Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Visit Our Office</h3>
                    <p className="text-gray-600">Come and meet us in person</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Main Branch:</p>
                  <p>Chabahil, Kathmandu</p>
                  <p>Nepal - 44600</p>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Office Hours:</strong><br/>
                    Sunday - Friday: 10:00 AM - 5:00 PM<br/>
                    Saturday: 10:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Call Us</h3>
                    <p className="text-gray-600">Speak to our customer service team</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Customer Service:</strong> +977 9828722469</p>
                  <p><strong>Loan Department:</strong> +977 9828722469</p>
                  <p><strong>Emergency Hotline:</strong> +977 9828722469</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Available 24/7 for urgent matters
                  </p>
                </div>
              </div>
              
              {/* Email Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Email Us</h3>
                    <p className="text-gray-600">Send us an email anytime</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>General:</strong> info@agarasarsahakari.com</p>
                  <p><strong>Support:</strong> support@agarasarsahakari.com</p>
                  <p><strong>Loans:</strong> loans@agarasarsahakari.com</p>
                  <p className="text-sm text-gray-500 mt-4">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Find Us on Map</h2>
            <p className="text-gray-600 text-lg">Located in the heart of Kathmandu for easy access</p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">Google Maps integration will be displayed here</p>
              <div className="mt-4">
                <button className="bg-orange-400 hover:bg-orange-500 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">What are your operating hours?</h3>
              <p className="text-gray-600">We are open Sunday through Friday from 10:00 AM to 5:00 PM, and Saturday from 10:00 AM to 3:00 PM.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How can I open an account?</h3>
              <p className="text-gray-600">You can visit our branch with required documents or call us to schedule an appointment. Our team will guide you through the process.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Do you offer online banking services?</h3>
              <p className="text-gray-600">Yes, we provide comprehensive digital banking services including mobile banking, online transfers, and account management.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">What documents do I need for a loan application?</h3>
              <p className="text-gray-600">Required documents vary by loan type. Generally, you'll need identification, income proof, and collateral documents. Contact us for specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;