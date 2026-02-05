"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AgendaResourceEvents = _interopRequireDefault(require("./AgendaResourceEvents"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function AgendaView(props) {
  var schedulerData = props.schedulerData;
  var config = schedulerData.config,
    renderData = schedulerData.renderData;
  var agendaResourceTableWidth = schedulerData.getResourceTableWidth();
  var tableHeaderHeight = schedulerData.getTableHeaderHeight();
  var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
  var agendaViewHeader = config.agendaViewHeader;
  var resourceEventsList = renderData.map(function (item) {
    return /*#__PURE__*/(0, _react.createElement)(_AgendaResourceEvents["default"], _objectSpread(_objectSpread({}, props), {}, {
      resourceEvents: item,
      key: item.slotId
    }));
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
        className: "scheduler-table",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
            style: {
              height: tableHeaderHeight
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
              style: {
                width: agendaResourceTableWidth
              },
              className: "header3-text",
              children: resourceName
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
              className: "header3-text",
              children: agendaViewHeader
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
          children: resourceEventsList
        })]
      })
    })
  });
}
AgendaView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  slotClickedFunc: _propTypes["default"].func
};
var _default = exports["default"] = AgendaView;