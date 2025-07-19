import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fade-in-nav"> {/* Added fade-in-nav class */}
      <div className="navbar-logo slide-right">PulsePoint</div> {/* Added slide-right class */}
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="hamburger"></span> {/* Added span for animated hamburger */}
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </label>

      <ul className="nav-links">
        {/* Added slide-up-link for individual link animations */}
        <li><Link to="/Home" className="slide-up-link">Home</Link></li>
        <li><Link to="/appointments" className="slide-up-link delay-1">Appointments</Link></li>
        <li><Link to="/book-appointment" className="slide-up-link delay-2">Book Appointment</Link></li>
        <li><Link to="/medicines" className="slide-up-link delay-3">Medicines</Link></li>
        <li><Link to="/login" className="slide-up-link delay-4">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;