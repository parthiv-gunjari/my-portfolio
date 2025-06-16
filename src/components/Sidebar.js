import React from 'react';
import '../App.css';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaTools, FaGraduationCap, FaProjectDiagram, FaBook, FaCertificate, FaTrophy } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar d-none d-lg-block">
        <div className="profile-section">
         <img
    src={`${process.env.PUBLIC_URL}/profile-pic.jpg`}
    alt="Profile"
    className="profile-img"
    loading="lazy"
    width="200"
    height="200"
   style={{
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '30px',
    transform: 'scale(1)'
  }}
  />
        </div>
        <nav className="menu">
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaHome className="nav-icon" /> <span>Home</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaUser className="nav-icon" /> <span>About</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaTools className="nav-icon" /> <span>Skills</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaGraduationCap className="nav-icon" /> <span>Education</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaProjectDiagram className="nav-icon" /> <span>Projects</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="publications"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaBook className="nav-icon" /> <span>Publications</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaCertificate className="nav-icon" /> <span>Certifications</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="achievements"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaTrophy className="nav-icon" /> <span>Achievements</span>
          </Link>
          <Link
            className="nav-link sidebar-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <FaUser className="nav-icon" /> <span>Contact</span>
          </Link>
        </nav>
        <footer className="footer p-3 ">
          <p>&copy; 2025 <span>Parthiv.</span> All rights reserved.</p>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;