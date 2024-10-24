// src/components/Invoice.js
import React from 'react';

const Invoice = ({ patient, services, totalAmount }) => {
  return (
    <div className="invoice">
      <h3>Invoice</h3>
      <p>Patient: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <hr />
      <h4>Services Rendered</h4>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - ₹{service.price}
          </li>
        ))}
      </ul>
      <p>Total Amount: ₹{totalAmount}</p>
    </div>
  );
};

export default Invoice;
