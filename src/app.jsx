import React from 'react';
import PropTypes from 'prop-types';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { App, UMS, RequestPasswordReset, ResetPassword } from './containers';
import { Authorized, ErrorPage } from './components';
import createStore from './redux/create';

const store = createStore();

const UmsApp = (props) => {
  const { user, authorizedRole } = props;
  return (
    <Provider store={store}>
      <div>
        <Router history={hashHistory}>
          <Route path="/user-management" component={Authorized(App, authorizedRole, user)}>
            <IndexRoute component={UMS} />
            <Route path="error/:type" component={ErrorPage} />
            <Route path="request-reset" component={RequestPasswordReset} />
            <Route path="reset-password/:token" component={ResetPassword} />
            <Route path="*" component={ErrorPage} />
          </Route>
        </Router>
        <ReduxToastr preventDuplicates />
      </div>
    </Provider>
  );
};

UmsApp.propTypes = {
  user: PropTypes.object.isRequired,
  authorizedRole: PropTypes.array.isRequired,
};

export default UmsApp;

export function init(user, authorizedRole) {
  return <UmsApp user={user} authorizedRole={authorizedRole} />;
}
