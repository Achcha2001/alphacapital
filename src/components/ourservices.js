import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Ourservices.css";

const OurServices = () => {
  return (
    <section className="services-page1">
      {/* Hero Section */}
      <div className="services-hero1">
        <div className="services-overlay1">
          <div className="services-content1 text-center">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">Delivering Excellence in Every Call and Interaction</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container1 mt-5">
        <h2 className="services-heading1 text-center mb-5">What We Offer</h2>
        <div className="services-grid1">
        

          {/* Service 2 */}
          <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="service-title1">Outbound Sales and Telemarketing</h3>
            <p className="service-description1">
              Boost your sales and marketing efforts with our outbound call center services. From lead generation and prospecting to customer acquisition and retention campaigns, we help you drive revenue growth and maximize ROI through targeted outreach and engagement.
            </p>
          </div>

          {/* Service 3 */}
          {/* <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="service-title1">Technical Support</h3>
            <p className="service-description1">
              Ensure seamless operation of your products and services with our technical support services. Our knowledgeable agents offer expert troubleshooting and assistance to resolve technical issues promptly, minimizing downtime and optimizing customer experience.
            </p>
          </div> */}

          {/* Service 4 */}
          {/* <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="service-title1">Back Office Support</h3>
            <p className="service-description1">
              Streamline your business operations with our efficient back-office support services. From data entry and document processing to record management, we help you focus on core activities while we handle the rest.
            </p>
          </div> */}

          {/* Service 5 */}
          <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="service-title1">Effective Lead Generation for Growth
            </h3>
            <p className="service-description">
            Lead generation is vital for sales success. Our services help businesses identify high-quality prospects, engage them, and build a targeted customer database. We connect you with genuinely interested individuals, saving time and resources. By handling outreach, research, and qualification, we allow your sales team to focus on converting leads into loyal customers, driving sustainable growth.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="service-title1">Sales Strategy Development/Sales Team Training</h3>
            <p className="service-description1">
            Alpha Capitals (Pvt) Ltd specialises in empowering businesses to unlock their full sales potential through tailored sales strategy development and team training. Our team of experienced professionals provides innovative solutions designed to equip your sales team with practical skills and cutting-edge techniques to close more deals and exceed targets. By aligning our strategies with your unique goals and challenges, we deliver the tools, insights, and expertise needed to help your business thrive in today’s competitive market.
            </p>
          </div>
            {/* Service 1 */}
            <div className="service-card1">
            <div className="service-icon">
            <i className="fas fa-user-shield"></i>
            </div>
            <h3 className="service-title1">Back Office Support</h3>
            <p className="service-description1">
            <>
        At Alpha Capitals, we pride ourselves on delivering top-tier backend support services tailored to your business needs. Our expertise spans <span className="bold">HR outsourcing, quality assurance, compliance, IT support, and social media management</span>, ensuring seamless operations and strategic growth for your company. Partner with us to experience professional excellence and unmatched reliability.
      </>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
