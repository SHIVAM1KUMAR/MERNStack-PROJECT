import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Ideas into Digital Masterpieces
          </h1>
          <p className="hero-subtitle">
            At Developer Corner, we don't just build software — we craft exceptional experiences. From visionary ideas to innovative solutions, we bring your digital dreams to life.
          </p>
          <p className="hero-quote">
            "Innovation is the ability to see change as an opportunity, not a threat."
          </p>
          <Link to="/project-request">
            <button className="cta-button">Start Your Journey</button>
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Creative Development" 
          />
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>Why Partner with Us?</h2>
        <p>
          We are more than just developers — we are visionaries, committed to creating impactful, user-centered solutions. Whether you're launching a product, building a brand, or optimizing your business operations, we provide end-to-end digital services designed for growth and success.
        </p>
        <Link to="/about" className="learn-more-button">Discover Our Story</Link>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Expertise, Your Success</h2>
        <div className="services-container">
          <div className="service-card">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Web Development" 
            />
            <h3>Web Development</h3>
            <p>
              We build cutting-edge websites that deliver an outstanding user experience, from sleek design to high performance. Whether you need an e-commerce platform or a custom solution, we bring your web presence to life.
            </p>
            <Link to="/services/web-development" className="learn-more-button">Explore Our Web Solutions</Link>
          </div>
          <div className="service-card">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="App Development" 
            />
            <h3>App Development</h3>
            <p>
              From idea to execution, we specialize in creating mobile applications that are intuitive, fast, and built for performance across iOS and Android. Your app deserves to stand out.
            </p>
            <Link to="/services/app-development" className="learn-more-button">Learn About Our Apps</Link>
          </div>
          <div className="service-card">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="SEO" 
            />
            <h3>SEO Optimization</h3>
            <p>
              Let’s make sure your brand gets noticed. Our tailored SEO strategies help increase your website’s visibility, driving organic traffic and boosting conversion rates for greater business growth.
            </p>
            <Link to="/services/seo" className="learn-more-button">Boost Your Visibility</Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="testimonials-section">
        <h2>Our Clients Speak</h2>
        <div className="testimonial-cards">
  <div className="testimonial-card">
    <p>"Developer Corner took our project from vision to reality with precision and professionalism. Their innovative approach and attention to detail delivered results beyond our expectations."</p>
    <h4>- Jane Williams, CEO of FinTech Solutions</h4>
  </div>
  <div className="testimonial-card">
    <p>"Our user engagement soared after implementing the website developed by Developer Corner. Their team’s dedication to quality and customer satisfaction is unmatched."</p>
    <h4>- Mike Johnson, Marketing Director at GreenTech Innovations</h4>
  </div>
  <div className="testimonial-card">
    <p>"Working with Developer Corner was a fantastic experience. Their expertise helped us launch a product that perfectly meets our needs, and the customer support was top-notch."</p>
    <h4>- Sarah Lee, Product Manager at EcoFriendly Enterprises</h4>
  </div>
</div>

      </section>

      {/* Motivational Section */}
      <section className="motivation-section">
        <h2>Ideas That Inspire, Solutions That Empower</h2>
        <p>
          We believe that every great project begins with a vision. Let’s make that vision a reality with innovative solutions and a passion for excellence. Together, we can achieve more.
        </p>
        <p className="motivation-quote">
          "The only limit to our realization of tomorrow is our doubts of today." — Franklin D. Roosevelt
        </p>
        <Link to="/project-request">
          <button className="cta-button">Let's Build Together</button>
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Are You Ready to Create Something Extraordinary?</h2>
        <p>
          Our team is here to bring your project to life, offering the skills, creativity, and dedication needed to take your digital presence to the next level. Let's start building something amazing today.
        </p>
        <p className="cta-quote">
          "The best way to predict the future is to create it." — Peter Drucker
        </p>
        <Link to="/project-request">
          <button className="cta-button">Start Your Project Now</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
