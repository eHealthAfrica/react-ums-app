import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE,
  ROLES_REQUEST, ROLES_SUCCESS, ROLES_FAILURE,
  SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS, SINGLE_USER_FAILURE,
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE,
  EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILURE,
  CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
  REQUEST_PASSWORD_RESET_REQUEST, REQUEST_PASSWORD_RESET_SUCCESS, REQUEST_PASSWORD_RESET_FAILURE,
  GET_RESET_TOKEN_REQUEST, GET_RESET_TOKEN_SUCCESS, GET_RESET_TOKEN_FAILURE,
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
  CHANGE_USER_PASSWORD_REQUEST, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILURE } from '../constants';
import config from '../../config';

export function getUsers() {
  return {
    types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
    promise: client => client.get(config.USERS_URL),
  };
}

export function getRoles() {
  return {
    types: [ROLES_REQUEST, ROLES_SUCCESS, ROLES_FAILURE],
    promise: client => client.get(config.ROLES_URL),
  };
}

export function getUser(id) {
  return {
    types: [SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS, SINGLE_USER_FAILURE],
    promise: client => client.get(`${config.USER_URL}/${id}`),
  };
}

export function createUser(params) {
  return {
    types: [CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE],
    promise: client => client.post(config.CREATE_USER_URL, 'application/x-www-form-urlencoded', {
      data: params,
    }),
  };
}

export function editUser(id, params) {
  return {
    types: [EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILURE],
    promise: client => client.post(`${config.EDIT_USER_URL}/${id}`, 'application/x-www-form-urlencoded', {
      data: params,
    }),
  };
}

export function changePassword(params) {
  return {
    types: [CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE],
    promise: client => client.post(`${config.CHANGE_PASSWORD_URL}`, 'application/x-www-form-urlencoded', {
      data: params,
    }),
  };
}

export function requestPasswordReset(params) {
  return {
    types: [REQUEST_PASSWORD_RESET_REQUEST, REQUEST_PASSWORD_RESET_SUCCESS,
      REQUEST_PASSWORD_RESET_FAILURE],
    promise: client => client.post(`${config.REQUEST_PASSWORD_RESET_URL}`, 'application/x-www-form-urlencoded', {
      data: params,
    }),
  };
}

export function getResetToken(id) {
  return {
    types: [GET_RESET_TOKEN_REQUEST, GET_RESET_TOKEN_SUCCESS, GET_RESET_TOKEN_FAILURE],
    promise: client => client.get(`${config.GET_RESET_TOKEN_URL}/${id}`),
  };
}

export function resetPassword(params) {
  return {
    types: [RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE],
    promise: client => client.post(`${config.RESET_PASSWORD_URL}`, 'application/x-www-form-urlencoded', {
      data: params,
    }),
  };
}

export function changeUserPassword(params) {
  return {
    types: [CHANGE_USER_PASSWORD_REQUEST,
      CHANGE_USER_PASSWORD_SUCCESS,
      CHANGE_USER_PASSWORD_FAILURE],
    promise: client => client.post(`${config.CHANGE_USER_PASSWORD_URL}`,
      'application/x-www-form-urlencoded', {
        data: params,
      }),
  };
}
