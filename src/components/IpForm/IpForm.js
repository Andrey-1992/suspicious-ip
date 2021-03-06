import './IpForm.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IpForm = ({getRequestedIpInfo}) => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipField, setIpField] = useState("");
  const ipFieldsContainer = [
  {Name:'Select a field', Value:''}, {Name:'All', Value:'all'}, {Name:'Ip', Value:'ip'}, {Name:'Version', Value:'version'}, 
  {Name:'City', Value:'city'}, {Name:'Region', Value:'region'}, {Name:'Country Name', Value:'country_name'},
  {Name:'Country Code', Value:'country_code'}, {Name:'Country Capital', Value:'country_capital'}, 
  {Name:'Country Calling Code', Value:'country_calling_code'}, {Name:'Country Area', Value:'country_area'},
  {Name:'Country Population', Vlaue:'country_population'}, {Name:'Country Postal', Value:'postal'},
  {Name:'Latitude', Value:'latitude'}, {Name:'Longitude', Value:'longitude'},{Name:'Timezone', Value:'timezone'},
  {Name:'Currency', Value:'currency_name'}, {Name:'Languages', Values:'languages'}, {Name:'ASN', Value:'asn'}, 
  {Name:'Organization', Value:'org'}]

  const searchIp = (event) => {
    event.preventDefault();
    getRequestedIpInfo(ipAddress, ipField);
    clearInputs();
  }

  const clearInputs = () => {
    setIpAddress("");
    setIpField("");
  }

  return (
    <form className="ip-form-component">
      <input
        type="text"
        placeholder="IP Address"
        name="ipAddress"
        value={ipAddress}
        onChange={(event) => setIpAddress(event.target.value)}
      />
      <select onChange={(event) => setIpField(event.target.value)}>
        {ipFieldsContainer.map(list => (
          <option value={list.Value}>
            {list.Name}
          </option>
        ))}
      </select>
      <button onClick={searchIp}>Search <i class="fas fa-search"></i></button>
      <p className="form-text">Type an IP Address and select a filter field.</p>
    </form>
  )
}

IpForm.propTypes = {
  ipAddress: PropTypes.string,
  ipField: PropTypes.string,
  ipFieldsContainer: PropTypes.array,
  searchIp: PropTypes.func,
  clearInputs: PropTypes.func,
  getRequestedIpInfo: PropTypes.func
}

export default IpForm;