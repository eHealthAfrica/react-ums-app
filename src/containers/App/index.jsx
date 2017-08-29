import React from 'react';
import PropTypes from 'prop-types';

require('react-redux-toastr/src/styles/index.scss');
require('./style.scss');

const App = (props) => {
  const { children } = props;
  return (
    <div id="wrapper">
      <div id="page-content-wrapper">
        <div className="vertical-offset-50">
          {children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
