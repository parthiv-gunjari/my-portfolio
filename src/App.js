import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // Prevent scroll position restoring on reload
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Initialize AOS animation with smoother scroll settings
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // allow animations on scroll up too
      mirror: true,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Force AOS refresh shortly after DOM is ready
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    // Scroll-to-top button logic
    const handleScroll = () => {
      const scrollBtn = document.querySelector('.back-to-top');
      if (scrollBtn) {
        scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Publications />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <a href="#home" className="back-to-top" style={{ display: 'none' }}>
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;