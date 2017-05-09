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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJyb290Q29udGV4dCIsIkNvbnRleHRDaGVja2VyIiwicHJvcHMiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIiwibHVnZ2FnZSIsInNoYXBlIiwiY29sbGVjdGlvbk5hbWUiLCJzdHJpbmciLCJhZnRlckVhY2giLCJ1bmRlZmluZWQiLCJpdCIsImFwaUtleSIsImNyZWF0ZSIsImV4cGVjdCIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QkEsV0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsUUFBSUMsb0JBQUo7O0FBRUEsUUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDekNILG9CQUFjRyxPQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FIRDs7QUFLQUYsbUJBQWVHLFlBQWYsR0FBOEI7QUFDNUJDLGVBQVMsb0JBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJDLHdCQUFnQixvQkFBVUM7QUFESCxPQUFoQjtBQURtQixLQUE5Qjs7QUFNQUMsY0FBVSxZQUFNO0FBQ2RULG9CQUFjVSxTQUFkO0FBQ0QsS0FGRDs7QUFJQUMsT0FBRyxpQkFBSCxFQUFzQixZQUFNO0FBQzFCLFVBQU1DLFNBQVMsWUFBZjs7QUFFQSxrQ0FBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxVQUFTLFFBQVFELE1BQWpCO0FBQ0Usc0NBQUMsY0FBRDtBQURGLE9BREY7O0FBTUFFLGFBQU9kLFlBQVlLLE9BQVosQ0FBb0JPLE1BQTNCLEVBQW1DRyxPQUFuQyxDQUEyQ0gsTUFBM0M7QUFDRCxLQVZEO0FBV0QsR0E3QkQ7QUE4QkQsQ0EvQkQiLCJmaWxlIjoiTHVnZ2FnZS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgTHVnZ2FnZSBmcm9tICcuLi9MdWdnYWdlJ1xuXG5kZXNjcmliZSgnTHVnZ2FnZScsICgpID0+IHtcbiAgZGVzY3JpYmUoJ2NvbnRleHQnLCAoKSA9PiB7XG4gICAgbGV0IHJvb3RDb250ZXh0XG5cbiAgICBjb25zdCBDb250ZXh0Q2hlY2tlciA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICAgICAgcm9vdENvbnRleHQgPSBjb250ZXh0XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIENvbnRleHRDaGVja2VyLmNvbnRleHRUeXBlcyA9IHtcbiAgICAgIGx1Z2dhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICByb290Q29udGV4dCA9IHVuZGVmaW5lZFxuICAgIH0pXG5cbiAgICBpdCgnY3JlYXRlcyBjb250ZXh0JywgKCkgPT4ge1xuICAgICAgY29uc3QgYXBpS2V5ID0gJ3NvbWVhcGlrZXknXG5cbiAgICAgIHJlbmRlcmVyLmNyZWF0ZShcbiAgICAgICAgPEx1Z2dhZ2UgYXBpS2V5PXthcGlLZXl9PlxuICAgICAgICAgIDxDb250ZXh0Q2hlY2tlciAvPlxuICAgICAgICA8L0x1Z2dhZ2U+XG4gICAgICApXG5cbiAgICAgIGV4cGVjdChyb290Q29udGV4dC5sdWdnYWdlLmFwaUtleSkudG9FcXVhbChhcGlLZXkpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=