

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

const _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

const _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

const _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

const _createClass2 = require('babel-runtime/helpers/createClass');

const _createClass3 = _interopRequireDefault(_createClass2);

const _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

const _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

const _inherits2 = require('babel-runtime/helpers/inherits');

const _inherits3 = _interopRequireDefault(_inherits2);

let _class,
  _temp; /* eslint-disable class-methods-use-this */


const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _reactBootstrap = require('react-bootstrap');

const _reactRedux = require('react-redux');

const _reactReduxToastr = require('react-redux-toastr');

const _userActions = require('redux/actions/userActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ResetUserPassword = (_temp = _class = (function (_Component) {
  (0, _inherits3.default)(ResetUserPassword, _Component);

  function ResetUserPassword(props) {
    (0, _classCallCheck3.default)(this, ResetUserPassword);

    const _this = (0, _possibleConstructorReturn3.default)(this, (ResetUserPassword.__proto__ || (0, _getPrototypeOf2.default)(ResetUserPassword)).call(this, props));

    _this.reset = function () {
      _this.setState(_this.getDefaultState());
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };

    _this.open = function () {
      _this.setState({ showModal: true });
    };

    _this.close = function () {
      _this.reset();
    };

    _this.handleNewPasswordChange = function (event) {
      let password = event.target.value;
      password = password.trim();
      if (password !== _this.state.cpassword) {
        _this.setState({ errorMessage: 'Password does not match.' });
      } else {
        _this.setState({ errorMessage: '' });
      }
      _this.setState({ password });
    };

    _this.handleConfirmPasswordChange = function (event) {
      let cpassword = event.target.value;
      cpassword = cpassword.trim();
      if (cpassword !== _this.state.password) {
        _this.setState({ errorMessage: 'Password does not match.' });
      } else {
        _this.setState({ errorMessage: '' });
      }
      _this.setState({ cpassword });
    };

    _this.handleChangePasswordClick = function () {
      let _this$state = _this.state,
        name = _this$state.user.name,
        password = _this$state.password;

      _this.props.changeUserPassword({ id: name, password }).then(() => _reactReduxToastr.toastr.success('Password changed successfully', { timeOut: 3000 })).catch(res => _reactReduxToastr.toastr.error(`Failed changing password ${res.error}`, { timeOut: 3000 })).then(() => _this.close());
    };

    _this.invalidForm = function () {
      let _this$state2 = _this.state,
        password = _this$state2.password,
        cpassword = _this$state2.cpassword;

      return !password || !cpassword || password !== cpassword;
    };

    _this.state = _this.getDefaultState();
    return _this;
  }

  (0, _createClass3.default)(ResetUserPassword, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      const _this2 = this;

      if (nextProps.user && nextProps.user !== this.props.user) {
        this.setState({
          user: nextProps.user,
        }, () => {
          _this2.open();
        });
      }
    },
  }, {
    key: 'getDefaultState',
    value: function getDefaultState() {
      return {
        showModal: false,
        password: '',
        cpassword: '',
        errorMessage: '',
        user: {},
      };
    },
  }, {
    key: 'render',
    value: function render() {
      let _state = this.state,
        errorMessage = _state.errorMessage,
        showModal = _state.showModal,
        _state$user$name = _state.user.name,
        name = _state$user$name === undefined ? '' : _state$user$name;


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
              'Change Users Password',
            ),
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            errorMessage && _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'danger' },
              errorMessage,
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Email',
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, defaultValue: name }),
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'New Password',
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', onChange: this.handleNewPasswordChange }),
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Confirm New Password',
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', onChange: this.handleConfirmPasswordChange }),
            ),
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
                'Close',
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'radius-secondary', disabled: this.invalidForm(), bsStyle: 'success', onClick: this.handleChangePasswordClick },
                'Change Password',
              ),
            ),
          ),
        ),
      );
    },
  }]);
  return ResetUserPassword;
}(_react.Component)), _class.propTypes = {
  user: _propTypes2.default.object,
  onClose: _propTypes2.default.func,
  changeUserPassword: _propTypes2.default.func.isRequired,
}, _temp);
exports.default = (0, _reactRedux.connect)(null, { changeUserPassword: _userActions.changeUserPassword })(ResetUserPassword);
module.exports = exports.default;
