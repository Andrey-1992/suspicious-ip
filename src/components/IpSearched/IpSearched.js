import './IpSearched.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpCardField from '../IpCardField/IpCardField';
import IpForm from '../IpForm/IpForm';
import { fetchAllExternalIp } from '../../utils';

const IpSearched = () => {
  const [test, setTest] = useState({});
  const [requestIpInfo, setRequestIpInfo] = useState({});
  const [ipField, setIpField] = useState("");

  
  const getRequestedIpInfo = (ipAddress, ipFieldInfo) => {
    return fetchAllExternalIp(ipAddress)
    .then(data => setRequestIpInfo(data))
    .then(setIpField(ipFieldInfo))
    .then(console.log("test1:", ipField, requestIpInfo))
  }
  
  return  (
    <div className="ipInfo">
      <h2 className='ipInfo'>IpInfo</h2>
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
      {!requestIpInfo && <IpCard ip={requestIpInfo} ipField={ipField}/>}
    </div>
  )
}

export default IpSearched;

// return fetchFieldExternalIp(ipAddress, ipField)
// .then(data => console.log('test fetch for filed data:', data))
// .then(data => setRequestIpField(data))
// .then(console.log('requested field', requestIpField))
// // .then(setRequestIpAll({}))
// useEffect(() => {
//   getExternalIpInfo()
// }, [])

// const getExternalIpInfo = (ipAddress, ipField) => {
//   return fetchAllExternalIp ()
//   .then(data => setRequestIpInfo(data))
//   .then(setIpField(null))
// }