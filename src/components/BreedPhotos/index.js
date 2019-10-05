import React from 'react';
import './BreedPhotos.css';

const BreedPhotos = ({photos}) => {
  const breedImg = photos.map((photo, key) => 
    <img key={key} className='breed-photo' src={photo} alt='Dog' />
  )
  return(
    <div className='breed-photo-container'>
      {breedImg}
    </div>
  )   

}


export default BreedPhotos;