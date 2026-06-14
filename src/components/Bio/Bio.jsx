import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-header">
        <h1 className="name">SERA DE LA ROSA</h1>
        <h2 className="subtitle">FULL STACK SOFTWARE ENGINEER</h2>
      </div>

      <div className="bio-content">
        <div className="profile-container">
          <img 
            src="/images/profile.jpg" 
            alt="Sera De La Rosa" 
            className="profile-image"
          />
        </div>
        <div className="bio-text-container">
          <p class="bio">
          As a Software Engineer specializing in business technology, Sera blends hands‑on software and hardware expertise with corporate tech leadership. With nine years in enterprise technology, Sera pioneered solutions for CNN’s video editing software and became the first to troubleshoot and debug its remote editing workflow. 
          Over the past five years, she has excelled in full‑stack engineering, completing Georgia Tech’s Full Stack Flex Web Development cohort with top scores (95%+), contributing to front‑end improvements and AI initiatives at CNN, working on a React Native project at BrainRain Solutions and earning two scholarships for an advanced software engineering program. 
          Today, Sera works as a Platform Engineer at Cargill, shaping net‑new enterprise architecture that supports operations in 70+ countries. Known as any team’s strong right hook, she is trusted with the most complex, high‑risk and least‑defined initiatives, delivering clarity, structure, momentum and results. 
          Sera leads architectural decisions, executes secure SSO and provisioning integrations, owns sensitive enterprise configurations and serves as SME for identity, access and provisioning with principal‑level trust. A natural trailblazer, Sera operates best where technical paths have yet to be mapped. 
          Grounded in systems thinking and scientific curiosity, she gravitates toward large‑scale system design and physics‑adjacent computation, consistently serving as a high‑impact problem solver when ambiguity is high and outcomes matter most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
