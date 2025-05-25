import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Preloader from './components/Preloader';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Publications = lazy(() => import('./components/Publications'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  // ✅ Always place hooks at the top
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
    window.history.scrollRestoration = 'manual';

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (loading) return;

  const scrollBtn = document.querySelector(".back-to-top");
  const handleScroll = () => {
    if (!scrollBtn) return;
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [loading]);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Home />
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <About />
          <Skills />
          <Education />
          <Projects />
          <Publications />
          <Certifications />
          <Achievements />
          <Contact />
        </Suspense>
      </main>

      {/* ✅ Back-to-top button */}
      <a href="#home" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;