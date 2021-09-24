import React, { useState } from 'react';
import './IpForm.css'

const IpForm = ({getRequestedIpInfo}) => {

  const [ipAddress, setIpAddress] = useState("");
  const [ipField, setIpField] = useState("");

  const searchIp = (event) => {
    event.preventDefault();
    console.log(ipAddress);
    console.log(ipField);
    getRequestedIpInfo(ipAddress);
    clearInputs();
  }

  const clearInputs = () => {
    setIpAddress("")
  }

  return (
    <form>
      <input
        type="text"
        placeholder="IP Address"
        name="ipAddress"
        value={ipAddress}
        onChange={(event) => setIpAddress(event.target.value)}
      />
      <input
        type="radio"
        value="city"
        onChange={(event) => setIpField(event.target.value)}
       /> City
      <button onClick={searchIp}>SUBMIT</button>
    </form>
  )
}

export default IpForm;