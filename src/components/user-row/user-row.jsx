import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class UserRow extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    serialNumber: PropTypes.number.isRequired,
    handleEditUserClicked: PropTypes.func.isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleResetPasswordClicked: PropTypes.func.isRequired,
  }

  displayStatus = disabled =>
    <span><i className={`icon icon-circle ${disabled ? 'cred' : 'cgreen'}`} />{disabled ? 'Disabled' : 'Enabled'}</span>;

  displayAction = (user) => {
    const status = user.disabled ? 'Enable' : 'Disable';
    const { handleEditUserClicked, handleChangeStatus, handleResetPasswordClicked } = this.props;
    return (
      <DropdownButton title="Actions" id="bg-vertical-dropdown-2">
        <MenuItem onClick={() => handleEditUserClicked(user)}>Edit</MenuItem>
        <MenuItem onClick={() => handleChangeStatus({ status: user.disabled, user: user.name })}>
          {status}
        </MenuItem>
        <MenuItem onClick={() => handleResetPasswordClicked(user)}>Reset Password</MenuItem>
      </DropdownButton>
    );
  }

  render() {
    const { user, serialNumber } = this.props;
    const { name, roles, disabled, firstName = '', lastName = '' } = user;
    const [state = ''] = user.accessLevel || [];

    return (
      <tr>
        <td><strong>{serialNumber}</strong></td>
        <td><strong className="name">{name}</strong>{`${firstName} ${lastName}`}</td>
        <td className="table-text">{state === 'all' ? 'All' : state}</td>
        {/*
          The user role cell's content is a placeholder.
          The actual roles values would be displayed as development progresses
        */}
        <td className="user-roles">{roles}</td>
        <td className="user-status table-text">{this.displayStatus(disabled)}</td>
        <td className="user-actions">{this.displayAction(user)}</td>
      </tr>
    );
  }
}

export default UserRow;
