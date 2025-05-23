import React, { useEffect } from 'react';
import AOS from 'aos'; // <-- you imported but never used it
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
  useEffect(() => {
    // ✅ Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
       easing: 'ease-in-out',
    offset: 120,
    });

    const handleScroll = () => {
      const scrollBtn = document.querySelector(".back-to-top");
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <a href="#home" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;