'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandRowHeaderColumn = function (_Component) {
  _inherits(ExpandRowHeaderColumn, _Component);

  function ExpandRowHeaderColumn() {
    _classCallCheck(this, ExpandRowHeaderColumn);

    return _possibleConstructorReturn(this, (ExpandRowHeaderColumn.__proto__ || Object.getPrototypeOf(ExpandRowHeaderColumn)).apply(this, arguments));
  }

  _createClass(ExpandRowHeaderColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
          className: 'react-bs-table-expand-cell',
          'data-is-only-head': false },
        this.props.children
      );
    }
  }]);

  return ExpandRowHeaderColumn;
}(_react.Component);

ExpandRowHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  rowCount: _react.PropTypes.number
};
var _default = ExpandRowHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExpandRowHeaderColumn, 'ExpandRowHeaderColumn', '/Users/thanh/work/projects/goalify/libraries/react-bootstrap-table/src/ExpandRowHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thanh/work/projects/goalify/libraries/react-bootstrap-table/src/ExpandRowHeaderColumn.js');
}();

;