'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithContext = exports.SessionManager = exports.todos = exports.store = exports.backend = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _luggage = require('luggage');

var _luggage2 = _interopRequireDefault(_luggage);

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


  return WrappedWithContext;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy90ZXN0VXRpbHMuanMiXSwibmFtZXMiOlsiYmFja2VuZCIsInN0b3JlIiwidG9kb3MiLCJjb2xsZWN0aW9uIiwiU2Vzc2lvbk1hbmFnZXIiLCJ0b2tlbiIsIldpdGhDb250ZXh0IiwiY29udGV4dCIsImNvbnRleHRUeXBlcyIsIldyYXBwZWRXaXRoQ29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLDRCQUFVLDBCQUFpQixPQUFqQixFQUEwQixFQUExQixDQUFoQjtBQUNBLElBQU1DLHdCQUFRLHNCQUFZRCxPQUFaLENBQWQ7QUFDQSxJQUFNRSx3QkFBUUQsTUFBTUUsVUFBTixDQUFpQixPQUFqQixDQUFkOztJQUVNQyxjLFdBQUFBLGM7Ozs7Ozs7K0JBR0E7QUFDVCxhQUFPQSxlQUFlQyxLQUF0QjtBQUNEOzs7Ozs7QUFMVUQsYyxDQUNKQyxLLEdBQVEsSTtBQU9WLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxZQUFWLEVBQTJCO0FBQUEsTUFDOUNDLGtCQUQ4QztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0NBSWhDO0FBQ2hCLGVBQU9GLE9BQVA7QUFDRDtBQU5pRDtBQUFBO0FBQUEsK0JBUXpDO0FBQ1AsZUFBTyxLQUFLRyxLQUFMLENBQVdDLFFBQWxCO0FBQ0Q7QUFWaUQ7O0FBQUE7QUFBQTs7QUFDOUNGLG9CQUQ4QyxDQUUzQ0csaUJBRjJDLEdBRXZCSixZQUZ1Qjs7O0FBYXBELFNBQU9DLGtCQUFQO0FBQ0QsQ0FkTSIsImZpbGUiOiJ0ZXN0VXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTHVnZ2FnZSwgeyBEdW1teUJhY2tlbmQgfSBmcm9tICdsdWdnYWdlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBiYWNrZW5kID0gbmV3IER1bW15QmFja2VuZCgndG9kb3MnLCBbXSlcbmV4cG9ydCBjb25zdCBzdG9yZSA9IG5ldyBMdWdnYWdlKGJhY2tlbmQpXG5leHBvcnQgY29uc3QgdG9kb3MgPSBzdG9yZS5jb2xsZWN0aW9uKCd0b2RvcycpXG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uTWFuYWdlciB7XG4gIHN0YXRpYyB0b2tlbiA9IG51bGxcblxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gU2Vzc2lvbk1hbmFnZXIudG9rZW5cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV2l0aENvbnRleHQgPSAoY29udGV4dCwgY29udGV4dFR5cGVzKSA9PiB7XG4gIGNsYXNzIFdyYXBwZWRXaXRoQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzXG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gY29udGV4dFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFdyYXBwZWRXaXRoQ29udGV4dFxufVxuIl19