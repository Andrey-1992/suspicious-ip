import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Error.css';

const Error = () => {
  return (
    <div className='error'>
      <NavLink to='/'>
        <img className='error-img' src="https://img.freepik.com/free-vector/404-error-page-found-lamp-broken-background_114341-57.jpg?size=626&ext=jpg" alt="404-img"/>
      </NavLink>
    </div>
  )
}

Error.propTypes = {
  Error: PropTypes.element
}

export default Error;