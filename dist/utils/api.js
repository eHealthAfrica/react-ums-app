'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  // const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return path;
}

var ApiClient = function ApiClient(req) {
  var _this = this;

  (0, _classCallCheck3.default)(this, ApiClient);

  methods.forEach(function (method) {
    _this[method] = function (path, header) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          params = _ref.params,
          data = _ref.data;

      return new _promise2.default(function (resolve, reject) {
        var request = _superagent2.default[method](formatUrl(path));

        if (header) {
          request.set('Accept', header);
        }
        if (_reactCookie2.default.load('accessToken')) {
          request.set('Authorization', 'Bearer ' + _reactCookie2.default.load('accessToken'));
        }
        if (params) {
          request.query(params);
        }

        if (req && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data) {
          request.send(data);
        }
        request.end(function (err) {
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              body = _ref2.body;

          return err ? reject(body || err) : resolve(body);
        });
      });
    };
  });
};

exports.default = ApiClient;
module.exports = exports['default'];