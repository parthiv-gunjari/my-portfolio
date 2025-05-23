import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css';

const Publications = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <MDBContainer className="py-5" id="publications">
      <h2 className="text-center mb-5">PUBLICATIONS</h2>
      <MDBRow>
        <MDBCol md="10" className="offset-md-1">
          <ul className="timeline-3">
            <li data-aos="fade-up" data-aos-delay="0">
              <a href="https://example.com/xss-paper" target="_blank" rel="noopener noreferrer">
                The Overview of XSS Attack Detection Methods in Web Applications
              </a>
              <a href="#!" className="float-end">December, 2023</a>
              <p className="mt-2">
                This research investigates methods for identifying and mitigating XSS vulnerabilities in web apps, demonstrating strong data preprocessing, ML modeling, and evaluation of detection techniques.
              </p>
            </li>

            <li data-aos="fade-up" data-aos-delay="150">
              <a href="https://example.com/snapshots-paper" target="_blank" rel="noopener noreferrer">
                Enhanced Streaming Algorithms for the Maximum Directed Cut Problem Using Smoothed Snapshots
              </a>
              <a href="#!" className="float-end">June, 2024</a>
              <p className="mt-2">
                Introduced a space-efficient, high-accuracy streaming algorithm effective for machine learning, data mining, and graph optimization under constrained memory conditions.
              </p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Publications;