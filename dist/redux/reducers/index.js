'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reactReduxToastr = require('react-redux-toastr');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _location = require('./location');

var _location2 = _interopRequireDefault(_location);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  toastr: _reactReduxToastr.reducer,
  users: _user2.default,
  locations: _location2.default,
  ui: _ui2.default
});

exports.default = reducer;
module.exports = exports['default'];