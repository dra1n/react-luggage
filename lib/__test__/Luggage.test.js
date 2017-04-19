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
      var credentials = { API_KEY: 'someapikey' };

      _reactTestRenderer2.default.create(_react2.default.createElement(
        _Luggage2.default,
        { credentials: credentials },
        _react2.default.createElement(ContextChecker, null)
      ));

      expect(rootContext.luggage.credentials).toEqual(credentials);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9MdWdnYWdlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJyb290Q29udGV4dCIsIkNvbnRleHRDaGVja2VyIiwicHJvcHMiLCJjb250ZXh0IiwiY29udGV4dFR5cGVzIiwibHVnZ2FnZSIsInNoYXBlIiwiY29sbGVjdGlvbk5hbWUiLCJzdHJpbmciLCJhZnRlckVhY2giLCJ1bmRlZmluZWQiLCJpdCIsImNyZWRlbnRpYWxzIiwiQVBJX0tFWSIsImNyZWF0ZSIsImV4cGVjdCIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFNBQVQsRUFBb0IsWUFBTTtBQUN4QkEsV0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsUUFBSUMsb0JBQUo7O0FBRUEsUUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDekNILG9CQUFjRyxPQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FIRDs7QUFLQUYsbUJBQWVHLFlBQWYsR0FBOEI7QUFDNUJDLGVBQVMsb0JBQVVDLEtBQVYsQ0FBZ0I7QUFDdkJDLHdCQUFnQixvQkFBVUM7QUFESCxPQUFoQjtBQURtQixLQUE5Qjs7QUFNQUMsY0FBVSxZQUFNO0FBQ2RULG9CQUFjVSxTQUFkO0FBQ0QsS0FGRDs7QUFJQUMsT0FBRyxpQkFBSCxFQUFzQixZQUFNO0FBQzFCLFVBQU1DLGNBQWMsRUFBRUMsU0FBUyxZQUFYLEVBQXBCOztBQUVBLGtDQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLFVBQVMsYUFBYUYsV0FBdEI7QUFDRSxzQ0FBQyxjQUFEO0FBREYsT0FERjs7QUFNQUcsYUFBT2YsWUFBWUssT0FBWixDQUFvQk8sV0FBM0IsRUFBd0NJLE9BQXhDLENBQWdESixXQUFoRDtBQUNELEtBVkQ7O0FBWUFELE9BQUcsMEJBQUgsRUFBK0IsWUFBTTtBQUNuQyxVQUFNQyxjQUFjO0FBQ2xCQyxpQkFBUztBQURTLE9BQXBCOztBQUlBLGtDQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBO0FBQ0Usc0JBQVcsT0FEYjtBQUVFLHVCQUFhRjtBQUZmO0FBSUUsc0NBQUMsY0FBRDtBQUpGLE9BREY7O0FBU0FHLGFBQU9mLFlBQVlLLE9BQVosQ0FBb0JPLFdBQTNCLEVBQXdDSSxPQUF4QyxDQUFnREosV0FBaEQ7QUFDRCxLQWZEO0FBZ0JELEdBOUNEO0FBK0NELENBaEREIiwiZmlsZSI6Ikx1Z2dhZ2UudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCByZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IEx1Z2dhZ2UgZnJvbSAnLi4vTHVnZ2FnZSdcblxuZGVzY3JpYmUoJ0x1Z2dhZ2UnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdjb250ZXh0JywgKCkgPT4ge1xuICAgIGxldCByb290Q29udGV4dFxuXG4gICAgY29uc3QgQ29udGV4dENoZWNrZXIgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgICAgIHJvb3RDb250ZXh0ID0gY29udGV4dFxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBDb250ZXh0Q2hlY2tlci5jb250ZXh0VHlwZXMgPSB7XG4gICAgICBsdWdnYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgcm9vdENvbnRleHQgPSB1bmRlZmluZWRcbiAgICB9KVxuXG4gICAgaXQoJ2NyZWF0ZXMgY29udGV4dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0geyBBUElfS0VZOiAnc29tZWFwaWtleScgfVxuXG4gICAgICByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxMdWdnYWdlIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc30+XG4gICAgICAgICAgPENvbnRleHRDaGVja2VyIC8+XG4gICAgICAgIDwvTHVnZ2FnZT5cbiAgICAgIClcblxuICAgICAgZXhwZWN0KHJvb3RDb250ZXh0Lmx1Z2dhZ2UuY3JlZGVudGlhbHMpLnRvRXF1YWwoY3JlZGVudGlhbHMpXG4gICAgfSlcblxuICAgIGl0KCdzZXRzIGRyb3Bib3ggY3JlZGVudGlhbHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVkZW50aWFscyA9IHtcbiAgICAgICAgQVBJX0tFWTogJ3NvbWVrZXloZXJlJ1xuICAgICAgfVxuXG4gICAgICByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxMdWdnYWdlXG4gICAgICAgICAgY29sbGVjdGlvbj0ndG9kb3MnXG4gICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbnRleHRDaGVja2VyIC8+XG4gICAgICAgIDwvTHVnZ2FnZT5cbiAgICAgIClcblxuICAgICAgZXhwZWN0KHJvb3RDb250ZXh0Lmx1Z2dhZ2UuY3JlZGVudGlhbHMpLnRvRXF1YWwoY3JlZGVudGlhbHMpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=