'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LuggageCollection = require('./LuggageCollection');

var _LuggageCollection2 = _interopRequireDefault(_LuggageCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withCollection = function withCollection(collectionName) {
  return function (Komponent) {
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
            { name: collectionName },
            _react2.default.createElement(Komponent, this.props)
          );
        }
      }]);

      return WithCollection;
    }(_react.Component);

    return WithCollection;
  };
};

exports.default = withCollection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aXRoQ29sbGVjdGlvbiIsIldpdGhDb2xsZWN0aW9uIiwiY29sbGVjdGlvbk5hbWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBa0IscUJBQWE7QUFBQSxRQUM5Q0MsY0FEOEM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQUV6QztBQUNQLGlCQUNFO0FBQUE7QUFBQSxjQUFtQixNQUFNQyxjQUF6QjtBQUNFLDBDQUFDLFNBQUQsRUFBZSxLQUFLQyxLQUFwQjtBQURGLFdBREY7QUFLRDtBQVJpRDs7QUFBQTtBQUFBOztBQVdwRCxXQUFPRixjQUFQO0FBQ0QsR0Fac0I7QUFBQSxDQUF2Qjs7a0JBY2VELGMiLCJmaWxlIjoid2l0aENvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTHVnZ2FnZUNvbGxlY3Rpb24gZnJvbSAnLi9MdWdnYWdlQ29sbGVjdGlvbidcblxuY29uc3Qgd2l0aENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uTmFtZSA9PiBLb21wb25lbnQgPT4ge1xuICBjbGFzcyBXaXRoQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEx1Z2dhZ2VDb2xsZWN0aW9uIG5hbWU9e2NvbGxlY3Rpb25OYW1lfT5cbiAgICAgICAgICA8S29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0x1Z2dhZ2VDb2xsZWN0aW9uPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXaXRoQ29sbGVjdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29sbGVjdGlvblxuIl19