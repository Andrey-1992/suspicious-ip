import './IpInfo.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpCardField from '../IpCardField/IpCardField';
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
    // .then(setRequestIpField(''))
  }

  const getRequestedIpInfo = (ipAddress, ipField) => {
    console.log('fetch ip:', ipAddress)
    console.log('fetch field:', ipField)
    // console.log('requestIpField:', requestIpField)
    if(ipField === "all") {
      return fetchAllExternalIp(ipAddress)
      .then(data => setRequestIpAll(data))
      .then(setRequestIpField(''))
    } 
    
    return fetchFieldExternalIp(ipAddress, ipField)
    .then(data => console.log('test fetch for filed data:', data))
    .then(data => setRequestIpField(data))
    .then(console.log('requested field', requestIpField))
    // .then(setRequestIpAll({}))
  }

  return  (
    <div className="ipInfo">
      <h2 className='ipInfo'>IpInfo</h2>
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
      {/* <IpCardField field={requestIpField} /> */}
      {/* <IpCard ip={requestIpField} /> */}
      {requestIpField ? <IpCardField filed={requestIpField} /> : <IpCard ip={requestIpAll} />}
    </div>
  )
}

export default IpInfo;