import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay }
  }
});

const Projects = () => {
  const cards = [
    {
      icon: "fas fa-mobile-alt",
      title: "Android Application for Farmers",
      desc: "Developed an Android app using CNNs to identify crop diseases and suggest treatments in regional languages for accessibility.",
      delay: 0,
    },
    {
      icon: "fas fa-shopping-cart",
      title: "Ishop - Online Shopping Platform",
      desc: "Built a responsive shopping site using HTML, Bootstrap, PHP & MySQL with a seamless product browsing experience.",
      delay: 0.1,
    },
    {
      icon: "fas fa-calendar-alt",
      title: "University Timetable Generator",
      desc: "Designed a system that auto-generates timetables by optimally allocating classrooms, faculty, and time slots.",
      delay: 0.2,
    },
    {
      icon: "fas fa-brain",
      title: "Brain Stroke Detection",
      desc: "Created a system using image data and patient records to detect stroke risk and suggest treatment plans.",
      delay: 0.3,
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-center mb-5">PROJECTS</h2>
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                {cards.slice(0, 2).map((card, index) => (
                  <motion.div
                    className="solution_card"
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(card.delay)}
                  >
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="solu_title">
                      <h3>{card.title}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{card.desc}</p>
                      <button type="button" className="read_more_btn">Read More</button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="solution_cards_box sol_card_top_3">
                {cards.slice(2).map((card, index) => (
                  <motion.div
                    className="solution_card"
                    key={index + 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(card.delay)}
                  >
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="solu_title">
                      <h3>{card.title}</h3>
                    </div>
                    <div className="solu_description">
                      <p>{card.desc}</p>
                      <button type="button" className="read_more_btn">Read More</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;