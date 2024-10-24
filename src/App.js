// src/App.js
import React, { useState } from 'react';
import PatientRegistration from './components/PatientRegistration';
import ServiceSelection from './components/ServiceSelection';
import BillingSummary from './components/BillingSummary';
import Invoice from './components/Invoice';
import PaymentConfirmation from './components/PaymentConfirmation';
import calculateBill from './utils/calculateBill';

const App = () => {
  const [patient, setPatient] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [paid, setPaid] = useState(false);

  const services = [
    { id: 1, name: 'Consultation', price: 500 },
    { id: 2, name: 'X-Ray', price: 800 },
    { id: 3, name: 'Blood Test', price: 300 },
  ];

  const handlePatientRegistration = (patientData) => {
    setPatient(patientData);
  };

  const handleServiceSelection = (services) => {
    setSelectedServices(services);
  };

  const handleBillingConfirmation = () => {
    const total = calculateBill(selectedServices);
    setTotalAmount(total);
    setConfirmed(true);
  };

  const handlePaymentConfirmation = () => {
    setPaid(true);
  };

  return (
    <div className="App">
      <h1>Patient Billing System</h1>
      {!patient ? (
        <PatientRegistration onRegister={handlePatientRegistration} />
      ) : !confirmed ? (
        <>
          <ServiceSelection services={services} onServiceSelect={handleServiceSelection} />
          {selectedServices.length > 0 && (
            <BillingSummary selectedServices={selectedServices} onConfirm={handleBillingConfirmation} />
          )}
        </>
      ) : !paid ? (
        <Invoice patient={patient} services={selectedServices} totalAmount={totalAmount} />
      ) : (
        <PaymentConfirmation onConfirm={handlePaymentConfirmation} />
      )}
      {paid && <p>Payment Successful. Thank you!</p>}
    </div>
  );
};

export default App;
