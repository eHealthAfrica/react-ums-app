const BASE_URL = API_HOST;

const config = {
  LOGGED_IN_USER_URL: `${BASE_URL}/ums/users/me`,
  AUTH_URL: `${BASE_URL}/ums/auth`,
  LOCATION_URL: `${BASE_URL}/ums/locations`,
  USERS_URL: `${BASE_URL}/ums/users/all`,
  ROLES_URL: `${BASE_URL}/ums/roles`,
  USER_URL: `${BASE_URL}/ums/users/get`,
  CREATE_USER_URL: `${BASE_URL}/ums/users/new`,
  EDIT_USER_URL: `${BASE_URL}/ums/users/edit`,
  CHANGE_PASSWORD_URL: `${BASE_URL}/ums/users/update-password`,
  CHANGE_USER_PASSWORD_URL: `${BASE_URL}/ums/users/update-password-admin`,
  DEFAULT_ROLES: ['View Dashboard'],
  REQUEST_PASSWORD_RESET_URL: `${BASE_URL}/ums/users/request-password-reset`,
  GET_RESET_TOKEN_URL: `${BASE_URL}/ums/users/reset-token`,
  RESET_PASSWORD_URL: `${BASE_URL}/ums/users/reset-password`,
};

export default config;
