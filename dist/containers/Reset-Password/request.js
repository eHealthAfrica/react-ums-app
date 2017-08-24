'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxToastr = require('react-redux-toastr');

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _userActions = require('../../redux/actions/userActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResetPasswordRequest = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ResetPasswordRequest, _Component);

  function ResetPasswordRequest() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ResetPasswordRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ResetPasswordRequest.__proto__ || (0, _getPrototypeOf2.default)(ResetPasswordRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      success: false,
      email: ''
    }, _this.handleReset = function (e) {
      e.preventDefault();
      var email = e.target.email;

      _this.props.requestPasswordReset({ id: email.value }).then(function () {
        _this.setState({ success: true, email: email.value });
      }).catch(function (err) {
        _reactReduxToastr.toastr.error((err.message || err.error) + ' Please try again.');
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ResetPasswordRequest, [{
    key: 'render',
    value: function render() {
      var form = _react2.default.createElement(
        'form',
        { acceptCharset: 'UTF-8', role: 'form', onSubmit: this.handleReset },
        _react2.default.createElement(
          'fieldset',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', placeholder: 'EMAIL ADDRESS', name: 'email', type: 'email', required: true })
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-lg btn-primary btn-block radius-primary bk_color_trans', type: 'submit' },
            ' REQUEST PASSWORD RESET '
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-6' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/login', className: 'forgot' },
                'Back to Login'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'copyright text-center' },
            'COPYRIGHT LOMIS DASHBOARD 2.0'
          )
        )
      );

      var successAlert = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'success' },
          _react2.default.createElement(
            'p',
            null,
            'An email has been sent to ',
            this.state.email
          ),
          _react2.default.createElement(
            'p',
            null,
            'Please click on the reset link in the email to reset your password'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/login', className: 'forgot' },
              'Back to Login'
            )
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid login-bg' },
        _react2.default.createElement(
          'div',
          { className: 'row vertical-offset-100' },
          _react2.default.createElement('div', { className: 'col-md-4' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'panel col-centered' },
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                this.state.success ? successAlert : form
              )
            )
          )
        )
      );
    }
  }]);
  return ResetPasswordRequest;
}(_react.Component), _class.propTypes = {
  requestPasswordReset: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = (0, _reactRedux.connect)(null, { requestPasswordReset: _userActions.requestPasswordReset })(ResetPasswordRequest);
module.exports = exports['default'];