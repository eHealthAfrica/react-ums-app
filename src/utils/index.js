import intersection from 'lodash/intersection';

export const isUserAuthorized = (requiredRoles, user) => {
  if (user) {
    return intersection(requiredRoles, user.roles).length > 0;
  }
  return false;
};

export const mapStateToUser = state => ({ user: state.users.loggedInUser });

export const mapValuesInObject = (object) => {
  const map = Object.keys(object).map(key => ({ key, value: object[key] })).reduce((prev, curr) => {
    const accumulator = prev;
    accumulator[curr.value] = curr.key;
    return accumulator;
  }, {});
  return val => map[val] || val;
};
