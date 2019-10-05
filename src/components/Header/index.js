import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='header-title'>Furtastic Fotos</h1>
      <p className='header-subtitle'>Select a breed and scroll down to view dogs specific to that breed!</p>
    </div>
  )
}

export default Header;