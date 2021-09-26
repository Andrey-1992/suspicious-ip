import './IpCardField.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCardField = ({field, ipField, ipAddress}) => {
  if (!field) {
    return (<Loader />)
  }
  return (
    <div className="single-card-field">
      <h2>IP Field Requested:</h2>
      <h3>{field}:</h3>
      <h4>{ipField}</h4>
      <h4>IP #: {ipAddress}</h4>
    </div>
  );
}

export default IpCardField;