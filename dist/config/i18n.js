"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultLabels = getDefaultLabels;
exports.getLabel = getLabel;
exports.resetLabelsProvider = resetLabelsProvider;
exports.setLabelsProvider = setLabelsProvider;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * i18n configuration and labels provider
 *
 * This module provides a centralized way to manage user-facing strings in the scheduler.
 * Users can provide localized labels either through the config or by setting a custom
 * labels provider function.
 */

// Default English labels
var defaultLabels = {
  resourceName: 'Resource Name',
  taskName: 'Task Name',
  agendaViewHeader: 'Agenda',
  weekNumberLabel: 'Week No.'
};

// Current labels provider (can be a function or object)
var labelsProvider = null;

/**
 * Get the current label for a given key
 * @param {string} key - The label key (e.g., 'resourceName', 'taskName')
 * @param {string} locale - Optional locale code for locale-specific translations
 * @returns {string} The localized label or the default English label
 */
function getLabel(key) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  // If a custom provider function is set, use it
  if (typeof labelsProvider === 'function') {
    var label = labelsProvider(key, locale);
    return label !== undefined && label !== null ? label : defaultLabels[key];
  }

  // If a labels object provider is set, use it with fallback
  if (labelsProvider && _typeof(labelsProvider) === 'object') {
    var _label = labelsProvider[key];
    return _label !== undefined && _label !== null ? _label : defaultLabels[key];
  }

  // Fall back to default English labels
  return defaultLabels[key];
}

/**
 * Set a custom labels provider
 * @param {Function|Object} provider - Either a function(key, locale) -> string or an object with label key-value pairs
 */
function setLabelsProvider(provider) {
  labelsProvider = provider;
}

/**
 * Get all default labels
 * @returns {Object} Object with all default English labels
 */
function getDefaultLabels() {
  return _objectSpread({}, defaultLabels);
}

/**
 * Reset to default English labels
 */
function resetLabelsProvider() {
  labelsProvider = null;
}