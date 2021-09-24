import React from 'react';
import './IpInfo.css'
import IpCard from '../IpCard/IpCard';
import IpForm from '../IpForm/IpForm';
import Loader from '../Loader/Loader';

const IpInfo = () => {
    return  (
      <div className="ipInfo">
        <h2 className='ipInfo'>IpInfo</h2>
        <IpCard />
        <IpForm />
        <Loader />
      </div>
    )
}

export default IpInfo;