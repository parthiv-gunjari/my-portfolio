import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import '../App.css';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay }
  }
});

const Publications = () => {
  return (
    <MDBContainer className="py-5" id="publications">
      <motion.h2
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
      >
        PUBLICATIONS
      </motion.h2>

      <MDBRow>
        <MDBCol md="10" className="offset-md-1">
          <ul className="timeline-3">

            <motion.li
              variants={fadeIn(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="https://example.com/xss-paper"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Overview of XSS Attack Detection Methods in Web Applications
              </a>
              <a href="#!" className="float-end">December, 2023</a>
              <p className="mt-2">
                This research investigates methods for identifying and mitigating XSS vulnerabilities in web apps, demonstrating strong data preprocessing, ML modeling, and evaluation of detection techniques.
              </p>
            </motion.li>

            <motion.li
              variants={fadeIn(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="https://example.com/snapshots-paper"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enhanced Streaming Algorithms for the Maximum Directed Cut Problem Using Smoothed Snapshots
              </a>
              <a href="#!" className="float-end">June, 2024</a>
              <p className="mt-2">
                Introduced a space-efficient, high-accuracy streaming algorithm effective for machine learning, data mining, and graph optimization under constrained memory conditions.
              </p>
            </motion.li>

          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Publications;