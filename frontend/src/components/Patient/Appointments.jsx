import React from 'react';
import './Appointments.css';

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Priya Sharma',
      type: 'Online',
      date: '2025-07-20',
      time: '11:00 AM',
      status: 'Upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Rohan Mehta',
      type: 'In-Clinic',
      date: '2025-07-10',
      time: '3:30 PM',
      status: 'Completed'
    },
    {
      id: 3,
      doctor: 'Dr. Anil Kumar',
      type: 'Online',
      date: '2025-07-25',
      time: '09:00 AM',
      status: 'Upcoming'
    },
    {
      id: 4,
      doctor: 'Dr. Smita Rao',
      type: 'In-Clinic',
      date: '2025-07-05',
      time: '02:00 PM',
      status: 'Completed'
    }
  ];

  return (
    <div className="appointments-container fade-in">
      <h2 className="slide-up">My Appointments</h2>
      <div className="appointment-list">
        {appointments.length > 0 ? (
          appointments.map((app, index) => (
            <div
              className={`appointment-card scale-in delay-${index}`}
              key={app.id}
            >
              <h3>{app.doctor}</h3>
              <p className="appointment-details">📅 {app.date} | 🕒 {app.time}</p>
              <p className="appointment-details">🩺 Type: {app.type}</p>
              <p className="appointment-details">Status: <span className={`status ${app.status.toLowerCase()}`}>{app.status}</span></p>
              {app.status === 'Upcoming' && <button className="join-button pop-in">Join Consultation</button>}
            </div>
          ))
        ) : (
          <p className="no-result fade-in">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;