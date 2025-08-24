import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome To Real_ERA </h1>
        <p className="hero-subtitle">
          Your journey to academic excellence starts here. Let us guide you toward a brighter future.
        </p>
      </header>

      <section className="content-section">
        <h2>Why People Choose Us</h2>
        <p>
          At RealCounselling CSE, we empower students by offering a personalized approach to career guidance. 
          With access to detailed insights about colleges, courses, and opportunities, our platform makes 
          navigating the world of higher education effortless and inspiring.
        </p>

        <p>
          <strong>Exceptional Expertise:</strong> Our team comprises seasoned professionals with years of experience in career counseling 
          and academic planning. Whether you’re looking to excel in engineering, programming, or tech innovations, 
          our advice is rooted in real-world relevance.
        </p>

        <p>
          <strong>Comprehensive Support:</strong> From identifying the best institutions to helping with admission processes, 
          we ensure every step is smooth and stress-free. Our commitment goes beyond just consultation—we walk with you until you succeed.
        </p>

        <p>
          <strong>Tailored Solutions:</strong> No two journeys are the same. We provide solutions customized to your aspirations, 
          ensuring you make informed decisions that pave the way for your success in this competitive world.
        </p>

        <p>
          Choosing RealCounselling CSE isn’t just about picking a service; it’s about selecting a trusted partner who puts your ambitions first. 
          Join the thousands of students who have unlocked their potential with us. Together, let’s shape a brighter tomorrow.
        </p>
      </section>

      <footer className="footer">
  <div className="scrolling-text">
    Empowering dreams, one step at a time.
  </div>
</footer>

    </div>
  );
};

export default HomePage;