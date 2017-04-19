'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _luggage = require('luggage');

var _testUtils = require('./testUtils');

var _LuggageCollection = require('../LuggageCollection');

var _LuggageCollection2 = _interopRequireDefault(_LuggageCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LuggageCollection', function () {
  var AsyncPropsChecker = function AsyncPropsChecker(props) {
    if (props.ready(props)) {
      props.check(props);
    }

    return null;
  };

  var Luggage = (0, _testUtils.WithContext)({
    luggage: {
      credentials: { API_KEY: 'someapikey' }
    }
  }, {
    luggage: _propTypes2.default.shape({
      credentials: _propTypes2.default.object
    })
  });

  describe('token exists', function () {
    beforeEach(function () {
      _testUtils.SessionManager.token = 'sometoken';
    });

    it('provides a store, collection data, and a token to children', function (done) {
      var ready = function ready(props) {
        return props.token;
      };

      var check = function check(props) {
        expect(props.collection).toBeDefined();
        expect(props.todos).toBeDefined();
        expect(props.token).toEqual('sometoken');
        done();
      };

      _reactTestRenderer2.default.create(_react2.default.createElement(
        Luggage,
        null,
        _react2.default.createElement(
          _LuggageCollection2.default,
          {
            SessionManager: _testUtils.SessionManager,
            Backend: _luggage.DummyBackend,
            name: 'todos'
          },
          _react2.default.createElement(AsyncPropsChecker, { ready: ready, check: check })
        )
      ));
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlQ29sbGVjdGlvbi50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiQXN5bmNQcm9wc0NoZWNrZXIiLCJwcm9wcyIsInJlYWR5IiwiY2hlY2siLCJMdWdnYWdlIiwibHVnZ2FnZSIsImNyZWRlbnRpYWxzIiwiQVBJX0tFWSIsInNoYXBlIiwib2JqZWN0IiwiYmVmb3JlRWFjaCIsInRva2VuIiwiaXQiLCJleHBlY3QiLCJjb2xsZWN0aW9uIiwidG9CZURlZmluZWQiLCJ0b2RvcyIsInRvRXF1YWwiLCJkb25lIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxtQkFBVCxFQUE4QixZQUFNO0FBQ2xDLE1BQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLFFBQVM7QUFDakMsUUFBSUMsTUFBTUMsS0FBTixDQUFZRCxLQUFaLENBQUosRUFBd0I7QUFDdEJBLFlBQU1FLEtBQU4sQ0FBWUYsS0FBWjtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTUcsVUFBVSw0QkFBWTtBQUMxQkMsYUFBUztBQUNQQyxtQkFBYSxFQUFFQyxTQUFTLFlBQVg7QUFETjtBQURpQixHQUFaLEVBSWI7QUFDREYsYUFBUyxvQkFBVUcsS0FBVixDQUFnQjtBQUN2QkYsbUJBQWEsb0JBQVVHO0FBREEsS0FBaEI7QUFEUixHQUphLENBQWhCOztBQVVBVixXQUFTLGNBQVQsRUFBeUIsWUFBTTtBQUM3QlcsZUFBVyxZQUFNO0FBQ2YsZ0NBQWVDLEtBQWYsR0FBdUIsV0FBdkI7QUFDRCxLQUZEOztBQUlBQyxPQUFHLDREQUFILEVBQWlFLGdCQUFRO0FBQ3ZFLFVBQU1WLFFBQVEsU0FBUkEsS0FBUTtBQUFBLGVBQ1pELE1BQU1VLEtBRE07QUFBQSxPQUFkOztBQUlBLFVBQU1SLFFBQVEsU0FBUkEsS0FBUSxRQUFTO0FBQ3JCVSxlQUFPWixNQUFNYSxVQUFiLEVBQXlCQyxXQUF6QjtBQUNBRixlQUFPWixNQUFNZSxLQUFiLEVBQW9CRCxXQUFwQjtBQUNBRixlQUFPWixNQUFNVSxLQUFiLEVBQW9CTSxPQUFwQixDQUE0QixXQUE1QjtBQUNBQztBQUNELE9BTEQ7O0FBT0Esa0NBQVNDLE1BQVQsQ0FDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHFEQURGO0FBRUUsMENBRkY7QUFHRSxrQkFBSztBQUhQO0FBS0Usd0NBQUMsaUJBQUQsSUFBbUIsT0FBT2pCLEtBQTFCLEVBQWlDLE9BQU9DLEtBQXhDO0FBTEY7QUFERixPQURGO0FBV0QsS0F2QkQ7QUF3QkQsR0E3QkQ7QUE4QkQsQ0FqREQiLCJmaWxlIjoiTHVnZ2FnZUNvbGxlY3Rpb24udGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCByZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IHsgRHVtbXlCYWNrZW5kIH0gZnJvbSAnbHVnZ2FnZSdcbmltcG9ydCB7IFNlc3Npb25NYW5hZ2VyLCBXaXRoQ29udGV4dCB9IGZyb20gJy4vdGVzdFV0aWxzJ1xuaW1wb3J0IEx1Z2dhZ2VDb2xsZWN0aW9uIGZyb20gJy4uL0x1Z2dhZ2VDb2xsZWN0aW9uJ1xuXG5kZXNjcmliZSgnTHVnZ2FnZUNvbGxlY3Rpb24nLCAoKSA9PiB7XG4gIGNvbnN0IEFzeW5jUHJvcHNDaGVja2VyID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5yZWFkeShwcm9wcykpIHtcbiAgICAgIHByb3BzLmNoZWNrKHByb3BzKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBMdWdnYWdlID0gV2l0aENvbnRleHQoe1xuICAgIGx1Z2dhZ2U6IHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7IEFQSV9LRVk6ICdzb21lYXBpa2V5JyB9XG4gICAgfVxuICB9LCB7XG4gICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNyZWRlbnRpYWxzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgndG9rZW4gZXhpc3RzJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgU2Vzc2lvbk1hbmFnZXIudG9rZW4gPSAnc29tZXRva2VuJ1xuICAgIH0pXG5cbiAgICBpdCgncHJvdmlkZXMgYSBzdG9yZSwgY29sbGVjdGlvbiBkYXRhLCBhbmQgYSB0b2tlbiB0byBjaGlsZHJlbicsIGRvbmUgPT4ge1xuICAgICAgY29uc3QgcmVhZHkgPSBwcm9wcyA9PiAoXG4gICAgICAgIHByb3BzLnRva2VuXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNoZWNrID0gcHJvcHMgPT4ge1xuICAgICAgICBleHBlY3QocHJvcHMuY29sbGVjdGlvbikudG9CZURlZmluZWQoKVxuICAgICAgICBleHBlY3QocHJvcHMudG9kb3MpLnRvQmVEZWZpbmVkKClcbiAgICAgICAgZXhwZWN0KHByb3BzLnRva2VuKS50b0VxdWFsKCdzb21ldG9rZW4nKVxuICAgICAgICBkb25lKClcbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8THVnZ2FnZT5cbiAgICAgICAgICA8THVnZ2FnZUNvbGxlY3Rpb25cbiAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyPXtTZXNzaW9uTWFuYWdlcn1cbiAgICAgICAgICAgIEJhY2tlbmQ9e0R1bW15QmFja2VuZH1cbiAgICAgICAgICAgIG5hbWU9J3RvZG9zJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBc3luY1Byb3BzQ2hlY2tlciByZWFkeT17cmVhZHl9IGNoZWNrPXtjaGVja30gLz5cbiAgICAgICAgICA8L0x1Z2dhZ2VDb2xsZWN0aW9uPlxuICAgICAgICA8L0x1Z2dhZ2U+XG4gICAgICApXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=