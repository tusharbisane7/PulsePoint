import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard fade-in"> {/* Added fade-in */}
      <header className="dashboard-header slide-up"> {/* Added slide-up */}
        <h2>Welcome Dr. Sharma 👨‍⚕️</h2>
        <p>{new Date().toDateString()}</p>
      </header>

      <section className="appointments-section">
        <h3 className="slide-up delay-1">Today's Appointments</h3> {/* Added slide-up and delay */}
        <div className="appointment-cards">
          {/* Example card 1 */}
          <div className="appointment-card scale-in delay-2"> {/* Added scale-in and delay */}
            <h4>John Doe</h4>
            <p>10:00 AM</p>
            <p>General Checkup</p>
            {/* Link to AddPrescription, assuming route is /add-prescription */}
            <Link to="/add-prescription" className="prescribe-btn button-anim delay-3">Add Prescription</Link>
          </div>

          {/* Example card 2 */}
          <div className="appointment-card scale-in delay-4"> {/* Added scale-in and delay */}
            <h4>Jane Smith</h4>
            <p>11:00 AM</p>
            <p>Fever & Cold</p>
            {/* Link to AddPrescription, assuming route is /add-prescription */}
            <Link to="/add-prescription" className="prescribe-btn button-anim delay-5">Add Prescription</Link>
          </div>
        </div>
      </section>

      <section className="actions-section">
        {/* Link to ViewSchedule, assuming route is /view-schedule */}
        <Link to="/view-schedule" className="action-btn button-anim delay-6">View Full Schedule</Link>
        {/* Link to SetAvailability, assuming route is /set-availability */}
        <Link to="/set-availability" className="action-btn button-anim delay-7">Set Availability</Link>
      </section>
    </div>
  );
};

export default DoctorDashboard;
