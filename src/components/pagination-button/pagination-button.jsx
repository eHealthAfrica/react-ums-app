import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationButton extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.index);
  }

  render() {
    const { index, active } = this.props;
    const className = active ? 'clickable active' : 'clickable';
    return (
      <li key={index} className={className} onClick={this.handleClick}>
        <a>{index + 1}</a>
      </li>
    );
  }
}

PaginationButton.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PaginationButton;
