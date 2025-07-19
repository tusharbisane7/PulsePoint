import React, { useState } from 'react';
import './AddPrescription.css';


const AddPrescription = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentDate: '',
    symptoms: '',
    diagnosis: '',
    medicines: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prescription submitted:', formData);
    alert('Prescription Added Successfully!');
    // Backend API call will go here
    setFormData({
      patientName: '',
      appointmentDate: '',
      symptoms: '',
      diagnosis: '',
      medicines: '',
      notes: '',
    });
  };

  return (
    <div className="prescription-container fade-in"> {/* Added fade-in */}
      <h2 className="slide-up">Add Prescription</h2> {/* Added slide-up */}
      <form onSubmit={handleSubmit} className="prescription-form">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
          className="input-anim delay-0" // Staggered input animation
        />
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          className="input-anim delay-1"
        />
        <textarea
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
          className="input-anim delay-2"
        ></textarea>
        <textarea
          name="diagnosis"
          placeholder="Diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          required
          className="input-anim delay-3"
        ></textarea>
        <textarea
          name="medicines"
          placeholder="Prescribed Medicines"
          value={formData.medicines}
          onChange={handleChange}
          required
          className="input-anim delay-4"
        ></textarea>
        <textarea
          name="notes"
          placeholder="Additional Notes (Optional)"
          value={formData.notes}
          onChange={handleChange}
          className="input-anim delay-5"
        ></textarea>
        <button type="submit" className="button-anim delay-6">Add Prescription</button> {/* Added button animation */}
      </form>
    </div>
  );
};

export default AddPrescription;