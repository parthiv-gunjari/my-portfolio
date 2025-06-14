import React from 'react';
import '../App.css';

const Projects = () => {
  const cards = [
    {
      icon: "fas fa-utensils",
      title: "Full-Stack Restaurant Ordering and Management App",
      desc: "Built a full-stack restaurant platform with React.js and Node.js, offering dual portals for customers and admins. Features include cart, order tracking, JWT-secured admin dashboard, automated emails with Nodemailer, revenue analytics, and CI/CD deployment on GitHub Pages and Render.",
    },
    {
      icon: "fas fa-leaf",
      title: "Smart Farming Assistant (Android App)",
      desc: "Built a multilingual Android app using CNNs and Firebase to detect crop diseases, identify plants, and support real-time community interaction and weather-based decision-making.",
    },
    {
      icon: "fas fa-user-circle",
      title: "Full-Stack Portfolio Website",
      desc: "Revamped personal portfolio using React.js and Node.js with cloud deployment on AWS. Integrated CI/CD using GitHub Actions and built RESTful backend for form submissions.",
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Web App (Ishop)",
      desc: "Developed a dynamic e-commerce platform with PHP and MySQL, featuring secure login, cart management, and order tracking. Improved performance and responsive design.",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Automated University Timetable Generator",
      desc: "Created a PHP-MySQL system to generate conflict-free academic timetables based on real-time faculty and room availability. Cut manual scheduling time by 90%.",
    },
  ];

  return (
    <section id="projects" className="section-spacing">
      <h2 className="text-center mb-5">PROJECTS</h2>
      <div className="section_our_solution">
        <div className="row justify-content-center">
          <div className="solution_cards_box d-flex flex-wrap justify-content-center">
            {cards.map((card, index) => (
              <div
                className="solution_card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="800"
               
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;