// src/components/PaymentConfirmation.js
import React from 'react';

const PaymentConfirmation = ({ onConfirm }) => {
  return (
    <div className="payment-confirmation">
      <h3>Payment Confirmation</h3>
      <button onClick={onConfirm}>Confirm Payment</button>
    </div>
  );
};

export default PaymentConfirmation;
