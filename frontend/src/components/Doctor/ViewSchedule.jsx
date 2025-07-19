import React from 'react';
import './ViewSchedule.css';

const mockSchedule = [
  {
    date: '2025-07-18',
    fromTime: '10:00 AM',
    toTime: '12:00 PM',
    status: 'Available',
    notes: 'Morning consultation slots'
  },
  {
    date: '2025-07-19',
    fromTime: '2:00 PM',
    toTime: '4:00 PM',
    status: 'Booked',
    patient: 'John Doe',
    type: 'Follow-up'
  },
  {
    date: '2025-07-20',
    fromTime: '9:00 AM',
    toTime: '10:30 AM',
    status: 'Available',
    notes: 'Early morning slots'
  },
  {
    date: '2025-07-21',
    fromTime: '11:00 AM',
    toTime: '1:00 PM',
    status: 'Booked',
    patient: 'Jane Smith',
    type: 'New patient'
  },
  {
    date: '2025-07-22',
    fromTime: '3:00 PM',
    toTime: '5:00 PM',
    status: 'Available',
    notes: 'Afternoon slots'
  },
];

const ViewSchedule = () => {
  return (
    <div className="schedule-container fade-in"> {/* Added fade-in */}
      <h2 className="slide-up">My Schedule</h2> {/* Added slide-up */}
      <div className="schedule-list">
        {mockSchedule.map((slot, index) => (
          <div key={index} className={`schedule-card scale-in delay-${index}`}> {/* Added scale-in and delay */}
            <p><strong>Date:</strong> {slot.date}</p>
            <p><strong>Time:</strong> {slot.fromTime} - {slot.toTime}</p>
            <p><strong>Status:</strong> <span className={`status-badge ${slot.status.toLowerCase()}`}>{slot.status}</span></p>
            {slot.status === 'Booked' && (
              <>
                <p><strong>Patient:</strong> {slot.patient}</p>
                <p><strong>Type:</strong> {slot.type}</p>
              </>
            )}
            {slot.status === 'Available' && slot.notes && (
                <p><strong>Notes:</strong> {slot.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSchedule;