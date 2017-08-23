'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorTypes = require('./error-types');

var _errorTypes2 = _interopRequireDefault(_errorTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
  var params = _ref.params;
  var type = params.type,
      showHomeLink = params.showHomeLink;

  var error = _errorTypes2.default[type] || _errorTypes2.default.notFound;
  var title = error.title,
      message = error.message,
      image = error.image;


  var displayHomeLink = showHomeLink === undefined || showHomeLink;

  return _react2.default.createElement(
    'div',
    { className: 'vertical-offset-50' },
    _react2.default.createElement(
      'div',
      { className: 'unauthorized' },
      image,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        message
      ),
      displayHomeLink && _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: '/' },
          ' Return to Home Page.'
        )
      )
    )
  );
};

ErrorPage.propTypes = {
  params: _propTypes2.default.shape({
    type: _propTypes2.default.string,
    showHomeLink: _propTypes2.default.bool
  })
};

exports.default = ErrorPage;
module.exports = exports['default'];