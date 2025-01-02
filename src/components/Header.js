import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import "../components/Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <div className={`logo ${scrolling ? "small-logo" : ""}`}></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} exact to="/" activeClassName="active-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ourservices" activeClassName="active-link">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/life" activeClassName="active-link">
              Life At Alpha
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contactus" activeClassName="active-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
