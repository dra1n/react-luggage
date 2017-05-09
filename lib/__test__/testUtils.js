'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithContext = exports.SessionManager = exports.todos = exports.store = exports.backend = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _luggage = require('luggage');

var _luggage2 = _interopRequireDefault(_luggage);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var backend = exports.backend = new _luggage.DummyBackend('todos', []);
var store = exports.store = new _luggage2.default(backend);
var todos = exports.todos = store.collection('todos');

var SessionManager = exports.SessionManager = function () {
  function SessionManager() {
    _classCallCheck(this, SessionManager);
  }

  _createClass(SessionManager, [{
    key: 'getToken',
    value: function getToken() {
      return SessionManager.token;
    }
  }]);

  return SessionManager;
}();

SessionManager.token = null;
var WithContext = exports.WithContext = function WithContext(context, contextTypes) {
  var WrappedWithContext = function (_Component) {
    _inherits(WrappedWithContext, _Component);

    function WrappedWithContext() {
      _classCallCheck(this, WrappedWithContext);

      return _possibleConstructorReturn(this, (WrappedWithContext.__proto__ || Object.getPrototypeOf(WrappedWithContext)).apply(this, arguments));
    }

    _createClass(WrappedWithContext, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return context;
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return WrappedWithContext;
  }(_react.Component);

  WrappedWithContext.childContextTypes = contextTypes;
  WrappedWithContext.propTypes = {
    children: _propTypes2.default.node
  };


  return WrappedWithContext;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy90ZXN0VXRpbHMuanMiXSwibmFtZXMiOlsiYmFja2VuZCIsInN0b3JlIiwidG9kb3MiLCJjb2xsZWN0aW9uIiwiU2Vzc2lvbk1hbmFnZXIiLCJ0b2tlbiIsIldpdGhDb250ZXh0IiwiY29udGV4dCIsImNvbnRleHRUeXBlcyIsIldyYXBwZWRXaXRoQ29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsInByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDRCQUFVLDBCQUFpQixPQUFqQixFQUEwQixFQUExQixDQUFoQjtBQUNBLElBQU1DLHdCQUFRLHNCQUFZRCxPQUFaLENBQWQ7QUFDQSxJQUFNRSx3QkFBUUQsTUFBTUUsVUFBTixDQUFpQixPQUFqQixDQUFkOztJQUVNQyxjLFdBQUFBLGM7Ozs7Ozs7K0JBR0E7QUFDVCxhQUFPQSxlQUFlQyxLQUF0QjtBQUNEOzs7Ozs7QUFMVUQsYyxDQUNKQyxLLEdBQVEsSTtBQU9WLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxZQUFWLEVBQTJCO0FBQUEsTUFDOUNDLGtCQUQ4QztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0NBT2hDO0FBQ2hCLGVBQU9GLE9BQVA7QUFDRDtBQVRpRDtBQUFBO0FBQUEsK0JBV3pDO0FBQ1AsZUFBTyxLQUFLRyxLQUFMLENBQVdDLFFBQWxCO0FBQ0Q7QUFiaUQ7O0FBQUE7QUFBQTs7QUFDOUNGLG9CQUQ4QyxDQUUzQ0csaUJBRjJDLEdBRXZCSixZQUZ1QjtBQUM5Q0Msb0JBRDhDLENBRzNDSSxTQUgyQyxHQUcvQjtBQUNqQkYsY0FBVSxvQkFBVUc7QUFESCxHQUgrQjs7O0FBZ0JwRCxTQUFPTCxrQkFBUDtBQUNELENBakJNIiwiZmlsZSI6InRlc3RVdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMdWdnYWdlLCB7IER1bW15QmFja2VuZCB9IGZyb20gJ2x1Z2dhZ2UnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IGJhY2tlbmQgPSBuZXcgRHVtbXlCYWNrZW5kKCd0b2RvcycsIFtdKVxuZXhwb3J0IGNvbnN0IHN0b3JlID0gbmV3IEx1Z2dhZ2UoYmFja2VuZClcbmV4cG9ydCBjb25zdCB0b2RvcyA9IHN0b3JlLmNvbGxlY3Rpb24oJ3RvZG9zJylcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25NYW5hZ2VyIHtcbiAgc3RhdGljIHRva2VuID0gbnVsbFxuXG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiBTZXNzaW9uTWFuYWdlci50b2tlblxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXaXRoQ29udGV4dCA9IChjb250ZXh0LCBjb250ZXh0VHlwZXMpID0+IHtcbiAgY2xhc3MgV3JhcHBlZFdpdGhDb250ZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXNcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIGNvbnRleHRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXcmFwcGVkV2l0aENvbnRleHRcbn1cbiJdfQ==