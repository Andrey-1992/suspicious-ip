import './IpSearched.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpCardField from '../IpCardField/IpCardField';
import IpForm from '../IpForm/IpForm';
import { fetchLocalIp, fetchAllExternalIp, fetchFieldExternalIp } from '../../utils';

const IpSearched = () => {
  const [requestIpAll, setRequestIpAll] = useState({});
  const [requestIpField, setRequestIpField] = useState("");
  const [ipField, setIpField] = useState("");

  useEffect(() => {
    getLocalIpInfo()
  }, [])

  const getLocalIpInfo = () => {
    return fetchLocalIp()
    .then(data => setRequestIpAll(data))
    .then(setIpField(null))
  }

  const getRequestedIpInfo = (ipAddress, ipFieldInfo) => {
      return fetchAllExternalIp(ipAddress)
      .then(data => setRequestIpAll(data))
      .then(setIpField(ipFieldInfo))
      // .then(setRequestIpField(''))
  }

  // const getRequestedIpInfo = (ipAddress, ipField) => {
  //   if(ipField === "all") {
  //     return fetchAllExternalIp(ipAddress)
  //     .then(data => setRequestIpAll(data))
  //     // .then(setRequestIpField(''))
  //   } 

  //   return fetchAllExternalIp(ipAddress, ipField)
  //   .then(data => setRequestIpField(data[ipField]))
  //   .then(data => console.log(data))  
  //   // .then(setRequestIpField('test2'))
  //   .then(console.log(requestIpField))    
  // }
  
  return  (
    <div className="ipInfo">
      <h2 className='ipInfo'>IpInfo</h2>
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
      {/* <IpCardField field={requestIpField} /> */}
      <IpCard ip={requestIpAll} ipField={ipField}/>
      {/* {requestIpField ? <IpCardField filed={requestIpField} /> : <IpCard ip={requestIpAll} />} */}
    </div>
  )
}

export default IpSearched;

// return fetchFieldExternalIp(ipAddress, ipField)
// .then(data => console.log('test fetch for filed data:', data))
// .then(data => setRequestIpField(data))
// .then(console.log('requested field', requestIpField))
// // .then(setRequestIpAll({}))