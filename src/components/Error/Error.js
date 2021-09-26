import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='error'>
      <NavLink className='go-back-home' to='/'>
        <img src="https://cdn4.vectorstock.com/i/1000x1000/39/98/error-404-page-not-found-vector-14463998.jpg" alt="404-img"/>
      </NavLink>
    </div>
)
}

export default Error;