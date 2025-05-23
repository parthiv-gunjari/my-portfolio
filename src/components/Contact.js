import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://portfolio-backend-x8jx.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resText = await response.text();
      setStatus(resText);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ Error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container text-center">
        <h2 className="mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="form-control"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        {status && <p className="mt-3 text-info">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;