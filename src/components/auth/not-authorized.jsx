import React from 'react';
import { ErrorPage } from 'components';

const NotAuthorized = () => (
  <ErrorPage params={{ type: 'restricted' }} />
);

export default NotAuthorized;
