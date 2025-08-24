import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "John Doe",
    role: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "The Developer Corner team was absolutely fantastic to work with. They delivered high-quality work on time and exceeded our expectations."
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback: "Professional, responsive, and highly skilled. I highly recommend them for any software development project."
  },
  {
    name: "Mike Johnson",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback: "Great experience working with the Developer Corner team. Their attention to detail and commitment to quality is outstanding."
  },
  {
    name: "Sarah Williams",
    role: "Business Analyst",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "They understood our business needs and provided us with a brilliant solution that helped us achieve our goals."
  }
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
          <h3>{testimonial.name}</h3>
          <p className="role">{testimonial.role}</p>
          <p className="feedback">"{testimonial.feedback}"</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
