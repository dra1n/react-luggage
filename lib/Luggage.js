'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createContext = require('./createContext');

var _createContext2 = _interopRequireDefault(_createContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Luggage = function (_Component) {
  _inherits(Luggage, _Component);

  function Luggage() {
    _classCallCheck(this, Luggage);

    return _possibleConstructorReturn(this, (Luggage.__proto__ || Object.getPrototypeOf(Luggage)).apply(this, arguments));
  }

  _createClass(Luggage, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          collection = _props.collection,
          credentials = _props.credentials;


      return {
        luggage: (0, _createContext2.default)(collection, credentials)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Luggage;
}(_react.Component);

Luggage.propTypes = {
  collection: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]).isRequired,
  credentials: _propTypes2.default.object
};
Luggage.childContextTypes = {
  luggage: _propTypes2.default.object
};
exports.default = Luggage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlLmpzIl0sIm5hbWVzIjpbIkx1Z2dhZ2UiLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJjcmVkZW50aWFscyIsImx1Z2dhZ2UiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJub2RlIiwiYXJyYXlPZiIsIm9iamVjdCIsImNoaWxkQ29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OztzQ0FjYztBQUFBLG1CQUNvQixLQUFLQyxLQUR6QjtBQUFBLFVBQ1JDLFVBRFEsVUFDUkEsVUFEUTtBQUFBLFVBQ0lDLFdBREosVUFDSUEsV0FESjs7O0FBR2hCLGFBQU87QUFDTEMsaUJBQVMsNkJBQWNGLFVBQWQsRUFBMEJDLFdBQTFCO0FBREosT0FBUDtBQUdEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtGLEtBQUwsQ0FBV0ksUUFBbEI7QUFDRDs7Ozs7O0FBeEJHTCxPLENBQ0dNLFMsR0FBWTtBQUNqQkosY0FBWSxvQkFBVUssTUFBVixDQUFpQkMsVUFEWjtBQUVqQkgsWUFBVSxvQkFBVUksU0FBVixDQUFvQixDQUM1QixvQkFBVUMsSUFEa0IsRUFFNUIsb0JBQVVDLE9BQVYsQ0FBa0Isb0JBQVVELElBQTVCLENBRjRCLENBQXBCLEVBR1BGLFVBTGM7QUFNakJMLGVBQWEsb0JBQVVTO0FBTk4sQztBQURmWixPLENBVUdhLGlCLEdBQW9CO0FBQ3pCVCxXQUFTLG9CQUFVUTtBQURNLEM7a0JBaUJkWixPIiwiZmlsZSI6Ikx1Z2dhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJy4vY3JlYXRlQ29udGV4dCdcblxuY2xhc3MgTHVnZ2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29sbGVjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBjcmVkZW50aWFsczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGx1Z2dhZ2U6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGNyZWRlbnRpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgbHVnZ2FnZTogY3JlYXRlQ29udGV4dChjb2xsZWN0aW9uLCBjcmVkZW50aWFscylcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdWdnYWdlXG5cbiJdfQ==