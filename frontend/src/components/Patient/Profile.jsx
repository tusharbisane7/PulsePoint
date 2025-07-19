import React, { useState } from 'react';
import './Profile.css';

// Reusing Indian states from Signup component
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

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    username: 'johndoe123', // Added username
    email: 'john@example.com',
    phone: '9876543210', // Pre-filled example
    gender: 'male',
    dob: '1990-05-15', // Pre-filled example
    bloodGroup: 'A+', // Added blood group
    addressLine1: '123, Sector 1', // Added address fields
    addressLine2: 'Gandhi Nagar',
    state: 'Maharashtra', // Pre-filled example
    city: 'Nagpur', // Pre-filled example
    pincode: '440010', // Pre-filled example
    profilePicUrl: 'https://via.placeholder.com/150/2193b0/FFFFFF?text=JD' // Placeholder for profile picture
  });

  const [updated, setUpdated] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setUpdated(false); // Reset updated status on change
  };

  const handleFileChange = (e) => {
    // In a real app, you would upload the file and get a URL back
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile submitted:', profile);
    // Later: Send profile to backend via API
    setUpdated(true);
  };

  return (
    <div className="profile-container fade-in"> {/* Added fade-in class */}
      <h2 className="slide-up">My Profile</h2> {/* Added slide-up class */}
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-picture-section">
          <img
            src={profile.profilePicUrl}
            alt="Profile"
            className="profile-pic scale-in delay-0" // Animation for profile pic
          />
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input input-anim delay-1" // Animation for file input
          />
          <label htmlFor="profilePic" className="file-input-label button-anim delay-2">
            Change Profile Picture
          </label>
        </div>

        <label className="input-label input-anim delay-3">Full Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
          className="form-input input-anim delay-3"
        />

        <label className="input-label input-anim delay-4">Username</label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          required
          className="form-input input-anim delay-4"
        />

        <label className="input-label input-anim delay-5">Email (read-only)</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          readOnly
          className="form-input input-anim delay-5 read-only" // Added read-only class for styling
        />

        <label className="input-label input-anim delay-6">Phone Number</label>
        <input
          type="tel" // Use type="tel" for phone numbers
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          required
          className="form-input input-anim delay-6"
        />

        <label className="input-label input-anim delay-7">Gender</label>
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          required
          className="form-input input-anim delay-7"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="input-label input-anim delay-8">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          required
          className="form-input input-anim delay-8"
        />

        <label className="input-label input-anim delay-9">Blood Group</label>
        <select
          name="bloodGroup"
          value={profile.bloodGroup}
          onChange={handleChange}
          required
          className="form-input input-anim delay-9"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label className="input-label input-anim delay-10">Address Line 1</label>
        <input
          type="text"
          name="addressLine1"
          placeholder="House No., Street Name"
          value={profile.addressLine1}
          onChange={handleChange}
          required
          className="form-input input-anim delay-10"
        />

        <label className="input-label input-anim delay-11">Address Line 2 (Optional)</label>
        <input
          type="text"
          name="addressLine2"
          placeholder="Area, Landmark"
          value={profile.addressLine2}
          onChange={handleChange}
          className="form-input input-anim delay-11"
        />

        <label className="input-label input-anim delay-12">State</label>
        <select
          name="state"
          value={profile.state}
          onChange={handleChange}
          required
          className="form-input input-anim delay-12"
        >
          <option value="">Select State</option>
          {indianStates.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>

        <label className="input-label input-anim delay-13">City</label>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={profile.city}
          onChange={handleChange}
          required
          className="form-input input-anim delay-13"
        />

        <label className="input-label input-anim delay-14">Pincode</label>
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={profile.pincode}
          onChange={handleChange}
          required
          pattern="[0-9]{6}"
          title="Pincode must be 6 digits"
          className="form-input input-anim delay-14"
        />

        <button type="submit" className="save-button pop-in delay-15">Save Profile</button> {/* Added pop-in class */}
        {updated && <p className="success-msg fade-in delay-16">Profile updated successfully!</p>}
      </form>
    </div>
  );
};

export default Profile;