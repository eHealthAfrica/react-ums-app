/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal, Button, FormGroup, ControlLabel, FormControl, Alert, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import isValidEmail from 'utils/validation';
import { getUser, createUser, editUser } from 'redux/actions/userActions';
import { SimpleCheckBoxes } from 'components';
import config from 'config';
import { mapValuesInObject } from 'utils/index';

class NewUser extends Component {

  static propTypes = {
    roles: PropTypes.array.isRequired,
    states: PropTypes.array.isRequired,
    user: PropTypes.object,
    editMode: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    editMode: false,
    user: {},
    states: [],
    roles: [],
  };

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user !== this.props.user) {
      this.setState({
        selectedRoles: nextProps.user.roles.map(role => config.ROLES_MAPPER[role] || role),
        selectedState: nextProps.user.accessLevel && nextProps.user.accessLevel.length ?
          nextProps.user.accessLevel[0] : '',
        email: nextProps.user.name,
        disabled: nextProps.user.disabled,
        firstName: nextProps.user.firstName,
        lastName: nextProps.user.lastName,
      }, () => {
        this.open();
      });
    }
  }

  getDefaultState() {
    return {
      showModal: false,
      selectedRoles: config.DEFAULT_ROLES.slice(),
      selectedState: '',
      email: '',
      disabled: false,
      errorMessage: '',
      userExists: false,
      createUserError: false,
      password: '',
      generate: true,
      firstName: '',
      lastName: '',
    };
  }

  handleEmailBlur = (event) => {
    let email = event.target.value;
    email = email.trim();
    if (!isValidEmail(email)) {
      this.setState({ errorMessage: 'Invalid email field' });
    } else {
      this.setState({ errorMessage: '', email });
      this.props.getUser(email.toLowerCase())
        .then(() => {
          this.setState({ userExists: true });
        })
        .catch(() => {
          this.setState({ userExists: false });
        });
    }
  }

  handleFirstNameBlur = (event) => {
    let firstName = event.target.value;
    firstName = firstName.trim();
    if (firstName) {
      this.setState({ firstName });
    }
  }

  handleLastNameBlur = (event) => {
    let lastName = event.target.value;
    lastName = lastName.trim();
    if (lastName) {
      this.setState({ lastName });
    }
  }

  handlePasswordBlur = (event) => {
    let password = event.target.value;
    password = password.trim();
    if (password) {
      this.setState({ password });
    }
  }

  handleGeneratePasswordChange = (event) => {
    this.password.value = '';
    this.setState({ generate: event.target.checked, password: '' });
  }

  handleStatusChange = (event) => {
    const disabled = event.target.value === 'disabled';
    this.setState({ disabled });
  }

  handleSaveUserClick = () => {
    const accessLevel = [this.state.selectedState];
    const { email: name, disabled, password, firstName, lastName } = this.state;
    let { selectedRoles: roles } = this.state;
    const mapValue = mapValuesInObject(config.ROLES_MAPPER);
    roles = roles.map(mapValue);
    let user;
    let api;
    let action;
    if (this.props.editMode) {
      user = { roles, disabled, firstName, lastName, accessLevel };
      api = this.props.editUser.bind(null, name.toLowerCase());
      action = 'edited';
    } else {
      user = { name: name.toLowerCase(),
        roles,
        disabled,
        password,
        firstName,
        lastName,
        accessLevel };
      api = this.props.createUser.bind(null);
      action = 'created';
    }
    api(user)
      .then(() => {
        this.setState({ createUserError: false });
        this.props.onSuccess(action, name);
        this.close();
      })
      .catch(() => {
        this.setState({ createUserError: true });
      });
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

  handleRolesChange = (selectedRoles) => {
    this.setState({ selectedRoles });
  }

  handleStateChange = (event) => {
    this.setState({ selectedState: event.target.value });
  }

  isValid = () => {
    if (this.state.generate) {
      return this.state.email && this.state.firstName &&
        this.state.lastName && this.state.selectedState;
    }
    return this.state.email && this.state.password &&
      this.state.firstName && this.state.lastName && this.state.selectedState;
  }

  render() {
    const { roles, editMode, states } = this.props;
    const { errorMessage, showModal, email, selectedRoles, selectedState,
      disabled, userExists, createUserError, generate, firstName, lastName,
    } = this.state;
    const otherOptions = [
      { key: 'all', value: 'all', display: 'All' },
      { key: 'select', value: '', display: 'Select State' },
    ];
    const defaultRoles = this.getDefaultState().selectedRoles;
    const stateOptions =
      states.map(state => <option key={state.name} value={state.name}>{state.name}</option>);
    otherOptions.forEach(item =>
      stateOptions.unshift(<option key={item.key} value={item.value}>{item.display}</option>));

    let errorText;
    if (errorMessage) errorText = errorMessage;
    else if (userExists) errorText = 'User already exists';
    else if (createUserError) errorText = 'Error Creating User';
    else errorText = '';
    const title = editMode ? 'Edit User' : 'New User';

    return (
      <div>
        {!editMode && <Button className="radius-secondary pull-right" onClick={this.open}>Create New User</Button>}
        <Modal show={showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorText && <Alert bsStyle="danger">
              {errorText}
            </Alert>}
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" maxLength={50} disabled={editMode} defaultValue={email} onBlur={this.handleEmailBlur} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              <FormControl type="text" maxLength={20} defaultValue={firstName} onBlur={this.handleFirstNameBlur} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl type="text" maxLength={20} defaultValue={lastName} onBlur={this.handleLastNameBlur} />
            </FormGroup>

            {
              !editMode && (<FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="text" inputRef={(ref) => { this.password = ref; }}
                  disabled={generate} onBlur={this.handlePasswordBlur}
                />
                <Checkbox
                  inline
                  checked={generate}
                  onChange={this.handleGeneratePasswordChange}
                >
                  Generate Password?
                </Checkbox>
              </FormGroup>)
            }

            <Row>
              <Col sm={12}>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Admin Level</ControlLabel>
                  <FormControl defaultValue={selectedState && selectedState} componentClass="select" placeholder="select" onChange={this.handleStateChange}>
                    {stateOptions}
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <SimpleCheckBoxes
                  items={roles} name="Permissions" disabledItems={defaultRoles}
                  inline={false} selected={selectedRoles}
                  onChange={this.handleRolesChange}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Status</ControlLabel>
                  <FormControl defaultValue={disabled && 'disabled'} componentClass="select" placeholder="select" onChange={this.handleStatusChange}>
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <div className="general">
              <Button className="radius-secondary" bsStyle="default" onClick={this.close}>Close</Button>
              <Button className="radius-secondary" disabled={!!errorText || !this.isValid()} bsStyle="success" onClick={this.handleSaveUserClick}> {editMode ? 'Update' : 'Create'} User</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { getUser, createUser, editUser })(NewUser);
