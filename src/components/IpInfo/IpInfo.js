import './IpInfo.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import { fetchLocalIp, fetchAllExternalIp, fetchFieldExternalIp } from '../../utils';

const IpInfo = () => {
  const [localIp, setLocalIp] = useState({});
  const [requestIpAll, setRequestIpAll] = useState({});
  const [requestIpField, setRequestIpField] = useState({});

  useEffect(() => {
    getLocalIpInfo()
  }, [])

  const getLocalIpInfo = () => {
    return fetchLocalIp()
    .then(data => setLocalIp(data))
    .then(console.log(localIp))
  }

  const getRequestedIpInfo = (ipAddress, ipField) => {
    if(!ipField) {
      return fetchAllExternalIp(ipAddress)
      .then(data => setRequestIpAll(data))
      .then(console.log(requestIpAll))
    }
    
    return fetchFieldExternalIp(ipAddress, ipField)
    .then(data => setRequestIpField(data))
    .then(console.log(requestIpField))
  }

  return  (
    <div className="ipInfo">
      <h2 className='ipInfo'>IpInfo</h2>
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
      <IpCard ip={localIp} />
    </div>
  )
}

export default IpInfo;