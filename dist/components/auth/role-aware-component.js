'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoleAwareComponent = function RoleAwareComponent(props) {
  if ((0, _utils.isUserAuthorized)(props.authorize, props.user)) return props.children;
  return null;
};

RoleAwareComponent.propTypes = {
  user: _propTypes2.default.object.isRequired,
  authorize: _propTypes2.default.array.isRequired,
  children: _propTypes2.default.any.isRequired
};

exports.default = (0, _reactRedux.connect)(_utils.mapStateToUser)(RoleAwareComponent);
module.exports = exports['default'];