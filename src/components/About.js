import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about section-spacing" id="about" >
      <div className="about-container">
        {/*  Profile image */}
        <div className="about-image">
          <img
            src={process.env.PUBLIC_URL + '/profile-pic.jpg'}
            alt="Profile"
            width="200"
            height="200"
            loading="lazy"
            style={{ objectFit: 'cover', borderRadius: '30px' }}
          />
        </div>

        {/*  About content */}
        <div className="about-content" data-aos="fade-up" data-aos-duration="800" >
          <h2>ABOUT</h2>
          <p>
            I’m a passionate Full-Stack Developer with strong expertise in building dynamic and scalable web applications using React.js, Node.js, MongoDB, and Express. My experience spans across developing user-friendly platforms — from e-commerce systems to university scheduling tools — while integrating robust backend logic and cloud deployment using AWS. I thrive in agile environments, bring a DevOps mindset, and continuously seek to learn and implement cutting-edge technologies that solve real-world problems efficiently.
          </p>

          {/*  View & Download Resume buttons */}
          <div className="resume-buttons">
            <a
              href="/resume/Resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="/resume/Resume.pdf"
              className="btn"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;