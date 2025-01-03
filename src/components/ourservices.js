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
          {/* Service 1 */}
          <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="service-title1">Inbound Customer Support</h3>
            <p className="service-description1">
              Provide timely and effective resolution to customer inquiries, complaints, and issues with our inbound call center services. Our trained agents deliver personalized assistance across multiple channels, including phone, email, chat, and social media, enhancing customer satisfaction and loyalty.
            </p>
          </div>

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
            <h3 className="service-title1">Market Research and Surveys</h3>
            <p className="service-description">
              Gain actionable insights into your market and customers with our tailored research and survey services. We help you make data-driven decisions to enhance strategy and drive growth.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-card1">
            <div className="service-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="service-title1">Business Consulting</h3>
            <p className="service-description1">
              Leverage our expertise in business process outsourcing to design and implement strategies that improve efficiency, reduce costs, and accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
