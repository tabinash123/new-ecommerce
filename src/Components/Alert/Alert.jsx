import React from 'react';
import './Alert.css'; // Import your CSS file

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
