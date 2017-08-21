/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { changeUserPassword } from 'redux/actions/userActions';


class ResetUserPassword extends Component {

  static propTypes = {
    user: PropTypes.object,
    onClose: PropTypes.func,
    changeUserPassword: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user !== this.props.user) {
      this.setState({
        user: nextProps.user,
      }, () => {
        this.open();
      });
    }
  }

  getDefaultState() {
    return {
      showModal: false,
      password: '',
      cpassword: '',
      errorMessage: '',
      user: {},
    };
  }


  reset = () => {
    this.setState(this.getDefaultState());
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  open = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.reset();
  }

  handleNewPasswordChange = (event) => {
    let password = event.target.value;
    password = password.trim();
    if (password !== this.state.cpassword) {
      this.setState({ errorMessage: 'Password does not match.' });
    } else {
      this.setState({ errorMessage: '' });
    }
    this.setState({ password });
  }

  handleConfirmPasswordChange = (event) => {
    let cpassword = event.target.value;
    cpassword = cpassword.trim();
    if (cpassword !== this.state.password) {
      this.setState({ errorMessage: 'Password does not match.' });
    } else {
      this.setState({ errorMessage: '' });
    }
    this.setState({ cpassword });
  }

  handleChangePasswordClick = () => {
    const { user: { name }, password } = this.state;
    this.props.changeUserPassword({ id: name, password })
      .then(() => toastr.success('Password changed successfully', { timeOut: 3000 }),
      )
      .catch(res => toastr.error(`Failed changing password ${res.error}`, { timeOut: 3000 }),
      )
      .then(() => this.close());
  }

  invalidForm = () => {
    const { password, cpassword } = this.state;
    return !password || !cpassword || password !== cpassword;
  }

  render() {
    const { errorMessage, showModal, user: { name = '' } } = this.state;

    return (
      <div>
        <Modal show={showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Change Users Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <Alert bsStyle="danger">
              {errorMessage}
            </Alert>}

            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl disabled defaultValue={name} />
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
              <Button className="radius-secondary" disabled={this.invalidForm()} bsStyle="success" onClick={this.handleChangePasswordClick}>Change Password</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { changeUserPassword })(ResetUserPassword);
