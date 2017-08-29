'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleCheckBoxes = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(SimpleCheckBoxes, _Component);

  function SimpleCheckBoxes() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SimpleCheckBoxes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SimpleCheckBoxes.__proto__ || (0, _getPrototypeOf2.default)(SimpleCheckBoxes)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          selected = _this$props.selected,
          onChange = _this$props.onChange;

      var value = event.target.value;
      var index = selected.indexOf(value);
      if (index > -1) {
        selected.splice(index, 1);
      } else {
        selected.push(value);
      }
      onChange(selected);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SimpleCheckBoxes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          items = _props.items,
          inline = _props.inline,
          disabledItems = _props.disabledItems,
          selected = _props.selected;

      var checkboxes = items.map(function (item) {
        var formattedItem = item.split('_').pop();
        formattedItem = '' + formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1);
        return _react2.default.createElement(
          _reactBootstrap.Checkbox,
          {
            inline: inline,
            disabled: disabledItems.includes(item),
            key: item, value: item, onChange: _this2.handleClick,
            checked: selected.includes(item)
          },
          formattedItem
        );
      });
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        name && _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          name
        ),
        checkboxes
      );
    }
  }]);
  return SimpleCheckBoxes;
}(_react.Component), _class.propTypes = {
  items: _propTypes2.default.array,
  name: _propTypes2.default.string,
  selected: _propTypes2.default.array,
  inline: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  disabledItems: _propTypes2.default.array
}, _temp2);
exports.default = SimpleCheckBoxes;


SimpleCheckBoxes.defaultProps = {
  selected: [],
  items: [],
  inline: true,
  disabledItems: [],
  name: '',
  onChange: function onChange() {}
};
module.exports = exports['default'];