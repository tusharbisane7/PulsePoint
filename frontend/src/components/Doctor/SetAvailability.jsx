import React, { useState } from 'react';
import './SetAvailability.css';

const SetAvailability = () => {
  const [availability, setAvailability] = useState({
    date: '',
    fromTime: '',
    toTime: '',
  });

  const handleChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Availability set:', availability);
    alert('Availability successfully set!');
    // Backend API call will go here
    setAvailability({
      date: '',
      fromTime: '',
      toTime: '',
    });
  };

  return (
    <div className="availability-container fade-in"> {/* Added fade-in */}
      <h2 className="slide-up">Set Your Availability</h2> {/* Added slide-up */}
      <form onSubmit={handleSubmit} className="availability-form">
        <label className="label-anim delay-0">Date:</label> {/* Added animation */}
        <input
          type="date"
          name="date"
          value={availability.date}
          onChange={handleChange}
          required
          className="input-anim delay-1" // Added animation
        />
        <label className="label-anim delay-2">From:</label> {/* Added animation */}
        <input
          type="time"
          name="fromTime"
          value={availability.fromTime}
          onChange={handleChange}
          required
          className="input-anim delay-3" // Added animation
        />
        <label className="label-anim delay-4">To:</label> {/* Added animation */}
        <input
          type="time"
          name="toTime"
          value={availability.toTime}
          onChange={handleChange}
          required
          className="input-anim delay-5" // Added animation
        />
        <button type="submit" className="button-anim delay-6">Set Availability</button> {/* Added animation */}
      </form>
    </div>
  );
};

export default SetAvailability;