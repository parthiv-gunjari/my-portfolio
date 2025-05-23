import React, { useEffect, useRef } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarMenu = document.getElementById('navbarMenu');
      const toggleBtn = document.querySelector('.navbar-toggler');

      if (
        navbarMenu?.classList.contains('show') &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !toggleBtn.contains(event.target)
      ) {
        toggleBtn.click(); // Programmatically close the menu
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none" ref={navRef}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="/images/icon.png" alt="Icon" style={{ width: '45px', height: '35px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#publications" className="nav-link">Publications</a></li>
            <li className="nav-item"><a href="#certifications" className="nav-link">Certifications</a></li>
            <li className="nav-item"><a href="#achievements" className="nav-link">Achievements</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;