import './IpCard.css'
import React from 'react';
import IpCardField from '../IpCardField/IpCardField';
import IpCardInfo from '../IpCardInfo/IpCardInfo';

const IpCard = ({ip, ipField, ipAddress}) => {
  if (ipField === "all") {
    return (
      <div className="ip-card-info">
        <IpCardInfo ip={ip}/>
      </div>
    )
  } 
  return (
    <IpCardField field={ipField}  ipField={ip[ipField]} ipAddress={ipAddress}/>
  )
}

export default IpCard;