'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Luggage = require('../Luggage');

var _Luggage2 = _interopRequireDefault(_Luggage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Luggage', function () {
  describe('context', function () {
    var rootContext = void 0;

    var ContextChecker = function ContextChecker(props, context) {
      rootContext = context;
      return null;
    };

    ContextChecker.contextTypes = {
      luggage: _propTypes2.default.shape({
        collectionName: _propTypes2.default.string
      })
    };

    afterEach(function () {
      rootContext = undefined;
    });

    it('creates context', function () {
      _reactTestRenderer2.default.create(_react2.default.createElement(
        _Luggage2.default,
        { collection: 'todos' },
        _react2.default.createElement(ContextChecker, null)
      ));

      expect(rootContext.luggage.collectionName).toEqual('todos');
    });

    it('sets dropbox credentials', function () {
      var credentials = {
        API_KEY: 'somekeyhere'
      };

      _reactTestRenderer2.default.create(_react2.default.createElement(
        _Luggage2.default,
        {
          collection: 'todos',
          credentials: credentials
        },
        _react2.default.createElement(ContextChecker, null)
      ));

      expect(rootContext.luggage.credentials).toEqual(credentials);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJyb290Q29udGV4dCIsIkNvbnRleHRDaGVja2VyIiwicHJvcHMiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIiwibHVnZ2FnZSIsInNoYXBlIiwiY29sbGVjdGlvbk5hbWUiLCJzdHJpbmciLCJhZnRlckVhY2giLCJ1bmRlZmluZWQiLCJpdCIsImNyZWF0ZSIsImV4cGVjdCIsInRvRXF1YWwiLCJjcmVkZW50aWFscyIsIkFQSV9LRVkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QkEsV0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsUUFBSUMsb0JBQUo7O0FBRUEsUUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDekNILG9CQUFjRyxPQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FIRDs7QUFLQUYsbUJBQWVHLFlBQWYsR0FBOEI7QUFDNUJDLGVBQVMsb0JBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJDLHdCQUFnQixvQkFBVUM7QUFESCxPQUFoQjtBQURtQixLQUE5Qjs7QUFNQUMsY0FBVSxZQUFNO0FBQ2RULG9CQUFjVSxTQUFkO0FBQ0QsS0FGRDs7QUFJQUMsT0FBRyxpQkFBSCxFQUFzQixZQUFNO0FBQzFCLGtDQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLFVBQVMsWUFBVyxPQUFwQjtBQUNFLHNDQUFDLGNBQUQ7QUFERixPQURGOztBQU1BQyxhQUFPYixZQUFZSyxPQUFaLENBQW9CRSxjQUEzQixFQUEyQ08sT0FBM0MsQ0FBbUQsT0FBbkQ7QUFDRCxLQVJEOztBQVVBSCxPQUFHLDBCQUFILEVBQStCLFlBQU07QUFDbkMsVUFBTUksY0FBYztBQUNsQkMsaUJBQVM7QUFEUyxPQUFwQjs7QUFJQSxrQ0FBU0osTUFBVCxDQUNFO0FBQUE7QUFBQTtBQUNFLHNCQUFXLE9BRGI7QUFFRSx1QkFBYUc7QUFGZjtBQUlFLHNDQUFDLGNBQUQ7QUFKRixPQURGOztBQVNBRixhQUFPYixZQUFZSyxPQUFaLENBQW9CVSxXQUEzQixFQUF3Q0QsT0FBeEMsQ0FBZ0RDLFdBQWhEO0FBQ0QsS0FmRDtBQWdCRCxHQTVDRDtBQTZDRCxDQTlDRCIsImZpbGUiOiJMdWdnYWdlLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBMdWdnYWdlIGZyb20gJy4uL0x1Z2dhZ2UnXG5cbmRlc2NyaWJlKCdMdWdnYWdlJywgKCkgPT4ge1xuICBkZXNjcmliZSgnY29udGV4dCcsICgpID0+IHtcbiAgICBsZXQgcm9vdENvbnRleHRcblxuICAgIGNvbnN0IENvbnRleHRDaGVja2VyID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gICAgICByb290Q29udGV4dCA9IGNvbnRleHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgQ29udGV4dENoZWNrZXIuY29udGV4dFR5cGVzID0ge1xuICAgICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIHJvb3RDb250ZXh0ID0gdW5kZWZpbmVkXG4gICAgfSlcblxuICAgIGl0KCdjcmVhdGVzIGNvbnRleHQnLCAoKSA9PiB7XG4gICAgICByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxMdWdnYWdlIGNvbGxlY3Rpb249J3RvZG9zJz5cbiAgICAgICAgICA8Q29udGV4dENoZWNrZXIgLz5cbiAgICAgICAgPC9MdWdnYWdlPlxuICAgICAgKVxuXG4gICAgICBleHBlY3Qocm9vdENvbnRleHQubHVnZ2FnZS5jb2xsZWN0aW9uTmFtZSkudG9FcXVhbCgndG9kb3MnKVxuICAgIH0pXG5cbiAgICBpdCgnc2V0cyBkcm9wYm94IGNyZWRlbnRpYWxzJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIEFQSV9LRVk6ICdzb21la2V5aGVyZSdcbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8THVnZ2FnZVxuICAgICAgICAgIGNvbGxlY3Rpb249J3RvZG9zJ1xuICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250ZXh0Q2hlY2tlciAvPlxuICAgICAgICA8L0x1Z2dhZ2U+XG4gICAgICApXG5cbiAgICAgIGV4cGVjdChyb290Q29udGV4dC5sdWdnYWdlLmNyZWRlbnRpYWxzKS50b0VxdWFsKGNyZWRlbnRpYWxzKVxuICAgIH0pXG4gIH0pXG59KVxuIl19