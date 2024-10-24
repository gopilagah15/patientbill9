// src/components/BillingSummary.js
import React from 'react';

const BillingSummary = ({ selectedServices, onConfirm }) => {
  const total = selectedServices.reduce((acc, service) => acc + service.price, 0);

  return (
    <div className="billing-summary">
      <h3>Billing Summary</h3>
      <ul>
        {selectedServices.map((service) => (
          <li key={service.id}>
            {service.name} - ₹{service.price}
          </li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
      <button onClick={onConfirm}>Confirm and Generate Invoice</button>
    </div>
  );
};

export default BillingSummary;
