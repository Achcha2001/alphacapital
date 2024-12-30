import React from "react";
import { useNavigate } from "react-router-dom";
import "./Joinus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserTie, faBullseye } from "@fortawesome/free-solid-svg-icons";

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

      {/* Open Positions Section */}
      <section className="open-positions py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Open Positions</h2>
          <div className="position-list">
            <div className="position-item p-4 mb-4">
              <h4>Customer Support Specialist</h4>
              <p>
                Help us deliver exceptional service to our clients. Strong communication
                skills are a must.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => window.open("https://forms.gle/hkZbJhhTXmabueDr7", "_blank")}
              >
                Apply Now
              </button>
            </div>
            <div className="position-item p-4 mb-4">
              <h4>Technical Support Executive</h4>
              <p>
                Join our team to provide advanced technical solutions to our valued
                customers.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => window.open("https://forms.gle/hkZbJhhTXmabueDr7", "_blank")}
              >
                Apply Now
              </button>
            </div>
            <div className="position-item p-4">
              <h4>Sales and Marketing Specialist</h4>
              <p>
                Drive growth and success with your expertise in sales and marketing.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => window.open("https://forms.gle/hkZbJhhTXmabueDr7", "_blank")}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
