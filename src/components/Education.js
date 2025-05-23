// Education.jsx
import React from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../App.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false,  easing: 'ease-in-out'});
  }, []);

  return (
    <MDBContainer className="py-5 px-3 px-md-5" id="education">
      <h2 className="text-center mb-5">EDUCATION</h2>
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5" data-aos="fade-up">
          <span className="timeline-icon">
            <MDBIcon fas icon="graduation-cap" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">Ms Computer Science</h5>
          <p className="text-muted mb-2 fw-bold">
            University of North Texas, USA (2023 - Present)
          </p>
          <p className="text-muted">
            Engaged in advanced studies in computer science, focusing on software development, algorithms, and data science.
          </p>
        </li>

        <li className="timeline-item mb-5" data-aos="fade-up" data-aos-delay="100">
          <span className="timeline-icon">
            <MDBIcon fas icon="university" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">BTech Computer Science and Engineering</h5>
          <p className="text-muted mb-2 fw-bold">
            Institute of Aeronautical Engineering, INDIA (2019 - 2023)
          </p>
          <p className="text-muted">
            Acquired comprehensive knowledge in programming, data structures, and system design through a rigorous curriculum.
          </p>
        </li>

        <li className="timeline-item mb-5" data-aos="fade-up" data-aos-delay="150">
          <span className="timeline-icon">
            <MDBIcon fas icon="book" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">Intermediate</h5>
          <p className="text-muted mb-2 fw-bold">
            Narayana Junior College (2017 - 2019)
          </p>
          <p className="text-muted">
            Developed a strong foundation in mathematics and science, essential for pursuing engineering and advanced technical studies.
          </p>
        </li>

        <li className="timeline-item mb-5" data-aos="fade-up" data-aos-delay="200">
          <span className="timeline-icon">
            <MDBIcon fas icon="school" color="primary" size="sm" />
          </span>
          <h5 className="fw-bold">Schooling</h5>
          <p className="text-muted mb-2 fw-bold">
            Vijaya Mary High School (2007 - 2017)
          </p>
          <p className="text-muted">
            Achieved a solid academic record with a focus on fundamental sciences and mathematics, preparing for higher education in engineering.
          </p>
        </li>
      </ul>
    </MDBContainer>
  );
};

export default Education;