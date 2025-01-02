import React from "react";
import { useNavigate } from "react-router-dom";
import "./Joinus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserTie, faBullseye } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const JoinUs = () => {
  const navigate = useNavigate();
  

  return (
    <div className="join-us-page">
      {/* Banner Section */}
      <section className="join-us-banner">
        <div className="container-j text-center">
          <h1 className="animate-text">Join Our Team</h1>
          <p>
            Be part of a dynamic and innovative team that is shaping the future of business
            process outsourcing.
          </p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => window.open("https://forms.gle/hkZbJhhTXmabueDr7", "_blank")}
          >
            <FontAwesomeIcon icon={faUserTie} /> Apply Now
          </button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Join Alpha Capitals?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faCheckCircle} className="icon-large mb-3" />
              <h4>Career Growth</h4>
              <p>
                Unlock new opportunities for professional and personal development with our
                tailored growth programs.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faBullseye} className="icon-large mb-3" />
              <h4>Innovative Culture</h4>
              <p>
                Work in a collaborative environment that encourages creativity and
                innovation.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faUserTie} className="icon-large mb-3" />
              <h4>Work-Life Balance</h4>
              <p>
                Enjoy a supportive work environment with flexible schedules and
                well-being initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* Join Us Section */}
<section className="team-section py-5 bg-light">
  <div className="team-container container text-center">
    <h2 className="team-heading mb-4">Start Your Journey With Us!</h2>
    <p className="team-intro mb-5">
      Ready to launch your sales career? Join our passionate and dynamic team today and start creating the future you deserve!
    </p>
    <div className="team-row row">
      {/* Requirements Section */}
      <div className="requirements-container d-flex align-items-start mb-4 col-md-12">
        <div className="team-requirements col-md-6">
          <h3 className="requirements-heading text-primary">Requirements</h3>
          <ul className="requirements-list list-unstyled">
            <li className="list-item mb-2">
              <i className="bi bi-check-circle text-success"></i> Strong communication skills in English (both written and verbal) are a must.
            </li>
            <li className="list-item mb-2">
              <i className="bi bi-check-circle text-success"></i> Open to school leavers – no prior qualifications needed.
            </li>
            <li className="list-item mb-2">
              <i className="bi bi-check-circle text-success"></i> Age: 18 to 25 years.
            </li>
            <li className="list-item">
              <i className="bi bi-check-circle text-success"></i> Prior sales experience is a bonus but not essential. We value motivation, enthusiasm, and a willingness to learn.
            </li>
          </ul>
        </div>
        <div className="requirements-image col-md-6"></div>
      </div>
      {/* What We Offer Section */}
      <div className="offers-container d-flex align-items-start mb-4 col-md-12">
        <div className="team-offers col-md-6">
          <h3 className="offers-heading text-primary">What We Offer</h3>
          <ul className="offers-list list-unstyled">
            <li className="list-item mb-2">
              <i className="bi bi-gift text-success"></i> <strong>Comprehensive Training:</strong> Gain the skills and knowledge you need to succeed.
            </li>
            <li className="list-item mb-2">
              <i className="bi bi-people text-success"></i> <strong>Inclusive Environment:</strong> Join a supportive and collaborative team that celebrates diversity.
            </li>
            <li className="list-item">
              <i className="bi bi-graph-up-arrow text-success"></i> <strong>Career Development:</strong> Enjoy opportunities for personal and professional growth.
            </li>
          </ul>
        </div>
        <div className="offers-image col-md-6"></div>
      </div>
    </div>
    <p className="team-footer mt-4">
      Ready to grow with us? <strong>Apply now</strong> and take the first step toward an exciting future in sales!
    </p>
  </div>
</section>



    </div>
  );
};

export default JoinUs;
