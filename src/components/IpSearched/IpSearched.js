import './IpSearched.css';
import React, { useState } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import PropTypes from 'prop-types';
import { fetchAllExternalIp } from '../../utils';

const IpSearched = () => {
  const [requestIpInfo, setRequestIpInfo] = useState({});
  const [ipAddress, setIpAddress] = useState("");
  const [ipField, setIpField] = useState("");
  const [completedRequest, setCompletedRequest] = useState(false);

  
  const getRequestedIpInfo = (ipAddress, ipFieldInfo) => {
    return fetchAllExternalIp(ipAddress)
    .then(data => setRequestIpInfo(data))
    .then(setIpField(ipFieldInfo))
    .then(setIpAddress(ipAddress))
    .then(error => console.log(error))

    if (!requestIpInfo) {
      setCompletedRequest(true)
    }
  }

  const saveToStorage = () => {
    localStorage.setItem(requestIpInfo.ip, JSON.stringify(requestIpInfo))
  }
  
  return  (
    <div className="ipInfo">
      <IpForm getRequestedIpInfo={getRequestedIpInfo}/>
       {ipAddress && <IpCard ip={requestIpInfo} ipField={ipField} ipAddress={ipAddress} saveToStorage={saveToStorage}/>}
       {completedRequest && <h2 className="bad-ip-request">Please fill out all the required fields</h2>}
    </div>
  )
}

IpSearched.propTypes = {
  requestIpInfo: PropTypes.object,
  ipAddress: PropTypes.string,
  ipField: PropTypes.string,
  completedRequest: PropTypes.bool,
  getRequestedIpInfo: PropTypes.func,
  saveToStorage: PropTypes.func,
  IpForm: PropTypes.element,
  IpCard: PropTypes.element
}

export default IpSearched;
