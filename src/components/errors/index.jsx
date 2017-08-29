import React from 'react';
import PropTypes from 'prop-types';
import errors from './error-types';

const ErrorPage = ({ params }) => {
  const { type, showHomeLink } = params;
  const error = errors[type] || errors.notFound;
  const { title, message, image } = error;

  const displayHomeLink = (showHomeLink === undefined) || showHomeLink;

  return (
    <div className="vertical-offset-50">
      <div className="unauthorized">
        {image}
        <h1>{title}</h1>
        <p>{message}</p>
        { displayHomeLink && <p><a href="/"> Return to Home Page.</a></p> }
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string,
    showHomeLink: PropTypes.bool,
  }),
};

export default ErrorPage;
