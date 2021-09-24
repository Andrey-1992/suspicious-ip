import './IpInfo.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import { fetchLocalIp, fetchAllExternalIp, fetchFieldExternalIp } from '../../utils';

const IpInfo = () => {
  const [requestIpAll, setRequestIpAll] = useState({});
  const [requestIpField, setRequestIpField] = useState('');

  useEffect(() => {
    getLocalIpInfo()
  }, [])

  const getLocalIpInfo = () => {
    return fetchLocalIp()
    .then(data => setRequestIpAll(data))
    .then(setRequestIpField(''))
  }

  const getRequestedIpInfo = (ipAddress, ipField) => {
    if(ipField) {
      return fetchFieldExternalIp(ipAddress, ipField)
      .then(data => setRequestIpField(data))
      .then(setRequestIpAll({}))
      // .then(console.log(requestIpField))
    }
    
    return fetchAllExternalIp(ipAddress)
    .then(data => setRequestIpAll(data))
    .then(setRequestIpField(''))
  }

  return  (
    <div className="ipInfo">
      <h2 className='ipInfo'>IpInfo</h2>
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
      {requestIpField ? <IpCard ip={requestIpField} /> : <IpCard ip={requestIpAll} />}
    </div>
  )
}

export default IpInfo;