"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AddMorePopover", {
  enumerable: true,
  get: function get() {
    return _AddMorePopover["default"];
  }
});
Object.defineProperty(exports, "CellUnit", {
  enumerable: true,
  get: function get() {
    return _default.CellUnit;
  }
});
Object.defineProperty(exports, "DATETIME_FORMAT", {
  enumerable: true,
  get: function get() {
    return _default.DATETIME_FORMAT;
  }
});
Object.defineProperty(exports, "DATE_FORMAT", {
  enumerable: true,
  get: function get() {
    return _default.DATE_FORMAT;
  }
});
Object.defineProperty(exports, "DemoData", {
  enumerable: true,
  get: function get() {
    return _sample["default"];
  }
});
Object.defineProperty(exports, "DnDContext", {
  enumerable: true,
  get: function get() {
    return _DnDContext["default"];
  }
});
Object.defineProperty(exports, "DnDSource", {
  enumerable: true,
  get: function get() {
    return _DnDSource["default"];
  }
});
exports.Scheduler = Scheduler;
Object.defineProperty(exports, "SchedulerData", {
  enumerable: true,
  get: function get() {
    return _SchedulerData["default"];
  }
});
Object.defineProperty(exports, "SummaryPos", {
  enumerable: true,
  get: function get() {
    return _default.SummaryPos;
  }
});
Object.defineProperty(exports, "ViewType", {
  enumerable: true,
  get: function get() {
    return _default.ViewType;
  }
});
Object.defineProperty(exports, "wrapperFun", {
  enumerable: true,
  get: function get() {
    return _WrapperFun["default"];
  }
});
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _default = require("../config/default");
var _sample = _interopRequireDefault(require("../sample-data/sample1"));
var _AddMorePopover = _interopRequireDefault(require("./AddMorePopover"));
var _AgendaView = _interopRequireDefault(require("./AgendaView"));
var _BodyView = _interopRequireDefault(require("./BodyView"));
var _DependencyOverlay = _interopRequireDefault(require("./DependencyOverlay"));
var _DnDContext = _interopRequireDefault(require("./DnDContext"));
var _DnDSource = _interopRequireDefault(require("./DnDSource"));
var _HeaderView = _interopRequireDefault(require("./HeaderView"));
var _ResourceEvents = _interopRequireDefault(require("./ResourceEvents"));
var _ResourceView = _interopRequireDefault(require("./ResourceView"));
var _SchedulerData = _interopRequireDefault(require("./SchedulerData"));
var _SchedulerHeader = _interopRequireDefault(require("./SchedulerHeader"));
var _WrapperFun = _interopRequireDefault(require("./WrapperFun"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } /**
 * Render the scheduler UI with resource and agenda views, responsive sizing, and drag-and-drop support.
 *
 * @param {object} props - Component properties.
 * @param {SchedulerData} props.schedulerData - Scheduler state and configuration used to drive rendering and behavior.
 * @param {Array<DnDSource>} [props.dndSources] - Additional drag-and-drop sources to merge into the
 * scheduler's DnD context.
 * @param {React.RefObject<HTMLElement>} [props.parentRef] - Parent element ref used when sizing
 * is driven by the parent container.
 * @param {function(SchedulerData):void} props.prevClick - Callback invoked to navigate to the previous range.
 * @param {function(SchedulerData):void} props.nextClick - Callback invoked to navigate to the next range.
 * @param {function(SchedulerData, object):void} props.onViewChange - Callback invoked when the view type,
 * agenda toggle, or perspective changes.
 * @param {function(SchedulerData, string|Date):void} props.onSelectDate - Callback invoked when a date is selected.
 * @param {React.ReactNode} [props.leftCustomHeader] - Optional custom content rendered on the left side of the header.
 * @param {React.ReactNode} [props.rightCustomHeader] - Optional custom content rendered on the
 * right side of the header.
 * @param {function} [props.CustomResourceHeader] - Optional component used to render the resource header cell.
 * @param {object} [props.configTableHeaderStyle] - Optional inline style object applied
 * to the resource header container.
 * @returns {JSX.Element} The scheduler root element tree to be rendered.
 */
function Scheduler(props) {
  var schedulerData = props.schedulerData,
    dndSources = props.dndSources,
    parentRef = props.parentRef,
    prevClick = props.prevClick,
    nextClick = props.nextClick,
    onViewChange = props.onViewChange,
    onSelectDate = props.onSelectDate,
    leftCustomHeader = props.leftCustomHeader,
    rightCustomHeader = props.rightCustomHeader,
    CustomResourceHeader = props.CustomResourceHeader,
    configTableHeaderStyle = props.configTableHeaderStyle,
    dependencies = props.dependencies;

  // Initialize DnD context
  var initDndContext = function initDndContext() {
    var sources = [];
    sources.push(new _DnDSource["default"](function (dndProps) {
      return dndProps.eventItem;
    }, schedulerData.config.dragAndDropEnabled));
    if (dndSources !== undefined && dndSources.length > 0) {
      sources = [].concat(_toConsumableArray(sources), _toConsumableArray(dndSources));
    }
    return new _DnDContext["default"](sources);
  };

  // State initialization
  var _useState = (0, _react.useState)({
      dndContext: initDndContext(),
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      documentWidth: 0,
      documentHeight: 0,
      headerHeight: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  // Refs instead of class properties
  var currentAreaRef = (0, _react.useRef)(-1);
  var scrollLeftRef = (0, _react.useRef)(0);
  var scrollTopRef = (0, _react.useRef)(0);
  var schedulerHeadRef = (0, _react.useRef)(null);
  var schedulerHeaderRef = (0, _react.useRef)(null);
  var schedulerResourceRef = (0, _react.useRef)(null);
  var schedulerContentRef = (0, _react.useRef)(null);
  var schedulerContentBgTableRef = (0, _react.useRef)(null);
  var ulObserverRef = (0, _react.useRef)(null);
  var headerObserverRef = (0, _react.useRef)(null);

  // Window resize handler
  var onWindowResize = (0, _react.useCallback)(function () {
    schedulerData._setDocumentWidth(document.documentElement.clientWidth);
    schedulerData._setDocumentHeight(document.documentElement.clientHeight);
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight
      });
    });
  }, [schedulerData]);

  // Effect for window resize event
  (0, _react.useEffect)(function () {
    if (schedulerData.isSchedulerResponsive() && !schedulerData.config.responsiveByParent || parentRef === undefined) {
      schedulerData._setDocumentWidth(document.documentElement.clientWidth);
      schedulerData._setDocumentHeight(document.documentElement.clientHeight);
      window.addEventListener('resize', onWindowResize);
      return function () {
        window.removeEventListener('resize', onWindowResize);
      };
    }
  }, [schedulerData, parentRef, onWindowResize]);

  // Effect for parent element resize observation
  (0, _react.useEffect)(function () {
    if (parentRef !== undefined) {
      if (schedulerData.config.responsiveByParent && !!parentRef.current) {
        schedulerData._setDocumentWidth(parentRef.current.offsetWidth);
        ulObserverRef.current = new ResizeObserver(function () {
          if (parentRef.current) {
            var _width = parentRef.current.offsetWidth;
            var height = parentRef.current.offsetHeight;
            schedulerData._setDocumentWidth(_width);
            schedulerData._setDocumentHeight(height);
            setState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                documentWidth: _width,
                documentHeight: height
              });
            });
          }
        });
        ulObserverRef.current.observe(parentRef.current);
        return function () {
          if (ulObserverRef.current && parentRef.current) {
            ulObserverRef.current.unobserve(parentRef.current);
          }
        };
      }
    }
  }, [parentRef, schedulerData]);

  // Effect for scheduler header resize observation
  (0, _react.useEffect)(function () {
    if (schedulerHeaderRef !== undefined) {
      if (schedulerData.config.responsiveByParent && !!schedulerHeaderRef.current) {
        schedulerData._setDocumentWidth(schedulerHeaderRef.current.offsetWidth);
        schedulerData._setDocumentHeight(schedulerHeaderRef.current.offsetHeight);
        headerObserverRef.current = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) {
            // Get the DOM node
            var node = entry.target;
            // Get the height from the bounding rect (includes padding and border)
            var rect = node.getBoundingClientRect();
            // Get computed styles for margins
            var style = window.getComputedStyle(node);
            var marginTop = parseFloat(style.marginTop) || 0;
            var marginBottom = parseFloat(style.marginBottom) || 0;
            // Total height including margins
            var totalHeight = rect.height + marginTop + marginBottom;
            schedulerData._setSchedulerHeaderHeight(totalHeight);
            setState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                headerHeight: totalHeight
              });
            });
          });
        });
        headerObserverRef.current.observe(schedulerHeaderRef.current);
        return function () {
          if (headerObserverRef.current && schedulerHeaderRef.current) {
            headerObserverRef.current.unobserve(schedulerHeaderRef.current);
          }
        };
      }
    }
  }, [schedulerHeaderRef, schedulerData]);

  // Resolving scrollbar sizes
  var resolveScrollbarSize = (0, _react.useCallback)(function () {
    var contentScrollbarHeight = 17;
    var contentScrollbarWidth = 17;
    var resourceScrollbarHeight = 17;
    var resourceScrollbarWidth = 17;
    if (schedulerContentRef.current) {
      contentScrollbarHeight = schedulerContentRef.current.offsetHeight - schedulerContentRef.current.clientHeight;
      contentScrollbarWidth = schedulerContentRef.current.offsetWidth - schedulerContentRef.current.clientWidth;
    }
    if (schedulerResourceRef.current) {
      resourceScrollbarHeight = schedulerResourceRef.current.offsetHeight - schedulerResourceRef.current.clientHeight;
      resourceScrollbarWidth = schedulerResourceRef.current.offsetWidth - schedulerResourceRef.current.clientWidth;
    }
    var needSet = false;
    var tmpState = {};
    if (contentScrollbarHeight !== state.contentScrollbarHeight) {
      tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
        contentScrollbarHeight: contentScrollbarHeight
      });
      needSet = true;
    }
    if (contentScrollbarWidth !== state.contentScrollbarWidth) {
      tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
        contentScrollbarWidth: contentScrollbarWidth
      });
      needSet = true;
    }
    if (resourceScrollbarHeight !== state.resourceScrollbarHeight) {
      tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
        resourceScrollbarHeight: resourceScrollbarHeight
      });
      needSet = true;
    }
    if (resourceScrollbarWidth !== state.resourceScrollbarWidth) {
      tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
        resourceScrollbarWidth: resourceScrollbarWidth
      });
      needSet = true;
    }
    if (needSet) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), tmpState);
      });
    }
  }, [state.contentScrollbarHeight, state.contentScrollbarWidth, state.resourceScrollbarHeight, state.resourceScrollbarWidth]);

  // Effect for scrollToSpecialDayjs functionality
  (0, _react.useEffect)(function () {
    resolveScrollbarSize();
    var localeDayjs = schedulerData.localeDayjs,
      behaviors = schedulerData.behaviors;
    if (schedulerData.getScrollToSpecialDayjs() && !!behaviors.getScrollSpecialDayjsFunc) {
      if (!!schedulerContentRef.current && schedulerContentRef.current.scrollWidth > schedulerContentRef.current.clientWidth) {
        var start = localeDayjs(new Date(schedulerData.startDate)).startOf('day');
        var end = localeDayjs(new Date(schedulerData.endDate)).endOf('day');
        var specialDayjs = behaviors.getScrollSpecialDayjsFunc(schedulerData, start, end);
        if (specialDayjs >= start && specialDayjs <= end) {
          var index = 0;
          schedulerData.headers.forEach(function (item) {
            var header = localeDayjs(new Date(item.time));
            if (specialDayjs >= header) {
              index += 1;
            }
          });
          schedulerContentRef.current.scrollLeft = (index - 1) * schedulerData.getContentCellWidth();
          schedulerData.setScrollToSpecialDayjs(false);
        }
      }
    }
  }, [schedulerData, resolveScrollbarSize]);

  // Mouse event handlers
  var onSchedulerHeadMouseOver = (0, _react.useCallback)(function () {
    currentAreaRef.current = 2;
  }, []);
  var onSchedulerHeadMouseOut = (0, _react.useCallback)(function () {
    currentAreaRef.current = -1;
  }, []);
  var onSchedulerHeadScroll = (0, _react.useCallback)(function () {
    if ((currentAreaRef.current === 2 || currentAreaRef.current === -1) && schedulerContentRef.current.scrollLeft !== schedulerHeadRef.current.scrollLeft) {
      schedulerContentRef.current.scrollLeft = schedulerHeadRef.current.scrollLeft;
    }
  }, []);
  var onSchedulerResourceMouseOver = (0, _react.useCallback)(function () {
    currentAreaRef.current = 1;
  }, []);
  var onSchedulerResourceMouseOut = (0, _react.useCallback)(function () {
    currentAreaRef.current = -1;
  }, []);
  var onSchedulerResourceScroll = (0, _react.useCallback)(function () {
    if (schedulerResourceRef.current) {
      if ((currentAreaRef.current === 1 || currentAreaRef.current === -1) && schedulerContentRef.current.scrollTop !== schedulerResourceRef.current.scrollTop) {
        schedulerContentRef.current.scrollTop = schedulerResourceRef.current.scrollTop;
      }
    }
  }, []);
  var onSchedulerContentMouseOver = (0, _react.useCallback)(function () {
    currentAreaRef.current = 0;
  }, []);
  var onSchedulerContentMouseOut = (0, _react.useCallback)(function () {
    currentAreaRef.current = -1;
  }, []);
  var onSchedulerContentScroll = (0, _react.useCallback)(function () {
    if (schedulerResourceRef.current) {
      if (currentAreaRef.current === 0 || currentAreaRef.current === -1) {
        if (schedulerHeadRef.current.scrollLeft !== schedulerContentRef.current.scrollLeft) {
          schedulerHeadRef.current.scrollLeft = schedulerContentRef.current.scrollLeft;
        }
        if (schedulerResourceRef.current.scrollTop !== schedulerContentRef.current.scrollTop) {
          schedulerResourceRef.current.scrollTop = schedulerContentRef.current.scrollTop;
        }
      }
    }
    var onScrollLeft = props.onScrollLeft,
      onScrollRight = props.onScrollRight,
      onScrollTop = props.onScrollTop,
      onScrollBottom = props.onScrollBottom;
    if (schedulerContentRef.current.scrollLeft !== scrollLeftRef.current) {
      if (schedulerContentRef.current.scrollLeft === 0 && onScrollLeft !== undefined) {
        onScrollLeft(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth);
      }
      if (Math.round(schedulerContentRef.current.scrollLeft) === schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth && onScrollRight !== undefined) {
        onScrollRight(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth);
      }
    } else if (schedulerContentRef.current.scrollTop !== scrollTopRef.current) {
      if (schedulerContentRef.current.scrollTop === 0 && onScrollTop !== undefined) {
        onScrollTop(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight);
      }
      if (Math.round(schedulerContentRef.current.scrollTop) === schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight && onScrollBottom !== undefined) {
        onScrollBottom(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight);
      }
    }
    scrollLeftRef.current = schedulerContentRef.current.scrollLeft;
    scrollTopRef.current = schedulerContentRef.current.scrollTop;
  }, [props, schedulerData]);

  // Event handlers
  var handleViewChange = (0, _react.useCallback)(function (e) {
    var viewType = parseInt(e.target.value.charAt(0), 10);
    var showAgenda = e.target.value.charAt(1) === '1';
    var isEventPerspective = e.target.value.charAt(2) === '1';
    onViewChange(schedulerData, {
      viewType: viewType,
      showAgenda: showAgenda,
      isEventPerspective: isEventPerspective
    });
  }, [onViewChange, schedulerData]);
  var goNext = (0, _react.useCallback)(function () {
    nextClick(schedulerData);
  }, [nextClick, schedulerData]);
  var goBack = (0, _react.useCallback)(function () {
    prevClick(schedulerData);
  }, [prevClick, schedulerData]);
  var onSelect = (0, _react.useCallback)(function (date) {
    onSelectDate(schedulerData, date);
  }, [onSelectDate, schedulerData]);

  // Rendering
  var viewType = schedulerData.viewType,
    renderData = schedulerData.renderData,
    showAgenda = schedulerData.showAgenda,
    config = schedulerData.config;
  var width = schedulerData.getSchedulerWidth();
  var contentScrollbarHeight = state.contentScrollbarHeight,
    contentScrollbarWidth = state.contentScrollbarWidth,
    resourceScrollbarHeight = state.resourceScrollbarHeight,
    resourceScrollbarWidth = state.resourceScrollbarWidth;
  var showWeekNumber = config.showWeekNumber,
    weekNumberRowHeight = config.weekNumberRowHeight;
  var tbodyContent = /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {});
  if (showAgenda) {
    tbodyContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_AgendaView["default"], _objectSpread({}, props));
  } else {
    var _config$headerBorderC, _config$headerBorderC2, _config$weekNumberLab, _config$headerBorderC3;
    var resourceTableWidth = schedulerData.getResourceTableWidth();
    var schedulerContainerWidth = width - (config.resourceViewEnabled ? resourceTableWidth : 0);
    var schedulerWidth = schedulerData.getContentTableWidth() - 1;
    var eventDndSource = state.dndContext.getDndSource();
    var displayRenderData = renderData.filter(function (o) {
      return o.render;
    });
    var resourceEventsList = displayRenderData.map(function (item) {
      return /*#__PURE__*/(0, _react.createElement)(_ResourceEvents["default"], _objectSpread(_objectSpread({}, props), {}, {
        key: item.slotId,
        resourceEvents: item,
        dndSource: eventDndSource,
        dndContext: state.dndContext
      }));
    });
    var contentHeight = config.schedulerContentHeight;
    var resourcePaddingBottom = resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
    var contentPaddingBottom = contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
    var schedulerContentStyle = {
      overflowX: viewType === _default.ViewType.Week ? 'hidden' : 'auto',
      overflowY: 'auto',
      margin: '0px',
      position: 'relative',
      height: contentHeight,
      paddingBottom: contentPaddingBottom
    };
    var resourceContentStyle = {
      height: contentHeight,
      overflowX: 'auto',
      overflowY: 'auto',
      width: resourceTableWidth + resourceScrollbarWidth - 2,
      margin: "0px -".concat(contentScrollbarWidth, "px 0px 0px")
    };
    if (config.schedulerMaxHeight > 0) {
      var totalHeaderHeight = config.tableHeaderHeight + (showWeekNumber ? weekNumberRowHeight : 0);
      schedulerContentStyle = _objectSpread(_objectSpread({}, schedulerContentStyle), {}, {
        maxHeight: config.schedulerMaxHeight - totalHeaderHeight
      });
      resourceContentStyle = _objectSpread(_objectSpread({}, resourceContentStyle), {}, {
        maxHeight: config.schedulerMaxHeight - totalHeaderHeight
      });
    } else if (config.responsiveByParent && schedulerData.documentHeight > 0) {
      // Responsive height minus SchedulerHeader
      var availableHeight = schedulerData.getSchedulerHeight();
      schedulerContentStyle = _objectSpread(_objectSpread({}, schedulerContentStyle), {}, {
        height: availableHeight
      });
      resourceContentStyle = _objectSpread(_objectSpread({}, resourceContentStyle), {}, {
        height: availableHeight
      });
    }
    var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
    tbodyContent = /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
        style: {
          display: config.resourceViewEnabled ? undefined : 'none',
          width: resourceTableWidth,
          verticalAlign: 'top'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "resource-view",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: _objectSpread({
              borderBottom: "1px solid ".concat((_config$headerBorderC = config.headerBorderColor) !== null && _config$headerBorderC !== void 0 ? _config$headerBorderC : '#e9e9e9'),
              height: config.tableHeaderHeight + (showWeekNumber ? weekNumberRowHeight : 0)
            }, configTableHeaderStyle),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                overflowX: 'scroll',
                overflowY: 'hidden',
                margin: "0px 0px -".concat(contentScrollbarHeight, "px")
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
                className: "resource-table",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("thead", {
                  children: [showWeekNumber && /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                    style: {
                      height: weekNumberRowHeight
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      style: {
                        borderBottom: "1px solid ".concat((_config$headerBorderC2 = config.headerBorderColor) !== null && _config$headerBorderC2 !== void 0 ? _config$headerBorderC2 : '#e9e9e9'),
                        fontSize: '0.85em',
                        opacity: 0.7,
                        padding: '4px 8px'
                      },
                      children: (_config$weekNumberLab = config.weekNumberLabel) !== null && _config$weekNumberLab !== void 0 ? _config$weekNumberLab : 'Week No.'
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                    style: {
                      height: config.tableHeaderHeight
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "header3-text",
                      children: CustomResourceHeader ? /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomResourceHeader, {}) : resourceName
                    })
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: resourceContentStyle,
            ref: schedulerResourceRef,
            onMouseOver: onSchedulerResourceMouseOver,
            onFocus: onSchedulerResourceMouseOver,
            onMouseOut: onSchedulerResourceMouseOut,
            onBlur: onSchedulerResourceMouseOut,
            onScroll: onSchedulerResourceScroll,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResourceView["default"], _objectSpread(_objectSpread({}, props), {}, {
              contentScrollbarHeight: resourcePaddingBottom
            }))
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "scheduler-view",
          style: {
            width: schedulerContainerWidth,
            verticalAlign: 'top'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              overflow: 'hidden',
              borderBottom: "1px solid ".concat((_config$headerBorderC3 = config.headerBorderColor) !== null && _config$headerBorderC3 !== void 0 ? _config$headerBorderC3 : '#e9e9e9'),
              height: config.tableHeaderHeight + (showWeekNumber ? weekNumberRowHeight : 0)
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                overflowX: 'scroll',
                overflowY: 'hidden',
                margin: "0px 0px -".concat(contentScrollbarHeight, "px")
              },
              ref: schedulerHeadRef,
              onMouseOver: onSchedulerHeadMouseOver,
              onFocus: onSchedulerHeadMouseOver,
              onMouseOut: onSchedulerHeadMouseOut,
              onBlur: onSchedulerHeadMouseOut,
              onScroll: onSchedulerHeadScroll,
              "aria-label": "Scheduler Header",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                style: {
                  paddingRight: "".concat(contentScrollbarWidth, "px"),
                  width: schedulerWidth + contentScrollbarWidth
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
                  className: "scheduler-bg-table",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderView["default"], _objectSpread({}, props))
                })
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: schedulerContentStyle,
            ref: schedulerContentRef,
            onMouseOver: onSchedulerContentMouseOver,
            onFocus: onSchedulerContentMouseOver,
            onMouseOut: onSchedulerContentMouseOut,
            onBlur: onSchedulerContentMouseOut,
            onScroll: onSchedulerContentScroll,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              style: {
                width: schedulerWidth
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "scheduler-content",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DependencyOverlay["default"], {
                  dependencies: dependencies
                }, "".concat(schedulerData.viewType, "-").concat(schedulerData.startDate, "-").concat(schedulerData.endDate)), /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
                  className: "scheduler-content-table",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                    children: resourceEventsList
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "scheduler-bg",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
                  className: "scheduler-bg-table",
                  style: {
                    width: schedulerWidth
                  },
                  ref: schedulerContentBgTableRef,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BodyView["default"], _objectSpread({}, props))
                })
              })]
            })
          })]
        })
      })]
    });
  }
  var schedulerHeader = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SchedulerHeader["default"], {
    ref: schedulerHeaderRef,
    style: {
      display: config.headerEnabled ? undefined : 'none',
      marginBottom: config.headerEnabled ? '24px' : undefined
    },
    onViewChange: handleViewChange,
    schedulerData: schedulerData,
    onSelectDate: onSelect,
    goNext: goNext,
    goBack: goBack,
    rightCustomHeader: rightCustomHeader,
    leftCustomHeader: leftCustomHeader
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
    id: "rbs-root",
    className: "rbs",
    style: {
      width: "".concat(width, "px")
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          colSpan: "2",
          children: schedulerHeader
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
      children: tbodyContent
    })]
  });
}
Scheduler.propTypes = {
  parentRef: _propTypes["default"].object,
  schedulerData: _propTypes["default"].object.isRequired,
  prevClick: _propTypes["default"].func.isRequired,
  nextClick: _propTypes["default"].func.isRequired,
  onViewChange: _propTypes["default"].func.isRequired,
  onSelectDate: _propTypes["default"].func.isRequired,
  onSetAddMoreState: _propTypes["default"].func,
  updateEventStart: _propTypes["default"].func,
  updateEventEnd: _propTypes["default"].func,
  moveEvent: _propTypes["default"].func,
  movingEvent: _propTypes["default"].func,
  leftCustomHeader: _propTypes["default"].object,
  rightCustomHeader: _propTypes["default"].object,
  newEvent: _propTypes["default"].func,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  conflictOccurred: _propTypes["default"].func,
  eventItemTemplateResolver: _propTypes["default"].func,
  dndSources: _propTypes["default"].array,
  slotClickedFunc: _propTypes["default"].func,
  toggleExpandFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func,
  nonAgendaCellHeaderTemplateResolver: _propTypes["default"].func,
  onScrollLeft: _propTypes["default"].func,
  onScrollRight: _propTypes["default"].func,
  onScrollTop: _propTypes["default"].func,
  onScrollBottom: _propTypes["default"].func,
  CustomResourceHeader: _propTypes["default"].func,
  CustomResourceCell: _propTypes["default"].func,
  configTableHeaderStyle: _propTypes["default"].object,
  dependencies: _propTypes["default"].array
};