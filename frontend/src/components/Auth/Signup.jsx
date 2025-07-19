import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Auth.css'; // Shared CSS for Auth components

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    villageLocality: '',
    pincode: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to your backend for registration
    console.log('Signup Data:', formData);
    alert('Account created successfully! Please log in.');
    // Optionally, clear form or redirect to login
    setFormData({
      fullName: '', username: '', email: '', password: '', phone: '', dob: '',
      addressLine1: '', addressLine2: '', state: '', city: '', villageLocality: '', pincode: '',
      role: ''
    });
  };

  return (
    <div className="auth-container fade-in"> {/* Added animation class */}
      <div className="glass-card slide-up"> {/* Added animation class */}
        <h2 className="header-anim">Create Account</h2> {/* Added header animation class */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="input-anim delay-0" // Staggered animation
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-anim delay-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-anim delay-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-anim delay-3"
          />
          <input
            type="tel" // Use tel for phone numbers
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-anim delay-4"
          />
          <label htmlFor="dob" className="date-label input-anim delay-5">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="input-anim delay-5" // Same delay as label
          />
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
            className="input-anim delay-6"
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2 (Optional)"
            value={formData.addressLine2}
            onChange={handleChange}
            className="input-anim delay-7"
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="input-anim delay-8"
          >
            <option value="">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="input-anim delay-9"
          />
          <input
            type="text"
            name="villageLocality"
            placeholder="Village / Locality"
            value={formData.villageLocality}
            onChange={handleChange}
            required
            className="input-anim delay-10"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            pattern="[0-9]{6}" // Basic 6-digit pincode pattern
            title="Pincode must be 6 digits"
            className="input-anim delay-11"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="input-anim delay-12"
          >
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button type="submit" className="auth-button pop-in delay-13">Signup</button> {/* Added animation class */}
          <p className="auth-footer-text pop-in delay-14">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;