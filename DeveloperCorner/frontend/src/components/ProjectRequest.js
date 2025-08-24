import React, { useState } from 'react';
import './ProjectRequest.css'

const ProjectRequest = () => {
  const [formData, setFormData] = useState({ name: '', email: '', projectDetails: '' });

  // Handles form field changes
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) {
      alert('Please fill in all the fields.');
      return;
    }
    alert(`Project Request Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nProject Details: ${formData.projectDetails}`);
    setFormData({ name: '', email: '', projectDetails: '' }); // Reset form
  };

  return (
    <div className="project-request">
      <section className="request-hero">
        <h1 className="hero-title">Request a Custom Project</h1>
        <p className="hero-subtitle">
          Got a project idea in mind? Tell us your requirements and we’ll bring it to life.
        </p>
      </section>

      <div className="form-container">
        <h2>Submit Your Request</h2>
        <form onSubmit={handleSubmit} className="request-form">
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
              name="projectDetails"
              placeholder="Tell us about your project..."
              value={formData.projectDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectRequest;
