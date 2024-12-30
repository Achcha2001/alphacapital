import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"; // Import the CSS file

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="footer-gradient py-4">
    <Container>
      <Row className="align-items-center">
        {/* Logo Section */}
        <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
          <div className="footer-logo"></div>
        </Col>

        {/* Menu Items Section */}
        <Col md={4} className="text-center mb-3 mb-md-0">
          <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li className="mx-3">
              <a href="/" className=" text-decoration-none">Home</a>
            </li>
            <li className="mx-3">
              <a href="/about" className=" text-decoration-none">About Us</a>
            </li>
            <li className="mx-3">
              <a href="/services" className=" text-decoration-none">Services</a>
            </li>
            <li className="mx-3">
              <a href="/contactus" className=" text-decoration-none">Contact</a>
            </li>
          </ul>
        </Col>

        {/* Social Media Section */}
        <Col md={4} className="text-center text-md-end footer-social-icons">
          <a 
            href="https://www.instagram.com" 
            className=" mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://www.facebook.com" 
            className=" mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a 
            href="https://www.linkedin.com" 
            className=" mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row className="mt-3 justify-content-center align-items-center">
  <Col className="d-flex justify-content-center">
    <p className="mb-0 text-center">
      &copy; 2024 Alpha Capitals. All rights reserved.
    </p>
  </Col>
</Row>

    </Container>
  </footer>
);

export default Footer;
