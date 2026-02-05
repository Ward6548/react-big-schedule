"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antd = require("antd");
var _propTypes = require("prop-types");
var _react = require("react");
var _reactDnd = require("react-dnd");
var _default2 = require("../config/default");
var _EventItemPopover = _interopRequireDefault(require("./EventItemPopover"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
var stopDragHelper = function stopDragHelper(_ref) {
  var count = _ref.count,
    cellUnit = _ref.cellUnit,
    config = _ref.config,
    dragType = _ref.dragType,
    eventItem = _ref.eventItem,
    localeDayjs = _ref.localeDayjs,
    value = _ref.value;
  var whileTrue = true;
  var tCount = 0;
  var i = 0;
  var result = value;
  return new Promise(function (resolve) {
    if (count !== 0 && cellUnit !== _default2.CellUnit.Hour && config.displayWeekend === false) {
      while (whileTrue) {
        i = count > 0 ? i + 1 : i - 1;
        var date = localeDayjs(new Date(eventItem[dragType])).add(i, 'days');
        var dayOfWeek = date.day();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          tCount = count > 0 ? tCount + 1 : tCount - 1;
          if (tCount === count) {
            result = date.format(_default2.DATETIME_FORMAT);
            break;
          }
        }
      }
    }
    resolve(result);
  });
};
var startResizable = function startResizable(_ref2) {
  var eventItem = _ref2.eventItem,
    isInPopover = _ref2.isInPopover,
    schedulerData = _ref2.schedulerData;
  return schedulerData.config.startResizable === true && isInPopover === false && (eventItem.resizable === undefined || eventItem.resizable !== false) && (eventItem.startResizable === undefined || eventItem.startResizable !== false);
};
var endResizable = function endResizable(_ref3) {
  var eventItem = _ref3.eventItem,
    isInPopover = _ref3.isInPopover,
    schedulerData = _ref3.schedulerData;
  return schedulerData.config.endResizable === true && isInPopover === false && (eventItem.resizable === undefined || eventItem.resizable !== false) && (eventItem.endResizable === undefined || eventItem.endResizable !== false);
};
var EventItem = /*#__PURE__*/function (_Component) {
  function EventItem(_props) {
    var _this;
    _classCallCheck(this, EventItem);
    _this = _callSuper(this, EventItem, [_props]);
    _defineProperty(_this, "eventItemRef", function (ref) {
      _this.eventItemElement = ref;
      // Attach drag refs if they exist
      var _this$props = _this.props,
        dragRef = _this$props.dragRef,
        dragPreviewRef = _this$props.dragPreviewRef;
      if (dragRef && ref) {
        dragRef(ref);
      }
      if (dragPreviewRef && ref) {
        dragPreviewRef(ref);
      }
    });
    _defineProperty(_this, "resizerHelper", function (dragType) {
      var eventType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'addEventListener';
      var resizer = dragType === 'start' ? _this.startResizer : _this.endResizer;
      var doDrag = dragType === 'start' ? _this.doStartDrag : _this.doEndDrag;
      var stopDrag = dragType === 'start' ? _this.stopStartDrag : _this.stopEndDrag;
      var cancelDrag = dragType === 'start' ? _this.cancelStartDrag : _this.cancelEndDrag;
      if (_this.supportTouch) {
        resizer[eventType]('touchmove', doDrag, false);
        resizer[eventType]('touchend', stopDrag, false);
        resizer[eventType]('touchcancel', cancelDrag, false);
      } else {
        document.documentElement[eventType]('mousemove', doDrag, false);
        document.documentElement[eventType]('mouseup', stopDrag, false);
      }
    });
    _defineProperty(_this, "initDragHelper", function (ev, dragType) {
      var _this$props2 = _this.props,
        schedulerData = _this$props2.schedulerData,
        eventItem = _this$props2.eventItem;
      var slotId = schedulerData._getEventSlotId(eventItem);
      var slot = schedulerData.getSlotById(slotId);
      if (!!slot && !!slot.groupOnly) return;
      if (schedulerData._isResizing()) return;
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        if (ev.buttons !== undefined && ev.buttons !== 1) return;
        clientX = ev.clientX;
      }
      _this.setState(_defineProperty({}, dragType === 'start' ? 'startX' : 'endX', clientX));
      schedulerData._startResizing();
      _this.resizerHelper(dragType, 'addEventListener');
      document.onselectstart = function () {
        return false;
      };
      document.ondragstart = function () {
        return false;
      };
    });
    _defineProperty(_this, "initStartDrag", function (ev) {
      _this.initDragHelper(ev, 'start');
    });
    _defineProperty(_this, "doStartDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }
      var _this$props3 = _this.props,
        left = _this$props3.left,
        width = _this$props3.width,
        leftIndex = _this$props3.leftIndex,
        rightIndex = _this$props3.rightIndex,
        schedulerData = _this$props3.schedulerData;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = rightIndex * cellWidth - offset;
      var startX = _this.state.startX;
      var newLeft = left + clientX - startX;
      var newWidth = width + startX - clientX;
      if (newWidth < minWidth) {
        newWidth = minWidth;
        newLeft = (rightIndex - 1) * cellWidth + (rightIndex - 1 > 0 ? 2 : 3);
      } else if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newLeft = 3;
      }
      _this.setState({
        left: newLeft,
        width: newWidth
      });
    });
    _defineProperty(_this, "stopStartDrag", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(ev) {
        var _this$props4, width, left, top, leftIndex, rightIndex, schedulerData, eventItem, updateEventStart, conflictOccurred, stateWidth, clientX, touch, cellUnit, events, config, localeDayjs, cellWidth, offset, minWidth, maxWidth, startX, newWidth, deltaX, sign, count, newStart, hasConflict, slotId, slotName, slot, start, end;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              ev.stopPropagation();
              _this.resizerHelper('start', 'removeEventListener');
              document.onselectstart = null;
              document.ondragstart = null;
              _this$props4 = _this.props, width = _this$props4.width, left = _this$props4.left, top = _this$props4.top, leftIndex = _this$props4.leftIndex, rightIndex = _this$props4.rightIndex, schedulerData = _this$props4.schedulerData, eventItem = _this$props4.eventItem, updateEventStart = _this$props4.updateEventStart, conflictOccurred = _this$props4.conflictOccurred;
              schedulerData._stopResizing();
              stateWidth = _this.state.width;
              if (!(stateWidth === width)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              clientX = 0;
              if (!_this.supportTouch) {
                _context.n = 3;
                break;
              }
              if (!(ev.changedTouches.length === 0)) {
                _context.n = 2;
                break;
              }
              _this.setState({
                left: left,
                top: top,
                width: width
              });
              return _context.a(2);
            case 2:
              touch = ev.changedTouches[0];
              clientX = touch.pageX;
              _context.n = 4;
              break;
            case 3:
              clientX = ev.clientX;
            case 4:
              cellUnit = schedulerData.cellUnit, events = schedulerData.events, config = schedulerData.config, localeDayjs = schedulerData.localeDayjs;
              cellWidth = schedulerData.getContentCellWidth();
              offset = leftIndex > 0 ? 5 : 6;
              minWidth = cellWidth - offset;
              maxWidth = rightIndex * cellWidth - offset;
              startX = _this.state.startX;
              newWidth = width + startX - clientX;
              deltaX = clientX - startX;
              sign = 1;
              if (deltaX < 0) {
                sign = -1;
              } else if (deltaX === 0) {
                sign = 0;
              }
              count = (sign > 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
              if (newWidth < minWidth) count = rightIndex - leftIndex - 1;else if (newWidth > maxWidth) count = -leftIndex;
              newStart = localeDayjs(new Date(eventItem.start)).add(cellUnit === _default2.CellUnit.Hour ? count * config.minuteStep : count, cellUnit === _default2.CellUnit.Hour ? 'minutes' : 'days').format(_default2.DATETIME_FORMAT);
              _context.n = 5;
              return stopDragHelper({
                count: count,
                cellUnit: cellUnit,
                config: config,
                eventItem: eventItem,
                localeDayjs: localeDayjs,
                dragType: 'start',
                value: newStart
              });
            case 5:
              newStart = _context.v;
              hasConflict = false;
              slotId = schedulerData._getEventSlotId(eventItem);
              slot = schedulerData.getSlotById(slotId);
              if (slot) slotName = slot.name;
              if (config.checkConflict) {
                start = localeDayjs(new Date(newStart));
                end = localeDayjs(new Date(eventItem.end));
                events.forEach(function (e) {
                  if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeDayjs(new Date(e.start));
                    var eEnd = localeDayjs(new Date(e.end));
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                  }
                });
              }
              if (hasConflict) {
                _this.setState({
                  left: left,
                  top: top,
                  width: width
                });
                if (conflictOccurred !== undefined) {
                  conflictOccurred(schedulerData, 'StartResize', eventItem, _default2.DnDTypes.EVENT, slotId, slotName, newStart, eventItem.end);
                } else {
                  console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                }
                _this.subscribeResizeEvent(_this.props);
              } else if (updateEventStart !== undefined) updateEventStart(schedulerData, eventItem, newStart);
            case 6:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "cancelStartDrag", function (ev) {
      ev.stopPropagation();
      _this.startResizer.removeEventListener('touchmove', _this.doStartDrag, false);
      _this.startResizer.removeEventListener('touchend', _this.stopStartDrag, false);
      _this.startResizer.removeEventListener('touchcancel', _this.cancelStartDrag, false);
      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props5 = _this.props,
        schedulerData = _this$props5.schedulerData,
        left = _this$props5.left,
        top = _this$props5.top,
        width = _this$props5.width;
      schedulerData._stopResizing();
      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });
    _defineProperty(_this, "initEndDrag", function (ev) {
      _this.initDragHelper(ev, 'end');
    });
    _defineProperty(_this, "doEndDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }
      var _this$props6 = _this.props,
        width = _this$props6.width,
        leftIndex = _this$props6.leftIndex,
        schedulerData = _this$props6.schedulerData;
      var headers = schedulerData.headers;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
      var endX = _this.state.endX;
      var newWidth = width + clientX - endX;
      if (newWidth < minWidth) newWidth = minWidth;else if (newWidth > maxWidth) newWidth = maxWidth;
      _this.setState({
        width: newWidth
      });
    });
    _defineProperty(_this, "stopEndDrag", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(ev) {
        var _this$props7, left, top, width, leftIndex, rightIndex, schedulerData, eventItem, updateEventEnd, conflictOccurred, stateWidth, clientX, touch, headers, cellUnit, events, config, localeDayjs, cellWidth, offset, minWidth, maxWidth, endX, newWidth, deltaX, sign, count, newEnd, hasConflict, slotId, slot, start, end;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              ev.stopPropagation();
              _this.resizerHelper('end', 'removeEventListener');
              document.onselectstart = null;
              document.ondragstart = null;
              _this$props7 = _this.props, left = _this$props7.left, top = _this$props7.top, width = _this$props7.width, leftIndex = _this$props7.leftIndex, rightIndex = _this$props7.rightIndex, schedulerData = _this$props7.schedulerData, eventItem = _this$props7.eventItem, updateEventEnd = _this$props7.updateEventEnd, conflictOccurred = _this$props7.conflictOccurred;
              schedulerData._stopResizing();
              stateWidth = _this.state.width;
              if (!(stateWidth === width)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              clientX = 0;
              if (!_this.supportTouch) {
                _context2.n = 3;
                break;
              }
              if (!(ev.changedTouches.length === 0)) {
                _context2.n = 2;
                break;
              }
              _this.setState({
                left: left,
                top: top,
                width: width
              });
              return _context2.a(2);
            case 2:
              touch = ev.changedTouches[0];
              clientX = touch.pageX;
              _context2.n = 4;
              break;
            case 3:
              clientX = ev.clientX;
            case 4:
              headers = schedulerData.headers, cellUnit = schedulerData.cellUnit, events = schedulerData.events, config = schedulerData.config, localeDayjs = schedulerData.localeDayjs;
              cellWidth = schedulerData.getContentCellWidth();
              offset = leftIndex > 0 ? 5 : 6;
              minWidth = cellWidth - offset;
              maxWidth = (headers.length - leftIndex) * cellWidth - offset;
              endX = _this.state.endX;
              newWidth = width + clientX - endX;
              deltaX = newWidth - width;
              sign = 1;
              if (deltaX < 0) {
                sign = -1;
              } else if (deltaX === 0) {
                sign = 0;
              }
              count = (sign < 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
              if (newWidth < minWidth) count = leftIndex - rightIndex + 1;else if (newWidth > maxWidth) count = headers.length - rightIndex;
              newEnd = localeDayjs(new Date(eventItem.end)).add(cellUnit === _default2.CellUnit.Hour ? count * config.minuteStep : count, cellUnit === _default2.CellUnit.Hour ? 'minutes' : 'days').format(_default2.DATETIME_FORMAT);
              _context2.n = 5;
              return stopDragHelper({
                dragType: 'end',
                cellUnit: cellUnit,
                config: config,
                count: count,
                value: newEnd,
                eventItem: eventItem,
                localeDayjs: localeDayjs
              });
            case 5:
              newEnd = _context2.v;
              hasConflict = false;
              slotId = schedulerData._getEventSlotId(eventItem);
              slot = schedulerData.getSlotById(slotId);
              if (config.checkConflict) {
                start = localeDayjs(new Date(eventItem.start));
                end = localeDayjs(new Date(newEnd));
                events.forEach(function (e) {
                  if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeDayjs(new Date(e.start));
                    var eEnd = localeDayjs(new Date(e.end));
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) {
                      hasConflict = true;
                    }
                  }
                });
              }
              if (hasConflict) {
                _this.setState({
                  left: left,
                  top: top,
                  width: width
                });
                if (conflictOccurred !== undefined) {
                  conflictOccurred(schedulerData, 'EndResize', eventItem, _default2.DnDTypes.EVENT, slotId, slot ? slot.name : null, eventItem.start, newEnd);
                } else {
                  console.error('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                }
                _this.subscribeResizeEvent(_this.props);
              } else if (updateEventEnd !== undefined) {
                updateEventEnd(schedulerData, eventItem, newEnd);
              }
            case 6:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "cancelEndDrag", function (ev) {
      ev.stopPropagation();
      _this.endResizer.removeEventListener('touchmove', _this.doEndDrag, false);
      _this.endResizer.removeEventListener('touchend', _this.stopEndDrag, false);
      _this.endResizer.removeEventListener('touchcancel', _this.cancelEndDrag, false);
      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props8 = _this.props,
        schedulerData = _this$props8.schedulerData,
        left = _this$props8.left,
        top = _this$props8.top,
        width = _this$props8.width;
      schedulerData._stopResizing();
      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });
    _defineProperty(_this, "handleMouseMove", function (event) {
      var rect = _this.eventItemElement ? _this.eventItemElement.getBoundingClientRect() : {
        left: 0,
        right: 0
      };
      _this.setState({
        contentMousePosX: event.clientX,
        eventItemLeftRect: rect.left,
        eventItemRightRect: rect.right
      });
    });
    _defineProperty(_this, "subscribeResizeEvent", function (props) {
      if (_this.startResizer !== undefined && _this.startResizer !== null) {
        if (_this.supportTouch) {
          // this.startResizer.removeEventListener('touchstart', this.initStartDrag, false);
          // if (startResizable(props))
          //     this.startResizer.addEventListener('touchstart', this.initStartDrag, false);
        } else {
          _this.startResizer.removeEventListener('mousedown', _this.initStartDrag, false);
          if (startResizable(props)) _this.startResizer.addEventListener('mousedown', _this.initStartDrag, false);
        }
      }
      if (_this.endResizer !== undefined && _this.endResizer !== null) {
        if (_this.supportTouch) {
          // this.endResizer.removeEventListener('touchstart', this.initEndDrag, false);
          // if (endResizable(props))
          //     this.endResizer.addEventListener('touchstart', this.initEndDrag, false);
        } else {
          _this.endResizer.removeEventListener('mousedown', _this.initEndDrag, false);
          if (endResizable(props)) _this.endResizer.addEventListener('mousedown', _this.initEndDrag, false);
        }
      }
    });
    var _left = _props.left,
      _top = _props.top,
      _width = _props.width;
    _this.state = {
      left: _left,
      top: _top,
      width: _width,
      contentMousePosX: 0,
      eventItemLeftRect: 0,
      eventItemRightRect: 0
    };
    _this.startResizer = undefined;
    _this.endResizer = undefined;
    _this.supportTouch = false; // 'ontouchstart' in window;

    _this.eventItemElement = null;
    _this._isMounted = false;
    return _this;
  }
  _inherits(EventItem, _Component);
  return _createClass(EventItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.supportTouch = 'ontouchstart' in window;
      this.subscribeResizeEvent(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
        left = _this$props9.left,
        top = _this$props9.top,
        width = _this$props9.width;
      if (prevProps.left !== left || prevProps.top !== top || prevProps.width !== width) {
        this.setState({
          left: left,
          top: top,
          width: width
        });
      }

      // Re-subscribe when resize-related props change
      if (prevProps.schedulerData !== this.props.schedulerData || prevProps.eventItem !== this.props.eventItem || prevProps.isInPopover !== this.props.isInPopover) {
        this.subscribeResizeEvent(this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props0 = this.props,
        eventItem = _this$props0.eventItem,
        isStart = _this$props0.isStart,
        isEnd = _this$props0.isEnd,
        isInPopover = _this$props0.isInPopover,
        eventItemClick = _this$props0.eventItemClick,
        schedulerData = _this$props0.schedulerData,
        isDragging = _this$props0.isDragging,
        eventItemTemplateResolver = _this$props0.eventItemTemplateResolver;
      var config = schedulerData.config,
        localeDayjs = schedulerData.localeDayjs;
      var _this$state = this.state,
        left = _this$state.left,
        width = _this$state.width,
        top = _this$state.top;
      var roundCls;
      var popoverPlacement = config.eventItemPopoverPlacement;
      var isPopoverPlacementMousePosition = /(top|bottom)(Right|Left)MousePosition/.test(popoverPlacement);
      if (isStart) {
        roundCls = isEnd ? 'round-all' : 'round-head';
      } else {
        roundCls = isEnd ? 'round-tail' : 'round-none';
      }
      var bgColor = config.defaultEventBgColor;
      if (eventItem.bgColor) bgColor = eventItem.bgColor;
      var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);
      var content = /*#__PURE__*/(0, _jsxRuntime.jsx)(_EventItemPopover["default"], _objectSpread(_objectSpread({}, this.props), {}, {
        eventItem: eventItem,
        title: eventItem.title,
        startTime: eventItem.start,
        endTime: eventItem.end,
        statusColor: bgColor
      }));
      var start = localeDayjs(new Date(eventItem.start));
      var eventTitle = isInPopover ? "".concat(start.format('HH:mm'), " ").concat(titleText) : titleText;
      var startResizeDiv = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
      if (startResizable(this.props)) startResizeDiv = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "event-resizer event-start-resizer",
        ref: function ref(_ref6) {
          return _this2.startResizer = _ref6;
        }
      });
      var endResizeDiv = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
      if (endResizable(this.props)) endResizeDiv = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "event-resizer event-end-resizer",
        ref: function ref(_ref7) {
          return _this2.endResizer = _ref7;
        }
      });
      var eventItemTemplate = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(roundCls, " event-item"),
        style: {
          height: config.eventItemHeight,
          backgroundColor: bgColor
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            marginLeft: '10px',
            lineHeight: "".concat(config.eventItemHeight, "px")
          },
          children: eventTitle
        })
      }, eventItem.id);
      if (eventItemTemplateResolver !== undefined) {
        eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, undefined);
      }
      var a = /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        className: "timeline-event",
        "data-event-id": eventItem.id,
        ref: this.eventItemRef,
        onMouseMove: isPopoverPlacementMousePosition ? this.handleMouseMove : undefined,
        style: {
          left: left,
          width: width,
          top: top
        },
        onClick: function onClick() {
          if (eventItemClick) eventItemClick(schedulerData, eventItem);
        },
        children: [eventItemTemplate, startResizeDiv, endResizeDiv]
      });
      var getMousePositionOptionsData = function getMousePositionOptionsData() {
        var popoverOffsetX = 0;
        var mousePositionPlacement = '';
        if (isPopoverPlacementMousePosition) {
          var isMousePositionPlacementLeft = popoverPlacement.includes('Left');
          var contentMousePosX = _this2.state.contentMousePosX;
          var popoverWidth = config.eventItemPopoverWidth;
          var eventItemLeftRect = _this2.state.eventItemLeftRect;
          var eventItemRightRect = _this2.state.eventItemRightRect;
          var eventItemMousePosX = isMousePositionPlacementLeft ? eventItemLeftRect : eventItemRightRect;
          var posAdjustControl = isMousePositionPlacementLeft ? 1 : -1;
          mousePositionPlacement = popoverPlacement.replace('MousePosition', '');
          var distance = 10;
          if (isMousePositionPlacementLeft && _this2._isMounted) {
            if (contentMousePosX + popoverWidth + distance > window.innerWidth) {
              mousePositionPlacement = "".concat(popoverPlacement.replace(/(Right|Left).*/, ''), "Right");
              eventItemMousePosX = eventItemRightRect;
              posAdjustControl = -1;
            }
          } else if (contentMousePosX - popoverWidth - distance < 0) {
            mousePositionPlacement = "".concat(popoverPlacement.replace(/(Right|Left).*/, ''), "Left");
            eventItemMousePosX = eventItemLeftRect;
            posAdjustControl = 1;
          }
          popoverOffsetX = contentMousePosX - eventItemMousePosX - 20 * posAdjustControl;
        }
        return {
          popoverOffsetX: popoverOffsetX,
          mousePositionPlacement: mousePositionPlacement
        };
      };
      var _getMousePositionOpti = getMousePositionOptionsData(),
        popoverOffsetX = _getMousePositionOpti.popoverOffsetX,
        mousePositionPlacement = _getMousePositionOpti.mousePositionPlacement;
      var aItem = a;
      if (isDragging ? null : schedulerData._isResizing() || config.eventItemPopoverEnabled === false || eventItem.showPopover === false) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: aItem
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, {
        motion: isPopoverPlacementMousePosition ? '' : undefined,
        align: isPopoverPlacementMousePosition ? {
          offset: [popoverOffsetX, popoverPlacement.includes('top') ? -10 : 10],
          overflow: {}
        } : undefined,
        placement: isPopoverPlacementMousePosition ? mousePositionPlacement : popoverPlacement,
        content: content,
        trigger: config.eventItemPopoverTrigger,
        children: aItem
      });
    }
  }]);
}(_react.Component); // Wrapper component to use useDrag hook
function EventItemWithDnD(props) {
  var dndSource = props.dndSource;

  // Always call useDrag unconditionally (Rules of Hooks)
  // Disable functionality when dndSource is not provided
  var _useDrag = (0, _reactDnd.useDrag)(function () {
      // If dndSource is not provided, return a no-op spec
      if (!dndSource) {
        return {
          type: '__NONE__',
          canDrag: function canDrag() {
            return false;
          },
          collect: function collect() {
            return {
              isDragging: false
            };
          }
        };
      }

      // Get drag options from dndSource
      return dndSource.getDragOptions(props);
    }, [props, dndSource]),
    _useDrag2 = _slicedToArray(_useDrag, 3),
    isDragging = _useDrag2[0].isDragging,
    dragRef = _useDrag2[1],
    dragPreviewRef = _useDrag2[2];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(EventItem, _objectSpread(_objectSpread({}, props), {}, {
    isDragging: isDragging,
    dragRef: dragRef,
    dragPreviewRef: dragPreviewRef
  }));
}
EventItemWithDnD.propTypes = {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  dndSource: _propTypes.PropTypes.object
};
EventItemWithDnD.defaultProps = {
  dndSource: undefined
};
EventItemWithDnD.displayName = 'EventItemWithDnD';
var _default = exports["default"] = EventItemWithDnD;
EventItem.propTypes = {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  eventItem: _propTypes.PropTypes.object.isRequired,
  isStart: _propTypes.PropTypes.bool.isRequired,
  isEnd: _propTypes.PropTypes.bool.isRequired,
  left: _propTypes.PropTypes.number.isRequired,
  width: _propTypes.PropTypes.number.isRequired,
  top: _propTypes.PropTypes.number.isRequired,
  isInPopover: _propTypes.PropTypes.bool.isRequired,
  leftIndex: _propTypes.PropTypes.number.isRequired,
  rightIndex: _propTypes.PropTypes.number.isRequired,
  isDragging: _propTypes.PropTypes.bool,
  dragRef: _propTypes.PropTypes.func,
  dragPreviewRef: _propTypes.PropTypes.func,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  conflictOccurred: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func
};
EventItem.defaultProps = {
  isDragging: undefined,
  dragRef: undefined,
  dragPreviewRef: undefined,
  updateEventStart: undefined,
  updateEventEnd: undefined,
  moveEvent: undefined,
  subtitleGetter: undefined,
  eventItemClick: undefined,
  viewEventClick: undefined,
  viewEventText: undefined,
  viewEvent2Click: undefined,
  viewEvent2Text: undefined,
  conflictOccurred: undefined,
  eventItemTemplateResolver: undefined
};