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

var _class, _temp2; /* eslint-disable react/no-unused-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _reactReduxToastr = require('react-redux-toastr');

var _userActions = require('redux/actions/userActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChangePassword = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ChangePassword, _Component);

  function ChangePassword() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChangePassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ChangePassword.__proto__ || (0, _getPrototypeOf2.default)(ChangePassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = ChangePassword.getDefaultState(), _this.handleOldPasswordChange = function (event) {
      var value = event.target.value;
      value = value.trim();
      if (value) {
        _this.setState({ oldPassword: value });
      }
    }, _this.handleNewPasswordChange = function (event) {
      var value = event.target.value;
      value = value.trim();
      if (value) {
        _this.setState({ newPassword: value });
      }
    }, _this.handleConfirmPasswordChange = function (event) {
      var value = event.target.value;
      value = value.trim();
      if (value !== _this.state.newPassword) {
        _this.setState({ errorMessage: 'Password do not match' });
      } else {
        _this.setState({ errorMessage: '', confirmPassword: value });
      }
    }, _this.handleChangePasswordClick = function () {
      var _this$state = _this.state,
          newPassword = _this$state.newPassword,
          oldPassword = _this$state.oldPassword;


      _this.props.changePassword({ name: _this.props.userName, newPassword: newPassword, oldPassword: oldPassword }).then(function () {
        return _reactReduxToastr.toastr.success('Password changed successfully', { timeOut: 3000 });
      }).catch(function (res) {
        return _reactReduxToastr.toastr.error('Failed changing password ' + res.error, { timeOut: 3000 });
      }).then(function () {
        return _this.close();
      });
    }, _this.reset = function () {
      _this.setState(ChangePassword.getDefaultState());
      _this.props.onClose();
    }, _this.open = function () {
      _this.setState({ showModal: true });
    }, _this.close = function () {
      _this.reset();
    }, _this.isValid = function () {
      return _this.state.oldPassword && _this.state.newPassword && _this.state.confirmPassword;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ChangePassword, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open) {
        this.open();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errorMessage = _state.errorMessage,
          showModal = _state.showModal;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: showModal, onHide: this.close },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Change Password'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            errorMessage && _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'danger' },
              errorMessage
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Old Password'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', onChange: this.handleOldPasswordChange })
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'New Password'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', onChange: this.handleNewPasswordChange })
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Confirm New Password'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', onChange: this.handleConfirmPasswordChange })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              'div',
              { className: 'general' },
              _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'radius-secondary', bsStyle: 'default', onClick: this.close },
                'Close'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'radius-secondary', disabled: !!errorMessage || !this.isValid(), bsStyle: 'success', onClick: this.handleChangePasswordClick },
                'Change Password'
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getDefaultState',
    value: function getDefaultState() {
      return {
        showModal: false,
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: ''
      };
    }
  }]);
  return ChangePassword;
}(_react.Component), _class.propTypes = {
  onClose: _propTypes2.default.func.isRequired,
  changePassword: _propTypes2.default.func.isRequired,
  userName: _propTypes2.default.string.isRequired,
  open: _propTypes2.default.bool
}, _temp2);


ChangePassword.defaultProps = {
  open: false
};

exports.default = (0, _reactRedux.connect)(null, {
  changePassword: _userActions.changePassword
})(ChangePassword);
module.exports = exports['default'];