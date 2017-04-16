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
      credentials: { API_KEY: 'someapikey' },
      collectionName: 'todos'
    }
  }, {
    luggage: _propTypes2.default.shape({
      credentials: _propTypes2.default.object,
      collectionName: _propTypes2.default.string
    })
  });

  describe('token exists', function () {
    beforeEach(function () {
      _testUtils.SessionManager.token = 'sometoken';
    });

    it('provides a store and a token to children', function (done) {
      var ready = function ready(props) {
        return props.token;
      };

      var check = function check(props) {
        expect(props.collection).toBeDefined();
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
            Backend: _luggage.DummyBackend
          },
          _react2.default.createElement(AsyncPropsChecker, { ready: ready, check: check })
        )
      ));
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlQ29sbGVjdGlvbi50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiQXN5bmNQcm9wc0NoZWNrZXIiLCJwcm9wcyIsInJlYWR5IiwiY2hlY2siLCJMdWdnYWdlIiwibHVnZ2FnZSIsImNyZWRlbnRpYWxzIiwiQVBJX0tFWSIsImNvbGxlY3Rpb25OYW1lIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciLCJiZWZvcmVFYWNoIiwidG9rZW4iLCJpdCIsImV4cGVjdCIsImNvbGxlY3Rpb24iLCJ0b0JlRGVmaW5lZCIsInRvRXF1YWwiLCJkb25lIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxtQkFBVCxFQUE4QixZQUFNO0FBQ2xDLE1BQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLFFBQVM7QUFDakMsUUFBSUMsTUFBTUMsS0FBTixDQUFZRCxLQUFaLENBQUosRUFBd0I7QUFDdEJBLFlBQU1FLEtBQU4sQ0FBWUYsS0FBWjtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTUcsVUFBVSw0QkFBWTtBQUMxQkMsYUFBUztBQUNQQyxtQkFBYSxFQUFFQyxTQUFTLFlBQVgsRUFETjtBQUVQQyxzQkFBZ0I7QUFGVDtBQURpQixHQUFaLEVBS2I7QUFDREgsYUFBUyxvQkFBVUksS0FBVixDQUFnQjtBQUN2QkgsbUJBQWEsb0JBQVVJLE1BREE7QUFFdkJGLHNCQUFnQixvQkFBVUc7QUFGSCxLQUFoQjtBQURSLEdBTGEsQ0FBaEI7O0FBWUFaLFdBQVMsY0FBVCxFQUF5QixZQUFNO0FBQzdCYSxlQUFXLFlBQU07QUFDZixnQ0FBZUMsS0FBZixHQUF1QixXQUF2QjtBQUNELEtBRkQ7O0FBSUFDLE9BQUcsMENBQUgsRUFBK0MsZ0JBQVE7QUFDckQsVUFBTVosUUFBUSxTQUFSQSxLQUFRO0FBQUEsZUFDWkQsTUFBTVksS0FETTtBQUFBLE9BQWQ7O0FBSUEsVUFBTVYsUUFBUSxTQUFSQSxLQUFRLFFBQVM7QUFDckJZLGVBQU9kLE1BQU1lLFVBQWIsRUFBeUJDLFdBQXpCO0FBQ0FGLGVBQU9kLE1BQU1ZLEtBQWIsRUFBb0JLLE9BQXBCLENBQTRCLFdBQTVCO0FBQ0FDO0FBQ0QsT0FKRDs7QUFNQSxrQ0FBU0MsTUFBVCxDQUNFO0FBQUMsZUFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscURBREY7QUFFRTtBQUZGO0FBSUUsd0NBQUMsaUJBQUQsSUFBbUIsT0FBT2xCLEtBQTFCLEVBQWlDLE9BQU9DLEtBQXhDO0FBSkY7QUFERixPQURGO0FBVUQsS0FyQkQ7QUFzQkQsR0EzQkQ7QUE0QkQsQ0FqREQiLCJmaWxlIjoiTHVnZ2FnZUNvbGxlY3Rpb24udGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCByZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IHsgRHVtbXlCYWNrZW5kIH0gZnJvbSAnbHVnZ2FnZSdcbmltcG9ydCB7IFNlc3Npb25NYW5hZ2VyLCBXaXRoQ29udGV4dCB9IGZyb20gJy4vdGVzdFV0aWxzJ1xuaW1wb3J0IEx1Z2dhZ2VDb2xsZWN0aW9uIGZyb20gJy4uL0x1Z2dhZ2VDb2xsZWN0aW9uJ1xuXG5kZXNjcmliZSgnTHVnZ2FnZUNvbGxlY3Rpb24nLCAoKSA9PiB7XG4gIGNvbnN0IEFzeW5jUHJvcHNDaGVja2VyID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5yZWFkeShwcm9wcykpIHtcbiAgICAgIHByb3BzLmNoZWNrKHByb3BzKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBMdWdnYWdlID0gV2l0aENvbnRleHQoe1xuICAgIGx1Z2dhZ2U6IHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7IEFQSV9LRVk6ICdzb21lYXBpa2V5JyB9LFxuICAgICAgY29sbGVjdGlvbk5hbWU6ICd0b2RvcydcbiAgICB9XG4gIH0sIHtcbiAgICBsdWdnYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY3JlZGVudGlhbHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb2xsZWN0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3Rva2VuIGV4aXN0cycsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFNlc3Npb25NYW5hZ2VyLnRva2VuID0gJ3NvbWV0b2tlbidcbiAgICB9KVxuXG4gICAgaXQoJ3Byb3ZpZGVzIGEgc3RvcmUgYW5kIGEgdG9rZW4gdG8gY2hpbGRyZW4nLCBkb25lID0+IHtcbiAgICAgIGNvbnN0IHJlYWR5ID0gcHJvcHMgPT4gKFxuICAgICAgICBwcm9wcy50b2tlblxuICAgICAgKVxuXG4gICAgICBjb25zdCBjaGVjayA9IHByb3BzID0+IHtcbiAgICAgICAgZXhwZWN0KHByb3BzLmNvbGxlY3Rpb24pLnRvQmVEZWZpbmVkKClcbiAgICAgICAgZXhwZWN0KHByb3BzLnRva2VuKS50b0VxdWFsKCdzb21ldG9rZW4nKVxuICAgICAgICBkb25lKClcbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8THVnZ2FnZT5cbiAgICAgICAgICA8THVnZ2FnZUNvbGxlY3Rpb25cbiAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyPXtTZXNzaW9uTWFuYWdlcn1cbiAgICAgICAgICAgIEJhY2tlbmQ9e0R1bW15QmFja2VuZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXN5bmNQcm9wc0NoZWNrZXIgcmVhZHk9e3JlYWR5fSBjaGVjaz17Y2hlY2t9IC8+XG4gICAgICAgICAgPC9MdWdnYWdlQ29sbGVjdGlvbj5cbiAgICAgICAgPC9MdWdnYWdlPlxuICAgICAgKVxuICAgIH0pXG4gIH0pXG59KVxuIl19