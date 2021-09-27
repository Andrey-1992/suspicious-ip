import './IpSavedCard.css'
import React from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const IpSavedCard = ({ip, deleteFromStorage}) => {
  
  const matchIp = () => {
    deleteFromStorage(ip.ip)
  }

  if (!ip) {
    return (<Loader />)
  } 
  return (
    <div className="single-saved-card">
      <p className="ip-saved-card-text"><i class="fas fa-code-branch"></i> <b>IP:</b> <i>{!ip.ip ? 'No info requested' : ip.ip}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-atlas"></i> <b>Version:</b> <i>{!ip.version ? 'No info requested' : ip.version}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-globe-americas"></i> <b>Country Name:</b> <i>{!ip.country_name ? 'No info requested' : ip.country_name}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-code"></i> <b>Country Code:</b> <i>{!ip.country_code ? 'No info requested' : ip.country_code}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-map-signs"></i> <b>Country Capital:</b> <i>{!ip.country_capital ? 'No info requested' : ip.country_capital}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-code"></i> <b>Country Calling Code:</b> <i>{!ip.country_calling_code ? 'No info requested' : ip.country_calling_code}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-map-pin"></i> <b>Country Area:</b> <i>{!ip.country_area ? 'No info requested' : ip.country_area}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-user-friends"></i> <b>Country Population:</b> <i>{!ip.country_population ? 'No info requested' : ip.country_population}</i></p>
      <p className="ip-saved-card-text"><i class="fab fa-font-awesome-flag"></i> <b>City:</b> <i>{!ip.city ? 'No info requested' : ip.city}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-map-marked"></i> <b>Region:</b> <i>{!ip.region ? 'No info requested' : ip.region}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-mail-bulk"></i> <b>Postal:</b> <i>{!ip.postal ? 'No info requested' : ip.postal}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-sort-numeric-up"></i> <b>Latitude:</b> <i>{!ip.latitude ? 'No info requested' : ip.latitude}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-sort-numeric-down-alt"></i> <b>Longitude:</b> <i>{!ip.longitude ? 'No info requested' : ip.longitude}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-hourglass-half"></i> <b>Timezone:</b> <i>{!ip.timezone ? 'No info requested' : ip.timezone}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-money-check-alt"></i> <b>Currency:</b> <i>{!ip.currency_name ? 'No info requested' : ip.currency_name}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-language"></i> <b>Languages:</b> <i>{!ip.languages ? 'No info requested' : ip.languages}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-barcode"></i> <b>ASN:</b> <i>{!ip.asn ? 'No info requested' : ip.asn}</i></p>
      <p className="ip-saved-card-text"><i class="fas fa-sitemap"></i> <b>Organization:</b> <i>{!ip.org ? 'No info requested' : ip.org}</i></p>
      <button className="delete-button"onClick={matchIp} ><i class="fas fa-trash-alt"></i> Remove</button>
    </div>
    
  )
}

IpSavedCard.propTypes = {
  ip: PropTypes.object,
  deleteFromStorage: PropTypes.func,
  matchIp: PropTypes.func,
  Loader: PropTypes.element
}
  
export default IpSavedCard;
