'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function (_Component) {
  (0, _inherits3.default)(PaginationButton, _Component);

  function PaginationButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PaginationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PaginationButton.__proto__ || (0, _getPrototypeOf2.default)(PaginationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.handleClick(_this.props.index);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PaginationButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          active = _props.active;

      var className = active ? 'clickable active' : 'clickable';
      return _react2.default.createElement(
        'li',
        { key: index, className: className, onClick: this.handleClick },
        _react2.default.createElement(
          'a',
          null,
          index + 1
        )
      );
    }
  }]);
  return PaginationButton;
}(_react.Component);

PaginationButton.propTypes = {
  index: _propTypes2.default.number.isRequired,
  active: _propTypes2.default.bool.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};

exports.default = PaginationButton;
module.exports = exports['default'];