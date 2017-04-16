'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withCollection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LuggageCollection = require('./LuggageCollection');

var _LuggageCollection2 = _interopRequireDefault(_LuggageCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withCollection(Komponent) {
  var WithCollection = function (_Component) {
    _inherits(WithCollection, _Component);

    function WithCollection() {
      _classCallCheck(this, WithCollection);

      return _possibleConstructorReturn(this, (WithCollection.__proto__ || Object.getPrototypeOf(WithCollection)).apply(this, arguments));
    }

    _createClass(WithCollection, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _LuggageCollection2.default,
          null,
          _react2.default.createElement(Komponent, this.props)
        );
      }
    }]);

    return WithCollection;
  }(_react.Component);

  return WithCollection;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aXRoQ29sbGVjdGlvbiIsIktvbXBvbmVudCIsIldpdGhDb2xsZWN0aW9uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUd3QkEsYzs7QUFIeEI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFBQSxNQUMxQ0MsY0FEMEM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQUVyQztBQUNQLGVBQ0U7QUFBQTtBQUFBO0FBQ0Usd0NBQUMsU0FBRCxFQUFlLEtBQUtDLEtBQXBCO0FBREYsU0FERjtBQUtEO0FBUjZDOztBQUFBO0FBQUE7O0FBV2hELFNBQU9ELGNBQVA7QUFDRCIsImZpbGUiOiJ3aXRoQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMdWdnYWdlQ29sbGVjdGlvbiBmcm9tICcuL0x1Z2dhZ2VDb2xsZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQ29sbGVjdGlvbihLb21wb25lbnQpIHtcbiAgY2xhc3MgV2l0aENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMdWdnYWdlQ29sbGVjdGlvbj5cbiAgICAgICAgICA8S29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0x1Z2dhZ2VDb2xsZWN0aW9uPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXaXRoQ29sbGVjdGlvblxufVxuIl19