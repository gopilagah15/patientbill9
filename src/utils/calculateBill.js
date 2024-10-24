// src/utils/calculateBill.js
const calculateBill = (services) => {
    return services.reduce((total, service) => total + service.price, 0);
  };
  
  export default calculateBill;
  