"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Render the scheduler's resource table with hierarchical indentation, optional expand/collapse controls,
 * clickable slot names, and support for custom slot templates or an injected resource-cell renderer.
 *
 * @param {object} schedulerData - Scheduler state and helpers; must include `renderData`,
 * `getResourceTableWidth`, and `config`.
 * @param {number} contentScrollbarHeight - Height used to set the container's bottom padding.
 * @param {Function} [slotClickedFunc] - Called as `slotClickedFunc(schedulerData, item)` when a slot name is clicked.
 * @param {Function} [slotItemTemplateResolver] - Called as `slotItemTemplateResolver
 * (schedulerData, item, slotClickedFunc, width, className)` to provide a custom slot cell element;
 * if a value is returned it replaces the default slot cell.
 * @param {Function} [toggleExpandFunc] - Called as `toggleExpandFunc(schedulerData, slotId)`
 * to toggle expansion for items with children.
 * @param {Function} [CustomResourceCell] - Optional React component rendered inside the resource
 * `<td>` when provided; receives props `{ schedulerData, item, indents, slotClickedFunc, handleToggleExpand }`.
 * @returns {JSX.Element} The rendered resource table element.
 */
function ResourceView(_ref) {
  var schedulerData = _ref.schedulerData,
    contentScrollbarHeight = _ref.contentScrollbarHeight,
    slotClickedFunc = _ref.slotClickedFunc,
    slotItemTemplateResolver = _ref.slotItemTemplateResolver,
    toggleExpandFunc = _ref.toggleExpandFunc,
    CustomResourceCell = _ref.CustomResourceCell;
  var renderData = schedulerData.renderData;
  var width = schedulerData.getResourceTableWidth() - 2;
  var paddingBottom = contentScrollbarHeight;
  var displayRenderData = renderData.filter(function (o) {
    return o.render;
  });
  var handleToggleExpand = function handleToggleExpand(item) {
    if (toggleExpandFunc) {
      toggleExpandFunc(schedulerData, item.slotId);
    }
  };
  var renderSlotItem = function renderSlotItem(item, indents) {
    var indent = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "expander-space"
    }, "es".concat(item.indent));
    var iconProps = {
      onClick: function onClick() {
        return handleToggleExpand(item);
      }
    };
    if (item.hasChildren) {
      indent = item.expanded ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.MinusSquareOutlined, _objectSpread({}, iconProps), "es".concat(item.indent)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusSquareOutlined, _objectSpread({}, iconProps), "es".concat(item.indent));
    }
    indents.push(indent);
    var tdStyle = {
      height: item.rowHeight,
      backgroundColor: item.groupOnly ? schedulerData.config.groupOnlySlotColor : undefined
    };
    if (CustomResourceCell) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          "data-resource-id": item.slotId,
          style: tdStyle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomResourceCell, {
            schedulerData: schedulerData,
            item: item,
            indents: indents,
            slotClickedFunc: slotClickedFunc,
            handleToggleExpand: handleToggleExpand
          })
        })
      }, item.slotId);
    }
    var slotCell = slotClickedFunc ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "slot-cell",
      children: [indents, /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        style: {
          cursor: 'pointer'
        },
        className: "slot-text rbs-txt-btn-dis",
        onClick: function onClick() {
          return slotClickedFunc(schedulerData, item);
        },
        children: item.slotName
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "slot-cell",
      children: [indents, /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "slot-text rbs-txt-btn-dis",
        style: {
          cursor: slotClickedFunc === undefined ? undefined : 'pointer'
        },
        children: item.slotName
      })]
    });
    var slotItem = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      title: item.slotTitle || item.slotName,
      className: "overflow-text header2-text",
      style: {
        textAlign: 'left'
      },
      children: slotCell
    });
    if (slotItemTemplateResolver) {
      var resolvedTemplate = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, 'overflow-text header2-text');
      if (resolvedTemplate) {
        slotItem = resolvedTemplate;
      }
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
        "data-resource-id": item.slotId,
        style: tdStyle,
        children: slotItem
      })
    }, item.slotId);
  };
  var resourceList = displayRenderData.map(function (item) {
    var indents = [];
    for (var i = 0; i < item.indent; i += 1) {
      indents.push(/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "expander-space"
      }, "es".concat(i)));
    }
    return renderSlotItem(item, indents);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      paddingBottom: paddingBottom
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
      className: "resource-table",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
        children: resourceList
      })
    })
  });
}
ResourceView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  contentScrollbarHeight: _propTypes["default"].number.isRequired,
  slotClickedFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func,
  toggleExpandFunc: _propTypes["default"].func,
  CustomResourceCell: _propTypes["default"].func
};
var _default = exports["default"] = ResourceView;