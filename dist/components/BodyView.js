"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function BodyView(_ref) {
  var schedulerData = _ref.schedulerData;
  var renderData = schedulerData.renderData,
    headers = schedulerData.headers,
    config = schedulerData.config,
    behaviors = schedulerData.behaviors;
  var width = schedulerData.getContentCellWidth();
  var tableRows = renderData.filter(function (o) {
    return o.render;
  }).map(function (_ref2) {
    var slotId = _ref2.slotId,
      groupOnly = _ref2.groupOnly,
      rowHeight = _ref2.rowHeight;
    var rowCells = headers.map(function (header, index) {
      var key = "".concat(slotId, "_").concat(header.time);
      var style = index === headers.length - 1 ? {} : {
        width: width
      };
      if (header.nonWorkingTime) {
        style.backgroundColor = config.nonWorkingTimeBodyBgColor;
      }
      if (groupOnly) {
        style.backgroundColor = config.groupOnlySlotColor;
      }
      if (behaviors.getNonAgendaViewBodyCellBgColorFunc) {
        var cellBgColor = behaviors.getNonAgendaViewBodyCellBgColorFunc(schedulerData, slotId, header);
        if (cellBgColor) {
          style.backgroundColor = cellBgColor;
        }
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
        style: style,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})
      }, key);
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      style: {
        height: rowHeight
      },
      children: rowCells
    }, slotId);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
    children: tableRows
  });
}
BodyView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = BodyView;