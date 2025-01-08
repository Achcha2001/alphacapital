import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";

const Homepage = () => {
  const [services, setServices] = useState([]); // State to store services
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth animation
      once: true, // Trigger animation only once
    });

    // Fetch services data from API
    axios
      .get("http://localhost:5000/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-overlay">
          <h1 className="slogan" data-aos="fade-up">
            Empowering Progress, Inspiring The Future
          </h1>
          <div className="btn-group mt-3" data-aos="fade-up">
            <button className="btn btn-primary" onClick={() => navigate("/contactus")}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/Join-us")}>
              <FontAwesomeIcon icon={faUserPlus} /> Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="who-we-are py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">WHO WE ARE</h2>
          <div className="row">
            {/* Welcome Image */}
            <div className="col-md-6">
              <div className="welcome-image" data-aos="zoom-in"></div>
            </div>

            {/* Content Boxes */}
            <div className="col-md-6">
              {/* Key Point 1 */}
              <div className="content-box d-flex mb-4" data-aos="fade-right">
                <i className="bi bi-award-fill icon me-3"></i>
                <div>
                  <h4>Proven Excellence</h4>
                  <p>
                    With a track record of delivering high-quality BPO services,
                    we ensure that every interaction with your customers enhances your brand reputation.
                  </p>
                </div>
              </div>

              {/* Key Point 2 */}
              <div className="content-box d-flex mb-4" data-aos="fade-right">
                <i className="bi bi-people-fill icon me-3"></i>
                <div>
                  <h4>Skilled Professionals</h4>
                  <p>
                    Our team comprises highly trained and motivated experts
                    dedicated to providing personalized solutions that align with your business goals.
                  </p>
                </div>
              </div>

              {/* Key Point 3 */}
              <div className="content-box d-flex" data-aos="fade-right">
                <i className="bi bi-lightbulb-fill icon me-3"></i>
                <div>
                  <h4>Innovative Solutions</h4>
                  <p>
                    We leverage the latest technologies and methodologies to
                    deliver innovative, customized, and scalable solutions that meet your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5" data-aos="fade-up">
  <div className="container d-flex align-items-center">
    {/* Text Container */}
    <div className="text-container me-4" style={{ flex: "1 1 50%" }}>
      <h2 className="text-center mb-4">About Us</h2>
      <p className="lead">
        Empowering Businesses with Unmatched Outsourcing Excellence!
      </p>
      <p>
        At Alpha Capitals, we redefine the standards of business process
        outsourcing (BPO) by delivering innovative, bespoke solutions that
        drive growth and transformation. With an unwavering commitment to
        quality, efficiency, and precision, we empower our clients to focus
        on their core competencies while we handle the complexities of their
        operations.
      </p>
      <p>
        Backed by a team of industry veterans and cutting-edge technology,
        Alpha Capitals ensures the utmost security and efficiency in
        safeguarding customer information, financial assets, and trading
        environments. With us, you gain access to capital markets, advanced
        technological platforms, and fast execution of operations 24/7.
      </p>
      <p>
        Experience efficiency, scalability, and cost-effectiveness like
        never before. Alpha Capitals is your trusted partner in driving
        innovation, unlocking new opportunities, and achieving global
        excellence.
      </p>
    </div>

    {/* Image Container */}
    <div
      className="image-container"
      style={{
        flex: "1 1 50%",
        backgroundImage: `url(${require("../Assets/aboutnew.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        minHeight: "400px",
      }}
    ></div>
  </div>
</section>


      {/* Services Section */}
      <Services services={services} />
    </div>
  );
};

export default Homepage;
