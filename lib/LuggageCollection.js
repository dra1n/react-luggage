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
          Backend = _props.Backend;
      var luggage = this.context.luggage;
      var credentials = luggage.credentials,
          collectionName = luggage.collectionName,
          redirectUrl = luggage.redirectUrl;


      var sessionManager = new SessionManager(credentials, redirectUrl);
      var token = sessionManager.getToken();

      if (token) {
        var store = new _luggage2.default(new Backend(token));
        var collection = store.collection(collectionName);

        collection.read().then(function (c) {
          _this2.setState(_defineProperty({
            collection: collection,
            token: token
          }, collectionName, c));
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
    redirectUrl: _propTypes2.default.string,
    collectionName: _propTypes2.default.string
  })
};
exports.default = LuggageCollection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJMdWdnYWdlQ29sbGVjdGlvbiIsInByb3BzIiwiU2Vzc2lvbk1hbmFnZXIiLCJCYWNrZW5kIiwibHVnZ2FnZSIsImNvbnRleHQiLCJjcmVkZW50aWFscyIsImNvbGxlY3Rpb25OYW1lIiwicmVkaXJlY3RVcmwiLCJzZXNzaW9uTWFuYWdlciIsInRva2VuIiwiZ2V0VG9rZW4iLCJzdG9yZSIsImNvbGxlY3Rpb24iLCJyZWFkIiwidGhlbiIsInNldFN0YXRlIiwiYyIsImNsb25lRWxlbWVudCIsImNoaWxkcmVuIiwic3RhdGUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjb250ZXh0VHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7d0NBb0JnQjtBQUFBOztBQUFBLG1CQUNrQixLQUFLQyxLQUR2QjtBQUFBLFVBQ1ZDLGNBRFUsVUFDVkEsY0FEVTtBQUFBLFVBQ01DLE9BRE4sVUFDTUEsT0FETjtBQUFBLFVBRVZDLE9BRlUsR0FFRSxLQUFLQyxPQUZQLENBRVZELE9BRlU7QUFBQSxVQUdWRSxXQUhVLEdBR21DRixPQUhuQyxDQUdWRSxXQUhVO0FBQUEsVUFHR0MsY0FISCxHQUdtQ0gsT0FIbkMsQ0FHR0csY0FISDtBQUFBLFVBR21CQyxXQUhuQixHQUdtQ0osT0FIbkMsQ0FHbUJJLFdBSG5COzs7QUFLbEIsVUFBTUMsaUJBQWlCLElBQUlQLGNBQUosQ0FBbUJJLFdBQW5CLEVBQWdDRSxXQUFoQyxDQUF2QjtBQUNBLFVBQU1FLFFBQVFELGVBQWVFLFFBQWYsRUFBZDs7QUFFQSxVQUFJRCxLQUFKLEVBQVc7QUFDVCxZQUFJRSxRQUFRLHNCQUFZLElBQUlULE9BQUosQ0FBWU8sS0FBWixDQUFaLENBQVo7QUFDQSxZQUFJRyxhQUFhRCxNQUFNQyxVQUFOLENBQWlCTixjQUFqQixDQUFqQjs7QUFFQU0sbUJBQ0dDLElBREgsR0FFR0MsSUFGSCxDQUVRLGFBQUs7QUFDVCxpQkFBS0MsUUFBTDtBQUNFSCxrQ0FERjtBQUVFSDtBQUZGLGFBR0dILGNBSEgsRUFHb0JVLENBSHBCO0FBS0QsU0FSSDtBQVNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQU8sZ0JBQU1DLFlBQU4sQ0FBbUIsS0FBS2pCLEtBQUwsQ0FBV2tCLFFBQTlCLGVBQTRDLEtBQUtsQixLQUFqRCxFQUEyRCxLQUFLbUIsS0FBaEUsRUFBUDtBQUNEOzs7Ozs7QUE5Q0dwQixpQixDQUNHcUIsUyxHQUFZO0FBQ2pCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDLFVBRFI7QUFFakJyQixrQkFBZ0Isb0JBQVVzQixJQUZUO0FBR2pCckIsV0FBUyxvQkFBVXFCO0FBSEYsQztBQURmeEIsaUIsQ0FPR3lCLFksR0FBZTtBQUNwQnZCLDBDQURvQjtBQUVwQkM7QUFGb0IsQztBQVBsQkgsaUIsQ0FZRzBCLFksR0FBZTtBQUNwQnRCLFdBQVMsb0JBQVV1QixLQUFWLENBQWdCO0FBQ3ZCckIsaUJBQWEsb0JBQVVzQixNQURBO0FBRXZCcEIsaUJBQWEsb0JBQVVxQixNQUZBO0FBR3ZCdEIsb0JBQWdCLG9CQUFVc0I7QUFISCxHQUFoQjtBQURXLEM7a0JBcUNUN0IsaUIiLCJmaWxlIjoiTHVnZ2FnZUNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTHVnZ2FnZSwgeyBEcm9wYm94QmFja2VuZCB9IGZyb20gJ2x1Z2dhZ2UnXG5pbXBvcnQgU2Vzc2lvbk1hbmFnZXIgZnJvbSAnLi9TZXNzaW9uTWFuYWdlcidcblxuY2xhc3MgTHVnZ2FnZUNvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIFNlc3Npb25NYW5hZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBCYWNrZW5kOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBTZXNzaW9uTWFuYWdlcjogU2Vzc2lvbk1hbmFnZXIsXG4gICAgQmFja2VuZDogRHJvcGJveEJhY2tlbmRcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbHVnZ2FnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNyZWRlbnRpYWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgcmVkaXJlY3RVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjb2xsZWN0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IFNlc3Npb25NYW5hZ2VyLCBCYWNrZW5kIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBsdWdnYWdlIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCB7IGNyZWRlbnRpYWxzLCBjb2xsZWN0aW9uTmFtZSwgcmVkaXJlY3RVcmwgfSA9IGx1Z2dhZ2VcblxuICAgIGNvbnN0IHNlc3Npb25NYW5hZ2VyID0gbmV3IFNlc3Npb25NYW5hZ2VyKGNyZWRlbnRpYWxzLCByZWRpcmVjdFVybClcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25NYW5hZ2VyLmdldFRva2VuKClcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgbGV0IHN0b3JlID0gbmV3IEx1Z2dhZ2UobmV3IEJhY2tlbmQodG9rZW4pKVxuICAgICAgbGV0IGNvbGxlY3Rpb24gPSBzdG9yZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxuXG4gICAgICBjb2xsZWN0aW9uXG4gICAgICAgIC5yZWFkKClcbiAgICAgICAgLnRoZW4oYyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBbY29sbGVjdGlvbk5hbWVdOiBjXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7Li4udGhpcy5wcm9wcywgLi4udGhpcy5zdGF0ZX0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTHVnZ2FnZUNvbGxlY3Rpb25cbiJdfQ==