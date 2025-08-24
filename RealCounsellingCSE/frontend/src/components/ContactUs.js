import React from 'react';
import './ContactUs.css';

const teamMembers = [
  {
    name: 'Shivam Kumar',
    email: 'shivam@example.com',
    phone: '+91 911728XXXX',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'Project Manager',
    bio: 'Shivam is an experienced project manager with a passion for technology and innovation.',
  },
  {
    name: 'Kundan Soni',
    email: 'kundan@example.com',
    phone: '+91 620467XXXX',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    role: 'Lead Counsellor',
    bio: 'Lead specializes in full-stack development and has 5+ years of experience in counselling.',
  },
  {
    name: 'Yashwant',
    email: 'yashwant@example.com',
    phone: '882519XXXX',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    role:'Senior Counsellor',
    bio: 'Yashwant has a keen eye for design and creates intuitive user experiences.',
  },
  {
    name: 'Kanak Gupta',
    email: 'kanak@example.com',
    phone: '+91 784516XXXX',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    role: 'Manager at RealCounselling',
    bio: 'Kanak ensures our applications meet the highest quality standards before counselling.',
  },
];

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Meet Our Team</h1>
      <p className="contact-subtitle">
        We are here to assist you. Feel free to reach out to any of our team members for support.
      </p>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p className="team-bio">{member.bio}</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${member.email}`} className="team-email">
                {member.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${member.phone}`} className="team-phone">
                {member.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="contact-footer">
        <p>
          Need further assistance? Email us at{' '}
          <a href="mailto:support@realcounsellor.com">support@realcounsellor.com</a>
        </p>
        <p>
          Or call us at <a href="tel:+91-9117283826">+91 9117283826</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
