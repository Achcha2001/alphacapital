import React from "react";
import "./Services.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap"; // Added Button
import { Link } from "react-router-dom"; // Import Link from React Router

import { FaClipboard, FaBullhorn } from "react-icons/fa"; // Removed FaEnvelope

const servicesData = [
  {
    id: 1,
    title: "Back Office Support",
    description: (
      <>
        At Alpha Capitals, we pride ourselves on delivering top-tier backend support services tailored to your business needs. Our expertise spans <span className="bold">HR outsourcing, quality assurance, compliance, IT support, and social media management</span>, ensuring seamless operations and strategic growth for your company. Partner with us to experience professional excellence and unmatched reliability.
      </>
    ),
    icon: <FaClipboard className="service-icon" />,
  },
  
  {
    id: 2,
    title: "Outbound Sales and Telemarketing",
    description:
      "Boost your sales and marketing efforts with our outbound call center services. From lead generation and prospecting to customer acquisition and retention campaigns, we help you drive revenue growth and maximize ROI through targeted outreach and engagement.",
    icon: <FaBullhorn className="service-icon" />,
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <Container>
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="justify-content-center"> {/* Center content */}
        {servicesData.map((service) => (
          <Col md={6} sm={8} key={service.id} className="mb-4"> {/* Adjust column width */}
            <Card className="h-100 service-card">
              <Card.Body className="text-center">
                {service.icon}
                <Card.Title className="service-title">{service.title}</Card.Title>
                <Card.Text className="service-description">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* See More Button */}
      <div className="text-center mt-4">
        <Link to="/ourservices">
          <Button variant="primary" className="see-more-btn">
            See More
          </Button>
        </Link>
      </div>
    </Container>
  </section>
);

export default Services;
