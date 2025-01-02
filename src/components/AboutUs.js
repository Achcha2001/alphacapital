import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom settings
  }, []);

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero" data-aos="fade-down">
        <div className="about-overlay">
          <div className="about-content text-center">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">Empowering Businesses with Unmatched Outsourcing Excellence!</p>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-container mt-5" data-aos="fade-up">
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

      {/* Our History Section */}
      <div className="about-section-history" data-aos="fade-right">
        <div className="about-history-text">
          <h2 className="about-heading mb-4 text-center">Our History</h2>
          <div className="about-description-history">
            <p>
              At Alpha Capitals (Pvt) Ltd, we believe that every great journey begins with a single step—and ours started in 2024 with just 18 clients and a passionate team of 5 agents. Located in the vibrant business hub of Colombo 02, we entered the Business Process Outsourcing (BPO) industry with a clear mission: to empower progress and inspire the future.
            </p>
            <p>
              From the very beginning, Alpha Capitals was built on the principles of resilience, innovation, and dedication. With a small but determined team, we worked tirelessly to establish ourselves as a trusted partner in the BPO sector. Each client we served became a part of our story, motivating us to deliver exceptional value and exceed expectations.
            </p>
            <p>
              Our journey has been one of continuous growth and transformation. We embraced challenges as opportunities to innovate and evolve, always keeping our clients’ success at the heart of everything we do. Guided by our motto, "Empowering Progress, Inspiring the Future," we have set out to redefine the BPO industry by combining cutting-edge solutions with a personalized approach.
            </p>
            <p>
              Today, Alpha Capitals is more than a company—it is a symbol of what can be achieved through vision, teamwork, and an unyielding commitment to excellence. As we continue to grow, we remain dedicated to empowering businesses, driving progress, and shaping a brighter future for all those we serve.
            </p>
            <p>
              Join us on this exciting journey and discover the Alpha Capitals difference. Together, we’ll achieve greatness.
            </p>
          </div>
        </div>
      </div>

      {/* CEO's Message Section */}
      <div className="about-container mt-5" data-aos="fade-left">
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

      {/* Begin with Alpha Capitals Section */}
      <div className="about-section-divider" data-aos="zoom-in">
        <div className="about-container mt-5">
          <h2 className="about-heading text-center mb-5">Begin with Alpha Capitals</h2>
          <div className="about-row d-flex align-items-center">
            <div className="about-image-container"></div>
            <div className="about-description">
              <p>
                We at Alpha Capitals believe that every great career starts with the right foundation. Established in early 2024, our company offers a unique opportunity to grow with a dynamic and forward-thinking team. Starting your career with us means joining a company driven by innovation, collaboration, and a commitment to excellence.
              </p>
              <p>
                At Alpha Capitals, you’ll gain hands-on experience in the rapidly expanding BPO industry, work alongside passionate professionals, and contribute to solutions that empower businesses worldwide. Together, let’s build a future defined by progress, purpose, and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
