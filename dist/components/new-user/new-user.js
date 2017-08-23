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

var _class, _temp; /* eslint-disable class-methods-use-this */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _validation = require('utils/validation');

var _validation2 = _interopRequireDefault(_validation);

var _userActions = require('redux/actions/userActions');

var _components = require('components');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _index = require('utils/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewUser = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(NewUser, _Component);

  function NewUser(props) {
    (0, _classCallCheck3.default)(this, NewUser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewUser.__proto__ || (0, _getPrototypeOf2.default)(NewUser)).call(this, props));

    _this.handleEmailBlur = function (event) {
      var email = event.target.value;
      email = email.trim();
      if (!(0, _validation2.default)(email)) {
        _this.setState({ errorMessage: 'Invalid email field' });
      } else {
        _this.setState({ errorMessage: '', email: email });
        _this.props.getUser(email.toLowerCase()).then(function () {
          _this.setState({ userExists: true });
        }).catch(function () {
          _this.setState({ userExists: false });
        });
      }
    };

    _this.handleFirstNameBlur = function (event) {
      var firstName = event.target.value;
      firstName = firstName.trim();
      if (firstName) {
        _this.setState({ firstName: firstName });
      }
    };

    _this.handleLastNameBlur = function (event) {
      var lastName = event.target.value;
      lastName = lastName.trim();
      if (lastName) {
        _this.setState({ lastName: lastName });
      }
    };

    _this.handlePasswordBlur = function (event) {
      var password = event.target.value;
      password = password.trim();
      if (password) {
        _this.setState({ password: password });
      }
    };

    _this.handleGeneratePasswordChange = function (event) {
      _this.password.value = '';
      _this.setState({ generate: event.target.checked, password: '' });
    };

    _this.handleStatusChange = function (event) {
      var disabled = event.target.value === 'disabled';
      _this.setState({ disabled: disabled });
    };

    _this.handleSaveUserClick = function () {
      var accessLevel = [_this.state.selectedState];
      var _this$state = _this.state,
          name = _this$state.email,
          disabled = _this$state.disabled,
          password = _this$state.password,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName;
      var roles = _this.state.selectedRoles;

      var mapValue = (0, _index.mapValuesInObject)(_config2.default.ROLES_MAPPER);
      roles = roles.map(mapValue);
      var user = void 0;
      var api = void 0;
      var action = void 0;
      if (_this.props.editMode) {
        user = { roles: roles, disabled: disabled, firstName: firstName, lastName: lastName, accessLevel: accessLevel };
        api = _this.props.editUser.bind(null, name.toLowerCase());
        action = 'edited';
      } else {
        user = { name: name.toLowerCase(),
          roles: roles,
          disabled: disabled,
          password: password,
          firstName: firstName,
          lastName: lastName,
          accessLevel: accessLevel };
        api = _this.props.createUser.bind(null);
        action = 'created';
      }
      api(user).then(function () {
        _this.setState({ createUserError: false });
        _this.props.onSuccess(action, name);
        _this.close();
      }).catch(function () {
        _this.setState({ createUserError: true });
      });
    };

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

    _this.handleRolesChange = function (selectedRoles) {
      _this.setState({ selectedRoles: selectedRoles });
    };

    _this.handleStateChange = function (event) {
      _this.setState({ selectedState: event.target.value });
    };

    _this.isValid = function () {
      if (_this.state.generate) {
        return _this.state.email && _this.state.firstName && _this.state.lastName && _this.state.selectedState;
      }
      return _this.state.email && _this.state.password && _this.state.firstName && _this.state.lastName && _this.state.selectedState;
    };

    _this.state = _this.getDefaultState();
    return _this;
  }

  (0, _createClass3.default)(NewUser, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.user && nextProps.user !== this.props.user) {
        this.setState({
          selectedRoles: nextProps.user.roles.map(function (role) {
            return _config2.default.ROLES_MAPPER[role] || role;
          }),
          selectedState: nextProps.user.accessLevel && nextProps.user.accessLevel.length ? nextProps.user.accessLevel[0] : '',
          email: nextProps.user.name,
          disabled: nextProps.user.disabled,
          firstName: nextProps.user.firstName,
          lastName: nextProps.user.lastName
        }, function () {
          _this2.open();
        });
      }
    }
  }, {
    key: 'getDefaultState',
    value: function getDefaultState() {
      return {
        showModal: false,
        selectedRoles: _config2.default.DEFAULT_ROLES.slice(),
        selectedState: '',
        email: '',
        disabled: false,
        errorMessage: '',
        userExists: false,
        createUserError: false,
        password: '',
        generate: true,
        firstName: '',
        lastName: ''
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          roles = _props.roles,
          editMode = _props.editMode,
          states = _props.states;
      var _state = this.state,
          errorMessage = _state.errorMessage,
          showModal = _state.showModal,
          email = _state.email,
          selectedRoles = _state.selectedRoles,
          selectedState = _state.selectedState,
          disabled = _state.disabled,
          userExists = _state.userExists,
          createUserError = _state.createUserError,
          generate = _state.generate,
          firstName = _state.firstName,
          lastName = _state.lastName;

      var otherOptions = [{ key: 'all', value: 'all', display: 'All' }, { key: 'select', value: '', display: 'Select State' }];
      var defaultRoles = this.getDefaultState().selectedRoles;
      var stateOptions = states.map(function (state) {
        return _react2.default.createElement(
          'option',
          { key: state.name, value: state.name },
          state.name
        );
      });
      otherOptions.forEach(function (item) {
        return stateOptions.unshift(_react2.default.createElement(
          'option',
          { key: item.key, value: item.value },
          item.display
        ));
      });

      var errorText = void 0;
      if (errorMessage) errorText = errorMessage;else if (userExists) errorText = 'User already exists';else if (createUserError) errorText = 'Error Creating User';else errorText = '';
      var title = editMode ? 'Edit User' : 'New User';

      return _react2.default.createElement(
        'div',
        null,
        !editMode && _react2.default.createElement(
          _reactBootstrap.Button,
          { className: 'radius-secondary pull-right', onClick: this.open },
          'Create New User'
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: showModal, onHide: this.close },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              title
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            errorText && _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'danger' },
              errorText
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Email'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', maxLength: 50, disabled: editMode, defaultValue: email, onBlur: this.handleEmailBlur })
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'First Name'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', maxLength: 20, defaultValue: firstName, onBlur: this.handleFirstNameBlur })
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Last Name'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', maxLength: 20, defaultValue: lastName, onBlur: this.handleLastNameBlur })
            ),
            !editMode && _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Password'
              ),
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text', inputRef: function inputRef(ref) {
                  _this3.password = ref;
                },
                disabled: generate, onBlur: this.handlePasswordBlur
              }),
              _react2.default.createElement(
                _reactBootstrap.Checkbox,
                {
                  inline: true,
                  checked: generate,
                  onChange: this.handleGeneratePasswordChange
                },
                'Generate Password?'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 12 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formControlsSelect' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Admin Level'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    { defaultValue: selectedState && selectedState, componentClass: 'select', placeholder: 'select', onChange: this.handleStateChange },
                    stateOptions
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 12 },
                _react2.default.createElement(_components.SimpleCheckBoxes, {
                  items: roles, name: 'Permissions', disabledItems: defaultRoles,
                  inline: false, selected: selectedRoles,
                  onChange: this.handleRolesChange
                })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 12 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formControlsSelect' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Status'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    { defaultValue: disabled && 'disabled', componentClass: 'select', placeholder: 'select', onChange: this.handleStatusChange },
                    _react2.default.createElement(
                      'option',
                      { value: 'enabled' },
                      'Enabled'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'disabled' },
                      'Disabled'
                    )
                  )
                )
              )
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
                { className: 'radius-secondary', disabled: !!errorText || !this.isValid(), bsStyle: 'success', onClick: this.handleSaveUserClick },
                ' ',
                editMode ? 'Update' : 'Create',
                ' User'
              )
            )
          )
        )
      );
    }
  }]);
  return NewUser;
}(_react.Component), _class.propTypes = {
  roles: _propTypes2.default.array.isRequired,
  states: _propTypes2.default.array.isRequired,
  user: _propTypes2.default.object,
  editMode: _propTypes2.default.bool.isRequired,
  getUser: _propTypes2.default.func.isRequired,
  createUser: _propTypes2.default.func.isRequired,
  editUser: _propTypes2.default.func.isRequired,
  onSuccess: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func
}, _class.defaultProps = {
  editMode: false,
  user: {},
  states: [],
  roles: []
}, _temp);
exports.default = (0, _reactRedux.connect)(null, { getUser: _userActions.getUser, createUser: _userActions.createUser, editUser: _userActions.editUser })(NewUser);
module.exports = exports['default'];