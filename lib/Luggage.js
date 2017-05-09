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
          credentials = _props.credentials,
          redirectUrl = _props.redirectUrl;


      return {
        luggage: { credentials: credentials, redirectUrl: redirectUrl }
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
  credentials: _propTypes2.default.object,
  redirectUrl: _propTypes2.default.string
};
Luggage.childContextTypes = {
  luggage: _propTypes2.default.object
};
exports.default = Luggage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlLmpzIl0sIm5hbWVzIjpbIkx1Z2dhZ2UiLCJwcm9wcyIsImNyZWRlbnRpYWxzIiwicmVkaXJlY3RVcmwiLCJsdWdnYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJub2RlIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJjaGlsZENvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7O3NDQWNjO0FBQUEsbUJBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDUkMsV0FEUSxVQUNSQSxXQURRO0FBQUEsVUFDS0MsV0FETCxVQUNLQSxXQURMOzs7QUFHaEIsYUFBTztBQUNMQyxpQkFBUyxFQUFFRix3QkFBRixFQUFlQyx3QkFBZjtBQURKLE9BQVA7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRixLQUFMLENBQVdJLFFBQWxCO0FBQ0Q7Ozs7OztBQXhCR0wsTyxDQUNHTSxTLEdBQVk7QUFDakJELFlBQVUsb0JBQVVFLFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVDLElBRGtCLEVBRTVCLG9CQUFVQyxPQUFWLENBQWtCLG9CQUFVRCxJQUE1QixDQUY0QixDQUFwQixFQUdQRSxVQUpjO0FBS2pCUixlQUFhLG9CQUFVUyxNQUxOO0FBTWpCUixlQUFhLG9CQUFVUztBQU5OLEM7QUFEZlosTyxDQVVHYSxpQixHQUFvQjtBQUN6QlQsV0FBUyxvQkFBVU87QUFETSxDO2tCQWlCZFgsTyIsImZpbGUiOiJMdWdnYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIEx1Z2dhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBjcmVkZW50aWFsczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByZWRpcmVjdFVybDogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGx1Z2dhZ2U6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IGNyZWRlbnRpYWxzLCByZWRpcmVjdFVybCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGx1Z2dhZ2U6IHsgY3JlZGVudGlhbHMsIHJlZGlyZWN0VXJsIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdWdnYWdlXG5cbiJdfQ==