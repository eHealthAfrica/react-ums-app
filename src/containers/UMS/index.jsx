import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import orderBy from 'lodash/orderBy';
import { NewUser, UserRow, PaginationButton, ResetUserPassword } from '../../components';
import { getUsers, getRoles, editUser } from '../../redux/actions/userActions';
import fetchLocations from '../../redux/actions/locationActions';

require('./style.scss');

class UMS extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    roles: PropTypes.array.isRequired,
    states: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    getRoles: PropTypes.func.isRequired,
    getStates: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
  }

  state = {
    userToEdit: null,
    userToReset: null,
    filterValue: '',
    pageSize: 20,
    currentPage: 0,
    sortBy: null,
    sortOrder: 'asc',
    nameColumn: { asc: false, field: 'name' },
    statusColumn: { asc: false, field: 'disabled' },
  };

  componentDidMount() {
    const { users, roles, states } = this.props;
    if (!users.length) this.props.getUsers();
    if (!roles.length) this.props.getRoles();
    if (!states.length) this.props.getStates();
  }

  getTableData = () => {
    const { users } = this.props;
    const filterValue = this.state.filterValue.toLowerCase();
    if (users) {
      const filtered = users.filter(({ name }) => `${name}`.toLowerCase().indexOf(filterValue) > -1);
      return orderBy(filtered, this.state.sortBy, this.state.sortOrder);
    }
    return null;
  }

  getColumnCaret = (column) => {
    if (column.field !== this.state.sortBy) return null;
    const position = column.asc ? 'top' : 'bottom';
    return <i className={`glyphicon glyphicon-triangle-${position}`} />;
  }

  handleColumnClick = (column, { asc, field }) => {
    const sortOrder = !asc ? 'asc' : 'desc';
    this.setState({ [column]: { asc: !asc, field }, sortBy: field, sortOrder, currentPage: 0 });
  }

  handleFilterValueChange = (event) => {
    this.setState({ filterValue: event.target.value, currentPage: 0 });
  }

  handleCreateUser = (action, name) => {
    toastr.success(`User ${name} ${action} successfully`, { timeOut: 3000 });
  }

  handleEditUserClicked = (user) => {
    this.setState({ userToEdit: user });
  }

  handleCloseEditUser = () => {
    this.setState({ userToEdit: null });
  }

  handleResetPasswordClicked = (user) => {
    this.setState({ userToReset: user });
  }

  handleCloseResetPassword= () => {
    this.setState({ userToReset: null });
  }

  handleChangeStatus = ({ status, user }) => {
    const action = status ? 'enable' : 'disable';

    toastr.confirm(`Are you sure you want to ${action} user ${user}`, {
      onOk: () => {
        this.props.editUser(user, { disabled: !status })
          .then(() => {
            toastr.success(`User ${user} ${action}d successfully`, { timeOut: 3000 });
            this.props.getUsers();
          })
          .catch(() => {
            toastr.error(`Failed ${action}ing user ${user}`, { timeOut: 3000 });
          });
      },
    });
  }

  handleButtonClick = (index) => {
    this.setState({ currentPage: index });
  }

  createRow = (user, index) =>
    <UserRow
      key={user.name} user={user} serialNumber={index + 1}
      handleEditUserClicked={this.handleEditUserClicked}
      handleChangeStatus={this.handleChangeStatus}
      handleResetPasswordClicked={this.handleResetPasswordClicked}
    />;


  render() {
    const { pageSize, currentPage, nameColumn, statusColumn } = this.state;
    const tableData = this.getTableData();
    let rows = null;
    let buttons = null;

    if (tableData) {
      const start = currentPage * pageSize;
      const end = pageSize * (currentPage + 1);
      rows = tableData.map(this.createRow).slice(start, end);

      const buttonsCount = Math.ceil(tableData.length / pageSize);
      buttons = [];
      for (let i = 0; i < buttonsCount; i += 1) {
        const active = i === currentPage;
        buttons.push(
          <PaginationButton
            key={i} index={i} active={active}
            handleClick={this.handleButtonClick}
          />);
      }
    }

    return (
      <div>
        <NewUser
          roles={this.props.roles} states={this.props.states} user={this.state.userToEdit} editMode
          onSuccess={this.handleCreateUser} onClose={this.handleCloseEditUser}
        />
        <ResetUserPassword user={this.state.userToReset} onClose={this.handleCloseResetPassword} />

        <div className="nopadding-content radius-primary ums-table">
          <Row>
            <Col sm={3} className="ums-col">
              <div className="search-filter">
                <div className="inner-addon right-addon">
                  <input
                    onChange={this.handleFilterValueChange}
                    value={this.state.filterValue}
                    type="text"
                    className="form-control radius-secondary"
                    placeholder="Filter Here..."
                  />
                </div>
              </div>
            </Col>
            <Col sm={7} className="ums-col">
              <div className="ums-legends">
                {/* legend goes in here */}
              </div>
            </Col>
            <Col sm={2} className="newUser">
              <NewUser
                roles={this.props.roles}
                states={this.props.states} onSuccess={this.handleCreateUser}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={4} className="page-count">
              <p>{ rows && rows.length ? `Showing ${rows[0].props.serialNumber} - ${rows[(rows.length) - 1].props.serialNumber} of ${tableData.length} users` : 'Nothing to display'}</p>
            </Col>
          </Row>
          <div className="ums-panel">
            <table className="ums-tablo">
              <tbody>
                <tr className="table-head">
                  <th />
                  <th onClick={() => this.handleColumnClick('nameColumn', nameColumn)} className="clickable">Users {this.getColumnCaret(nameColumn)}</th>
                  <th>Admin Level</th>
                  <th>Permissions</th>
                  <th onClick={() => this.handleColumnClick('statusColumn', statusColumn)} className="clickable">Status {this.getColumnCaret(statusColumn)}</th>
                  <th className="limitwidth" >Actions</th>
                </tr>
                {rows}
              </tbody>
            </table>
            <div className="text-right">
              <nav aria-label="Page navigation" id="report_pagination">
                <ul className="ums-page pagination">
                  {buttons}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { users, roles }, locations }) =>
  ({ users, roles: roles.map(role => role.id), states: locations });

export default connect(mapStateToProps,
  {
    getUsers,
    getRoles,
    getStates: fetchLocations,
    editUser,
  })(UMS);
