import './IpCardField.css'
import React from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const IpCardField = ({field, ipField, ipAddress, saveToStorage}) => {
  if (!field) {
    return (<Loader />)
  }
  return (
    <div className="single-card-field">
      <h2 className="header-field">IP Field Requested:</h2>
      <h3>{field}:</h3>
      <h4>{ipField}</h4>
      <h4>IP #: {ipAddress}</h4>
      <button className="saved-button-field" onClick={saveToStorage}>Save <i class="fas fa-hdd"></i></button>
    </div>
  );
}

IpCardField.propTypes = {
  field: PropTypes.string,
  ipField: PropTypes.string,
  ipAddress: PropTypes.string,
  saveToStorage: PropTypes.func,
  Loader: PropTypes.element
}

export default IpCardField;