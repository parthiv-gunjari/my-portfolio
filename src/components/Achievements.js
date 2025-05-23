import React from 'react';
import '../App.css';

const Achievements = () => {
  return (
    <section id="achievements" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-center mb-5">ACHIEVEMENTS</h2>
      <div className="container bootstrap snippets bootdeys my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 content-card" data-aos="fade-right" data-aos-delay="0">
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
          </div>

          <div className="col-md-6 col-sm-12 content-card" data-aos="fade-left" data-aos-delay="200">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;