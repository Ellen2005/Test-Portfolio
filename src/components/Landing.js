import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <section id="landing" className="landing-section">
      <div className="landing-container">
        {/* Hero Section */}
        <div className="hero-section" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="hero-title">
            <span className="hero-name">John Doe</span>
            <span className="hero-tagline">Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* About Section */}
        <div className="about-section" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                Welcome to my portfolio! I'm a passionate full-stack developer with a love for creating
                innovative and user-friendly applications. With expertise in modern web technologies,
                I bring ideas to life through clean code and thoughtful design.
              </p>
              <p className="about-text">
                My journey in software development has been driven by curiosity and a commitment to
                continuous learning. I specialize in building scalable applications that not only meet
                technical requirements but also deliver exceptional user experiences.
              </p>
              <p className="about-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I believe in the power of
                collaboration and the impact of well-crafted software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
