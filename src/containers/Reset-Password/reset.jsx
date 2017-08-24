import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Alert } from 'react-bootstrap';
import { getResetToken, resetPassword } from '../../redux/actions/userActions';
import logout from '../../utils/logout';

class ResetPassword extends Component {

  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    getResetToken: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  }

  state = {
    error: '',
    token: null,
    success: false,
    errorMessage: '',
    password: '',
    cpassword: '',
  }

  componentDidMount() {
    const token = this.props.params.token;
    this.props.getResetToken(token)
      .then(res => this.setState({ token: res._id }))
      .catch(error => this.setState({ error: error.message || 'Invalid token' }));
  }

  handlePasswordChange = (event) => {
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

  invalidForm = () => {
    const { password, cpassword } = this.state;
    return !password || !cpassword || password !== cpassword;
  }

  handleReset = (e) => {
    e.preventDefault();
    const { password } = this.state;
    this.props.resetPassword({ password, token: this.state.token })
    .then(() => {
      this.setState({ success: true });
      logout();
    })
    .catch(error => this.setState({ error: error.error }));
  }

  render() {
    const form = (
      <div>
        {this.state.errorMessage && <Alert bsStyle="danger">
          {this.state.errorMessage}
        </Alert>
        }
        <form acceptCharset="UTF-8" role="form" onSubmit={this.handleReset}>
          <fieldset>
            <div className="form-group">
              <input className="form-control" onChange={this.handlePasswordChange} placeholder="New password" name="password" type="password" required />
            </div>
            <div className="form-group">
              <input className="form-control" onChange={this.handleConfirmPasswordChange} placeholder="Confirm new password" name="cpassword" type="password" required />
            </div>
            <button className="btn btn-lg btn-primary btn-block radius-primary bk_color_trans" disabled={this.invalidForm()} type="submit"> Reset Password</button>
          </fieldset>
        </form>
      </div>);

    const errorAlert = (<Alert bsStyle="danger">
      {this.state.error}
    </Alert>);

    const successAlert = (<Alert bsStyle="success">
      <p>Password has successfully been reset</p>
      <Link to={'login'}>
        Login here
      </Link>
    </Alert>);

    let component;

    if (this.state.success) {
      component = successAlert;
    } else if (this.state.error) {
      component = errorAlert;
    } else {
      component = form;
    }

    return (
      <div className="container-fluid login-bg">
        <div className="row vertical-offset-100">
          <div className="col-md-4" />
          <div className="col-md-4" >
            <div className="panel col-centered">
              <div className="panel-body">
                {component}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getResetToken, resetPassword })(ResetPassword);
