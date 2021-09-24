import './IpCardField.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCardField = ({field}) => {
  if (!field) {
    return (<Loader />)
  }
  return (
    <div className="single-card-field">
      <p>IP Field Requested:</p>
      <p>{field}</p>
    </div>
  );
}

export default IpCardField;