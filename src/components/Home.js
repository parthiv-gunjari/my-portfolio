import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css';

const Home = () => {
  return (
    <section className="home" id="home" style={{ backgroundImage: "url('./images/back-ground.jpg')" }}>
      <div className="home-content">
        <h1 className="main-name">Parthiv Kumar Gunjari</h1>

        <div className="dynamic-text">
                  <TypeAnimation
            className="typing-text"
            sequence={[
              'Full-Stack Developer', 2000,
              'DevOps Enthusiast', 2000,
              'Software Engineer', 2000,
              'Problem Solver', 2000,
              'Tech Enthusiast', 2000,
            ]}
            wrapper="div"   // ← change this from span to div
            speed={50}
            repeat={Infinity}
            cursor={true}
          />  
        </div>

        <div className="social-icons">
          <a href="https://github.com/parthiv-gunjari" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/parthiv-kumar-gunjari/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:parthivkumargunjari@gmail.com" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+19408435294" className="icon-link">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;