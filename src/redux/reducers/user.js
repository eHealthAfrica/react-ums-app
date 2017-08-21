import { combineReducers } from 'redux';
import { USERS_SUCCESS, ROLES_SUCCESS, CREATE_USER_SUCCESS,
  GET_LOGGED_IN_USER_SUCCESS, LOGIN_SUCCESS, EDIT_USER_SUCCESS } from 'redux/constants';

const users = (state = [], action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return action.result;
    case CREATE_USER_SUCCESS: {
      const newState = state.slice();
      newState.unshift(action.result);
      return newState;
    }
    case EDIT_USER_SUCCESS: {
      const newState = state.slice();
      const userIndex = newState.findIndex(user => user.name === action.result.name);
      newState[userIndex] = action.result;
      return newState;
    }
    default:
      return state;
  }
};

const roles = (state = [], action) => {
  switch (action.type) {
    case ROLES_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

const loggedInUser = (state = {}, action) => {
  switch (action.type) {
    case GET_LOGGED_IN_USER_SUCCESS:
      return action.result;
    case LOGIN_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

export default combineReducers({ users, roles, loggedInUser });
