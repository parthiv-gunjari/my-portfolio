import React from 'react';
import '../App.css';
import { FaCrown } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="text-center mb-5">ACHIEVEMENTS</h2>
      <div className="container achievements-container" data-aos="fade-up" data-aos-duration="800" >

        <div className="achievement-card with-icon" data-aos-delay="100">
          <div className="crown-icon">
            <FaCrown />
          </div>
          <h3>First Prize in 8-Hour Web Development Hackathon</h3>
          <p className="small">
            Achieved 1st place at IARE by developing a fully functional web app in 8 hours, demonstrating quick thinking and technical execution.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>

        <div className="achievement-card with-icon" data-aos-delay="200">
          <div className="crown-icon">
            <FaCrown />
          </div>
          <h3>Second Prize in 24-Hour Lexicon 4.0 Hackathon</h3>
          <p className="small">
            Earned 2nd place in a full-day hackathon by the Career Development Center at IARE, showcasing agile teamwork and fast-paced coding.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;