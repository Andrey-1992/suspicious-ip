import './IpCard.css'
import PropTypes from 'prop-types';
import React from 'react';
import IpCardField from '../IpCardField/IpCardField';
import IpCardInfo from '../IpCardInfo/IpCardInfo';

const IpCard = ({ip, ipField, ipAddress, saveToStorage}) => {
  if (ipField === "all") {
    return (
      <div className="ip-card-info">
        <IpCardInfo ip={ip} saveToStorage={saveToStorage}/>
      </div>
    )
  } 
  return (
    <IpCardField field={ipField}  ipField={ip[ipField]} ipAddress={ipAddress} saveToStorage={saveToStorage}/>
  )
}

IpCard.propTypes = {
  ip: PropTypes.string,
  ipField: PropTypes.string,
  ipAddress: PropTypes.string,
  saveToStorage: PropTypes.func,
  IpCardInfo: PropTypes.element,
  IpCardField: PropTypes.element,
}

export default IpCard;