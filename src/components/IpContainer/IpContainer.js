import './IpContainer.css'
import React, { useState, useEffect } from 'react';
import IpSavedCard from '../IpSavedCard/IpSavedCard';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';

const IpContainer = () => {
  const [ipCardsData, setIpCardsData] = useState([]);

  useEffect(() => {
    retrieveFromStorage()
  }, [])

  const retrieveFromStorage = () => {
    const getStoredPosts = Object.keys(localStorage).map(ipData => {
        return JSON.parse(localStorage.getItem(ipData))
    })
    setIpCardsData(getStoredPosts);
    createIpCards(ipCardsData);
  }
    
  const deleteFromStorage = (data) => {
    localStorage.removeItem(data)
    // console.log(data, "data in container")
  }

  const createIpCards = (ipCardsData) => {
    const cardsContainer = ipCardsData.map(info => {
      return (
        <IpSavedCard ip={info} deleteFromStorage={deleteFromStorage}/>
       )
    })
    return (
      <Carousel>
        {cardsContainer}
      </Carousel>
    )
  }

  return  (
    <div className="saved-cards-container">
      {ipCardsData ? createIpCards(ipCardsData) : <p className="no-saved-cards">No saved IPs so far !</p>}
    </div>
  )
}

IpContainer.propTypes = {
  ipCardsData: PropTypes.array,
  retrieveFromStorage: PropTypes.func,
  deleteFromStorage: PropTypes.func,
  createIpCards: PropTypes.func,
  IpSavedCard: PropTypes.element
}

export default IpContainer;