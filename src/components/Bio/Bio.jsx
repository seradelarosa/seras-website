import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-header">
        <h1 className="name">SERA DE LA ROSA</h1>
        <h2 className="subtitle">FULL STACK SOFTWARE ENGINEER</h2>
      </div>

      <div className="profile-container">
        <img 
          src="/images/profile.jpg" 
          alt="Sera De La Rosa" 
          className="profile-image"
        />
      </div>

      <div className="bio-content">
        <p>
          As a Software Engineer specializing in business technology, I blend
          hands-on software and hardware expertise with corporate tech leadership.
          With eight years in corporate technology, I pioneered solutions for
          CNN's video editing software and was the first to troubleshoot and debug
          its remote editing workflow. Over the past four years, I've excelled in
          full-stack engineering, completing Georgia Tech's Full Stack Flex Web
          Development cohort with top scores (95%+), contributing to front-end
          improvements and AI initiatives at CNN, working on a React Native
          project at BrainRain Solutions, and earning two scholarships for an
          advanced software engineering program.
        </p>
      </div>
    </div>
  );
};

export default Bio;
