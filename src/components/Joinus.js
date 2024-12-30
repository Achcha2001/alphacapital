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
       {/* BPO Job Descriptions Section */}
       <section className="bpo-job-descriptions py-5 bg-light">
        <div className="container">
          <p className="text-center mb-4">
            We are a leading BPO company, offering a dynamic work environment and exciting career
            opportunities. Explore the roles we are currently hiring for:
          </p>
          <div id="jobCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="position-item p-4 border rounded shadow-sm bg-white">
                  <h4 className="text-primary">Customer Service Representative</h4>
                  <p className="text-muted">
                    Deliver exceptional customer support via phone, email, and chat. Develop problem-solving
                    skills and assist clients with inquiries, ensuring satisfaction at every step.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Strong verbal and written communication skills.</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Ability to handle multiple tasks efficiently.</li>
                    <li><i className="bi bi-check-circle text-success"></i> Prior experience in a customer service role is a plus.</li>
                  </ul>
                </div>
              </div>
              <div className="carousel-item">
                <div className="position-item p-4 border rounded shadow-sm bg-white">
                  <h4 className="text-primary">Data Entry Specialist</h4>
                  <p className="text-muted">
                    Ensure accuracy and efficiency in data management by entering and updating information into
                    our systems. Help maintain data integrity and support other departments.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> High attention to detail and organizational skills.</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Proficiency in MS Office and data management tools.</li>
                    <li><i className="bi bi-check-circle text-success"></i> Ability to meet tight deadlines and maintain quality standards.</li>
                  </ul>
                </div>
              </div>
              <div className="carousel-item">
                <div className="position-item p-4 border rounded shadow-sm bg-white">
                  <h4 className="text-primary">Technical Support Associate</h4>
                  <p className="text-muted">
                    Provide technical assistance and troubleshooting for clients. Be the go-to expert for resolving
                    technical challenges and ensuring seamless operations.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Strong technical aptitude and problem-solving abilities.</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Excellent interpersonal and communication skills.</li>
                    <li><i className="bi bi-check-circle text-success"></i> Experience in IT support or a related field is advantageous.</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#jobCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#jobCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
