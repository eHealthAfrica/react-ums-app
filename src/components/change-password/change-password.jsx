/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import { toastr } from 'react-redux-toastr';
import { changePassword } from 'redux/actions/userActions';

class ChangePassword extends Component {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    open: PropTypes.bool,
  }

  static getDefaultState() {
    return {
      showModal: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      errorMessage: '',
    };
  }

  state = ChangePassword.getDefaultState();

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.open();
    }
  }

  handleOldPasswordChange = (event) => {
    let value = event.target.value;
    value = value.trim();
    if (value) {
      this.setState({ oldPassword: value });
    }
  }

  handleNewPasswordChange = (event) => {
    let value = event.target.value;
    value = value.trim();
    if (value) {
      this.setState({ newPassword: value });
    }
  }

  handleConfirmPasswordChange = (event) => {
    let value = event.target.value;
    value = value.trim();
    if (value !== this.state.newPassword) {
      this.setState({ errorMessage: 'Password do not match' });
    } else {
      this.setState({ errorMessage: '', confirmPassword: value });
    }
  }


  handleChangePasswordClick = () => {
    const { newPassword, oldPassword } = this.state;

    this.props.changePassword({ name: this.props.userName, newPassword, oldPassword })
      .then(() => toastr.success('Password changed successfully', { timeOut: 3000 }),
      )
      .catch(res => toastr.error(`Failed changing password ${res.error}`, { timeOut: 3000 }),
      )
      .then(() => this.close());
  }

  reset = () => {
    this.setState(ChangePassword.getDefaultState());
    this.props.onClose();
  }

  open = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.reset();
  }


  isValid = () => this.state.oldPassword && this.state.newPassword && this.state.confirmPassword;

  render() {
    const { errorMessage, showModal } = this.state;

    return (
      <div>
        <Modal show={showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <Alert bsStyle="danger">
              {errorMessage}
            </Alert>}
            <FormGroup>
              <ControlLabel>Old Password</ControlLabel>
              <FormControl type="password" onChange={this.handleOldPasswordChange} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>New Password</ControlLabel>
              <FormControl type="password" onChange={this.handleNewPasswordChange} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Confirm New Password</ControlLabel>
              <FormControl type="password" onChange={this.handleConfirmPasswordChange} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <div className="general">
              <Button className="radius-secondary" bsStyle="default" onClick={this.close}>Close</Button>
              <Button className="radius-secondary" disabled={!!errorMessage || !this.isValid()} bsStyle="success" onClick={this.handleChangePasswordClick}>Change Password</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ChangePassword.defaultProps = {
  open: false,
};

export default connect(null,
  {
    changePassword,
  })(ChangePassword);

