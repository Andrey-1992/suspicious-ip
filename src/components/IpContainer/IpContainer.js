import './IpContainer.css'
import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

const IpContainer = () => {

    useEffect(() => {
        retrieveFromStorage()
      }, [])

  const retrieveFromStorage = () => {
    const getStoredPosts = Object.keys(localStorage).map(ipData => {
        return JSON.parse(localStorage.getItem(ipData))
    // console.log(ipData)
    })
    console.log(getStoredPosts);
    // setFavoritedPosts(getStoredPosts)
  }
    
  const deleteFromStorage = (post) => {
    localStorage.removeItem(post.id)
  }

  const createIpCards() {

  }

  return  (
    <h2 className='ipContainer'>IpContainer</h2>
  )
}

export default IpContainer;