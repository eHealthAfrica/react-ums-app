import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import users from './user';
import locations from './location';
import ui from './ui';

const reducer = combineReducers({
  routing: routerReducer,
  toastr: toastrReducer,
  users,
  locations,
  ui,
});

export default reducer;
