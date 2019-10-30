import * as types from '../actions/actionTypes';

const initialState = [];

const breedsReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.REQUEST_ALL_BREEDS:
          return action.breeds
          default:
              return state
    }
  }
  
  export default breedsReducer;