'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountNode = document.getElementById('content');

var user = {
  _id: 'org.couchdb.user:dd_admin',
  _rev: '13-c7519565abbcce68ba3a2341ba3bbc76',
  name: 'dd_admin',
  roles: ['admin', 'manager', 'driver'],
  disabled: false,
  accessLevel: ['all']
};

var authorizedRole = ['admin'];

(0, _reactDom.render)(_react2.default.createElement(_main2.default, { user: user, authorizedRole: authorizedRole }), mountNode);