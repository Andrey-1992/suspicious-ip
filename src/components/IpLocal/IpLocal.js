import './IpLocal.css';
import React, { useState, useEffect } from 'react';
import IpCardInfo from '../IpCardInfo/IpCardInfo';
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
  
  return  (
    <div className="local-ip-info">
      <IpCardInfo ip={requestLocalIp}/>
    </div>
  )
}

export default IpLocal;