import './IpCardInfo.css'
import React from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const IpCardInfo = ({ip, saveToStorage}) => {
  if (!ip) {
    return (<Loader />)
  } 
  return (
    <div className="single-card">
      <p className="ip-card-text"><i class="fas fa-code-branch"></i> <b>IP:</b> <i>{ip.ip}</i></p>
      <p className="ip-card-text"><i class="fas fa-atlas"></i> <b>Version:</b> <i>{ip.version}</i></p>
      <p className="ip-card-text"><i class="fas fa-globe-americas"></i> <b>Country Name:</b> <i>{ip.country_name}</i></p>
      <p className="ip-card-text"><i class="fas fa-code"></i> <b>Country Code:</b> <i>{ip.country_code}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-signs"></i> <b>Country Capital:</b> <i>{ip.country_capital}</i></p>
      <p className="ip-card-text"><i class="fas fa-code"></i> <b>Country Calling Code:</b> <i>{ip.country_calling_code}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-pin"></i> <b>Country Area:</b> <i>{ip.country_area}</i></p>
      <p className="ip-card-text"><i class="fas fa-user-friends"></i> <b>Country Population:</b> <i>{ip.country_population}</i></p>
      <p className="ip-card-text"><i class="fab fa-font-awesome-flag"></i> <b>City:</b> <i>{ip.city}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-marked"></i> <b>Region:</b> <i>{ip.region}</i></p>
      <p className="ip-card-text"><i class="fas fa-mail-bulk"></i> <b>Postal:</b> <i>{ip.postal}</i></p>
      <p className="ip-card-text"><i class="fas fa-sort-numeric-up"></i> <b>Latitude:</b> <i>{ip.latitude}</i></p>
      <p className="ip-card-text"><i class="fas fa-sort-numeric-down-alt"></i> <b>Longitude:</b> <i>{ip.longitude}</i></p>
      <p className="ip-card-text"><i class="fas fa-hourglass-half"></i> <b>Timezone:</b> <i>{ip.timezone}</i></p>
      <p className="ip-card-text"><i class="fas fa-money-check-alt"></i> <b>Currency:</b> <i>{ip.currency_name}</i></p>
      <p className="ip-card-text"><i class="fas fa-language"></i> <b>Languages:</b> <i>{ip.languages}</i></p>
      <p className="ip-card-text"><i class="fas fa-barcode"></i> <b>ASN:</b> <i>{ip.asn}</i></p>
      <p className="ip-card-text"><i class="fas fa-sitemap"></i> <b>Organization:</b> <i>{ip.org}</i></p>
      <button className="saved-button" onClick={saveToStorage}>Save <i class="fas fa-hdd"></i></button>
    </div>
  )
}

IpCardInfo.propTypes = {
  ip: PropTypes.string,
  saveToStorage: PropTypes.func,
  Loader: PropTypes.element
}

export default IpCardInfo;
