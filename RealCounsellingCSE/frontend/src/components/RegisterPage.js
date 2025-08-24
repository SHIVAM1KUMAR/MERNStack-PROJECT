import React from 'react';
import './RegisterPage.css'; // Importing specific CSS for Register Page

const RegisterPage = () => {
  return (
    <div className="registerpage-container">
      <header className="register-hero-section">
        <h1 className="register-hero-title">Book Your Slot</h1>
      </header>

      <section className="register-content-section">
        <h2>Why Register?</h2>
        <p>
          Choosing the right college can be a life-changing decision. At RealCounselling CSE, we are dedicated to helping students find the perfect fit
          for their Computer Science education. Our personalized counseling services are designed to guide you through every step of the application 
          process, ensuring you make an informed and confident decision.
        </p>

        <p>
          By registering, you'll gain access to expert advice, curated college options, and a roadmap to success in your academic and professional journey.
        </p>

        <h2>How We Help You</h2>
        <ul>
          <li>Personalized counseling based on your academic interests and career goals.</li>
          <li>Guidance on college selection, application, and admissions.</li>
          <li>Support throughout your entire journey, from registration to graduation.</li>
        </ul>

        <h2>Registration Form</h2>
        <p>
          Fill out the form below to register for our counseling services. Once you register, our team will reach out to you with the next steps. 
          We're excited to help you take the first step toward a successful future in Computer Science!
        </p>
        
        <a 
          href="https://your-google-form-url" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="register-btn"
        >
          Go to Registration Form
        </a>
      </section>
    </div>
  );
};

export default RegisterPage;