import './IpCardInfo.css'
import React from 'react';
import Loader from '../Loader/Loader';

const IpCardInfo = ({ip}) => {
  if (!ip) {
    return (<Loader />)
  } 
  return (
    <div className="single-card">
      <p>IP: {!ip.ip ? 'No info requested' : ip.ip}</p>
      <p>Version: {!ip.version ? 'No info requested' : ip.version}</p>
      <p>City: {!ip.city ? 'No info requested' : ip.city}</p>
      <p>Region: {!ip.region ? 'No info requested' : ip.region}</p>
      <p>Country Name: {!ip.country_name ? 'No info requested' : ip.country_name}</p>
      <p>Country Code: {!ip.country_code ? 'No info requested' : ip.country_code}</p>
      <p>Country Capital: {!ip.country_capital ? 'No info requested' : ip.country_capital}</p>
      <p>Country Calling Code: {!ip.country_calling_code ? 'No info requested' : ip.country_calling_code}</p>
      <p>Country Area: {!ip.country_area ? 'No info requested' : ip.country_area}</p>
      <p>Country Population: {!ip.country_population ? 'No info requested' : ip.country_population}</p>
      <p>Postal: {!ip.postal ? 'No info requested' : ip.postal}</p>
      <p>Latitude: {!ip.latitude ? 'No info requested' : ip.latitude}</p>
      <p>Longitude: {!ip.longitude ? 'No info requested' : ip.longitude}</p>
      <p>Timezone: {!ip.timezone ? 'No info requested' : ip.timezone}</p>
      <p>Currency: {!ip.currency_name ? 'No info requested' : ip.currency_name}</p>
      <p>Languages: {!ip.languages ? 'No info requested' : ip.languages}</p>
      <p>ASN: {!ip.asn ? 'No info requested' : ip.asn}</p>
      <p>Organization: {!ip.org ? 'No info requested' : ip.org}</p>
    </div>
  )
}

export default IpCardInfo;