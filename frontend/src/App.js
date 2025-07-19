import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FindDoctor from './components/Patient/FindDoctor';
import Appointments from './components/Patient/Appointments';
import Navbar from './components/Layout/Navbar'; // Assuming this path is correct
import BookAppointment from './components/Patient/BookAppointment';
import Profile from './components/Patient/Profile';
import DoctorDashboard from './components/Doctor/Dashboard'; // Note: Your file was named Dashboard.jsx, confirm folder structure
import AddPrescription from './components/Doctor/AddPrescription';
import SetAvailability from './components/Doctor/SetAvailability';
import ViewSchedule from './components/Doctor/ViewSchedule';
import PatientDashboard from './components/Patient/PatientDashboard';
import MedicinePage from './components/Medicine/MedicinePage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* This correctly places the Navbar at the top of all pages */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} /> {/* Added a default route for the root URL */}
        <Route path="/Home" element={<Home />} /> {/* Keeping your original /Home route as well */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/medicines" element={<MedicinePage />} /> {/* Accessible to all */}

        {/* Patient Routes */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/profile" element={<Profile />} />

        {/* Doctor Routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/add-prescription" element={<AddPrescription />} />
        <Route path="/set-availability" element={<SetAvailability />} />
        <Route path="/view-schedule" element={<ViewSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;