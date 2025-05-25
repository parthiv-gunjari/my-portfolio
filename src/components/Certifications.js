import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const fadeIn = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease: 'easeInOut'
    }
  }
};

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center">
            <h2>CERTIFICATIONS</h2>
            <p className="mt-3">.......Coming Soon.......</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;