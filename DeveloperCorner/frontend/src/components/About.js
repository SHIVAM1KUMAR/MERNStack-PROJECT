import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Frontend Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Backend Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Sarah Johnson', role: 'UI/UX Designer', image: 'https://via.placeholder.com/150' },
    { name: 'Mike Brown', role: 'Project Manager', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span>Our Company</span></h1>
          <p>We are a passionate team dedicated to delivering excellence in every project we undertake. Our mission is to build impactful solutions that drive success for our clients.</p>
          <a href="#team" className="cta-button">Meet the Team</a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/500" alt="Hero" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>Our company strives to innovate and provide world-class development solutions for our clients. We believe in teamwork, collaboration, and the continuous pursuit of excellence.</p>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <h2>Meet Our Talented Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta-section">
        <h2>Join Us On Our Journey</h2>
        <p>Interested in collaborating with us or want to learn more? Reach out today and let's create something amazing together.</p>
        <a href="/contact" className="cta-button">Contact Us</a>

      </section>
    </div>
  );
}

export default About;
