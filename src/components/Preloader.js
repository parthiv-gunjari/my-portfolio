import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;