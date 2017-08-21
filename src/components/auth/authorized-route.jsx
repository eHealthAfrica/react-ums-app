import React from 'react';
import { NotAuthorized } from 'components';
import { isUserAuthorized } from 'utils';

export default (WrappedComponent, authorizedRoles, user) => {
  function Authorized(props) {
    if (isUserAuthorized(authorizedRoles, user)) {
      return <WrappedComponent {...props} />;
    }
    return <NotAuthorized />;
  }
  return Authorized;
};
