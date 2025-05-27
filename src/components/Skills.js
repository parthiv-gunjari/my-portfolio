import React from 'react';
import '../App.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap,
  FaNodeJs, FaPhp, FaPython, FaJava, FaDatabase,
  FaAws, FaGitAlt, FaLinux, FaWindows, FaDocker,
  FaJenkins, FaGithub
} from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiKubernetes, SiCplusplus, SiGooglecloud, 
  SiTensorflow, SiJupyter, SiMysql, SiScikitlearn, SiPandas
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, className: 'html' },
      { name: 'CSS3', icon: <FaCss3Alt />, className: 'css' },
      { name: 'JavaScript', icon: <FaJs />, className: 'js' },
      { name: 'React.js', icon: <FaReact />, className: 'react' },
      { name: 'Angular', icon: <FaAngular />, className: 'angular' },
      { name: 'Bootstrap', icon: <FaBootstrap />, className: 'bootstrap' }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, className: 'node' },
      { name: 'Express.js', icon: <FaNodeJs />, className: 'node' },
      { name: 'PHP', icon: <FaPhp />, className: 'php' }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, className: 'python' },
      { name: 'JavaScript', icon: <FaJs />, className: 'js' },
      { name: 'Java', icon: <FaJava />, className: 'java' },
      { name: 'C++', icon: <SiCplusplus />, className: 'cpp' },
      { name: 'C', icon: <FaDatabase />, className: 'c' }
    ]
  },
  {
    category: 'Database Technologies',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, className: 'mysql' },
      { name: 'MongoDB', icon: <SiMongodb />, className: 'mongo' },
      { name: 'Firebase', icon: <SiFirebase />, className: 'firebase' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker />, className: 'docker' },
      { name: 'Jenkins', icon: <FaJenkins />, className: 'jenkins' },
      { name: 'Kubernetes', icon: <SiKubernetes />, className: 'kube' },
      { name: 'AWS', icon: <FaAws />, className: 'aws' },
      { name: 'GCP', icon: <SiGooglecloud />, className: 'gcp' }
    ]
  },
  {
    category: 'AI / ML Tools',
    skills: [
      { name: 'Scikit-learn', icon: <SiScikitlearn />, className: 'scikit' },
      { name: 'Pandas', icon: <SiPandas />, className: 'pandas' },
      { name: 'Jupyter', icon: <SiJupyter />, className: 'jupyter' },
      { name: 'TensorFlow', icon: <SiTensorflow />, className: 'tensorflow' }
    ]
  },
  {
    category: 'Version Control & OS',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, className: 'git' },
      { name: 'GitHub', icon: <FaGithub />, className: 'github' },
      { name: 'Linux', icon: <FaLinux />, className: 'linux' },
      { name: 'Windows', icon: <FaWindows />, className: 'windows' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-spacing" data-aos="fade-up" data-aos-duration="800">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-wrapper">
          {skillsData.map((group, index) => (
            <div
              className="skill-category-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              data-aos-duration="800"
            >
              <h3 className="category-title">{group.category}</h3>
              <div className="skill-grid">
                {group.skills.map((skill, i) => (
                  <div key={i} className={`skill-tag ${skill.className}`}>
                    <span className="icon">{skill.icon}</span>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;