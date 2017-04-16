'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undefined: 0 */

var parseQueryString = exports.parseQueryString = function parseQueryString(queryString) {
  var ret = Object.create(null);

  if (typeof queryString !== 'string') {
    return ret;
  }

  var str = queryString.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return ret;
  }

  str.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    // Firefox (pre 40) decodes `%3D` to `=`
    // https://github.com/sindresorhus/query-string/pull/37
    var key = decodeURIComponent(parts.shift());
    var val = parts.length > 0 ? parts.join('=') : undefined;

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    var value = val === undefined ? null : decodeURIComponent(val);

    if (ret[key] === undefined) {
      ret[key] = value;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(value);
    } else {
      ret[key] = [ret[key], value];
    }
  });

  return ret;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJwYXJzZVF1ZXJ5U3RyaW5nIiwicmV0IiwiT2JqZWN0IiwiY3JlYXRlIiwicXVlcnlTdHJpbmciLCJzdHIiLCJ0cmltIiwicmVwbGFjZSIsInNwbGl0IiwiZm9yRWFjaCIsInBhcmFtIiwicGFydHMiLCJrZXkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzaGlmdCIsInZhbCIsImxlbmd0aCIsImpvaW4iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsOENBQW1CLFNBQW5CQSxnQkFBbUIsY0FBZTtBQUM3QyxNQUFNQyxNQUFNQyxPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFaOztBQUVBLE1BQUksT0FBT0MsV0FBUCxLQUF1QixRQUEzQixFQUFxQztBQUNuQyxXQUFPSCxHQUFQO0FBQ0Q7O0FBRUQsTUFBTUksTUFBTUQsWUFBWUUsSUFBWixHQUFtQkMsT0FBbkIsQ0FBMkIsV0FBM0IsRUFBd0MsRUFBeEMsQ0FBWjs7QUFFQSxNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNSLFdBQU9KLEdBQVA7QUFDRDs7QUFFREksTUFBSUcsS0FBSixDQUFVLEdBQVYsRUFBZUMsT0FBZixDQUF1QixVQUFVQyxLQUFWLEVBQWlCO0FBQ3RDLFFBQU1DLFFBQVFELE1BQU1ILE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLEVBQTBCQyxLQUExQixDQUFnQyxHQUFoQyxDQUFkO0FBQ0E7QUFDQTtBQUNBLFFBQU1JLE1BQU1DLG1CQUFtQkYsTUFBTUcsS0FBTixFQUFuQixDQUFaO0FBQ0EsUUFBTUMsTUFBTUosTUFBTUssTUFBTixHQUFlLENBQWYsR0FBbUJMLE1BQU1NLElBQU4sQ0FBVyxHQUFYLENBQW5CLEdBQXFDQyxTQUFqRDs7QUFFQTtBQUNBO0FBQ0EsUUFBTUMsUUFBUUosUUFBUUcsU0FBUixHQUFvQixJQUFwQixHQUEyQkwsbUJBQW1CRSxHQUFuQixDQUF6Qzs7QUFFQSxRQUFJZCxJQUFJVyxHQUFKLE1BQWFNLFNBQWpCLEVBQTRCO0FBQzFCakIsVUFBSVcsR0FBSixJQUFXTyxLQUFYO0FBQ0QsS0FGRCxNQUVPLElBQUlDLE1BQU1DLE9BQU4sQ0FBY3BCLElBQUlXLEdBQUosQ0FBZCxDQUFKLEVBQTZCO0FBQ2xDWCxVQUFJVyxHQUFKLEVBQVNVLElBQVQsQ0FBY0gsS0FBZDtBQUNELEtBRk0sTUFFQTtBQUNMbEIsVUFBSVcsR0FBSixJQUFXLENBQUNYLElBQUlXLEdBQUosQ0FBRCxFQUFXTyxLQUFYLENBQVg7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxTQUFPbEIsR0FBUDtBQUNELENBbENNIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXVuZGVmaW5lZDogMCAqL1xuXG5leHBvcnQgY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nID0+IHtcbiAgY29uc3QgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmICh0eXBlb2YgcXVlcnlTdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgY29uc3Qgc3RyID0gcXVlcnlTdHJpbmcudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJylcblxuICBpZiAoIXN0cikge1xuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIHN0ci5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpXG4gICAgLy8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcbiAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHMuc2hpZnQoKSlcbiAgICBjb25zdCB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkXG5cbiAgICAvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuICAgIC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcbiAgICBjb25zdCB2YWx1ZSA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpXG5cbiAgICBpZiAocmV0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcbiAgICAgIHJldFtrZXldLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldFtrZXldID0gW3JldFtrZXldLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJldFxufVxuIl19