import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

// Fade from Left
const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: 'easeInOut'
    }
  })
};

// Fade from Right
const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: 'easeInOut'
    }
  })
};

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-center mb-5"
        variants={fadeFromLeft}
        custom={0}
      >
        ACHIEVEMENTS
      </motion.h2>

      <div className="container bootstrap snippets bootdeys my-5">
        <div className="row">
          
          {/* First Card: From Left */}
          <motion.div
            className="col-md-6 col-sm-12 content-card"
            variants={fadeFromLeft}
            custom={0.5}
          >
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                <div className="content">
                  <h4 className="title">
                    <span>First Prize in 8-Hour Web Development Hackathon</span>
                  </h4>
                  <p className="description">
                    Achieved first place in a competitive hackathon at IARE. Built a fully functional web app in 8 hours demonstrating creativity and speed.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Card: From Right with delay */}
          <motion.div
            className="col-md-6 col-sm-12 content-card"
            variants={fadeFromRight}
            custom={1}
          >
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                <div className="content">
                  <h4 className="title">
                    <span>Second Prize in 24-Hour Lexicon 4.0 Hackathon</span>
                  </h4>
                  <p className="description">
                    Earned 2nd place in a full-day coding challenge hosted by the Career Development Center at IARE. Showcased teamwork and agile delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;