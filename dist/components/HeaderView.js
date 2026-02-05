"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _default2 = require("../config/default");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Render the table header rows for a scheduler view, including an optional week-number row and the main header cells.
 * @param {Object} props.schedulerData - Scheduler configuration and utilities (headers array,
 * cell unit, formatting, sizing, and locale/date functions).
 * @param {Function} [props.nonAgendaCellHeaderTemplateResolver] - Optional resolver to customize
 * rendering of individual header cells. Called with (schedulerData, headerItem, formattedList, style).
 * @returns {JSX.Element} A <thead> element containing the optional week-number row and the
 * main header row for the scheduler table.
 */
function HeaderView(_ref) {
  var schedulerData = _ref.schedulerData,
    nonAgendaCellHeaderTemplateResolver = _ref.nonAgendaCellHeaderTemplateResolver;
  var headers = schedulerData.headers,
    cellUnit = schedulerData.cellUnit,
    config = schedulerData.config,
    localeDayjs = schedulerData.localeDayjs;
  var showWeekNumber = config.showWeekNumber,
    _config$weekNumberRow = config.weekNumberRowHeight,
    weekNumberRowHeight = _config$weekNumberRow === void 0 ? 24 : _config$weekNumberRow;
  var headerHeight = schedulerData.getTableHeaderHeight();
  var cellWidth = schedulerData.getContentCellWidth();
  var minuteStepsInHour = schedulerData.getMinuteStepsInHour();

  // Week number row generation
  var weekNumberRow = (0, _react.useMemo)(function () {
    if (!showWeekNumber) return null;
    var weekGroups = [];
    var currentWeekKey = null;
    var currentWeek = null;
    var currentYear = null;
    var colspan = 0;
    headers.forEach(function (item) {
      var year = localeDayjs(new Date(item.time)).year();
      var weekNum = localeDayjs(new Date(item.time)).isoWeek();
      var weekKey = "".concat(year, "-").concat(weekNum);
      if (currentWeekKey === weekKey) {
        colspan += 1;
      } else {
        if (currentWeekKey !== null) {
          weekGroups.push({
            week: currentWeek,
            year: currentYear,
            colspan: colspan
          });
        }
        currentWeekKey = weekKey;
        currentWeek = weekNum;
        currentYear = year;
        colspan = 1;
      }
    });

    // Push the last week group
    if (currentWeekKey !== null) {
      weekGroups.push({
        week: currentWeek,
        year: currentYear,
        colspan: colspan
      });
    }
    var cellStyle = {
      fontSize: '0.85em',
      opacity: 0.7,
      borderBottom: "1px solid ".concat(config.headerBorderColor || '#e9e9e9'),
      padding: '4px 8px',
      textAlign: 'center'
    };
    return weekGroups.map(function (group, idx) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
        colSpan: group.colspan,
        style: cellStyle,
        children: ["W", group.week]
      }, "week-".concat(group.year, "-").concat(group.week, "-").concat(idx));
    });
  }, [showWeekNumber, headers, localeDayjs]);

  // Extract common style creation logic
  var createCellStyle = (0, _react.useCallback)(function (item, width, isLastCell) {
    if (isLastCell) {
      return item.nonWorkingTime ? {
        color: config.nonWorkingTimeHeadColor,
        backgroundColor: config.nonWorkingTimeHeadBgColor
      } : {};
    }
    return item.nonWorkingTime ? {
      width: width,
      color: config.nonWorkingTimeHeadColor,
      backgroundColor: config.nonWorkingTimeHeadBgColor
    } : {
      width: width
    };
  }, [config]);

  // Extract cell format selection logic
  var getCellFormat = (0, _react.useCallback)(function (cellUnitParam) {
    var formatMap = _defineProperty(_defineProperty(_defineProperty({}, _default2.CellUnit.Week, config.nonAgendaWeekCellHeaderFormat), _default2.CellUnit.Month, config.nonAgendaMonthCellHeaderFormat), _default2.CellUnit.Year, config.nonAgendaYearCellHeaderFormat);
    return formatMap[cellUnitParam] || config.nonAgendaOtherCellHeaderFormat;
  }, [config]);

  // Render cell content helper
  var renderCellContent = (0, _react.useCallback)(function (item, formattedList, style) {
    if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
      return nonAgendaCellHeaderTemplateResolver(schedulerData, item, formattedList, style);
    }
    var content = formattedList.map(function (text, idx) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: text
      }, "".concat(item.time, "-").concat(idx, "-").concat(text));
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      className: "header3-text",
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: content
      })
    }, "header-".concat(item.time));
  }, [nonAgendaCellHeaderTemplateResolver, schedulerData]);

  // Memoize header list generation
  var headerList = (0, _react.useMemo)(function () {
    if (cellUnit === _default2.CellUnit.Hour) {
      var result = [];
      var _lastIndex = headers.length - minuteStepsInHour;
      headers.forEach(function (item, index) {
        if (index % minuteStepsInHour !== 0) return;
        var datetime = localeDayjs(new Date(item.time));
        var width = cellWidth * minuteStepsInHour;
        var isLastCell = index === _lastIndex;
        var style = createCellStyle(item, width, isLastCell);
        var formattedList = config.nonAgendaDayCellHeaderFormat.split('|').map(function (format) {
          return datetime.format(format);
        });
        result.push(renderCellContent(item, formattedList, style));
      });
      return result;
    }

    // Non-hour cell units
    var cellFormat = getCellFormat(cellUnit);
    var lastIndex = headers.length - 1;
    return headers.map(function (item, index) {
      var datetime = localeDayjs(new Date(item.time));
      var isLastCell = index === lastIndex;
      var style = createCellStyle(item, cellWidth, isLastCell);
      var formattedList = cellFormat.split('|').map(function (format) {
        return datetime.format(format);
      });
      return renderCellContent(item, formattedList, style);
    });
  }, [cellUnit, headers, minuteStepsInHour, cellWidth, config, localeDayjs, createCellStyle, getCellFormat, renderCellContent]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("thead", {
    children: [weekNumberRow && /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      style: {
        height: weekNumberRowHeight
      },
      children: weekNumberRow
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      style: {
        height: headerHeight
      },
      children: headerList
    })]
  });
}
HeaderView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  nonAgendaCellHeaderTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = HeaderView;