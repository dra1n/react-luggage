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

var _luggageSession = require('luggage-session');

var _luggageSession2 = _interopRequireDefault(_luggageSession);

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
    var apiKey = luggage.apiKey,
        redirectUrl = luggage.redirectUrl;


    var sessionManager = new SessionManager({ apiKey: apiKey, redirectUrl: redirectUrl });
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
  SessionManager: _luggageSession2.default,
  Backend: _luggage.DropboxBackend
};
LuggageCollection.contextTypes = {
  luggage: _propTypes2.default.shape({
    apiKey: _propTypes2.default.object,
    redirectUrl: _propTypes2.default.string
  })
};
exports.default = LuggageCollection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MdWdnYWdlQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJMdWdnYWdlQ29sbGVjdGlvbiIsInByb3BzIiwiY29udGV4dCIsIlNlc3Npb25NYW5hZ2VyIiwiQmFja2VuZCIsIm5hbWUiLCJsdWdnYWdlIiwiYXBpS2V5IiwicmVkaXJlY3RVcmwiLCJzZXNzaW9uTWFuYWdlciIsInRva2VuIiwiZ2V0VG9rZW4iLCJzdG9yZSIsImNvbGxlY3Rpb24iLCJzdGF0ZSIsIm9uIiwic2V0U3RhdGUiLCJkYXRhIiwicmVhZCIsImNsb25lRWxlbWVudCIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwic2hhcGUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsaUI7OztBQW9CSiw2QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSxzSUFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBQUEsUUFHbEJDLGNBSGtCLEdBR2dCRixLQUhoQixDQUdsQkUsY0FIa0I7QUFBQSxRQUdGQyxPQUhFLEdBR2dCSCxLQUhoQixDQUdGRyxPQUhFO0FBQUEsUUFHT0MsSUFIUCxHQUdnQkosS0FIaEIsQ0FHT0ksSUFIUDtBQUFBLFFBSWxCQyxPQUprQixHQUlOSixPQUpNLENBSWxCSSxPQUprQjtBQUFBLFFBS2xCQyxNQUxrQixHQUtNRCxPQUxOLENBS2xCQyxNQUxrQjtBQUFBLFFBS1ZDLFdBTFUsR0FLTUYsT0FMTixDQUtWRSxXQUxVOzs7QUFPMUIsUUFBTUMsaUJBQWlCLElBQUlOLGNBQUosQ0FBbUIsRUFBQ0ksY0FBRCxFQUFTQyx3QkFBVCxFQUFuQixDQUF2QjtBQUNBLFFBQU1FLFFBQVFELGVBQWVFLFFBQWYsRUFBZDs7QUFFQSxRQUFNQyxRQUFRLHNCQUFZLElBQUlSLE9BQUosQ0FBWU0sS0FBWixDQUFaLENBQWQ7QUFDQSxRQUFNRyxhQUFhRCxNQUFNQyxVQUFOLENBQWlCUixJQUFqQixDQUFuQjs7QUFFQSxVQUFLUyxLQUFMO0FBQ0VELDRCQURGO0FBRUVIO0FBRkYsT0FHR0wsSUFISCxFQUdVLEVBSFY7O0FBTUFRLGVBQVdFLEVBQVgsQ0FBYyxNQUFkLEVBQXNCLGdCQUFRO0FBQzVCLFlBQUtDLFFBQUwscUJBQ0dYLElBREgsRUFDVVksSUFEVjtBQUdELEtBSkQ7QUFuQjBCO0FBd0IzQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0gsS0FBTCxDQUFXRCxVQUFYLENBQXNCSyxJQUF0QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLGdCQUFNQyxZQUFOLENBQW1CLEtBQUtsQixLQUFMLENBQVdtQixRQUE5QixlQUE0QyxLQUFLbkIsS0FBakQsRUFBMkQsS0FBS2EsS0FBaEUsRUFBUDtBQUNEOzs7Ozs7QUFwREdkLGlCLENBQ0dxQixTLEdBQVk7QUFDakJELFlBQVUsb0JBQVVFLElBQVYsQ0FBZUMsVUFEUjtBQUVqQmxCLFFBQU0sb0JBQVVtQixNQUFWLENBQWlCRCxVQUZOO0FBR2pCcEIsa0JBQWdCLG9CQUFVc0IsSUFIVDtBQUlqQnJCLFdBQVMsb0JBQVVxQjtBQUpGLEM7QUFEZnpCLGlCLENBUUcwQixZLEdBQWU7QUFDcEJ2QiwwQ0FEb0I7QUFFcEJDO0FBRm9CLEM7QUFSbEJKLGlCLENBYUcyQixZLEdBQWU7QUFDcEJyQixXQUFTLG9CQUFVc0IsS0FBVixDQUFnQjtBQUN2QnJCLFlBQVEsb0JBQVVzQixNQURLO0FBRXZCckIsaUJBQWEsb0JBQVVnQjtBQUZBLEdBQWhCO0FBRFcsQztrQkEwQ1R4QixpQiIsImZpbGUiOiJMdWdnYWdlQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMdWdnYWdlLCB7IERyb3Bib3hCYWNrZW5kIH0gZnJvbSAnbHVnZ2FnZSdcbmltcG9ydCBTZXNzaW9uTWFuYWdlciBmcm9tICdsdWdnYWdlLXNlc3Npb24nXG5cbmNsYXNzIEx1Z2dhZ2VDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgU2Vzc2lvbk1hbmFnZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIEJhY2tlbmQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIFNlc3Npb25NYW5hZ2VyOiBTZXNzaW9uTWFuYWdlcixcbiAgICBCYWNrZW5kOiBEcm9wYm94QmFja2VuZFxuICB9XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBsdWdnYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXBpS2V5OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgcmVkaXJlY3RVcmw6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIGNvbnN0IHsgU2Vzc2lvbk1hbmFnZXIsIEJhY2tlbmQsIG5hbWUgfSA9IHByb3BzXG4gICAgY29uc3QgeyBsdWdnYWdlIH0gPSBjb250ZXh0XG4gICAgY29uc3QgeyBhcGlLZXksIHJlZGlyZWN0VXJsIH0gPSBsdWdnYWdlXG5cbiAgICBjb25zdCBzZXNzaW9uTWFuYWdlciA9IG5ldyBTZXNzaW9uTWFuYWdlcih7YXBpS2V5LCByZWRpcmVjdFVybH0pXG4gICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uTWFuYWdlci5nZXRUb2tlbigpXG5cbiAgICBjb25zdCBzdG9yZSA9IG5ldyBMdWdnYWdlKG5ldyBCYWNrZW5kKHRva2VuKSlcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gc3RvcmUuY29sbGVjdGlvbihuYW1lKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICB0b2tlbixcbiAgICAgIFtuYW1lXTogW11cbiAgICB9XG5cbiAgICBjb2xsZWN0aW9uLm9uKCdkYXRhJywgZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW25hbWVdOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLmNvbGxlY3Rpb24ucmVhZCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7Li4udGhpcy5wcm9wcywgLi4udGhpcy5zdGF0ZX0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTHVnZ2FnZUNvbGxlY3Rpb25cbiJdfQ==