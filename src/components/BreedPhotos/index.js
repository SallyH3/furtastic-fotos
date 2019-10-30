import React from 'react';
import './BreedPhotos.css';

const BreedPhotos = (props) => {
  const breedImg = props.photos.map((photo, index) => 
    <img key={ index } className='breed-photo' src={ photo } alt='Dog' />
  )
  return(
    <div className='breed-photo-container'>
      { breedImg }
    </div>
  )   

}


export default BreedPhotos;