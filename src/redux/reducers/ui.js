import { LOCATIONS_REQUESTS, LOCATIONS_SUCCESS, LOCATIONS_FAILURE } from 'redux/constants';

const initialState = {
  isLoading: false,
  importLoading: false,
  roundLoading: false,
  statusLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_REQUESTS:
      return { ...state, isLoading: true };
    case LOCATIONS_SUCCESS:
    case LOCATIONS_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
