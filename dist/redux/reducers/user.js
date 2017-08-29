'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _constants = require('../constants');

var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.USERS_SUCCESS:
      return action.result;
    case _constants.CREATE_USER_SUCCESS:
      {
        var newState = state.slice();
        newState.unshift(action.result);
        return newState;
      }
    case _constants.EDIT_USER_SUCCESS:
      {
        var _newState = state.slice();
        var userIndex = _newState.findIndex(function (user) {
          return user.name === action.result.name;
        });
        _newState[userIndex] = action.result;
        return _newState;
      }
    default:
      return state;
  }
};

var roles = function roles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.ROLES_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

var loggedInUser = function loggedInUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.GET_LOGGED_IN_USER_SUCCESS:
      return action.result;
    case _constants.LOGIN_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({ users: users, roles: roles, loggedInUser: loggedInUser });
module.exports = exports['default'];