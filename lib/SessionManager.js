'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dropbox = require('dropbox');

var _dropbox2 = _interopRequireDefault(_dropbox);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOKEN_KEY = 'luggageToken';

var SessionManager = function () {
  function SessionManager(credentials) {
    var redirectUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

    _classCallCheck(this, SessionManager);

    if (SessionManager.instance) {
      return SessionManager.instance;
    }

    this.credentials = credentials;
    this.redirectUrl = redirectUrl;

    SessionManager.instance = this;
  }

  _createClass(SessionManager, [{
    key: 'getToken',
    value: function getToken() {
      return this.token || this.getTokenFromStorage() || this.getTokenFromUrl() || this.redirect();
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      this.token = token;
      global.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }, {
    key: 'getTokenFromStorage',
    value: function getTokenFromStorage() {
      return global.sessionStorage.getItem(TOKEN_KEY);
    }
  }, {
    key: 'getTokenFromUrl',
    value: function getTokenFromUrl() {
      var token = (0, _utils.parseQueryString)(global.location.hash).access_token;

      if (token) {
        this.setToken(token);
        this.removeHash();
      }

      return token;
    }
  }, {
    key: 'removeHash',
    value: function removeHash() {
      global.history.pushState('', global.document.title, global.location.pathname + global.location.search);
    }
  }, {
    key: 'redirect',
    value: function redirect() {
      var dbx = new _dropbox2.default({ clientId: this.credentials.APP_KEY });
      var authUrl = dbx.getAuthenticationUrl(this.authUrl);

      global.location = authUrl;
    }
  }, {
    key: 'authUrl',
    get: function get() {
      var _global$location = global.location,
          hostname = _global$location.hostname,
          port = _global$location.port,
          protocol = _global$location.protocol;


      return protocol + '//' + hostname + (port ? ':' + port : '') + this.redirectUrl;
    }
  }]);

  return SessionManager;
}();

exports.default = SessionManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TZXNzaW9uTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUT0tFTl9LRVkiLCJTZXNzaW9uTWFuYWdlciIsImNyZWRlbnRpYWxzIiwicmVkaXJlY3RVcmwiLCJpbnN0YW5jZSIsInRva2VuIiwiZ2V0VG9rZW5Gcm9tU3RvcmFnZSIsImdldFRva2VuRnJvbVVybCIsInJlZGlyZWN0IiwiZ2xvYmFsIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwiaGFzaCIsImFjY2Vzc190b2tlbiIsInNldFRva2VuIiwicmVtb3ZlSGFzaCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkb2N1bWVudCIsInRpdGxlIiwicGF0aG5hbWUiLCJzZWFyY2giLCJkYngiLCJjbGllbnRJZCIsIkFQUF9LRVkiLCJhdXRoVXJsIiwiZ2V0QXV0aGVudGljYXRpb25VcmwiLCJob3N0bmFtZSIsInBvcnQiLCJwcm90b2NvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLGNBQWxCOztJQUVNQyxjO0FBR0osMEJBQVlDLFdBQVosRUFBNEM7QUFBQSxRQUFuQkMsV0FBbUIsdUVBQUwsR0FBSzs7QUFBQTs7QUFDMUMsUUFBSUYsZUFBZUcsUUFBbkIsRUFBNkI7QUFDM0IsYUFBT0gsZUFBZUcsUUFBdEI7QUFDRDs7QUFFRCxTQUFLRixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBRixtQkFBZUcsUUFBZixHQUEwQixJQUExQjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFMLElBQ0YsS0FBS0MsbUJBQUwsRUFERSxJQUVGLEtBQUtDLGVBQUwsRUFGRSxJQUdGLEtBQUtDLFFBQUwsRUFITDtBQUlEOzs7NkJBRVFILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBSSxhQUFPQyxjQUFQLENBQXNCQyxPQUF0QixDQUE4QlgsU0FBOUIsRUFBeUNLLEtBQXpDO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBT0ksT0FBT0MsY0FBUCxDQUFzQkUsT0FBdEIsQ0FBOEJaLFNBQTlCLENBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNSyxRQUFRLDZCQUFpQkksT0FBT0ksUUFBUCxDQUFnQkMsSUFBakMsRUFBdUNDLFlBQXJEOztBQUVBLFVBQUlWLEtBQUosRUFBVztBQUNULGFBQUtXLFFBQUwsQ0FBY1gsS0FBZDtBQUNBLGFBQUtZLFVBQUw7QUFDRDs7QUFFRCxhQUFPWixLQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYSSxhQUFPUyxPQUFQLENBQWVDLFNBQWYsQ0FBeUIsRUFBekIsRUFBNkJWLE9BQU9XLFFBQVAsQ0FBZ0JDLEtBQTdDLEVBQW9EWixPQUFPSSxRQUFQLENBQWdCUyxRQUFoQixHQUNoRGIsT0FBT0ksUUFBUCxDQUFnQlUsTUFEcEI7QUFFRDs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxzQkFBWSxFQUFFQyxVQUFVLEtBQUt2QixXQUFMLENBQWlCd0IsT0FBN0IsRUFBWixDQUFaO0FBQ0EsVUFBTUMsVUFBVUgsSUFBSUksb0JBQUosQ0FBeUIsS0FBS0QsT0FBOUIsQ0FBaEI7O0FBRUFsQixhQUFPSSxRQUFQLEdBQWtCYyxPQUFsQjtBQUNEOzs7d0JBRWE7QUFBQSw2QkFDeUJsQixPQUFPSSxRQURoQztBQUFBLFVBQ0pnQixRQURJLG9CQUNKQSxRQURJO0FBQUEsVUFDTUMsSUFETixvQkFDTUEsSUFETjtBQUFBLFVBQ1lDLFFBRFosb0JBQ1lBLFFBRFo7OztBQUdaLGFBQU9BLFdBQVcsSUFBWCxHQUNMRixRQURLLElBRUpDLE9BQU8sTUFBTUEsSUFBYixHQUFvQixFQUZoQixJQUdMLEtBQUszQixXQUhQO0FBSUQ7Ozs7OztrQkFHWUYsYyIsImZpbGUiOiJTZXNzaW9uTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcm9wYm94IGZyb20gJ2Ryb3Bib3gnXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgVE9LRU5fS0VZID0gJ2x1Z2dhZ2VUb2tlbidcblxuY2xhc3MgU2Vzc2lvbk1hbmFnZXIge1xuICBzdGF0aWMgaW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvcihjcmVkZW50aWFscywgcmVkaXJlY3RVcmwgPSAnLycpIHtcbiAgICBpZiAoU2Vzc2lvbk1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTZXNzaW9uTWFuYWdlci5pbnN0YW5jZVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFsc1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSByZWRpcmVjdFVybFxuXG4gICAgU2Vzc2lvbk1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzXG4gIH1cblxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlblxuICAgICAgfHwgdGhpcy5nZXRUb2tlbkZyb21TdG9yYWdlKClcbiAgICAgIHx8IHRoaXMuZ2V0VG9rZW5Gcm9tVXJsKClcbiAgICAgIHx8IHRoaXMucmVkaXJlY3QoKVxuICB9XG5cbiAgc2V0VG9rZW4odG9rZW4pIHtcbiAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICBnbG9iYWwuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9LRVksIHRva2VuKVxuICB9XG5cbiAgZ2V0VG9rZW5Gcm9tU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gZ2xvYmFsLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oVE9LRU5fS0VZKVxuICB9XG5cbiAgZ2V0VG9rZW5Gcm9tVXJsKCkge1xuICAgIGNvbnN0IHRva2VuID0gcGFyc2VRdWVyeVN0cmluZyhnbG9iYWwubG9jYXRpb24uaGFzaCkuYWNjZXNzX3Rva2VuXG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW4pXG4gICAgICB0aGlzLnJlbW92ZUhhc2goKVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgcmVtb3ZlSGFzaCgpIHtcbiAgICBnbG9iYWwuaGlzdG9yeS5wdXNoU3RhdGUoJycsIGdsb2JhbC5kb2N1bWVudC50aXRsZSwgZ2xvYmFsLmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICArIGdsb2JhbC5sb2NhdGlvbi5zZWFyY2gpXG4gIH1cblxuICByZWRpcmVjdCgpIHtcbiAgICBjb25zdCBkYnggPSBuZXcgRHJvcGJveCh7IGNsaWVudElkOiB0aGlzLmNyZWRlbnRpYWxzLkFQUF9LRVkgfSlcbiAgICBjb25zdCBhdXRoVXJsID0gZGJ4LmdldEF1dGhlbnRpY2F0aW9uVXJsKHRoaXMuYXV0aFVybClcblxuICAgIGdsb2JhbC5sb2NhdGlvbiA9IGF1dGhVcmxcbiAgfVxuXG4gIGdldCBhdXRoVXJsKCkge1xuICAgIGNvbnN0IHsgaG9zdG5hbWUsIHBvcnQsIHByb3RvY29sIH0gPSBnbG9iYWwubG9jYXRpb25cblxuICAgIHJldHVybiBwcm90b2NvbCArICcvLycgK1xuICAgICAgaG9zdG5hbWUgK1xuICAgICAgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICtcbiAgICAgIHRoaXMucmVkaXJlY3RVcmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uTWFuYWdlclxuIl19