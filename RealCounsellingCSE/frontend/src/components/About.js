import React from 'react';
import './AboutPage.css'; // Importing specific CSS for About Page

const About = () => {
  return (
    <div className="aboutpage-container">
      <header className="about-hero-section">
        <h1 className="about-hero-title">About RealCounselling - Your Path to a Successful Engineering Career</h1>
        <p className="hero-subtitle">Empowering students to achieve their dreams across all engineering disciplines</p>
      </header>

      <section className="about-content-section">
        <h2>Why Choose RealCounselling?</h2>
        <p>
          At RealCounselling, we specialize in providing expert guidance for students aiming to pursue careers in various engineering fields. 
          Whether you're interested in Computer Science, Mechanical, Civil, Electrical, or any other engineering course, we’re here to ensure you make informed decisions and achieve your academic and career goals.
        </p>

        <h2>Our Unique Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Exclusive Scholarships</h3>
            <p>
              We offer exclusive scholarships for deserving students across all engineering fields. When you apply through RealCounselling, you open the doors to financial support to pursue your engineering dreams.
            </p>
          </div>

          <div className="feature">
            <h3>Admission Tests Tailored to You</h3>
            <p>
              Choosing the right engineering college is vital. We offer personalized admission tests that help you find the right fit based on your interests, skills, and aspirations. This ensures you make the best decision for your future.
            </p>
          </div>

          <div className="feature">
            <h3>Ongoing Support Throughout Your Journey</h3>
            <p>
              Our support doesn't end once you're admitted. We provide continuous guidance, academic support, career counseling, and assistance throughout your engineering journey, ensuring you stay on track to success.
            </p>
          </div>

          <div className="feature">
            <h3>Exclusive College Partnerships</h3>
            <p>
              RealCounselling partners with top-tier engineering colleges across the country. With our trusted network, students gain access to exclusive opportunities like internships, job fairs, and more, connecting you to your dream career.
            </p>
          </div>
        </div>

        <h2>Our Vision</h2>
        <p>
          Our vision is to empower students to take control of their future by offering personalized, unbiased, and forward-thinking counseling services. 
          We aim to help students make the right choices for a successful career in the ever-evolving world of engineering.
        </p>

        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity</strong>: We stand for transparency and honesty in every step of our services.</li>
          <li><strong>Innovation</strong>: We constantly evolve to meet the changing needs of education and careers in engineering.</li>
          <li><strong>Student-Centric</strong>: We prioritize the needs and dreams of our students in every service we offer.</li>
          <li><strong>Excellence</strong>: We provide exceptional support and resources to ensure our students' success.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
