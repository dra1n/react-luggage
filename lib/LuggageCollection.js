'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _luggage = require('luggage');

var _luggage2 = _interopRequireDefault(_luggage);

var _SessionManager = require('./SessionManager');

var _SessionManager2 = _interopRequireDefault(_SessionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LuggageCollection = function (_Component) {
  _inherits(LuggageCollection, _Component);

  function LuggageCollection(props, context) {
    _classCallCheck(this, LuggageCollection);

    var _this = _possibleConstructorReturn(this, (LuggageCollection.__proto__ || Object.getPrototypeOf(LuggageCollection)).call(this, props, context));

    var SessionManager = props.SessionManager,
        Backend = props.Backend,
        name = props.name;
    var luggage = context.luggage;
    var credentials = luggage.credentials,
        redirectUrl = luggage.redirectUrl;


    var sessionManager = new SessionManager(credentials, redirectUrl);
    var token = sessionManager.getToken();

    var store = new _luggage2.default(new Backend(token));
    var collection = store.collection(name);

    _this.state = _defineProperty({
      collection: collection,
      token: token
    }, name, []);

    collection.on('data', function (data) {
      _this.setState(_defineProperty({}, name, data));
    });
    return _this;
  }

  _createClass(LuggageCollection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.collection.read();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(this.props.children, _extends({}, this.props, this.state));
    }
  }]);

  return LuggageCollection;
}(_react.Component);

