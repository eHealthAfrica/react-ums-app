'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('react-redux-toastr/src/styles/index.scss');
require('./style.scss');

var App = function App(props) {
  var children = props.children;

  return _react2.default.createElement(
    'div',
    { id: 'wrapper' },
    _react2.default.createElement(
      'div',
      { id: 'page-content-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'vertical-offset-50' },
        children
      )
    )
  );
};

App.propTypes = {
  children: _propTypes2.default.any.isRequired
};

exports.default = App;
module.exports = exports['default'];