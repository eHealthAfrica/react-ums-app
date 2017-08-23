

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _errorTypes = require('./error-types');

const _errorTypes2 = _interopRequireDefault(_errorTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorPage = function ErrorPage(_ref) {
  const params = _ref.params;
  let type = params.type,
    showHomeLink = params.showHomeLink;

  const error = _errorTypes2.default[type] || _errorTypes2.default.notFound;
  let title = error.title,
    message = error.message,
    image = error.image;


  const displayHomeLink = showHomeLink === undefined || showHomeLink;

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
        title,
      ),
      _react2.default.createElement(
        'p',
        null,
        message,
      ),
      displayHomeLink && _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: '/' },
          ' Return to Home Page.',
        ),
      ),
    ),
  );
};

ErrorPage.propTypes = {
  params: _propTypes2.default.shape({
    type: _propTypes2.default.string,
    showHomeLink: _propTypes2.default.bool,
  }),
};

exports.default = ErrorPage;
module.exports = exports.default;
