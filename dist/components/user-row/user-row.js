'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRow = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(UserRow, _Component);

  function UserRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserRow.__proto__ || (0, _getPrototypeOf2.default)(UserRow)).call.apply(_ref, [this].concat(args))), _this), _this.displayStatus = function (disabled) {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'icon icon-circle ' + (disabled ? 'cred' : 'cgreen') }),
        disabled ? 'Disabled' : 'Enabled'
      );
    }, _this.displayAction = function (user) {
      var status = user.disabled ? 'Enable' : 'Disable';
      var _this$props = _this.props,
          handleEditUserClicked = _this$props.handleEditUserClicked,
          handleChangeStatus = _this$props.handleChangeStatus,
          handleResetPasswordClicked = _this$props.handleResetPasswordClicked;

      return _react2.default.createElement(
        _reactBootstrap.DropdownButton,
        { title: 'Actions', id: 'bg-vertical-dropdown-2' },
        _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { onClick: function onClick() {
              return handleEditUserClicked(user);
            } },
          'Edit'
        ),
        _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { onClick: function onClick() {
              return handleChangeStatus({ status: user.disabled, user: user.name });
            } },
          status
        ),
        _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { onClick: function onClick() {
              return handleResetPasswordClicked(user);
            } },
          'Reset Password'
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          serialNumber = _props.serialNumber;
      var name = user.name,
          roles = user.roles,
          disabled = user.disabled,
          _user$firstName = user.firstName,
          firstName = _user$firstName === undefined ? '' : _user$firstName,
          _user$lastName = user.lastName,
          lastName = _user$lastName === undefined ? '' : _user$lastName;

      var _ref2 = user.accessLevel || [],
          _ref3 = (0, _slicedToArray3.default)(_ref2, 1),
          _ref3$ = _ref3[0],
          state = _ref3$ === undefined ? '' : _ref3$;

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'strong',
            null,
            serialNumber
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'strong',
            { className: 'name' },
            name
          ),
          firstName + ' ' + lastName
        ),
        _react2.default.createElement(
          'td',
          { className: 'table-text' },
          state === 'all' ? 'All' : state
        ),
        _react2.default.createElement(
          'td',
          { className: 'user-roles' },
          roles
        ),
        _react2.default.createElement(
          'td',
          { className: 'user-status table-text' },
          this.displayStatus(disabled)
        ),
        _react2.default.createElement(
          'td',
          { className: 'user-actions' },
          this.displayAction(user)
        )
      );
    }
  }]);
  return UserRow;
}(_react.Component), _class.propTypes = {
  user: _propTypes2.default.object.isRequired,
  serialNumber: _propTypes2.default.number.isRequired,
  handleEditUserClicked: _propTypes2.default.func.isRequired,
  handleChangeStatus: _propTypes2.default.func.isRequired,
  handleResetPasswordClicked: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = UserRow;
module.exports = exports['default'];