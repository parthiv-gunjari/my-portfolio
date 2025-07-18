import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css';

const Home = () => {
  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressBar) progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="home"
      id="home"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/back-ground.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="home-content">
        <h1 className="main-name">Parthiv Kumar Gunjari</h1>

        <div className="dynamic-text">
          <TypeAnimation
            className="typing-text"
            sequence={[
              'Full-Stack Web Developer', 2000,
               'Passionate Software Engineer', 2000,
              'Cloud & DevOps Enthusiast', 2000,
              'MERN Stack Specialist', 2000,
              'React.js | Node.js | AWS', 2000,
              'Problem Solver & Team Player', 2000,
             
              'ML Enthusiast', 2000,
            ]}
            wrapper="div"
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