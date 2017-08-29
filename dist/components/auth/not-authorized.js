'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotAuthorized = function NotAuthorized() {
  return _react2.default.createElement(_components.ErrorPage, { params: { type: 'restricted' } });
};

exports.default = NotAuthorized;
module.exports = exports['default'];