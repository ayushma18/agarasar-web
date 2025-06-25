import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* About Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">About Our Cooperative</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Vision/Mission/Goals Box */}
            <div className="card p-8 space-y-8">
              {/* Our Vision */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary flex items-center">
                  <span className="w-8 h-8 bg-cooperative-green rounded-full flex items-center justify-center text-white text-sm mr-3">👁️</span>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted and innovative cooperative financial institution, 
                  empowering our community through accessible banking solutions and fostering 
                  sustainable economic growth for all our members.
                </p>
              </div>

              {/* Our Mission */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary flex items-center">
                  <span className="w-8 h-8 bg-cooperative-blue rounded-full flex items-center justify-center text-white text-sm mr-3">🎯</span>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to providing exceptional financial services, promoting 
                  financial literacy, and building stronger communities through transparent 
                  governance, innovative technology, and member-centric solutions.
                </p>
              </div>

              {/* Our Goals */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary flex items-center">
                  <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm mr-3">🏆</span>
                  Our Goals
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 leading-relaxed">• Expand financial inclusion across our community</p>
                  <p className="text-gray-700 leading-relaxed">• Maintain 99%+ member satisfaction rating</p>
                  <p className="text-gray-700 leading-relaxed">• Support 1000+ local businesses by 2025</p>
                  <p className="text-gray-700 leading-relaxed">• Achieve sustainable growth and profitability</p>
                </div>
              </div>
            </div>

            {/* Cooperative Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary mb-6">Who We Are</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  अग्रसर सहकारी (Agrasar Sahakari) stands as a beacon of financial excellence in our community,
                  established with the vision of creating a more inclusive and prosperous society.
                  Since our inception, we have been dedicated to serving our members with integrity,
                  transparency, and unwavering commitment to their financial well-being.
                </p>
                
                <p>
                  Our cooperative was born from the belief that everyone deserves access to quality 
                  financial services, regardless of their economic background. We have built our 
                  foundation on the principles of mutual support, shared prosperity, and community 
                  development, creating a financial ecosystem that truly serves the people.
                </p>
                
                <p>
                  With a team of experienced professionals and a member-first approach, we offer 
                  a comprehensive range of banking services designed to meet the diverse needs of 
                  our community. From traditional savings and lending services to modern digital 
                  banking solutions, we continue to evolve and innovate while staying true to our 
                  cooperative values.
                </p>
                
                <p>
                  Our commitment extends beyond banking – we actively participate in community 
                  development initiatives, financial literacy programs, and sustainable business 
                  practices that contribute to the overall growth and prosperity of our region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements/Statistics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Happy Members */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-cooperative-green rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                👥
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Happy Members</p>
              <p className="text-gray-600">Trusted families and individuals who chose us as their financial partner</p>
            </div>

            {/* Active Loans */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-cooperative-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                💳
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">20,000+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Active Loans</p>
              <p className="text-gray-600">Successful loan disbursements helping dreams become reality</p>
            </div>

            {/* Community Projects */}
            <div className="card card-hover p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🏗️
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-xl font-semibold text-secondary mb-2">Community Projects</p>
              <p className="text-gray-600">Development initiatives supporting local growth and prosperity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Savings Accounts */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cooperative-green to-cooperative-green-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🏦
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Savings Accounts</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure your future with our competitive savings options and flexible deposit schemes.
              </p>
            </div>

            {/* Loan Services */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cooperative-blue to-cooperative-blue-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                💰
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Loan Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible lending solutions for personal, business, and agricultural needs at competitive rates.
              </p>
            </div>

            {/* Digital Banking */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-cooperative-earth-light rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                📱
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Digital Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern online and mobile banking services for convenient 24/7 account management.
              </p>
            </div>

            {/* Financial Advisory */}
            <div className="card card-hover p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-cooperative-blue-dark rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                📊
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Financial Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on investments, financial planning, and wealth management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;