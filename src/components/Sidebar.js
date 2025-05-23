import React from 'react';
import '../App.css';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <aside className="sidebar d-none d-lg-block">
      <div className="profile-section">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
      <nav className="menu">
        <Link
          className="nav-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Education
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="publications"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Publications
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="certifications"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Certifications
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Achievements
        </Link>
      </nav>
      <footer className="footer">
        <p>© Copyright 2024 by <span>Parthiv</span></p>
      </footer>
    </aside>
  );
};

export default Sidebar;