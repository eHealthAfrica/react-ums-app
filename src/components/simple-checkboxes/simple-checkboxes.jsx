import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

export default class SimpleCheckBoxes extends Component {

  static propTypes = {
    items: PropTypes.array,
    name: PropTypes.string,
    selected: PropTypes.array,
    inline: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    disabledItems: PropTypes.array,
  };

  handleClick = (event) => {
    const { selected, onChange } = this.props;
    const value = event.target.value;
    const index = selected.indexOf(value);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(value);
    }
    onChange(selected);
  }

  render() {
    const { name, items, inline, disabledItems, selected } = this.props;
    const checkboxes = items.map((item) => {
      let formattedItem = item.split('_').pop();
      formattedItem = `${formattedItem.charAt(0).toUpperCase()}${formattedItem.slice(1)}`;
      return (<Checkbox
        inline={inline}
        disabled={disabledItems.includes(item)}
        key={item} value={item} onChange={this.handleClick}
        checked={selected.includes(item)}
      >
        {formattedItem}
      </Checkbox>);
    });
    return (
      <FormGroup>
        {name && <ControlLabel>{name}</ControlLabel>}
        {checkboxes}
      </FormGroup>
    );
  }
}

SimpleCheckBoxes.defaultProps = {
  selected: [],
  items: [],
  inline: true,
  disabledItems: [],
  name: '',
  onChange() {},
};
