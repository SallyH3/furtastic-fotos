import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_BREED_IMAGES:
      return action.photos

    default:
      return state;
  }
}