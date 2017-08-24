import { LOCATIONS_SUCCESS } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case LOCATIONS_SUCCESS:
      return action.result;
    default:
      return state;
  }
};
