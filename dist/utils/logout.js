'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _reactCookie2.default.remove('accessToken', { path: '/', maxAge: 86400 });
};

module.exports = exports['default'];