"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AgendaEventItem = _interopRequireDefault(require("./AgendaEventItem"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function AgendaResourceEvents(props) {
  var schedulerData = props.schedulerData,
    resourceEvents = props.resourceEvents,
    slotClickedFunc = props.slotClickedFunc,
    slotItemTemplateResolver = props.slotItemTemplateResolver;
  var startDate = schedulerData.startDate,
    endDate = schedulerData.endDate,
    config = schedulerData.config,
    localeDayjs = schedulerData.localeDayjs;
  var width = schedulerData.getResourceTableWidth() - 2;
  var events = resourceEvents.headerItems.flatMap(function (item) {
    var start = localeDayjs(new Date(startDate));
    var end = localeDayjs(endDate).add(1, 'days');
    var headerStart = localeDayjs(new Date(item.start));
    var headerEnd = localeDayjs(new Date(item.end));
    if (start === headerStart && end === headerEnd) {
      return item.events.map(function (evt) {
        var durationStart = localeDayjs(new Date(startDate));
        var durationEnd = localeDayjs(endDate).add(1, 'days');
        var eventStart = localeDayjs(evt.eventItem.start);
        var eventEnd = localeDayjs(evt.eventItem.end);
        var isStart = eventStart >= durationStart;
        var isEnd = eventEnd < durationEnd;
        return /*#__PURE__*/(0, _react.createElement)(_AgendaEventItem["default"], _objectSpread(_objectSpread({}, props), {}, {
          key: evt.eventItem.id,
          eventItem: evt.eventItem,
          isStart: isStart,
          isEnd: isEnd
        }));
      });
    }
    return [];
  });
  var slotItemContent = slotClickedFunc ? /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "rbs-txt-btn-dis",
    type: "button",
    onClick: function onClick() {
      return slotClickedFunc(schedulerData, resourceEvents);
    },
    children: resourceEvents.slotName
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: resourceEvents.slotName
  });
  var slotItem = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: width
    },
    title: resourceEvents.slotTitle || resourceEvents.slotName,
    className: "overflow-text header2-text",
    children: slotItemContent
  });
  if (slotItemTemplateResolver) {
    var temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, 'overflow-text header2-text');
    if (temp) {
      slotItem = temp;
    }
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
    style: {
      minHeight: config.eventItemLineHeight + 2
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
      "data-resource-id": resourceEvents.slotId,
      children: slotItem
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "day-event-container",
        children: events
      })
    })]
  });
}
AgendaResourceEvents.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  resourceEvents: _propTypes["default"].object.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  slotClickedFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = AgendaResourceEvents;