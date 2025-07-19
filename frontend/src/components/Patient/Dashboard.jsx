import React from 'react';
import './Patient.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome to PulsePoint 👋</h2>
      <div className="card-grid">
        <div className="dash-card" onClick={() => navigate('/find-doctor')}>
          🔍 Find Doctors
        </div>
        <div className="dash-card" onClick={() => navigate('/appointments')}>
          📅 My Appointments
        </div>
        <div className="dash-card" onClick={() => navigate('/prescriptions')}>
          💊 My Prescriptions
        </div>
        <div className="dash-card" onClick={() => navigate('/profile')}>
          👤 My Profile
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
