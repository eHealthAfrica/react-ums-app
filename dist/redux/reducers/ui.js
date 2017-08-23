'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('redux/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isLoading: false,
  importLoading: false,
  roundLoading: false,
  statusLoading: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.LOCATIONS_REQUESTS:
      return (0, _extends3.default)({}, state, { isLoading: true });
    case _constants.LOCATIONS_SUCCESS:
    case _constants.LOCATIONS_FAILURE:
      return (0, _extends3.default)({}, state, { isLoading: false });

    default:
      return state;
  }
};

module.exports = exports['default'];