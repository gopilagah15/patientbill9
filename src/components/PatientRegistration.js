// src/components/PatientRegistration.js
import React, { useState } from 'react';

const PatientRegistration = ({ onRegister }) => {
  const [patient, setPatient] = useState({ name: '', age: '', contact: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(patient);
  };

  return (
    <div className="patient-registration">
      <h3>Register Patient</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={patient.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={patient.age} onChange={handleChange} />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" value={patient.contact} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
