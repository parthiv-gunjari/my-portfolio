import React from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import '../App.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 100},
  visible: { opacity: 1, y: 0 }
};

const Education = () => {
  return (
    <MDBContainer className="py-5 px-3 px-md-5" id="education">
      <h2 className="text-center mb-5">EDUCATION</h2>
      <ul className="timeline-with-icons">
        {[{
          icon: "graduation-cap",
          title: "Ms Computer Science",
          time: "University of North Texas, USA (2023 - Present)",
          desc: "Engaged in advanced studies in computer science, focusing on software development, algorithms, and data science."
        },
        {
          icon: "university",
          title: "BTech Computer Science and Engineering",
          time: "Institute of Aeronautical Engineering, INDIA (2019 - 2023)",
          desc: "Acquired comprehensive knowledge in programming, data structures, and system design through a rigorous curriculum."
        },
        {
          icon: "book",
          title: "Intermediate",
          time: "Narayana Junior College (2017 - 2019)",
          desc: "Developed a strong foundation in mathematics and science, essential for pursuing engineering and advanced technical studies."
        },
        {
          icon: "school",
          title: "Schooling",
          time: "Vijaya Mary High School (2007 - 2017)",
          desc: "Achieved a solid academic record with a focus on fundamental sciences and mathematics, preparing for higher education in engineering."
        }].map((edu, i) => (
          <motion.li
            className="timeline-item mb-5"
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1.2, delay: i * 0.2 }}
          >
            <span className="timeline-icon">
              <MDBIcon fas icon={edu.icon} color="primary" size="sm" />
            </span>
            <h5 className="fw-bold">{edu.title}</h5>
            <p className="text-muted mb-2 fw-bold">{edu.time}</p>
            <p className="text-muted">{edu.desc}</p>
          </motion.li>
        ))}
      </ul>
    </MDBContainer>
  );
};

export default Education;