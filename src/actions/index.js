import * as types from './actionTypes'

export const loadAllBreeds = () => {
    return (dispatch) => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        dispatch(getAllBreeds(breeds.message))
        })
    .catch((error) => console.log(error));
    }
  }

  const getAllBreeds = breeds => {
    return {
      type: types.REQUEST_ALL_BREEDS,
      breeds
    }
  }

export const selectBreed = (breedName) => {
    return (dispatch) => {
    const photoUrl = `https://dog.ceo/api/breed/${ breedName }/images/random/2`
    return fetch(photoUrl)
    .then(res => res.json())
    .then(photos => {
        dispatch(getBreed(photos.message))
        })
    .catch((error) => console.log(error));
    }
}

  const getBreed = photos => {
    return {
      type: types.REQUEST_BREED_IMAGES,
      photos
    }
  }