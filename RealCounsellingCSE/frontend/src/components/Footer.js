import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer>
    <p>© 2024 Real-Counseller's. All rights reserved.</p>
    <p>
      Have questions? 
      <Link to="/contact">Contact us</Link>.
    </p>
  </footer>
);

export default Footer;
