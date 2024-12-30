import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Services from "./Services";

import "./Homepage.css";



const Homepage = () => {
    const [services, setServices] = useState([]); // Declare the services state
    const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/services")
      .then((response) => {
        setServices(response.data); // Set the fetched services data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });})
  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-overlay">
          <h1 className="slogan">Empowering Progress, Inspiring The Future</h1>
          <div className="btn-group mt-3">
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
      <section className="who-we-are py-5">
  <div className="container">
  <h2 className="text-center mb-4">WHO WE ARE</h2>
    <div className="row">
      {/* Welcoming Image */}
      <div className="col-md-6">
        <div className="welcome-image">
          {/* The image will be styled via CSS */}
        </div>
      </div>

      {/* Content Boxes */}
      <div className="col-md-6">
        {/* Key Point 1 */}
        <div className="content-box d-flex mb-4">
          <i className="bi bi-award-fill icon me-3"></i>
          <div>
            <h4>Proven Excellence</h4>
            <p>
              With a track record of delivering high-quality BPO services, we ensure that every interaction with your customers enhances your brand reputation.
            </p>
          </div>
        </div>

        {/* Key Point 2 */}
        <div className="content-box d-flex mb-4">
          <i className="bi bi-people-fill icon me-3"></i>
          <div>
            <h4>Skilled Professionals</h4>
            <p>
              Our team comprises highly trained and motivated experts dedicated to providing personalized solutions that align with your business goals.
            </p>
          </div>
        </div>

        {/* Key Point 3 */}
        <div className="content-box d-flex">
          <i className="bi bi-lightbulb-fill icon me-3"></i>
          <div>
            <h4>Innovative Solutions</h4>
            <p>
              We leverage the latest technologies and methodologies to deliver innovative, customized, and scalable solutions that meet your evolving needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* About Us Section */}
      <section className="about-us py-5">
  <div className="text-container">
    <h2 className="text-center mb-4">About Us</h2>
    <p className=" lead">
      Empowering Businesses with Unmatched Outsourcing Excellence!
    </p>
    <p className=" mt-3">
      At Alpha Capitals, we redefine the standards of business process outsourcing (BPO) by delivering innovative, bespoke solutions that drive growth and transformation. With an unwavering commitment to quality, efficiency, and precision, we empower our clients to focus on their core competencies while we handle the complexities of their operations.
    </p>
    <p className=" mt-3">
      Backed by a team of industry veterans and cutting-edge technology, Alpha Capitals ensures the utmost security and efficiency in safeguarding customer information, financial assets, and trading environments. With us, you gain access to capital markets, advanced technological platforms, and fast execution of operations 24/7.
    </p>
    <p className=" mt-3">
      Experience efficiency, scalability, and cost-effectiveness like never before. Alpha Capitals is your trusted partner in driving innovation, unlocking new opportunities, and achieving global excellence.
    </p>
  </div>
  <div className="image-container"></div>
</section>
<Services services={services} />

    </div>
  );
};

export default Homepage;
