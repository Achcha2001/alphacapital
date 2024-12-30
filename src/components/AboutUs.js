import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-overlay">
          <div className="about-content text-center">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">Empowering Businesses with Unmatched Outsourcing Excellence!</p>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-container mt-5">
        <h2 className="about-heading text-center mb-5">Everything About Us</h2>
        <div className="about-row">
          <div className="about-description">
            <p>
              At Alpha Capitals, we redefine the standards of business process outsourcing (BPO) by delivering innovative, bespoke solutions that drive growth and transformation. With an unwavering commitment to quality, efficiency, and precision, we empower our clients to focus on their core competencies while we handle the complexities of their operations.
            </p>
            <p>
              Backed by a team of industry veterans and cutting-edge technology, Alpha Capitals ensures the utmost security and efficiency in safeguarding customer information, financial assets, and trading environments. With us, you gain access to capital markets, advanced technological platforms, and fast execution of operations 24/7.
            </p>
            <p>
              Experience efficiency, scalability, and cost-effectiveness like never before. Alpha Capitals is your trusted partner in driving innovation, unlocking new opportunities, and achieving global excellence.
            </p>
          </div>
        </div>
      </div>

      {/* CEO's Message Section */}
      <div className="about-container mt-5">
        <h2 className="about-heading text-center mb-5">Message from Our CEO</h2>
        <div className="about-row about-ceo">
          <div className="about-ceo-image"></div> {/* Placeholder for image styled in CSS */}
          <div className="about-ceo-message">
            <blockquote className="about-quote">
              <p>
                "At Alpha Capitals, we are passionate about empowering businesses with innovative solutions that drive success. Our unwavering commitment to excellence and our relentless pursuit of perfection have established us as leaders in the BPO industry. Together, let's redefine the future and unlock new possibilities."
              </p>
              <footer className="about-quote-footer">
                <cite>Krishan Christopher, CEO</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
