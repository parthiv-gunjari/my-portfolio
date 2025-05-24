import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about" id="about" data-aos="fade-up" >
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="Profile" loading="lazy"
          />
        </div>
        <div className="about-content">
          <h2>ABOUT</h2>
          <p>
            I am currently pursuing a Master’s in Computer Science at the University of North Texas (UNT), where I am enhancing my expertise in both theoretical foundations and practical applications of computing. With a strong focus on leveraging advanced technologies, I am driven to address complex challenges in software development and contribute innovative, impactful solutions. My commitment to continuous learning ensures that I stay at the forefront of the evolving tech landscape, ready to make a meaningful contribution to the industry.
          </p>
     <a href="/Resume1.pdf" className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;