/* global gtag */
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
          <h2 className='about-title'>ABOUT</h2>
          <p>
            I’m a versatile Full-Stack Developer with hands-on experience in developing scalable web and mobile applications using React.js, Node.js, MongoDB, and Firebase. I specialize in building secure, responsive platforms and integrating AI/ML models for automation using TensorFlow and Keras. From e-commerce solutions to AI-powered smart farming apps, I’ve led development with JWT authentication, multilingual support, and real-time analytics. Proficient in deploying on AWS, Render, and Firebase, I also bring strong DevOps skills in CI/CD with GitHub Actions and Docker. I’m passionate about building impactful tech, thriving in Agile teams, and embracing modern development practices.
          </p>

          {/*  View & Download Resume buttons */}
          <div className="resume-buttons">
            <a
              href="/resume/Resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'view_resume', {
                    event_category: 'Resume',
                    event_label: 'View Resume Button',
                  });
                }
              }}
            >
              View Resume
            </a>
            <a
              href="/resume/Resume.pdf"
              className="btn"
              download
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'download_resume', {
                    event_category: 'Resume',
                    event_label: 'Download Resume Button',
                  });
                }
              }}
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