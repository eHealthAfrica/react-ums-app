'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactReduxToastr = require('react-redux-toastr');

var _reactReduxToastr2 = _interopRequireDefault(_reactReduxToastr);

var _containers = require('./containers');

var _components = require('./components');

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _create2.default)();

var UmsApp = function UmsApp(props) {
  var user = props.user,
      authorizedRole = props.authorizedRole;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/', component: (0, _components.Authorized)(_containers.App, authorizedRole, user) },
          _react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.UMS }),
          _react2.default.createElement(_reactRouter.Route, { path: 'error/:type', component: _components.ErrorPage }),
          _react2.default.createElement(_reactRouter.Route, { path: 'request-reset', component: _containers.RequestPasswordReset }),
          _react2.default.createElement(_reactRouter.Route, { path: 'reset-password/:token', component: _containers.ResetPassword }),
          _react2.default.createElement(_reactRouter.Route, { path: '*', component: _components.ErrorPage })
        )
      ),
      _react2.default.createElement(_reactReduxToastr2.default, { preventDuplicates: true })
    )
  );
};

UmsApp.propTypes = {
  user: _propTypes2.default.object.isRequired,
  authorizedRole: _propTypes2.default.array.isRequired
};

exports.default = UmsApp;
var init = exports.init = function init(user, role, authToken) {
  if (_reactCookie2.default.load('accessToken') === undefined) {
    _reactCookie2.default.save('accessToken', authToken, { path: '/' });
  }
  return _react2.default.createElement(UmsApp, { user: user, authorizedRole: role });
};