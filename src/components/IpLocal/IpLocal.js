import './IpLocal.css';
import React, { useState, useEffect } from 'react';
import IpCardInfo from '../IpCardInfo/IpCardInfo';
import PropTypes from 'prop-types';
import { fetchLocalIp } from '../../utils';

const IpLocal = () => {
  const [requestLocalIp, setRequestLocalIp] = useState({});

  useEffect(() => {
    getLocalIpInfo()
  }, [])

  const getLocalIpInfo = () => {
    return fetchLocalIp()
    .then(data => setRequestLocalIp(data))
  }

  const saveToStorage = () => {
    localStorage.setItem(requestLocalIp.ip, JSON.stringify(requestLocalIp))
  }
  
  return  (
    <div className="ip-card-info">
      <IpCardInfo ip={requestLocalIp} saveToStorage={saveToStorage}/>
    </div>
  )
}

IpLocal.propTypes = {
  requestLocalIp: PropTypes.object,
  getLocalIpInfo: PropTypes.func,
  saveToStorage: PropTypes.func,
  IpCardInfo: PropTypes.element
}

export default IpLocal;