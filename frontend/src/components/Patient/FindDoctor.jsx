import React, { useState } from 'react';
import './FindDoctor.css';
import { Link } from 'react-router-dom';

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const doctors = [
    { id: 1, name: 'Dr. Priya Sharma', specialty: 'Cardiologist', location: 'Mumbai', rating: 4.8 },
    { id: 2, name: 'Dr. Rohan Mehta', specialty: 'Dentist', location: 'Pune', rating: 4.5 },
    { id: 3, name: 'Dr. Neha Patil', specialty: 'Dermatologist', location: 'Nagpur', rating: 4.9 },
    { id: 4, name: 'Dr. Suresh Kumar', specialty: 'Pediatrician', location: 'Delhi', rating: 4.7 },
    { id: 5, name: 'Dr. Aarti Singh', specialty: 'General Physician', location: 'Bengaluru', rating: 4.2 },
    { id: 6, name: 'Dr. Vivek Joshi', specialty: 'Orthopedic Surgeon', location: 'Hyderabad', rating: 4.6 },
    { id: 7, name: 'Dr. Kavita Rao', specialty: 'Gynecologist', location: 'Chennai', rating: 4.9 },
  ];

  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="find-doc-container fade-in">
      <h2 className="slide-up">Find a Doctor</h2>
      <input
        type="text"
        placeholder="Search by name, specialty or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input slide-up delay-1"
      />

      <div className="doctor-card-list">
        {filtered.length > 0 ? (
          filtered.map((doc, index) => (
            <div className={`doctor-card scale-in delay-${index}`} key={doc.id}>
              <h3>{doc.name}</h3>
              <p>🩺 {doc.specialty}</p>
              <p>📍 {doc.location}</p>
              <p>⭐ {doc.rating} Rating</p>
              <Link to="/book-appointment" className="book-doc-btn button-anim">Book Appointment</Link>
            </div>
          ))
        ) : (
          <p className="no-result fade-in">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;