import React from 'react';
import './MedicinePage.css'; // Ensure this path is correct

// Function to generate a large list of medicines
const generateMedicines = () => {
  const baseMedicines = [
    {
      name: 'Paracetamol 500mg',
      category: 'Pain Reliever',
      price: '₹25.00',
      usage: 'Used to treat mild to moderate pain and reduce fever.',
      company: 'Generic Pharma'
    },
    {
      name: 'Amoxicillin 250mg',
      category: 'Antibiotic',
      price: '₹80.50',
      usage: 'Used to treat bacterial infections such as chest and dental infections.',
      company: 'LifeCare Labs'
    },
    {
      name: 'Cetirizine 10mg',
      category: 'Anti-Allergy',
      price: '₹15.75',
      usage: 'Relieves allergy symptoms like runny nose, sneezing, and itching.',
      company: 'MediCorp'
    },
    {
      name: 'Omeprazole 20mg',
      category: 'Antacid',
      price: '₹45.20',
      usage: 'Reduces stomach acid to treat heartburn and acid reflux.',
      company: 'Zenith Pharmaceuticals'
    },
    {
      name: 'Multivitamin',
      category: 'Vitamin Supplement',
      price: '₹120.00',
      usage: 'Provides essential vitamins and minerals for overall health.',
      company: 'NutriPlus'
    },
    {
      name: 'Ibuprofen 400mg',
      category: 'NSAID',
      price: '₹35.00',
      usage: 'Reduces pain, inflammation, and fever. Common for headaches, muscle aches.',
      company: 'PainAway Inc.'
    },
    {
      name: 'Ranitidine 150mg',
      category: 'Antacid',
      price: '₹22.50',
      usage: 'Used to prevent and treat heartburn and other symptoms caused by too much stomach acid.',
      company: 'Gastronil'
    },
    {
      name: 'Dextromethorphan',
      category: 'Cough Suppressant',
      price: '₹60.00',
      usage: 'Relieves dry cough. Often found in cold and flu medicines.',
      company: 'CoughEase Co.'
    },
    {
      name: 'Lisinopril 10mg',
      category: 'Blood Pressure',
      price: '₹95.00',
      usage: 'Used to treat high blood pressure and heart failure.',
      company: 'CardioHealth'
    },
    {
      name: 'Metformin 500mg',
      category: 'Diabetes',
      price: '₹70.00',
      usage: 'Manages blood sugar levels in people with type 2 diabetes.',
      company: 'GlycoMed'
    }
  ];

  const allMedicines = [];
  for (let i = 0; i < 100; i++) {
    const originalMed = baseMedicines[i % baseMedicines.length]; // Cycle through base medicines
    allMedicines.push({
      id: i + 1,
      name: `${originalMed.name} (Batch ${Math.floor(i / baseMedicines.length) + 1})`, // Slightly vary name
      category: originalMed.category,
      price: `₹${(parseFloat(originalMed.price.replace('₹', '')) + (i % 5)).toFixed(2)}`, // Slightly vary price
      usage: originalMed.usage,
      company: originalMed.company
    });
  }
  return allMedicines;
};

const medicines = generateMedicines();

const MedicinePage = () => {
  return (
    <div className="medicine-container fade-in"> {/* Added fade-in class */}
      <h2 className="slide-up">Available Medicines</h2> {/* Added slide-up class */}
      <div className="medicine-list">
        {medicines.map((med, index) => (
          <div key={med.id} className={`medicine-card scale-in delay-${index % 5}`}> {/* Staggered animation */}
            <div className="card-header">
              <h3>{med.name}</h3>
              <span className="price">{med.price}</span>
            </div>
            <p className="category"><strong>Category:</strong> {med.category}</p>
            <p className="company"><strong>Company:</strong> {med.company}</p>
            <p className="usage">{med.usage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinePage;