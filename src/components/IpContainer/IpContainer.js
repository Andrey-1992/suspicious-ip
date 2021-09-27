import './IpContainer.css'
import React, { useState, useEffect } from 'react';
import IpSavedCard from '../IpSavedCard/IpSavedCard';
import Carousel from 'react-elastic-carousel';

const IpContainer = () => {
  const [ipCardsData, setIpCardsData] = useState([]);

  useEffect(() => {
    retrieveFromStorage()
  }, [])

  const retrieveFromStorage = () => {
    const getStoredPosts = Object.keys(localStorage).map(ipData => {
        return JSON.parse(localStorage.getItem(ipData.props))
    // console.log(ipData)
    })
    setIpCardsData(getStoredPosts);
    console.log(ipCardsData);
    createIpCards(getStoredPosts)
  }
    
  const deleteFromStorage = (data) => {
    localStorage.removeItem(data.ip)
  }

  const saveToStorage = () => {
    console.log('test ')
  }

  const createIpCards = (getStoredPosts) => {
    const cardsContainer = getStoredPosts.map(info => {
      return (
        <IpSavedCard ip={info} />
       )
    })
    console.log("test cardsContainer:", cardsContainer)
    return (
        <IpSavedCard ip={getStoredPosts}/>
    )
  }

  return  (
    <h2 className='ipContainer'>IpContainer</h2>
  )
}

export default IpContainer;

   //   <Carousel>
        {/* {cardsContainer.map(card => card)} */}
        // <IpCardInfo ip={getStoredPosts[0]} saveToStorage={saveToStorage}/>
    //   </Carousel>