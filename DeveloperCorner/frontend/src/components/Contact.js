import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handles form field changes
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="hero-title">Get in Touch</h1>
        <p className="hero-subtitle">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>
      </section>

      <div className="contact-container">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
