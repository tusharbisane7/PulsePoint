import React from 'react';
import './PatientDashboard.css';

const appointments = [
  {
    id: 1, doctor: 'Dr. Nidhi Patel', specialization: 'Cardiologist', date: '2025-07-20', time: '11:30 AM', status: 'Confirmed',
  },
  {
    id: 2, doctor: 'Dr. Arjun Mehta', specialization: 'Dermatologist', date: '2025-07-22', time: '3:00 PM', status: 'Pending',
  },
  {
    id: 3, doctor: 'Dr. Smita Rao', specialization: 'Pediatrician', date: '2025-07-25', time: '10:00 AM', status: 'Confirmed',
  },
  {
    id: 4, doctor: 'Dr. Vishal Singh', specialization: 'Neurologist', date: '2025-07-28', time: '4:30 PM', status: 'Cancelled',
  },
];

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard-container fade-in">
      <h2 className="slide-up">My Appointments</h2>
      <div className="appointment-list">
        {appointments.map((appt, index) => (
          <div key={appt.id} className={`appointment-card scale-in delay-${index}`}>
            <h3>{appt.doctor}</h3>
            <p><strong>Specialization:</strong> {appt.specialization}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Status:</strong> <span className={`status ${appt.status.toLowerCase()}`}>{appt.status}</span></p>
            <div className="appointment-actions">
              {appt.status !== 'Cancelled' && (
                  <>
                      <button className="cancel-btn button-anim delay-0">Cancel</button>
                      <button className="reschedule-btn button-anim delay-1">Reschedule</button>
                  </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;