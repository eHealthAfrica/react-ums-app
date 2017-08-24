'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getRoles = getRoles;
exports.getUser = getUser;
exports.createUser = createUser;
exports.editUser = editUser;
exports.changePassword = changePassword;
exports.requestPasswordReset = requestPasswordReset;
exports.getResetToken = getResetToken;
exports.resetPassword = resetPassword;
exports.changeUserPassword = changeUserPassword;

var _constants = require('../constants');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUsers() {
  return {
    types: [_constants.USERS_REQUEST, _constants.USERS_SUCCESS, _constants.USERS_FAILURE],
    promise: function promise(client) {
      return client.get(_config2.default.USERS_URL);
    }
  };
}

function getRoles() {
  return {
    types: [_constants.ROLES_REQUEST, _constants.ROLES_SUCCESS, _constants.ROLES_FAILURE],
    promise: function promise(client) {
      return client.get(_config2.default.ROLES_URL);
    }
  };
}

function getUser(id) {
  return {
    types: [_constants.SINGLE_USER_REQUEST, _constants.SINGLE_USER_SUCCESS, _constants.SINGLE_USER_FAILURE],
    promise: function promise(client) {
      return client.get(_config2.default.USER_URL + '/' + id);
    }
  };
}

function createUser(params) {
  return {
    types: [_constants.CREATE_USER_REQUEST, _constants.CREATE_USER_SUCCESS, _constants.CREATE_USER_FAILURE],
    promise: function promise(client) {
      return client.post(_config2.default.CREATE_USER_URL, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}

function editUser(id, params) {
  return {
    types: [_constants.EDIT_USER_REQUEST, _constants.EDIT_USER_SUCCESS, _constants.EDIT_USER_FAILURE],
    promise: function promise(client) {
      return client.post(_config2.default.EDIT_USER_URL + '/' + id, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}

function changePassword(params) {
  return {
    types: [_constants.CHANGE_PASSWORD_REQUEST, _constants.CHANGE_PASSWORD_SUCCESS, _constants.CHANGE_PASSWORD_FAILURE],
    promise: function promise(client) {
      return client.post('' + _config2.default.CHANGE_PASSWORD_URL, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}

function requestPasswordReset(params) {
  return {
    types: [_constants.REQUEST_PASSWORD_RESET_REQUEST, _constants.REQUEST_PASSWORD_RESET_SUCCESS, _constants.REQUEST_PASSWORD_RESET_FAILURE],
    promise: function promise(client) {
      return client.post('' + _config2.default.REQUEST_PASSWORD_RESET_URL, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}

function getResetToken(id) {
  return {
    types: [_constants.GET_RESET_TOKEN_REQUEST, _constants.GET_RESET_TOKEN_SUCCESS, _constants.GET_RESET_TOKEN_FAILURE],
    promise: function promise(client) {
      return client.get(_config2.default.GET_RESET_TOKEN_URL + '/' + id);
    }
  };
}

function resetPassword(params) {
  return {
    types: [_constants.RESET_PASSWORD_REQUEST, _constants.RESET_PASSWORD_SUCCESS, _constants.RESET_PASSWORD_FAILURE],
    promise: function promise(client) {
      return client.post('' + _config2.default.RESET_PASSWORD_URL, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}

function changeUserPassword(params) {
  return {
    types: [_constants.CHANGE_USER_PASSWORD_REQUEST, _constants.CHANGE_USER_PASSWORD_SUCCESS, _constants.CHANGE_USER_PASSWORD_FAILURE],
    promise: function promise(client) {
      return client.post('' + _config2.default.CHANGE_USER_PASSWORD_URL, 'application/x-www-form-urlencoded', {
        data: params
      });
    }
  };
}