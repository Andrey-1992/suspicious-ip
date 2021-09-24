import './IpCard.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCard = ({ip}) => {
  if (!ip) {
    return (<Loader />)
  }
  return (
    <div className="single-card">
      <p>{ip}</p>
    </div>
  );
}

export default IpCard;