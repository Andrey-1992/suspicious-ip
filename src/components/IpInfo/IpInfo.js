import './IpInfo.css';
import React, { useState, useEffect } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';

const IpInfo = () => {
    const [localIp, setLocalIp] = useState('');
    const [requestedIp, setRequerstedIp] = useState({});

    useEffect(() => {
      // getLocalIpInfo()
      setLocalIp('192.152.080.001')
    }, [])

    const getLocalIpInfo = () => {

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