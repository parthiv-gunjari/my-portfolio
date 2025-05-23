import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-center mb-5">PROJECTS</h2>
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                
                <div className="solution_card" data-aos="fade-up" data-aos-delay="0">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="solu_title">
                    <h3>Android Application for Farmers</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Developed an Android app using CNNs to identify crop diseases and suggest treatments in regional languages for accessibility.
                    </p>
                    <button type="button" className="read_more_btn">Read More</button>
                  </div>
                </div>

                <div className="solution_card" data-aos="fade-up" data-aos-delay="100">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="solu_title">
                    <h3>Ishop - Online Shopping Platform</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Built a responsive shopping site using HTML, Bootstrap, PHP & MySQL with a seamless product browsing experience.
                    </p>
                    <button type="button" className="read_more_btn">Read More</button>
                  </div>
                </div>

              </div>

              <div className="solution_cards_box sol_card_top_3">

                <div className="solution_card" data-aos="fade-up" data-aos-delay="200">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="solu_title">
                    <h3>University Timetable Generator</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Designed a system that auto-generates timetables by optimally allocating classrooms, faculty, and time slots.
                    </p>
                    <button type="button" className="read_more_btn">Read More</button>
                  </div>
                </div>

                <div className="solution_card" data-aos="fade-up" data-aos-delay="300">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div className="solu_title">
                    <h3>Brain Stroke Detection</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Created a system using image data and patient records to detect stroke risk and suggest treatment plans.
                    </p>
                    <button type="button" className="read_more_btn">Read More</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;