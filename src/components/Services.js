import React from "react";
import "./Services.css";
import { Card, Container, Row, Col } from "react-bootstrap";

import { FaHeadset, FaBullhorn, FaTools } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Inbound Customer Support",
    description:
      "Provide timely and effective resolution to customer inquiries, complaints, and issues with our inbound call center services. Our trained agents deliver personalized assistance across multiple channels, including phone, email, chat, and social media, enhancing customer satisfaction and loyalty.",
    icon: <FaHeadset className="service-icon" />,
  },
  {
    id: 2,
    title: "Outbound Sales and Telemarketing",
    description:
      "Boost your sales and marketing efforts with our outbound call center services. From lead generation and prospecting to customer acquisition and retention campaigns, we help you drive revenue growth and maximize ROI through targeted outreach and engagement.",
    icon: <FaBullhorn className="service-icon" />,
  },
  {
    id: 3,
    title: "Technical Support",
    description:
      "Ensure seamless operation of your products and services with our technical support services. Our knowledgeable agents offer expert troubleshooting and assistance to resolve technical issues promptly, minimizing downtime and optimizing customer experience.",
    icon: <FaTools className="service-icon" />,
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <Container>
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {servicesData.map((service) => (
          <Col md={4} sm={6} key={service.id} className="mb-4">
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
    </Container>
  </section>
);

export default Services;