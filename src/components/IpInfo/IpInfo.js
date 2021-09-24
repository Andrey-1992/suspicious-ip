import './IpInfo.css';
import React, { useState } from 'react';
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';

const IpInfo = () => {
    const [localIp, setLocalIp] = useState({});
    const [requestedIp, setRequerstedIp] = useState({});

    return  (
      <div className="ipInfo">
        <h2 className='ipInfo'>IpInfo</h2>
        <IpForm />
        <IpCard />
      </div>
    )
}

export default IpInfo;