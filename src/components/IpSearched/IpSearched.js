import './IpSearched.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import { fetchAllExternalIp } from '../../utils';

const IpSearched = () => {
  const [requestIpInfo, setRequestIpInfo] = useState({});
  const [ipAddress, setIpAddress] = useState("");
  const [ipField, setIpField] = useState("");

  
  const getRequestedIpInfo = (ipAddress, ipFieldInfo) => {
    return fetchAllExternalIp(ipAddress)
    .then(data => setRequestIpInfo(data))
    .then(setIpField(ipFieldInfo))
    .then(setIpAddress(ipAddress))
    .then(error => console.log(error))
  }

  const saveToStorage = () => {
    localStorage.setItem(requestIpInfo.ip, JSON.stringify(requestIpInfo))
  }
  
  return  (
    <div className="ipInfo">
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
       {ipAddress && <IpCard ip={requestIpInfo} ipField={ipField} ipAddress={ipAddress} saveToStorage={saveToStorage}/>}
    </div>
  )
}

export default IpSearched;
