'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapValuesInObject = exports.mapStateToUser = exports.isUserAuthorized = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isUserAuthorized = exports.isUserAuthorized = function isUserAuthorized(requiredRoles, user) {
  if (user) {
    return (0, _intersection2.default)(requiredRoles, user.roles).length > 0;
  }
  return false;
};

var mapStateToUser = exports.mapStateToUser = function mapStateToUser(state) {
  return { user: state.users.loggedInUser };
};

var mapValuesInObject = exports.mapValuesInObject = function mapValuesInObject(object) {
  var map = (0, _keys2.default)(object).map(function (key) {
    return { key: key, value: object[key] };
  }).reduce(function (prev, curr) {
    var accumulator = prev;
    accumulator[curr.value] = curr.key;
    return accumulator;
  }, {});
  return function (val) {
    return map[val] || val;
  };
};