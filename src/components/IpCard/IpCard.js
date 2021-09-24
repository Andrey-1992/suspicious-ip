import './IpCard.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCard = ({ip}) => {
  if (!ip) {
    return (<Loader />)
  }
  return (
    <div className="single-card">
      <p>IP: {ip.ip}</p>
      <p>Version: {ip.version}</p>
      <p>City: {ip.city}</p>
      <p>Region: {ip.region}</p>
      <p>Country Name: {ip.country_name}</p>
      <p>Country Code: {ip.country_code}</p>
      <p>Country Capital: {ip.country_capital}</p>
      <p>Country Calling Code: {ip.country_calling_code}</p>
      <p>Country Area: {ip.country_area}</p>
      <p>Country Population: {ip.country_population}</p>
      <p>Postal: {ip.postal}</p>
      <p>Latitude: {ip.latitude}</p>
      <p>Longitude: {ip.longitude}</p>
      <p>Timezone: {ip.timezone}</p>
      <p>Currency: {ip.currency_name}</p>
      <p>Languages: {ip.languages}</p>
      <p>ASN: {ip.asn}</p>
      <p>Organization: {ip.org}</p>
    </div>
  );
}

export default IpCard;