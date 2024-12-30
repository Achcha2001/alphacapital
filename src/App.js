import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';
import ContactUs from "./components/Contactus"; // Import the ContactUs component
import AboutUs from "./components/AboutUs";
import OurServices from "./components/ourservices";
import JoinUs from "./components/Joinus";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/join-us" element={<JoinUs />} />;

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
