import React, { useState, useEffect } from 'react';
import './SuccessStoryPage.css'; // Importing specific CSS for Success Story Page

const SuccessStories = () => {
  // Load testimonials from localStorage or use default ones
  const getStoredTestimonials = () => {
    const storedTestimonials = localStorage.getItem('testimonials');
    return storedTestimonials ? JSON.parse(storedTestimonials) : [
      {
        name: 'Raj',
        story: 'With the help of RealCounselling, I found the perfect college for my CS career!',
        rating: 5
      },
      {
        name: 'Priya',
        story: 'I was able to make an informed decision with their guidance.',
        rating: 4
      },
      {
        name: 'Arvind',
        story: 'Choosing the right college became easy with their support!',
        rating: 5
      }
    ];
  };

  const [testimonials, setTestimonials] = useState(getStoredTestimonials);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', story: '', rating: '' });

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.story && newTestimonial.rating) {
      setTestimonials([...testimonials, newTestimonial]);
      setNewTestimonial({ name: '', story: '', rating: '' });
    }
  };

  return (
    <div className="success-stories-container">
      <header className="success-hero-section">
        <h1 className="success-hero-title">Our Student Success Stories</h1>
      </header>

      <section className="success-content-section">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="story-card">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.story}</p>
              <div className="rating">Rating: {'⭐'.repeat(testimonial.rating)}</div>
            </div>
          ))}
        </div>

        <h2>Share Your Experience</h2>
        <form className="testimonial-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Story"
            value={newTestimonial.story}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, story: e.target.value })}
            required
          ></textarea>
          <select
            value={newTestimonial.rating}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: e.target.value })}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Below Average</option>
            <option value="1">1 - Poor</option>
          </select>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SuccessStories;
