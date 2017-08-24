'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchLocations;

var _constants = require('../constants');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchLocations() {
  return {
    types: [_constants.LOCATIONS_REQUESTS, _constants.LOCATIONS_SUCCESS, _constants.LOCATIONS_FAILURE],
    promise: function promise(client) {
      return client.get(_config2.default.LOCATION_URL);
    }
  };
}
module.exports = exports['default'];