'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URL = API_HOST;

var config = {
  LOGGED_IN_USER_URL: BASE_URL + 'users/me',
  AUTH_URL: BASE_URL + 'auth',
  LOCATION_URL: BASE_URL + 'locations',
  USERS_URL: BASE_URL + 'users/all',
  ROLES_URL: BASE_URL + 'roles',
  USER_URL: BASE_URL + 'users/get',
  CREATE_USER_URL: BASE_URL + 'users/new',
  EDIT_USER_URL: BASE_URL + 'users/edit',
  CHANGE_PASSWORD_URL: BASE_URL + 'users/update-password',
  CHANGE_USER_PASSWORD_URL: BASE_URL + 'users/update-password-admin',
  DEFAULT_ROLES: ['View Dashboard'],
  REQUEST_PASSWORD_RESET_URL: BASE_URL + 'users/request-password-reset',
  GET_RESET_TOKEN_URL: BASE_URL + 'users/reset-token',
  RESET_PASSWORD_URL: BASE_URL + 'users/reset-password'
};

exports.default = config;
module.exports = exports['default'];