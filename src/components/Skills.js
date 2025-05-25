import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Skills = () => {
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const progressBars = skillSectionRef.current.querySelectorAll('.progress-bar');

    const animateBars = () => {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    };

    const handleScroll = () => {
      const sectionTop = skillSectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        animateBars();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      className="skills"
      id="skills"
      ref={skillSectionRef}
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2}}
      viewport={{ once: true }}
    >
      <h2>SKILLS</h2>
      <div className="skill-list">
        <div className="skill">
          <h6>Web Development:</h6>
          <p>HTML5, CSS, Bootstrap, ReactJS, Angular.js, Node.js, Express.js, PHP</p>
          <div className="progress">
            <div className="progress-bar" data-width="85%" style={{ transition: 'width 1s ease' }}></div>
          </div>
        </div>
        <div className="skill">
          <h6>Programming Languages:</h6>
          <p>C, Java</p>
          <div className="progress">
            <div className="progress-bar" data-width="70%" style={{ transition: 'width 1s ease' }}></div>
          </div>
        </div>
        <div className="skill">
          <h6>Version Control:</h6>
          <p>Git, GitHub</p>
          <div className="progress">
            <div className="progress-bar" data-width="70%" style={{ transition: 'width 1s ease' }}></div>
          </div>
        </div>
        <div className="skill">
          <h6>Operating Systems:</h6>
          <p>Linux, Windows, Ubuntu</p>
          <div className="progress">
            <div className="progress-bar" data-width="70%" style={{ transition: 'width 1s ease' }}></div>
          </div>
        </div>
        <div className="skill">
          <h6>Cloud Technologies:</h6>
          <p>AWS</p>
          <div className="progress">
            <div className="progress-bar" data-width="75%" style={{ transition: 'width 1s ease' }}></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;