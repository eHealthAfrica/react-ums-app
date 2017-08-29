'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _clientMiddleware = require('./middleware/clientMiddleware');

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var middleware = [_clientMiddleware2.default];
  var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducers', function () {
      store.replaceReducer(require('./reducers')); // eslint-disable-line global-require
    });
  }
  return store;
};

module.exports = exports['default'];