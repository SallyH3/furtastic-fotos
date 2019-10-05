import React from 'react';
import './BreedPhotos.css';

const BreedPhotos = ({ photos }) => {
  const breedImg = photos.map((photo, index) => 
    <img key={ index } className='breed-photo' src={ photo } alt='Dog' />
  )
  return(
    <div className='breed-photo-container'>
      { breedImg }
    </div>
  )   

}


export default BreedPhotos;