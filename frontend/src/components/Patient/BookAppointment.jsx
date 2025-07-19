import React, { useState } from 'react';
import './bookappointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '', doctor: '', date: '', time: '', reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment booked successfully!");
    console.log(formData);
    setFormData({
      name: '', doctor: '', date: '', time: '', reason: ''
    });
  };

  return (
    <div className="book-container fade-in">
      <h2 className="slide-up">Book an Appointment</h2>
      <form className="book-form scale-in" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required className="form-input slide-in-bottom delay-0" />
        <input type="text" name="doctor" placeholder="Doctor's Name" value={formData.doctor} onChange={handleChange} required className="form-input slide-in-bottom delay-1" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="form-input slide-in-bottom delay-2" />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="form-input slide-in-bottom delay-3" />
        <textarea name="reason" placeholder="Reason for Appointment" value={formData.reason} onChange={handleChange} required className="form-textarea slide-in-bottom delay-4"></textarea>
        <button type="submit" className="book-button pop-in delay-5">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;