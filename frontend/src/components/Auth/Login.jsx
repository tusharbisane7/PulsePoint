import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Auth.css'; // Shared CSS for Auth components

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to your backend for authentication
    console.log('Login Data:', formData);
    alert('Logged in successfully!');
    // Optionally, redirect to dashboard or home
    setFormData({ usernameOrEmail: '', password: '' });
  };

  return (
    <div className="auth-container fade-in"> {/* Added animation class */}
      <div className="glass-card slide-up"> {/* Added animation class */}
        <h2 className="header-anim">Login to PulsePoint</h2> {/* Added header animation class */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Username or Email"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
            className="input-anim delay-0" // Staggered animation
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-anim delay-1"
          />
          <button type="submit" className="auth-button pop-in delay-2">Login</button> {/* Added animation class */}
          <p className="auth-footer-text pop-in delay-3">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;