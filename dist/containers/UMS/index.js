'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRedux = require('react-redux');

var _reactReduxToastr = require('react-redux-toastr');

var _orderBy = require('lodash/orderBy');

var _orderBy2 = _interopRequireDefault(_orderBy);

var _components = require('components');

var _userActions = require('redux/actions/userActions');

var _locationActions = require('redux/actions/locationActions');

var _locationActions2 = _interopRequireDefault(_locationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./style.scss');

var UMS = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(UMS, _Component);

  function UMS() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UMS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UMS.__proto__ || (0, _getPrototypeOf2.default)(UMS)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      userToEdit: null,
      userToReset: null,
      filterValue: '',
      pageSize: 20,
      currentPage: 0,
      sortBy: null,
      sortOrder: 'asc',
      nameColumn: { asc: false, field: 'name' },
      statusColumn: { asc: false, field: 'disabled' }
    }, _this.getTableData = function () {
      var users = _this.props.users;

      var filterValue = _this.state.filterValue.toLowerCase();
      if (users) {
        var filtered = users.filter(function (_ref2) {
          var name = _ref2.name;
          return ('' + name).toLowerCase().indexOf(filterValue) > -1;
        });
        return (0, _orderBy2.default)(filtered, _this.state.sortBy, _this.state.sortOrder);
      }
      return null;
    }, _this.getColumnCaret = function (column) {
      if (column.field !== _this.state.sortBy) return null;
      var position = column.asc ? 'top' : 'bottom';
      return _react2.default.createElement('i', { className: 'glyphicon glyphicon-triangle-' + position });
    }, _this.handleColumnClick = function (column, _ref3) {
      var _this$setState;

      var asc = _ref3.asc,
          field = _ref3.field;

      var sortOrder = !asc ? 'asc' : 'desc';
      _this.setState((_this$setState = {}, (0, _defineProperty3.default)(_this$setState, column, { asc: !asc, field: field }), (0, _defineProperty3.default)(_this$setState, 'sortBy', field), (0, _defineProperty3.default)(_this$setState, 'sortOrder', sortOrder), (0, _defineProperty3.default)(_this$setState, 'currentPage', 0), _this$setState));
    }, _this.handleFilterValueChange = function (event) {
      _this.setState({ filterValue: event.target.value, currentPage: 0 });
    }, _this.handleCreateUser = function (action, name) {
      _reactReduxToastr.toastr.success('User ' + name + ' ' + action + ' successfully', { timeOut: 3000 });
    }, _this.handleEditUserClicked = function (user) {
      _this.setState({ userToEdit: user });
    }, _this.handleCloseEditUser = function () {
      _this.setState({ userToEdit: null });
    }, _this.handleResetPasswordClicked = function (user) {
      _this.setState({ userToReset: user });
    }, _this.handleCloseResetPassword = function () {
      _this.setState({ userToReset: null });
    }, _this.handleChangeStatus = function (_ref4) {
      var status = _ref4.status,
          user = _ref4.user;

      var action = status ? 'enable' : 'disable';

      _reactReduxToastr.toastr.confirm('Are you sure you want to ' + action + ' user ' + user, {
        onOk: function onOk() {
          _this.props.editUser(user, { disabled: !status }).then(function () {
            _reactReduxToastr.toastr.success('User ' + user + ' ' + action + 'd successfully', { timeOut: 3000 });
            _this.props.getUsers();
          }).catch(function () {
            _reactReduxToastr.toastr.error('Failed ' + action + 'ing user ' + user, { timeOut: 3000 });
          });
        }
      });
    }, _this.handleButtonClick = function (index) {
      _this.setState({ currentPage: index });
    }, _this.createRow = function (user, index) {
      return _react2.default.createElement(_components.UserRow, {
        key: user.name, user: user, serialNumber: index + 1,
        handleEditUserClicked: _this.handleEditUserClicked,
        handleChangeStatus: _this.handleChangeStatus,
        handleResetPasswordClicked: _this.handleResetPasswordClicked
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UMS, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          users = _props.users,
          roles = _props.roles,
          states = _props.states;

      if (!users.length) this.props.getUsers();
      if (!roles.length) this.props.getRoles();
      if (!states.length) this.props.getStates();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          pageSize = _state.pageSize,
          currentPage = _state.currentPage,
          nameColumn = _state.nameColumn,
          statusColumn = _state.statusColumn;

      var tableData = this.getTableData();
      var rows = null;
      var buttons = null;

      if (tableData) {
        var start = currentPage * pageSize;
        var end = pageSize * (currentPage + 1);
        rows = tableData.map(this.createRow).slice(start, end);

        var buttonsCount = Math.ceil(tableData.length / pageSize);
        buttons = [];
        for (var i = 0; i < buttonsCount; i += 1) {
          var active = i === currentPage;
          buttons.push(_react2.default.createElement(_components.PaginationButton, {
            key: i, index: i, active: active,
            handleClick: this.handleButtonClick
          }));
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_components.NewUser, {
          roles: this.props.roles, states: this.props.states, user: this.state.userToEdit, editMode: true,
          onSuccess: this.handleCreateUser, onClose: this.handleCloseEditUser
        }),
        _react2.default.createElement(_components.ResetUserPassword, { user: this.state.userToReset, onClose: this.handleCloseResetPassword }),
        _react2.default.createElement(
          'div',
          { className: 'nopadding-content radius-primary ums-table' },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 3, className: 'ums-col' },
              _react2.default.createElement(
                'div',
                { className: 'search-filter' },
                _react2.default.createElement(
                  'div',
                  { className: 'inner-addon right-addon' },
                  _react2.default.createElement('input', {
                    onChange: this.handleFilterValueChange,
                    value: this.state.filterValue,
                    type: 'text',
                    className: 'form-control radius-secondary',
                    placeholder: 'Filter Here...'
                  })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 7, className: 'ums-col' },
              _react2.default.createElement('div', { className: 'ums-legends' })
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 2, className: 'newUser' },
              _react2.default.createElement(_components.NewUser, {
                roles: this.props.roles,
                states: this.props.states, onSuccess: this.handleCreateUser
              })
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4, className: 'page-count' },
              _react2.default.createElement(
                'p',
                null,
                rows && rows.length ? 'Showing ' + rows[0].props.serialNumber + ' - ' + rows[rows.length - 1].props.serialNumber + ' of ' + tableData.length + ' users' : 'Nothing to display'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ums-panel' },
            _react2.default.createElement(
              'table',
              { className: 'ums-tablo' },
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  { className: 'table-head' },
                  _react2.default.createElement('th', null),
                  _react2.default.createElement(
                    'th',
                    { onClick: function onClick() {
                        return _this2.handleColumnClick('nameColumn', nameColumn);
                      }, className: 'clickable' },
                    'Users ',
                    this.getColumnCaret(nameColumn)
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Admin Level'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Permissions'
                  ),
                  _react2.default.createElement(
                    'th',
                    { onClick: function onClick() {
                        return _this2.handleColumnClick('statusColumn', statusColumn);
                      }, className: 'clickable' },
                    'Status ',
                    this.getColumnCaret(statusColumn)
                  ),
                  _react2.default.createElement(
                    'th',
                    { className: 'limitwidth' },
                    'Actions'
                  )
                ),
                rows
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-right' },
              _react2.default.createElement(
                'nav',
                { 'aria-label': 'Page navigation', id: 'report_pagination' },
                _react2.default.createElement(
                  'ul',
                  { className: 'ums-page pagination' },
                  buttons
                )
              )
            )
          )
        )
      );
    }
  }]);
  return UMS;
}(_react.Component), _class.propTypes = {
  users: _propTypes2.default.array.isRequired,
  roles: _propTypes2.default.array.isRequired,
  states: _propTypes2.default.array.isRequired,
  getUsers: _propTypes2.default.func.isRequired,
  getRoles: _propTypes2.default.func.isRequired,
  getStates: _propTypes2.default.func.isRequired,
  editUser: _propTypes2.default.func.isRequired
}, _temp2);


var mapStateToProps = function mapStateToProps(_ref5) {
  var _ref5$users = _ref5.users,
      users = _ref5$users.users,
      roles = _ref5$users.roles,
      locations = _ref5.locations;
  return { users: users, roles: roles.map(function (role) {
      return role.id;
    }), states: locations };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getUsers: _userActions.getUsers,
  getRoles: _userActions.getRoles,
  getStates: _locationActions2.default,
  editUser: _userActions.editUser
})(UMS);
module.exports = exports['default'];