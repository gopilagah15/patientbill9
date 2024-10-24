// src/components/ServiceSelection.js
import React, { useState } from 'react';

const ServiceSelection = ({ services, onServiceSelect }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    onServiceSelect(updatedServices);
  };

  return (
    <div className="service-selection">
      <h3>Select Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <label>
              <input
                type="checkbox"
                value={service.name}
                onChange={() => handleServiceChange(service)}
              />
              {service.name} - ₹{service.price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;
