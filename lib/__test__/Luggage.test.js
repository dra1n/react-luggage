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

/* eslint no-undefined: 0 */

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
      var apiKey = 'someapikey';

      _reactTestRenderer2.default.create(_react2.default.createElement(
        _Luggage2.default,
        { apiKey: apiKey },
        _react2.default.createElement(ContextChecker, null)
      ));

      expect(rootContext.luggage.apiKey).toEqual(apiKey);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJyb290Q29udGV4dCIsIkNvbnRleHRDaGVja2VyIiwicHJvcHMiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIiwibHVnZ2FnZSIsInNoYXBlIiwiY29sbGVjdGlvbk5hbWUiLCJzdHJpbmciLCJhZnRlckVhY2giLCJ1bmRlZmluZWQiLCJpdCIsImFwaUtleSIsImNyZWF0ZSIsImV4cGVjdCIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUxBOztBQU9BQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QkEsV0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsUUFBSUMsb0JBQUo7O0FBRUEsUUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDekNILG9CQUFjRyxPQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FIRDs7QUFLQUYsbUJBQWVHLFlBQWYsR0FBOEI7QUFDNUJDLGVBQVMsb0JBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJDLHdCQUFnQixvQkFBVUM7QUFESCxPQUFoQjtBQURtQixLQUE5Qjs7QUFNQUMsY0FBVSxZQUFNO0FBQ2RULG9CQUFjVSxTQUFkO0FBQ0QsS0FGRDs7QUFJQUMsT0FBRyxpQkFBSCxFQUFzQixZQUFNO0FBQzFCLFVBQU1DLFNBQVMsWUFBZjs7QUFFQSxrQ0FBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxVQUFTLFFBQVFELE1BQWpCO0FBQ0Usc0NBQUMsY0FBRDtBQURGLE9BREY7O0FBTUFFLGFBQU9kLFlBQVlLLE9BQVosQ0FBb0JPLE1BQTNCLEVBQW1DRyxPQUFuQyxDQUEyQ0gsTUFBM0M7QUFDRCxLQVZEO0FBV0QsR0E3QkQ7QUE4QkQsQ0EvQkQiLCJmaWxlIjoiTHVnZ2FnZS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXVuZGVmaW5lZDogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBMdWdnYWdlIGZyb20gJy4uL0x1Z2dhZ2UnXG5cbmRlc2NyaWJlKCdMdWdnYWdlJywgKCkgPT4ge1xuICBkZXNjcmliZSgnY29udGV4dCcsICgpID0+IHtcbiAgICBsZXQgcm9vdENvbnRleHRcblxuICAgIGNvbnN0IENvbnRleHRDaGVja2VyID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gICAgICByb290Q29udGV4dCA9IGNvbnRleHRcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgQ29udGV4dENoZWNrZXIuY29udGV4dFR5cGVzID0ge1xuICAgICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIHJvb3RDb250ZXh0ID0gdW5kZWZpbmVkXG4gICAgfSlcblxuICAgIGl0KCdjcmVhdGVzIGNvbnRleHQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBhcGlLZXkgPSAnc29tZWFwaWtleSdcblxuICAgICAgcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8THVnZ2FnZSBhcGlLZXk9e2FwaUtleX0+XG4gICAgICAgICAgPENvbnRleHRDaGVja2VyIC8+XG4gICAgICAgIDwvTHVnZ2FnZT5cbiAgICAgIClcblxuICAgICAgZXhwZWN0KHJvb3RDb250ZXh0Lmx1Z2dhZ2UuYXBpS2V5KS50b0VxdWFsKGFwaUtleSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==