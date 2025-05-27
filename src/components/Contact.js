import React, { useState } from 'react';
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire('Error', 'All fields are required!', 'warning');
      return;
    }

    setSending(true);
    NProgress.start();

    try {
      const response = await fetch('https://portfolio-backend-x8jx.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resText = await response.text();
      Swal.fire('Message Sent!', resText, 'success');

      if (window.navigator.vibrate) window.navigator.vibrate(100);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire('Error', 'Failed to send message. Please try again.', 'error');
    } finally {
      NProgress.done();
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5 section-spacing" data-aos="fade-up" data-aos-delay="50">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="100">Contact Me</h2>
        
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: '600px' }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
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

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;