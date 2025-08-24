import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYou(true); // Show thank you modal
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowThankYou(false), 3000); // Hide modal after 3 seconds
      } else {
        alert('Failed to submit enquiry.');
      }
    } catch (err) {
      alert('Error submitting enquiry. Please try again.');
    }
  };

  return (
    <div className="enquiry-form-container">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {showThankYou && (
        <div className="thank-you-modal">
          <div className="thank-you-message">
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
