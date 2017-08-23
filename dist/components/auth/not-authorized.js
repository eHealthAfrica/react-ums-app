

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotAuthorized = function NotAuthorized() {
  return _react2.default.createElement(_components.ErrorPage, { params: { type: 'restricted' } });
};

exports.default = NotAuthorized;
module.exports = exports.default;
