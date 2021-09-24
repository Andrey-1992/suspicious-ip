import './IpInfo.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import { fetchLocalIp } from '../../utils';

const IpInfo = () => {
    const [localIp, setLocalIp] = useState({});
    const [requestedIp, setRequerstedIp] = useState({});

    useEffect(() => {
      getLocalIpInfo()
    }, [])

    const getLocalIpInfo = () => {
      return fetchLocalIp()
      .then(data => setLocalIp(data))
      .then(console.log(localIp))
    }

    return  (
      <div className="ipInfo">
        <h2 className='ipInfo'>IpInfo</h2>
        <IpForm />
        <IpCard ip={localIp} />
      </div>
    )
}

export default IpInfo;