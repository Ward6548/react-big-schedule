"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antd = require("antd");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _EventItemPopover = _interopRequireDefault(require("./EventItemPopover"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function AgendaEventItem(props) {
  var eventItem = props.eventItem,
    isStart = props.isStart,
    isEnd = props.isEnd,
    eventItemClick = props.eventItemClick,
    schedulerData = props.schedulerData,
    eventItemTemplateResolver = props.eventItemTemplateResolver;
  var config = schedulerData.config,
    behaviors = schedulerData.behaviors;
  var roundCls = 'round-none';
  if (isStart && isEnd) {
    roundCls = 'round-all';
  } else if (isStart) {
    roundCls = 'round-head';
  } else if (isEnd) {
    roundCls = 'round-tail';
  }
  var backgroundColor = eventItem.bgColor || config.defaultEventBgColor;
  var titleText = behaviors.getEventTextFunc(schedulerData, eventItem);
  var eventItemStyle = {
    height: config.eventItemHeight,
    maxWidth: config.agendaMaxEventWidth,
    backgroundColor: backgroundColor
  };
  var eventItemTemplate = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(roundCls, " event-item"),
    style: eventItemStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        marginLeft: '10px',
        lineHeight: "".concat(config.eventItemHeight, "px")
      },
      children: titleText
    })
  }, eventItem.id);
  if (eventItemTemplateResolver) {
    eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, backgroundColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);
  }
  var handleClick = function handleClick() {
    return eventItemClick === null || eventItemClick === void 0 ? void 0 : eventItemClick(schedulerData, eventItem);
  };
  var eventLink = /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: "day-event rbs-txt-btn-dis",
    onClick: handleClick,
    children: eventItemTemplate
  });
  var content = /*#__PURE__*/(0, _jsxRuntime.jsx)(_EventItemPopover["default"], _objectSpread(_objectSpread({}, props), {}, {
    title: eventItem.title,
    startTime: eventItem.start,
    endTime: eventItem.end,
    statusColor: backgroundColor
  }));
  return config.eventItemPopoverEnabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, {
    placement: "bottomLeft",
    content: content,
    trigger: "hover",
    overlayClassName: "scheduler-agenda-event-popover",
    children: eventLink
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: eventLink
  });
}
AgendaEventItem.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  eventItem: _propTypes["default"].object.isRequired,
  isStart: _propTypes["default"].bool.isRequired,
  isEnd: _propTypes["default"].bool.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  eventItemTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = AgendaEventItem;