import './IpCardField.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCardField = ({field, ipField}) => {
  if (!field) {
    return (<Loader />)
  }
  return (
    <div className="single-card-field">
      <p>IP Field Requested:</p>
      <p>{field}:</p>
      <p>{ipField}</p>
    </div>
  );
}

export default IpCardField;