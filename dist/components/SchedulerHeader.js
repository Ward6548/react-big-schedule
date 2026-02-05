"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _default2 = require("../config/default");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;
var SchedulerHeader = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _schedulerData$getCal;
  var onViewChange = _ref.onViewChange,
    goNext = _ref.goNext,
    goBack = _ref.goBack,
    onSelectDate = _ref.onSelectDate,
    schedulerData = _ref.schedulerData,
    leftCustomHeader = _ref.leftCustomHeader,
    rightCustomHeader = _ref.rightCustomHeader,
    style = _ref.style;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    viewSpinning = _useState2[0],
    setViewSpinning = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dateSpinning = _useState4[0],
    setDateSpinning = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1];
  var viewType = schedulerData.viewType,
    showAgenda = schedulerData.showAgenda,
    isEventPerspective = schedulerData.isEventPerspective,
    config = schedulerData.config;
  var dateLabel = schedulerData.getDateLabel();
  var selectDate = schedulerData.getSelectedDate();
  var calendarLocale = (_schedulerData$getCal = schedulerData.getCalendarPopoverLocale()) === null || _schedulerData$getCal === void 0 || (_schedulerData$getCal = _schedulerData$getCal["default"]) === null || _schedulerData$getCal === void 0 ? void 0 : _schedulerData$getCal.Calendar;
  var defaultValue = "".concat(viewType).concat(showAgenda ? 1 : 0).concat(isEventPerspective ? 1 : 0);
  var isMountedRef = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isMountedRef.current = false;
    };
  }, []);
  var handleEvents = function handleEvents(func, isViewSpinning, funcArg) {
    var isSpinEnabled = isViewSpinning ? config.viewChangeSpinEnabled : config.dateChangeSpinEnabled;
    var setSpin = isViewSpinning ? setViewSpinning : setDateSpinning;
    if (isSpinEnabled) {
      setSpin(true);
    }
    var coreFunc = function coreFunc() {
      try {
        funcArg !== undefined ? func(funcArg) : func();
      } finally {
        if (isSpinEnabled && isMountedRef.current) {
          setSpin(false);
        }
      }
    };
    if (isSpinEnabled) {
      setTimeout(coreFunc, config.schedulerHeaderEventsFuncsTimeoutMs);
    } else {
      coreFunc();
    }
  };
  var popover = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rbs-popover-calendar",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Calendar, {
      locale: calendarLocale,
      defaultValue: (0, _dayjs["default"])(selectDate),
      fullscreen: false,
      onSelect: function onSelect(date) {
        setVisible(false);
        handleEvents(onSelectDate, false, date.format(_default2.DATE_FORMAT));
      }
    })
  });
  var radioButtonList = config.views.map(function (item) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioButton, {
      value: "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: {
          margin: '0px 8px'
        },
        children: item.viewName
      })
    }, "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0));
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
    ref: ref,
    gutter: [10, 10],
    align: "middle",
    justify: "space-between",
    style: _objectSpread({}, style),
    children: [leftCustomHeader, /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "header2-text",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.LeftOutlined, {
              style: {
                marginRight: '8px'
              },
              className: "icon-nav",
              onClick: function onClick() {
                return handleEvents(goBack, false);
              }
            }), config.calendarPopoverEnabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, {
              content: popover,
              placement: "bottomLeft",
              trigger: "click",
              open: visible,
              onOpenChange: setVisible,
              overlayClassName: "scheduler-header-popover",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "header2-text-label",
                style: {
                  cursor: 'pointer'
                },
                children: dateLabel
              })
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "header2-text-label",
              children: dateLabel
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RightOutlined, {
              style: {
                marginLeft: '8px'
              },
              className: "icon-nav",
              onClick: function onClick() {
                return handleEvents(goNext, false);
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {
            spinning: dateSpinning
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {
          spinning: viewSpinning
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioGroup, {
          buttonStyle: "solid",
          defaultValue: defaultValue,
          size: "default",
          onChange: function onChange(event) {
            return handleEvents(onViewChange, true, event);
          },
          children: radioButtonList
        })]
      })
    }), rightCustomHeader]
  });
});
SchedulerHeader.propTypes = {
  onViewChange: _propTypes["default"].func.isRequired,
  goNext: _propTypes["default"].func.isRequired,
  goBack: _propTypes["default"].func.isRequired,
  onSelectDate: _propTypes["default"].func.isRequired,
  schedulerData: _propTypes["default"].object.isRequired,
  leftCustomHeader: _propTypes["default"].object,
  rightCustomHeader: _propTypes["default"].object,
  style: _propTypes["default"].object
};
SchedulerHeader.displayName = 'SchedulerHeader';
var _default = exports["default"] = SchedulerHeader;