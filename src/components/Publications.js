import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import '../App.css';

const Publications = () => {
  return (
    <MDBContainer className="py-5 section-spacing" id="publications" >
      <h2 className="text-center mb-5" >PUBLICATIONS</h2>

      <MDBRow>
        <MDBCol md="10" className="offset-md-1">
          <ul className="timeline-3">

            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
              <a
                href={`${process.env.PUBLIC_URL}/publications/paper4.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Real-Time Network Monitoring: A Big Data Approach
              </a>
              <a href="#!" className="float-end">May, 2025</a>
              <p className="mt-2">
                Proposed a scalable big data framework using Kafka, Spark, and MongoDB to monitor network traffic and detect anomalies in real time. Built the pipeline using Apache Kafka for streaming, Spark for processing, and MongoDB for real-time visualization dashboards.
              </p>
            </li>

            <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" data-aos-once="true">
              <a
                href={`${process.env.PUBLIC_URL}/publications/paper5.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cardiovascular Disease Risk Prediction Using Machine Learning
              </a>
              <a href="#!" className="float-end">May, 2025</a>
              <p className="mt-2">
                Designed predictive models using structured clinical data to assess the risk of cardiovascular diseases, improving early diagnosis. Used Jupyter Notebook with Pandas for preprocessing and trained models with Scikit-learn (Logistic Regression, Random Forest, XGBoost).
              </p>
            </li>

            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">
              <a
                href={`${process.env.PUBLIC_URL}/publications/paper3.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                In-Depth Survey of Cutting-Edge Hyperloop
              </a>
              <a href="#!" className="float-end">December, 2024</a>
              <p className="mt-2">
                An extensive review of Hyperloop innovations focusing on high-speed travel, vacuum tube design, and feasibility analysis. Survey compilation was supported by simulation results from MATLAB and AutoCAD prototypes, with design modeling done using SolidWorks.
              </p>
            </li>

            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true">
              <a
                href={`${process.env.PUBLIC_URL}/publications/paper2.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enhanced Streaming Algorithms for the Maximum Directed Cut Problem Using Smoothed Snapshots
              </a>
              <a href="#!" className="float-end">May, 2024</a>
              <p className="mt-2">
                Developed efficient streaming algorithms for graph optimization, supporting machine learning and data mining tasks. Implemented in Python using NumPy and NetworkX, tested on large directed graph datasets to measure efficiency and memory consumption.
              </p>
            </li>

            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-once="true">
              <a
                href={`${process.env.PUBLIC_URL}/publications/paper1.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Overview of XSS Attack Detection Methods in Web Applications
              </a>
              <a href="#!" className="float-end">December, 2023</a>
              <p className="mt-2">
                Investigates methods for identifying and mitigating XSS vulnerabilities using ML techniques and data preprocessing. Built and tested XSS detection models using Python, Scikit-learn, and custom regex-based filtering integrated into Flask web apps.
              </p>
            </li>

          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Publications;