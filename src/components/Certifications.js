import React from 'react';
import '../App.css';

const certificationsData = [
  {
    title: 'MERN Fullstack Certification',
    description: 'Hands-on training in building full-stack applications using React, Node.js, Express, and MongoDB.',
    issuer: 'Udemy',
    date: 'June 2025',
    image: `${process.env.PUBLIC_URL}/images/certifications/MERN-Certificate.jpg`
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section-spacing">
      <div className="certifications-container">
        <h2 className="text-center mb-4">CERTIFICATIONS</h2>
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card" data-aos="fade-up">
              <div className="cert-info">
                <h5 className="cert-title">{cert.title}</h5>
              </div>
              <div className="cert-thumbnail-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-thumbnail"
                />
              </div>
              <div className="cert-info">
                <p className="cert-description">{cert.description}</p>
                <p className="cert-meta">
                  <strong>{cert.issuer}</strong> — {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;