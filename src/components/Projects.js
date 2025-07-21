import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import '../App.css';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cards = [
    {
      icon: "fas fa-utensils",
      title: "Full-Stack Restaurant Ordering and Management App",
      desc: "Comprehensive full-stack restaurant system built with React.js, Node.js, Express.js, and MongoDB. Features include a customer-facing interface for browsing menu, cart and checkout, and an admin dashboard with JWT-secured login to manage menu, track orders, update statuses, and analyze revenue through charts. Additional integrations include Nodemailer for email alerts and GitHub Actions for CI/CD. Fully responsive with data persistence in MongoDB and dynamic analytics on orders and revenue.",
      githubFrontend: "https://github.com/parthiv-gunjari/restaurant-frontend",
      githubBackend: "https://github.com/parthiv-gunjari/restaurant-backend",
      live: "https://www.parthivskitchen.com/",
      images: [
        "/project-images/admindashboard.png",
        "/project-images/kitchenhome.png",
        "/project-images/menu.png",
        "/project-images/orders.png",
        "/project-images/specials.png"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Nodemailer", "GitHub Actions"],
      year: "2025"
    },
    {
      icon: "fas fa-user-circle",
      title: "Full-Stack Portfolio Website",
      desc: "Personal portfolio website built using React.js for the frontend and Node.js + Express.js for the backend. Features a modern, responsive design with interactive sections for showcasing projects, achievements, and contact functionality via Nodemailer. Frontend deployed on Vercel and backend hosted on Render.",
      githubFrontend: "https://github.com/parthiv-gunjari/parthiv-portfolio/tree/master",
      githubBackend: "https://github.com/parthiv-gunjari/portfolio-backend/tree/master",
      live: "https://www.parthivkumar.com/",
      techStack: ["React.js", "Node.js", "Express.js", "Nodemailer", "Vercel", "Render"],
      year: "2025"
    },
    {
      icon: "fas fa-leaf",
      title: "Smart Farming Assistant (Android App)",
      desc: "Built a multilingual Android app using CNNs and Firebase to detect crop diseases, identify plants, and support real-time community interaction and weather-based decision-making.",
      techStack: ["Android", "CNNs", "Firebase"],
      year: "2022"
    },
 
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Web App (Ishop)",
      desc: "Built a responsive e-commerce platform using HTML, CSS, PHP, and MySQL. Features include user authentication, product listing, cart functionality, and order management. Designed for performance, usability, and secure data handling.",
      githubFrontend: "https://github.com/parthiv-gunjari/e-commerce/tree/main/e-commerce",
      techStack: ["HTML", "CSS", "PHP", "MySQL"],
      year: "2021"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Automated University Timetable Generator",
      desc: "Developed a web-based timetable generator using PHP and MySQL to create conflict-free academic schedules. The system leverages a Greedy Algorithm to assign time slots based on availability matrices of faculty, rooms, and subjects, ensuring no overlapping and optimized utilization of resources. Frontend built with HTML, CSS, and Bootstrap for a responsive user interface.",
      techStack: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      year: "2022"
    },
  ];

  return (
    <section id="projects" className="section-spacing">
      <h2 className="text-center mb-5 projects-title">PROJECTS</h2>
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
                  {card.year && <p className="text-muted mb-1">{card.year}</p>}
                </div>
                <div className="solu_description">
                  <p>{card.desc}</p>
                  {card.techStack && (
                    <ul className="tech-stack-list">
                      {card.techStack.map((tech, i) => (
                        <li key={i} className="badge bg-secondary me-1 mb-1">{tech}</li>
                      ))}
                    </ul>
                  )}
                  <button type="button" className="read_more_btn" onClick={() => handleShowModal(card)}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProject?.desc}</p>
          {selectedProject?.techStack && (
            <div className="mb-3">
              <strong>Tech Stack:</strong>
              <div>
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="badge bg-info text-dark me-1 mb-1">{tech}</span>
                ))}
              </div>
            </div>
          )}
          {selectedProject?.images?.length > 0 && (
            <Carousel
              className="mb-4"
              interval={1500}
              prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
              nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
            >
              {selectedProject.images.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}${img}`}
                    alt={`Slide ${i + 1}`}
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <ul className="list-unstyled mt-3">
            {selectedProject?.githubFrontend && (
              <li>
                <a href={selectedProject.githubFrontend} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github me-2"></i>Frontend GitHub
                </a>
              </li>
            )}
            {selectedProject?.githubBackend && (
              <li>
                <a href={selectedProject.githubBackend} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github me-2"></i>Backend GitHub
                </a>
              </li>
            )}
          </ul>
          {selectedProject?.live && (
            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              View Live Project
            </a>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;