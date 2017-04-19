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

  function LuggageCollection() {
    _classCallCheck(this, LuggageCollection);

    return _possibleConstructorReturn(this, (LuggageCollection.__proto__ || Object.getPrototypeOf(LuggageCollection)).apply(this, arguments));
  }

  _createClass(LuggageCollection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          SessionManager = _props.SessionManager,
          Backend = _props.Backend,
          name = _props.name;
      var luggage = this.context.luggage;
      var credentials = luggage.credentials,
          redirectUrl = luggage.redirectUrl;


      var sessionManager = new SessionManager(credentials, redirectUrl);
      var token = sessionManager.getToken();

      if (token) {
        var store = new _luggage2.default(new Backend(token));
        var collection = store.collection(name);

        collection.read().then(function (c) {
          _this2.setState(_defineProperty({
            collection: collection,
            token: token
          }, name, c));
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJMdWdnYWdlQ29sbGVjdGlvbiIsInByb3BzIiwiU2Vzc2lvbk1hbmFnZXIiLCJCYWNrZW5kIiwibmFtZSIsImx1Z2dhZ2UiLCJjb250ZXh0IiwiY3JlZGVudGlhbHMiLCJyZWRpcmVjdFVybCIsInNlc3Npb25NYW5hZ2VyIiwidG9rZW4iLCJnZXRUb2tlbiIsInN0b3JlIiwiY29sbGVjdGlvbiIsInJlYWQiLCJ0aGVuIiwic2V0U3RhdGUiLCJjIiwiY2xvbmVFbGVtZW50IiwiY2hpbGRyZW4iLCJzdGF0ZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyIsInNoYXBlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGlCOzs7Ozs7Ozs7Ozt3Q0FvQmdCO0FBQUE7O0FBQUEsbUJBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDVkMsY0FEVSxVQUNWQSxjQURVO0FBQUEsVUFDTUMsT0FETixVQUNNQSxPQUROO0FBQUEsVUFDZUMsSUFEZixVQUNlQSxJQURmO0FBQUEsVUFFVkMsT0FGVSxHQUVFLEtBQUtDLE9BRlAsQ0FFVkQsT0FGVTtBQUFBLFVBR1ZFLFdBSFUsR0FHbUJGLE9BSG5CLENBR1ZFLFdBSFU7QUFBQSxVQUdHQyxXQUhILEdBR21CSCxPQUhuQixDQUdHRyxXQUhIOzs7QUFLbEIsVUFBTUMsaUJBQWlCLElBQUlQLGNBQUosQ0FBbUJLLFdBQW5CLEVBQWdDQyxXQUFoQyxDQUF2QjtBQUNBLFVBQU1FLFFBQVFELGVBQWVFLFFBQWYsRUFBZDs7QUFFQSxVQUFJRCxLQUFKLEVBQVc7QUFDVCxZQUFJRSxRQUFRLHNCQUFZLElBQUlULE9BQUosQ0FBWU8sS0FBWixDQUFaLENBQVo7QUFDQSxZQUFJRyxhQUFhRCxNQUFNQyxVQUFOLENBQWlCVCxJQUFqQixDQUFqQjs7QUFFQVMsbUJBQ0dDLElBREgsR0FFR0MsSUFGSCxDQUVRLGFBQUs7QUFDVCxpQkFBS0MsUUFBTDtBQUNFSCxrQ0FERjtBQUVFSDtBQUZGLGFBR0dOLElBSEgsRUFHVWEsQ0FIVjtBQUtELFNBUkg7QUFTRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUFPLGdCQUFNQyxZQUFOLENBQW1CLEtBQUtqQixLQUFMLENBQVdrQixRQUE5QixlQUE0QyxLQUFLbEIsS0FBakQsRUFBMkQsS0FBS21CLEtBQWhFLEVBQVA7QUFDRDs7Ozs7O0FBOUNHcEIsaUIsQ0FDR3FCLFMsR0FBWTtBQUNqQkYsWUFBVSxvQkFBVUcsSUFBVixDQUFlQyxVQURSO0FBRWpCbkIsUUFBTSxvQkFBVW9CLE1BQVYsQ0FBaUJELFVBRk47QUFHakJyQixrQkFBZ0Isb0JBQVV1QixJQUhUO0FBSWpCdEIsV0FBUyxvQkFBVXNCO0FBSkYsQztBQURmekIsaUIsQ0FRRzBCLFksR0FBZTtBQUNwQnhCLDBDQURvQjtBQUVwQkM7QUFGb0IsQztBQVJsQkgsaUIsQ0FhRzJCLFksR0FBZTtBQUNwQnRCLFdBQVMsb0JBQVV1QixLQUFWLENBQWdCO0FBQ3ZCckIsaUJBQWEsb0JBQVVzQixNQURBO0FBRXZCckIsaUJBQWEsb0JBQVVnQjtBQUZBLEdBQWhCO0FBRFcsQztrQkFvQ1R4QixpQiIsImZpbGUiOiJMdWdnYWdlQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMdWdnYWdlLCB7IERyb3Bib3hCYWNrZW5kIH0gZnJvbSAnbHVnZ2FnZSdcbmltcG9ydCBTZXNzaW9uTWFuYWdlciBmcm9tICcuL1Nlc3Npb25NYW5hZ2VyJ1xuXG5jbGFzcyBMdWdnYWdlQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFNlc3Npb25NYW5hZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBCYWNrZW5kOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBTZXNzaW9uTWFuYWdlcjogU2Vzc2lvbk1hbmFnZXIsXG4gICAgQmFja2VuZDogRHJvcGJveEJhY2tlbmRcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNyZWRlbnRpYWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgcmVkaXJlY3RVcmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBTZXNzaW9uTWFuYWdlciwgQmFja2VuZCwgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgbHVnZ2FnZSB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgeyBjcmVkZW50aWFscywgcmVkaXJlY3RVcmwgfSA9IGx1Z2dhZ2VcblxuICAgIGNvbnN0IHNlc3Npb25NYW5hZ2VyID0gbmV3IFNlc3Npb25NYW5hZ2VyKGNyZWRlbnRpYWxzLCByZWRpcmVjdFVybClcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25NYW5hZ2VyLmdldFRva2VuKClcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgbGV0IHN0b3JlID0gbmV3IEx1Z2dhZ2UobmV3IEJhY2tlbmQodG9rZW4pKVxuICAgICAgbGV0IGNvbGxlY3Rpb24gPSBzdG9yZS5jb2xsZWN0aW9uKG5hbWUpXG5cbiAgICAgIGNvbGxlY3Rpb25cbiAgICAgICAgLnJlYWQoKVxuICAgICAgICAudGhlbihjID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIFtuYW1lXTogY1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwgey4uLnRoaXMucHJvcHMsIC4uLnRoaXMuc3RhdGV9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx1Z2dhZ2VDb2xsZWN0aW9uXG4iXX0=