import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isUserAuthorized, mapStateToUser } from '../../utils';

const RoleAwareComponent = (props) => {
  if (isUserAuthorized(props.authorize, props.user)) return props.children;
  return null;
};

RoleAwareComponent.propTypes = {
  user: PropTypes.object.isRequired,
  authorize: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
};

export default connect(mapStateToUser)(RoleAwareComponent);
