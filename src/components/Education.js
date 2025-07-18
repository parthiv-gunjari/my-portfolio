import React from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import '../App.css';

const Education = () => {
  const educationList = [
    {
      icon: "graduation-cap",
      title: "Ms Computer Science",
      time: "University of North Texas, USA (2023 - 2025)",
      desc: "Pursuing advanced coursework in algorithms, data structures, cloud computing, and full-stack development, while actively engaging in hands-on projects and research."
    },
    {
      icon: "university",
      title: "BTech Computer Science and Engineering",
      time: "Institute of Aeronautical Engineering, INDIA (2019 - 2023)",
      desc: "Graduated with a strong foundation in core CS subjects such as OOP, DBMS, OS, and software engineering, complemented by practical experience through team-based capstone projects."
    },
    {
      icon: "book",
      title: "Intermediate",
      time: "Narayana Junior College (2017 - 2019)",
      desc: "Focused on Physics, Chemistry, and Mathematics with strong academic performance, building analytical thinking and problem-solving skills essential for technical education."
    },
    {
      icon: "school",
      title: "Schooling",
      time: "Vijaya Mary High School (2007 - 2017)",
      desc: "Completed foundational schooling with distinction, developing early interest and aptitude in mathematics, science, and computer basics."
    }
  ];

  return (
    <MDBContainer className="py-5 px-3 px-md-5 section-spacing" id="education" >
      <h2 className="text-center mb-5 education-title">EDUCATION</h2>
      <ul className="timeline-with-icons" data-aos="fade-up">
        {educationList.map((edu, i) => (
          <li
            className="timeline-item mb-5"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            data-aos-duration="800"
          >
            <span className="timeline-icon">
              <MDBIcon fas icon={edu.icon} color="primary" size="sm" />
            </span>
            <h5 className="fw-bold">{edu.title}</h5>
            <p className="text-muted mb-2 fw-bold">{edu.time}</p>
            <p className="text-muted">{edu.desc}</p>
          </li>
        ))}
      </ul>
    </MDBContainer>
  );
};

export default Education;