import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import for navigation
import './Navbar.css';

function Navbar() {
  // State to handle the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Developer Corner
      </Link>

      {/* Menu Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonials"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
