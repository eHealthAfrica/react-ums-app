import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import { requestPasswordReset } from 'redux/actions/userActions';

class ResetPasswordRequest extends Component {

  static propTypes = {
    requestPasswordReset: PropTypes.func.isRequired,
  }

  state = {
    success: false,
    email: '',
  }

  handleReset = (e) => {
    e.preventDefault();
    const { email } = e.target;
    this.props.requestPasswordReset({ id: email.value })
      .then(() => {
        this.setState({ success: true, email: email.value });
      }).catch((err) => {
        toastr.error(`${err.message || err.error} Please try again.`);
      });
  }

  render() {
    const form = (<form acceptCharset="UTF-8" role="form" onSubmit={this.handleReset}>
      <fieldset>
        <div className="form-group">
          <input className="form-control" placeholder="EMAIL ADDRESS" name="email" type="email" required />
        </div>
        <button className="btn btn-lg btn-primary btn-block radius-primary bk_color_trans" type="submit"> REQUEST PASSWORD RESET </button>
        <div className="row">
          <div className="col-md-6" >
            <Link to="/login" className="forgot">
              Back to Login
            </Link>
          </div>
        </div>
        <div className="copyright text-center">
           COPYRIGHT LOMIS DASHBOARD 2.0
        </div>
      </fieldset>
    </form>);

    const successAlert = (<div><Alert bsStyle="success">
      <p>An email has been sent to {this.state.email}</p>
      <p>Please click on the reset link in the email to reset your password</p>
    </Alert>
      <div className="row">
        <div className="col-md-6" >
          <Link to="/login" className="forgot">
          Back to Login
        </Link>
        </div>
      </div></div>);

    return (
      <div className="container-fluid login-bg">
        <div className="row vertical-offset-100">
          <div className="col-md-4" />
          <div className="col-md-4" >
            <div className="panel col-centered">
              <div className="panel-body">
                {this.state.success ? successAlert : form}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { requestPasswordReset })(ResetPasswordRequest);