LuggageCollection.propTypes = {
  children: _propTypes2.default.node.isRequired,
  name: _propTypes2.default.string.isRequired,
  SessionManager: _propTypes2.default.func,
  Backend: _propTypes2.default.func
};
LuggageCollection.defaultProps = {
  SessionManager: _SessionManager2.default,
  Backend: _luggage.DropboxBackend
};
LuggageCollection.contextTypes = {
  luggage: _propTypes2.default.shape({
    credentials: _propTypes2.default.object,
    redirectUrl: _propTypes2.default.string
  })
};
exports.default = LuggageCollection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJMdWdnYWdlQ29sbGVjdGlvbiIsInByb3BzIiwiY29udGV4dCIsIlNlc3Npb25NYW5hZ2VyIiwiQmFja2VuZCIsIm5hbWUiLCJsdWdnYWdlIiwiY3JlZGVudGlhbHMiLCJyZWRpcmVjdFVybCIsInNlc3Npb25NYW5hZ2VyIiwidG9rZW4iLCJnZXRUb2tlbiIsInN0b3JlIiwiY29sbGVjdGlvbiIsInN0YXRlIiwib24iLCJzZXRTdGF0ZSIsImRhdGEiLCJyZWFkIiwiY2xvbmVFbGVtZW50IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjb250ZXh0VHlwZXMiLCJzaGFwZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7O0FBb0JKLDZCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBLHNJQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFBQSxRQUdsQkMsY0FIa0IsR0FHZ0JGLEtBSGhCLENBR2xCRSxjQUhrQjtBQUFBLFFBR0ZDLE9BSEUsR0FHZ0JILEtBSGhCLENBR0ZHLE9BSEU7QUFBQSxRQUdPQyxJQUhQLEdBR2dCSixLQUhoQixDQUdPSSxJQUhQO0FBQUEsUUFJbEJDLE9BSmtCLEdBSU5KLE9BSk0sQ0FJbEJJLE9BSmtCO0FBQUEsUUFLbEJDLFdBTGtCLEdBS1dELE9BTFgsQ0FLbEJDLFdBTGtCO0FBQUEsUUFLTEMsV0FMSyxHQUtXRixPQUxYLENBS0xFLFdBTEs7OztBQU8xQixRQUFNQyxpQkFBaUIsSUFBSU4sY0FBSixDQUFtQkksV0FBbkIsRUFBZ0NDLFdBQWhDLENBQXZCO0FBQ0EsUUFBTUUsUUFBUUQsZUFBZUUsUUFBZixFQUFkOztBQUVBLFFBQU1DLFFBQVEsc0JBQVksSUFBSVIsT0FBSixDQUFZTSxLQUFaLENBQVosQ0FBZDtBQUNBLFFBQU1HLGFBQWFELE1BQU1DLFVBQU4sQ0FBaUJSLElBQWpCLENBQW5COztBQUVBLFVBQUtTLEtBQUw7QUFDRUQsNEJBREY7QUFFRUg7QUFGRixPQUdHTCxJQUhILEVBR1UsRUFIVjs7QUFNQVEsZUFBV0UsRUFBWCxDQUFjLE1BQWQsRUFBc0IsZ0JBQVE7QUFDNUIsWUFBS0MsUUFBTCxxQkFDR1gsSUFESCxFQUNVWSxJQURWO0FBR0QsS0FKRDtBQW5CMEI7QUF3QjNCOzs7O3dDQUVtQjtBQUNsQixXQUFLSCxLQUFMLENBQVdELFVBQVgsQ0FBc0JLLElBQXRCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sZ0JBQU1DLFlBQU4sQ0FBbUIsS0FBS2xCLEtBQUwsQ0FBV21CLFFBQTlCLGVBQTRDLEtBQUtuQixLQUFqRCxFQUEyRCxLQUFLYSxLQUFoRSxFQUFQO0FBQ0Q7Ozs7OztBQXBER2QsaUIsQ0FDR3FCLFMsR0FBWTtBQUNqQkQsWUFBVSxvQkFBVUUsSUFBVixDQUFlQyxVQURSO0FBRWpCbEIsUUFBTSxvQkFBVW1CLE1BQVYsQ0FBaUJELFVBRk47QUFHakJwQixrQkFBZ0Isb0JBQVVzQixJQUhUO0FBSWpCckIsV0FBUyxvQkFBVXFCO0FBSkYsQztBQURmekIsaUIsQ0FRRzBCLFksR0FBZTtBQUNwQnZCLDBDQURvQjtBQUVwQkM7QUFGb0IsQztBQVJsQkosaUIsQ0FhRzJCLFksR0FBZTtBQUNwQnJCLFdBQVMsb0JBQVVzQixLQUFWLENBQWdCO0FBQ3ZCckIsaUJBQWEsb0JBQVVzQixNQURBO0FBRXZCckIsaUJBQWEsb0JBQVVnQjtBQUZBLEdBQWhCO0FBRFcsQztrQkEwQ1R4QixpQiIsImZpbGUiOiJMdWdnYWdlQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMdWdnYWdlLCB7IERyb3Bib3hCYWNrZW5kIH0gZnJvbSAnbHVnZ2FnZSdcbmltcG9ydCBTZXNzaW9uTWFuYWdlciBmcm9tICcuL1Nlc3Npb25NYW5hZ2VyJ1xuXG5jbGFzcyBMdWdnYWdlQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFNlc3Npb25NYW5hZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBCYWNrZW5kOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBTZXNzaW9uTWFuYWdlcjogU2Vzc2lvbk1hbmFnZXIsXG4gICAgQmFja2VuZDogRHJvcGJveEJhY2tlbmRcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNyZWRlbnRpYWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgcmVkaXJlY3RVcmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIGNvbnN0IHsgU2Vzc2lvbk1hbmFnZXIsIEJhY2tlbmQsIG5hbWUgfSA9IHByb3BzXG4gICAgY29uc3QgeyBsdWdnYWdlIH0gPSBjb250ZXh0XG4gICAgY29uc3QgeyBjcmVkZW50aWFscywgcmVkaXJlY3RVcmwgfSA9IGx1Z2dhZ2VcblxuICAgIGNvbnN0IHNlc3Npb25NYW5hZ2VyID0gbmV3IFNlc3Npb25NYW5hZ2VyKGNyZWRlbnRpYWxzLCByZWRpcmVjdFVybClcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25NYW5hZ2VyLmdldFRva2VuKClcblxuICAgIGNvbnN0IHN0b3JlID0gbmV3IEx1Z2dhZ2UobmV3IEJhY2tlbmQodG9rZW4pKVxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBzdG9yZS5jb2xsZWN0aW9uKG5hbWUpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHRva2VuLFxuICAgICAgW25hbWVdOiBbXVxuICAgIH1cblxuICAgIGNvbGxlY3Rpb24ub24oJ2RhdGEnLCBkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbbmFtZV06IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc3RhdGUuY29sbGVjdGlvbi5yZWFkKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsuLi50aGlzLnByb3BzLCAuLi50aGlzLnN0YXRlfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdWdnYWdlQ29sbGVjdGlvblxuIl19