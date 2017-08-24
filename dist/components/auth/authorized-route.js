'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../components');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WrappedComponent, authorizedRoles, user) {
  function Authorized(props) {
    if ((0, _utils.isUserAuthorized)(authorizedRoles, user)) {
      return _react2.default.createElement(WrappedComponent, props);
    }
    return _react2.default.createElement(_components.NotAuthorized, null);
  }
  return Authorized;
};

module.exports = exports['default'];