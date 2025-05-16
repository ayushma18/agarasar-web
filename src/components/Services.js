import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: "Saving Funds",
      icon: "🏦",
      description: "Our saving accounts offer competitive interest rates and no monthly maintenance fees. With a variety of options to choose from, you can find the right account to meet your savings goals."
    },
    {
      title: "Checking Funds",
      icon: "👥",
      description: "Our checking accounts come with online banking, mobile deposit, and overdraft protection. Whether you need a basic account or one with added benefits, we have the right checking account for you."
    },
    {
      title: "Loans",
      icon: "💵",
      description: "We offer personal loans, home loans, and car loans with flexible repayment terms and competitive rates. Let us help you finance your next big purchase or project."
    },
    {
      title: "Transfer Funds",
      icon: "↔️",
      description: "Essentially, a money transfer or money service or remittance business involves offering a service to collect money from the sender and deliver it to the beneficiary. This can be a local service within the same country."
    }
  ];

  return (
    <div className="services-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;