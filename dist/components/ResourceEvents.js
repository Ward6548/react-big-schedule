"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = require("prop-types");
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _default2 = require("../config/default");
var _utility = require("../helper/utility");
var _AddMore = _interopRequireDefault(require("./AddMore"));
var _EventItem = _interopRequireDefault(require("./EventItem"));
var _SelectedArea = _interopRequireDefault(require("./SelectedArea"));
var _Summary = _interopRequireDefault(require("./Summary"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ResourceEvents = /*#__PURE__*/function (_Component) {
  function ResourceEvents(props) {
    var _this;
    _classCallCheck(this, ResourceEvents);
    _this = _callSuper(this, ResourceEvents, [props]);
    _defineProperty(_this, "supportTouchHelper", function () {
      var evType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'add';
      var ev = evType === 'add' ? _this.eventContainer.addEventListener : _this.eventContainer.removeEventListener;
      if (_this.supportTouch) {
        // ev('touchstart', this.initDrag, false);
      } else {
        ev('mousedown', _this.initDrag, false);
      }
    });
    _defineProperty(_this, "initDrag", function (ev) {
      var isSelecting = _this.state.isSelecting;
      if (isSelecting) return;
      if ((ev.srcElement || ev.target) !== _this.eventContainer) return;
      ev.stopPropagation();
      var resourceEvents = _this.props.resourceEvents;
      if (resourceEvents.groupOnly) return;
      var _this$dragHelper = _this.dragHelper(ev, 'init'),
        _this$dragHelper2 = _slicedToArray(_this$dragHelper, 2),
        clientX = _this$dragHelper2[0],
        toReturn = _this$dragHelper2[1];
      if (toReturn) {
        return;
      }
      var schedulerData = _this.props.schedulerData;
      var cellWidth = schedulerData.getContentCellWidth();
      var pos = (0, _utility.getPos)(_this.eventContainer);
      var startX = clientX - pos.x;
      var leftIndex = Math.floor(startX / cellWidth);
      var left = leftIndex * cellWidth;
      var rightIndex = Math.ceil(startX / cellWidth);
      var width = (rightIndex - leftIndex) * cellWidth;
      _this.setState({
        startX: startX,
        left: left,
        leftIndex: leftIndex,
        width: width,
        rightIndex: rightIndex,
        isSelecting: true
      });
      if (_this.supportTouch) {
        document.documentElement.addEventListener('touchmove', _this.doDrag, false);
        document.documentElement.addEventListener('touchend', _this.stopDrag, false);
        document.documentElement.addEventListener('touchcancel', _this.cancelDrag, false);
      } else {
        document.documentElement.addEventListener('mousemove', _this.doDrag, false);
        document.documentElement.addEventListener('mouseup', _this.stopDrag, false);
      }
      document.onselectstart = function () {
        return false;
      };
      document.ondragstart = function () {
        return false;
      };
    });
    _defineProperty(_this, "doDrag", function (ev) {
      ev.stopPropagation();
      var _this$dragHelper3 = _this.dragHelper(ev, 'do'),
        _this$dragHelper4 = _slicedToArray(_this$dragHelper3, 2),
        clientX = _this$dragHelper4[0],
        toReturn = _this$dragHelper4[1];
      if (toReturn) {
        return;
      }
      var startX = _this.state.startX;
      var schedulerData = _this.props.schedulerData;
      var headers = schedulerData.headers;
      var cellWidth = schedulerData.getContentCellWidth();
      var pos = (0, _utility.getPos)(_this.eventContainer);
      var currentX = clientX - pos.x;
      var leftIndex = Math.floor(Math.min(startX, currentX) / cellWidth);
      leftIndex = leftIndex < 0 ? 0 : leftIndex;
      var left = leftIndex * cellWidth;
      var rightIndex = Math.ceil(Math.max(startX, currentX) / cellWidth);
      rightIndex = rightIndex > headers.length ? headers.length : rightIndex;
      var width = (rightIndex - leftIndex) * cellWidth;
      _this.setState({
        leftIndex: leftIndex,
        left: left,
        rightIndex: rightIndex,
        width: width,
        isSelecting: true
      });
    });
    _defineProperty(_this, "dragHelper", function (ev, dragType) {
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return [clientX, true];
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else if (dragType === 'init') {
        if (ev.buttons !== undefined && ev.buttons !== 1) return [clientX, true];
        clientX = ev.clientX;
      } else {
        clientX = ev.clientX;
      }
      return [clientX, false];
    });
    _defineProperty(_this, "stopDrag", function (ev) {
      ev.stopPropagation();
      var _this$props = _this.props,
        schedulerData = _this$props.schedulerData,
        newEvent = _this$props.newEvent,
        resourceEvents = _this$props.resourceEvents;
      var headers = schedulerData.headers,
        events = schedulerData.events,
        config = schedulerData.config,
        cellUnit = schedulerData.cellUnit,
        localeDayjs = schedulerData.localeDayjs;
      var _this$state = _this.state,
        leftIndex = _this$state.leftIndex,
        rightIndex = _this$state.rightIndex;
      if (_this.supportTouch) {
        document.documentElement.removeEventListener('touchmove', _this.doDrag, false);
        document.documentElement.removeEventListener('touchend', _this.stopDrag, false);
        document.documentElement.removeEventListener('touchcancel', _this.cancelDrag, false);
      } else {
        document.documentElement.removeEventListener('mousemove', _this.doDrag, false);
        document.documentElement.removeEventListener('mouseup', _this.stopDrag, false);
      }
      document.onselectstart = null;
      document.ondragstart = null;
      var startTime = headers[leftIndex].time;
      var endTime = resourceEvents.headerItems[rightIndex - 1].end;
      if (cellUnit !== _default2.CellUnit.Hour) {
        endTime = localeDayjs(new Date(resourceEvents.headerItems[rightIndex - 1].start)).hour(23).minute(59).second(59).format(_default2.DATETIME_FORMAT);
      }
      var slotId = resourceEvents.slotId;
      var slotName = resourceEvents.slotName;
      _this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: false
      });
      var hasConflict = false;
      if (config.checkConflict) {
        var start = localeDayjs(new Date(startTime));
        var end = localeDayjs(endTime);
        events.forEach(function (e) {
          if (schedulerData._getEventSlotId(e) === slotId) {
            var eStart = localeDayjs(e.start);
            var eEnd = localeDayjs(e.end);
            if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
          }
        });
      }
      if (hasConflict) {
        var conflictOccurred = _this.props.conflictOccurred;
        if (conflictOccurred !== undefined) {
          conflictOccurred(schedulerData, 'New', {
            id: undefined,
            start: startTime,
            end: endTime,
            slotId: slotId,
            slotName: slotName,
            title: undefined
          }, _default2.DnDTypes.EVENT, slotId, slotName, startTime, endTime);
        } else {
          console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
        }
      } else if (newEvent !== undefined) newEvent(schedulerData, slotId, slotName, startTime, endTime);
    });
    _defineProperty(_this, "cancelDrag", function (ev) {
      ev.stopPropagation();
      var isSelecting = _this.state.isSelecting;
      if (isSelecting) {
        document.documentElement.removeEventListener('touchmove', _this.doDrag, false);
        document.documentElement.removeEventListener('touchend', _this.stopDrag, false);
        document.documentElement.removeEventListener('touchcancel', _this.cancelDrag, false);
        document.onselectstart = null;
        document.ondragstart = null;
        _this.setState({
          startX: 0,
          leftIndex: 0,
          left: 0,
          rightIndex: 0,
          width: 0,
          isSelecting: false
        });
      }
    });
    _defineProperty(_this, "onAddMoreClick", function (headerItem) {
      var _this$props2 = _this.props,
        onSetAddMoreState = _this$props2.onSetAddMoreState,
        resourceEvents = _this$props2.resourceEvents,
        schedulerData = _this$props2.schedulerData;
      if (onSetAddMoreState) {
        var config = schedulerData.config;
        var cellWidth = schedulerData.getContentCellWidth();
        var index = resourceEvents.headerItems.indexOf(headerItem);
        if (index !== -1) {
          var left = index * (cellWidth - 1);
          var pos = (0, _utility.getPos)(_this.eventContainer);
          left += pos.x;
          var top = pos.y;
          var height = (headerItem.count + 1) * config.eventItemLineHeight + 20;
          onSetAddMoreState({
            headerItem: headerItem,
            left: left,
            top: top,
            height: height
          });
        }
      }
    });
    _defineProperty(_this, "eventContainerRef", function (element) {
      _this.eventContainer = element;
      // Also set the drop ref if it exists
      var dropRef = _this.props.dropRef;
      if (dropRef) {
        dropRef(element);
      }
    });
    _this.state = {
      isSelecting: false,
      left: 0,
      width: 0
    };
    _this.supportTouch = false; // 'ontouchstart' in window;
    return _this;
  }
  _inherits(ResourceEvents, _Component);
  return _createClass(ResourceEvents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var schedulerData = this.props.schedulerData;
      var config = schedulerData.config;
      this.supportTouch = 'ontouchstart' in window;
      if (config.creatable === true) {
        this.supportTouchHelper();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        var schedulerData = this.props.schedulerData;
        this.supportTouchHelper('remove');
        if (schedulerData.config.creatable) {
          this.supportTouchHelper();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        resourceEvents = _this$props3.resourceEvents,
        schedulerData = _this$props3.schedulerData,
        dndSource = _this$props3.dndSource;
      var cellUnit = schedulerData.cellUnit,
        startDate = schedulerData.startDate,
        endDate = schedulerData.endDate,
        config = schedulerData.config,
        localeDayjs = schedulerData.localeDayjs;
      var _this$state2 = this.state,
        isSelecting = _this$state2.isSelecting,
        left = _this$state2.left,
        width = _this$state2.width;
      var cellWidth = schedulerData.getContentCellWidth();
      var cellMaxEvents = schedulerData.getCellMaxEvents();
      var rowWidth = schedulerData.getContentTableWidth();
      var selectedArea = isSelecting ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectedArea["default"], _objectSpread(_objectSpread({}, this.props), {}, {
        left: left,
        width: width
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
      var eventList = [];
      resourceEvents.headerItems.forEach(function (headerItem, index) {
        if (headerItem.count > 0 || headerItem.summary !== undefined) {
          var isTop = config.summaryPos === _default2.SummaryPos.TopRight || config.summaryPos === _default2.SummaryPos.Top || config.summaryPos === _default2.SummaryPos.TopLeft;
          var marginTop = resourceEvents.hasSummary && isTop ? 1 + config.eventItemLineHeight : 1;
          var renderEventsMaxIndex = headerItem.addMore === 0 ? cellMaxEvents : headerItem.addMoreIndex;
          headerItem.events.forEach(function (evt, idx) {
            if (idx < renderEventsMaxIndex && evt !== undefined && evt.render) {
              var durationStart = localeDayjs(new Date(startDate));
              var durationEnd = localeDayjs(endDate);
              if (cellUnit === _default2.CellUnit.Hour) {
                durationStart = localeDayjs(new Date(startDate)).add(config.dayStartFrom, 'hours');
                durationEnd = localeDayjs(endDate).add(config.dayStopTo + 1, 'hours');
              }
              var eventStart = localeDayjs(evt.eventItem.start);
              var eventEnd = localeDayjs(evt.eventItem.end);
              var isStart = eventStart >= durationStart;
              var isEnd = eventEnd <= durationEnd;
              var _left = index * cellWidth + (index > 0 ? 2 : 3);
              var _width = evt.span * cellWidth - (index > 0 ? 5 : 6) > 0 ? evt.span * cellWidth - (index > 0 ? 5 : 6) : 0;
              var dayStart = localeDayjs(new Date(headerItem.start)).startOf('day');
              var dayDurationMinutes = 1440;
              var baseCellWidth = cellWidth - (index > 0 ? 5 : 6);
              if (cellUnit === _default2.CellUnit.Day) {
                if (evt.span === 1) {
                  var startOffsetMinutes = eventStart.diff(dayStart, 'minute');
                  var eventDurationMinutes = eventEnd.diff(eventStart, 'minute');
                  var startPercentage = startOffsetMinutes / dayDurationMinutes;
                  var durationPercentage = eventDurationMinutes / dayDurationMinutes;
                  var leftOffset = baseCellWidth * startPercentage;
                  var eventWidth = baseCellWidth * durationPercentage;
                  _left = index * cellWidth + (index > 0 ? 2 : 3) + leftOffset;
                  _width = Math.max(1, eventWidth); // ensure minimum width of 1px
                } else {
                  var headerStart = localeDayjs(new Date(headerItem.start));
                  var headerEnd = localeDayjs(new Date(headerItem.end));
                  var isFirstDay = eventStart >= headerStart && eventStart < headerEnd;
                  if (isFirstDay) {
                    var eventStartDayStart = eventStart.startOf('day');
                    var eventEndDayEnd = eventEnd.endOf('day');
                    var totalSpanMinutes = eventEndDayEnd.diff(eventStartDayStart, 'minute');
                    var eventStartOffsetMinutes = eventStart.diff(eventStartDayStart, 'minute');
                    var _eventDurationMinutes = eventEnd.diff(eventStart, 'minute');
                    var _startPercentage = eventStartOffsetMinutes / dayDurationMinutes;
                    var _durationPercentage = totalSpanMinutes > 0 ? _eventDurationMinutes / totalSpanMinutes : 1;
                    var totalWidth = evt.span * cellWidth - (index > 0 ? 5 : 6);
                    var _leftOffset = cellWidth * _startPercentage;
                    var _eventWidth = totalWidth * _durationPercentage;
                    _left = index * cellWidth + (index > 0 ? 2 : 3) + _leftOffset;
                    _width = Math.max(1, _eventWidth);
                  }
                }
              } else {
                _width = evt.span * cellWidth - (index > 0 ? 5 : 6) > 0 ? evt.span * cellWidth - (index > 0 ? 5 : 6) : 0;
              }
              var top = marginTop + idx * config.eventItemLineHeight;
              var eventItem = /*#__PURE__*/(0, _react.createElement)(_EventItem["default"], _objectSpread(_objectSpread({}, _this2.props), {}, {
                key: "".concat(evt.eventItem.id, "_").concat(headerItem.time),
                eventItem: evt.eventItem,
                dndSource: dndSource,
                isStart: isStart,
                isEnd: isEnd,
                isInPopover: false,
                left: _left,
                width: _width,
                top: top,
                leftIndex: index,
                rightIndex: index + evt.span
              }));
              eventList.push(eventItem);
            }
          });
          if (headerItem.addMore > 0) {
            var _left2 = index * cellWidth + (index > 0 ? 2 : 3);
            var _width2 = cellWidth - (index > 0 ? 5 : 6);
            var top = marginTop + headerItem.addMoreIndex * config.eventItemLineHeight;
            var addMoreItem = /*#__PURE__*/(0, _react.createElement)(_AddMore["default"], _objectSpread(_objectSpread({}, _this2.props), {}, {
              key: headerItem.time,
              headerItem: headerItem,
              number: headerItem.addMore,
              left: _left2,
              width: _width2,
              top: top,
              clickAction: _this2.onAddMoreClick
            }));
            eventList.push(addMoreItem);
          }
          if (headerItem.summary !== undefined) {
            var _top = isTop ? 1 : resourceEvents.rowHeight - config.eventItemLineHeight + 1;
            var _left3 = index * cellWidth + (index > 0 ? 2 : 3);
            var _width3 = cellWidth - (index > 0 ? 5 : 6);
            var key = "".concat(resourceEvents.slotId, "_").concat(headerItem.time);
            var summary = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Summary["default"], {
              schedulerData: schedulerData,
              summary: headerItem.summary,
              left: _left3,
              width: _width3,
              top: _top
            }, key);
            eventList.push(summary);
          }
        }
      });
      var eventContainer = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: this.eventContainerRef,
        className: "event-container",
        style: {
          height: resourceEvents.rowHeight
        },
        children: [selectedArea, eventList]
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          style: {
            width: rowWidth
          },
          children: eventContainer
        })
      });
    }
  }]);
}(_react.Component); // Wrapper component to use useDrop hook
_defineProperty(ResourceEvents, "propTypes", {
  resourceEvents: _propTypes.PropTypes.object.isRequired,
  schedulerData: _propTypes.PropTypes.object.isRequired,
  dndSource: _propTypes.PropTypes.object.isRequired,
  onSetAddMoreState: _propTypes.PropTypes.func,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  movingEvent: _propTypes.PropTypes.func,
  conflictOccurred: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  newEvent: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func
});
var ResourceEventsWithDnD = function ResourceEventsWithDnD(props) {
  var schedulerData = props.schedulerData,
    dndContext = props.dndContext;
  var config = schedulerData.config;
  var componentRef = _react["default"].useRef(null);

  // Always call useDrop unconditionally (Rules of Hooks)
  // Disable functionality when drag and drop is not enabled
  var _useDrop = (0, _reactDnd.useDrop)(function () {
      // If drag and drop is disabled, return a no-op spec
      if (!config.dragAndDropEnabled || !dndContext) {
        return {
          accept: [],
          collect: function collect() {
            return {
              isOver: false,
              canDrop: false
            };
          }
        };
      }
      var spec = dndContext.getDropSpec();
      return {
        accept: _toConsumableArray(dndContext.sourceMap.keys()),
        drop: function drop(item, monitor) {
          return spec.drop(props, monitor, componentRef.current);
        },
        hover: function hover(item, monitor) {
          return spec.hover(props, monitor, componentRef.current);
        },
        canDrop: function canDrop(item, monitor) {
          return spec.canDrop(props, monitor);
        },
        collect: function collect(monitor) {
          return {
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
          };
        }
      };
    }, [props, dndContext, config.dragAndDropEnabled]),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    isOver = _useDrop2$.isOver,
    canDrop = _useDrop2$.canDrop,
    dropRef = _useDrop2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ResourceEvents, _objectSpread(_objectSpread({
    ref: componentRef
  }, props), {}, {
    dropRef: dropRef,
    isOver: isOver,
    canDrop: canDrop
  }));
};
ResourceEventsWithDnD.displayName = 'ResourceEventsWithDnD';
var _default = exports["default"] = ResourceEventsWithDnD;