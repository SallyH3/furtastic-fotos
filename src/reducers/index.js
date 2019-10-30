import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';
import photosReducer from './photosReducer';

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  photos: photosReducer
});