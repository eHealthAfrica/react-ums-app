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

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _userActions = require('../../redux/actions/userActions');

var _logout = require('../../utils/logout');

var _logout2 = _interopRequireDefault(_logout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResetPassword = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ResetPassword, _Component);

  function ResetPassword() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ResetPassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ResetPassword.__proto__ || (0, _getPrototypeOf2.default)(ResetPassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: '',
      token: null,
      success: false,
      errorMessage: '',
      password: '',
      cpassword: ''
    }, _this.handlePasswordChange = function (event) {
      var password = event.target.value;
      password = password.trim();
      if (password !== _this.state.cpassword) {
        _this.setState({ errorMessage: 'Password does not match.' });
      } else {
        _this.setState({ errorMessage: '' });
      }
      _this.setState({ password: password });
    }, _this.handleConfirmPasswordChange = function (event) {
      var cpassword = event.target.value;
      cpassword = cpassword.trim();
      if (cpassword !== _this.state.password) {
        _this.setState({ errorMessage: 'Password does not match.' });
      } else {
        _this.setState({ errorMessage: '' });
      }
      _this.setState({ cpassword: cpassword });
    }, _this.invalidForm = function () {
      var _this$state = _this.state,
          password = _this$state.password,
          cpassword = _this$state.cpassword;

      return !password || !cpassword || password !== cpassword;
    }, _this.handleReset = function (e) {
      e.preventDefault();
      var password = _this.state.password;

      _this.props.resetPassword({ password: password, token: _this.state.token }).then(function () {
        _this.setState({ success: true });
        (0, _logout2.default)();
      }).catch(function (error) {
        return _this.setState({ error: error.error });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ResetPassword, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var token = this.props.params.token;
      this.props.getResetToken(token).then(function (res) {
        return _this2.setState({ token: res._id });
      }).catch(function (error) {
        return _this2.setState({ error: error.message || 'Invalid token' });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var form = _react2.default.createElement(
        'div',
        null,
        this.state.errorMessage && _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger' },
          this.state.errorMessage
        ),
        _react2.default.createElement(
          'form',
          { acceptCharset: 'UTF-8', role: 'form', onSubmit: this.handleReset },
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement('input', { className: 'form-control', onChange: this.handlePasswordChange, placeholder: 'New password', name: 'password', type: 'password', required: true })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement('input', { className: 'form-control', onChange: this.handleConfirmPasswordChange, placeholder: 'Confirm new password', name: 'cpassword', type: 'password', required: true })
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-lg btn-primary btn-block radius-primary bk_color_trans', disabled: this.invalidForm(), type: 'submit' },
              ' Reset Password'
            )
          )
        )
      );

      var errorAlert = _react2.default.createElement(
        _reactBootstrap.Alert,
        { bsStyle: 'danger' },
        this.state.error
      );

      var successAlert = _react2.default.createElement(
        _reactBootstrap.Alert,
        { bsStyle: 'success' },
        _react2.default.createElement(
          'p',
          null,
          'Password has successfully been reset'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: 'login' },
          'Login here'
        )
      );

      var component = void 0;

      if (this.state.success) {
        component = successAlert;
      } else if (this.state.error) {
        component = errorAlert;
      } else {
        component = form;
      }

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
                component
              )
            )
          )
        )
      );
    }
  }]);
  return ResetPassword;
}(_react.Component), _class.propTypes = {
  resetPassword: _propTypes2.default.func.isRequired,
  getResetToken: _propTypes2.default.func.isRequired,
  params: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = (0, _reactRedux.connect)(null, { getResetToken: _userActions.getResetToken, resetPassword: _userActions.resetPassword })(ResetPassword);
module.exports = exports['default'];