import React from "react";
import "./Contactus.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-background">
        <div className="overlay1">
          <div className="content text-center">
            <h1 className="animate-text">Get in Touch with Us</h1>
            <p>We’re here to answer your queries and support your business needs.</p>
            <div className="buttons mt-4">
              <a href="mailto:info@alphacapitals.lk" className="btn btn-primary me-3">
                Email Us
              </a>
              <a href="tel:+94701660128" className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="info-box p-4">
              <h4 className="mb-4">Contact Information</h4>
              <div className="info-item d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt-fill me-3"></i>
                <p>No. 525 Union Place Colombo 02</p>
              </div>
              <div className="info-item d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-3"></i>
                <p>info@alphacapitals.lk</p>
              </div>
              <div className="info-item d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3"></i>
                <p>+94701660128</p>
              </div>
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-facebook me-3"></i>
                <i className="bi bi-twitter me-3"></i>
                <i className="bi bi-linkedin me-3"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6">
          <div className="map-box">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0099276037366!2d80.63263157599234!3d7.290572472317756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae322c13b62cd87%3A0xe21d5d550dd89968!2sAlpha%20Street%2C%20Colombo!5e0!3m2!1sen!2slk!4v1691848561234!5m2!1sen!2slk"
    width="100%"
    height="350"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    title="Alpha Capitals Location"
  ></iframe>
  <div className="map-address text-center mt-3">
    <p className="address-text">
      <strong>No. 525 Union Place, Colombo 02</strong>
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
