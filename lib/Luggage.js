'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
          apiKey = _props.apiKey,
          redirectUrl = _props.redirectUrl;


      return {
        luggage: { apiKey: apiKey, redirectUrl: redirectUrl }
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
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]).isRequired,
  apiKey: _propTypes2.default.string.isRequired,
  redirectUrl: _propTypes2.default.string
};
Luggage.childContextTypes = {
  luggage: _propTypes2.default.object
};
exports.default = Luggage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlLmpzIl0sIm5hbWVzIjpbIkx1Z2dhZ2UiLCJwcm9wcyIsImFwaUtleSIsInJlZGlyZWN0VXJsIiwibHVnZ2FnZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibm9kZSIsImFycmF5T2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OztzQ0FjYztBQUFBLG1CQUNnQixLQUFLQyxLQURyQjtBQUFBLFVBQ1JDLE1BRFEsVUFDUkEsTUFEUTtBQUFBLFVBQ0FDLFdBREEsVUFDQUEsV0FEQTs7O0FBR2hCLGFBQU87QUFDTEMsaUJBQVMsRUFBRUYsY0FBRixFQUFVQyx3QkFBVjtBQURKLE9BQVA7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRixLQUFMLENBQVdJLFFBQWxCO0FBQ0Q7Ozs7OztBQXhCR0wsTyxDQUNHTSxTLEdBQVk7QUFDakJELFlBQVUsb0JBQVVFLFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVDLElBRGtCLEVBRTVCLG9CQUFVQyxPQUFWLENBQWtCLG9CQUFVRCxJQUE1QixDQUY0QixDQUFwQixFQUdQRSxVQUpjO0FBS2pCUixVQUFRLG9CQUFVUyxNQUFWLENBQWlCRCxVQUxSO0FBTWpCUCxlQUFhLG9CQUFVUTtBQU5OLEM7QUFEZlgsTyxDQVVHWSxpQixHQUFvQjtBQUN6QlIsV0FBUyxvQkFBVVM7QUFETSxDO2tCQWlCZGIsTyIsImZpbGUiOiJMdWdnYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIEx1Z2dhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBhcGlLZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZWRpcmVjdFVybDogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGx1Z2dhZ2U6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IGFwaUtleSwgcmVkaXJlY3RVcmwgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBsdWdnYWdlOiB7IGFwaUtleSwgcmVkaXJlY3RVcmwgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx1Z2dhZ2VcblxuIl19