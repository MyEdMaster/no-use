import React, { useState, Component, Fragment, useEffect, useRef, useContext, PureComponent } from 'react';
import classNames from 'classnames';
import { Transition, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { Manager, Popper as Popper$1, Reference } from 'react-popper';
import NumericInput from 'react-numeric-input';
import { NavLink as NavLink$1 } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker as DatePicker$1 } from 'material-ui-pickers';
import moment from 'moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Link } from 'react-scroll';
import raf from 'raf';
export { toast as MDBToast, ToastContainer as MDBToastContainer, cssTransition as MDBcssTransition, ToastContainer, cssTransition, toast } from 'react-toastify';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var Alert = function Alert(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var closeAlert = function closeAlert() {
    setIsOpen(false);
  };

  var handleOnExit = function handleOnExit(node) {
    node.classList.add("fade");
    props.onClose && props.onClose();
  };

  var handleOnExited = function handleOnExited(node) {
    props.onClosed && props.onClosed();
  };

  var className = props.className,
      color = props.color,
      children = props.children,
      dismiss = props.dismiss;
  var alertClasses = classNames("alert", color && "alert-".concat(color), className);
  var alertComponent;

  if (dismiss) {
    alertComponent = React.createElement(Transition, {
      "in": isOpen,
      timeout: 150,
      unmountOnExit: true,
      onExit: function onExit(node) {
        return handleOnExit(node);
      },
      onExited: function onExited(node) {
        return handleOnExited(node);
      }
    }, React.createElement("div", {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children, React.createElement("button", {
      onClick: closeAlert,
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))));
  } else {
    alertComponent = React.createElement("div", {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children);
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: "primary"
};
Alert.propTypes = {
  className: propTypes.string,
  color: propTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  onClose: propTypes.func,
  onClosed: propTypes.func
};

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;

      if (windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) && scroll < _this.getOffset(_this.elemRef.current) || windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight && scroll < _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(_this.elemRef.current) + 100 > docHeight) {
        // if the predicate is true, change state
        _this.setState({
          isVisible: true,
          revealed: true
        });
      } else {
        //  was the "revealing" fired at least once?
        if (_this.state.revealed) {
          return;
        } else {
          // if it wasn't, hide
          _this.setState({
            isVisible: false,
            revealed: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIteration", function (e) {
      if (_this.props.onAnimationIteration) {
        _this.setState({
          countIterations: _this.state.countIterations + 1
        });

        _this.props.onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationEnd && _this.props.count === _this.state.countIterations) {
        _this.props.onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    _this.state = {
      isVisible: _this.props.reveal ? false : true,
      revealed: _this.props.reveal ? false : true,
      countIterations: 0
    };
    _this.elemRef = React.createRef();
    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add EL on window if the animation is to "reveal"
      if (this.props.reveal) {
        window.addEventListener('scroll', this.updatePredicate);
        this.updatePredicate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.reveal) {
        window.removeEventListener('scroll', this.updatePredicate);
      }
    } // the function to judge whether the animation should be started

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          type = _this$props.type,
          duration = _this$props.duration,
          delay = _this$props.delay,
          count = _this$props.count,
          reveal = _this$props.reveal,
          infinite = _this$props.infinite,
          style = _this$props.style,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "type", "duration", "delay", "count", "reveal", "infinite", "style", "children"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? 'visible' : 'hidden',
        animationName: type
      };
      var hiddenStyles = {
        animationName: 'none',
        visibility: 'hidden'
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(this.state.isVisible && 'animated', // will this work?
      type && type, infinite && 'infinite', className);
      return React.createElement(Tag, _extends({
        "data-test": "animation"
      }, attributes, {
        className: classes,
        style: isVisible && revealed ? getAllStyles : hiddenStyles,
        ref: this.elemRef,
        onAnimationStart: this.handleStart,
        onAnimationIteration: this.handleIteration,
        onAnimationEnd: this.handleEnd
      }), children);
    }
  }]);

  return Animation;
}(Component);

Animation.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  type: propTypes.string,
  delay: propTypes.string,
  count: propTypes.number,
  onAnimationEnd: propTypes.func,
  onAnimationStart: propTypes.func
};
Animation.defaultProps = {
  tag: 'div',
  reveal: false,
  duration: 1,
  count: 1
};

var Badge = function Badge(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      color = props.color,
      pill = props.pill,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "color", "pill"]);

  var classes = classNames('badge', color, 'badge-' + color, pill ? 'badge-pill' : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "badge"
  }, attributes, {
    className: classes
  }), children);
};

Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};
Badge.propTypes = {
  color: propTypes.string,
  pill: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};
var returnAttributes = function returnAttributes(attributes) {
  var newAttributesObject = Object.keys(attributes).reduce(function (previousValue, currentElement) {
    if (attributes[currentElement]) previousValue[currentElement] = attributes[currentElement];
    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(" ");
  var specialColors = ["danger", "warning", "success", "info", "default", "primary", "secondary", "elegant", "stylish", "unique", "special"];
  var colorClasses = "";
  colorArray.forEach(function (color) {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += "".concat(color, " ");
      } else {
        colorClasses += "".concat(color, "-color");
      }
    } else {
      colorClasses += "".concat(color, " ");
    }
  });
  return colorClasses;
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames('breadcrumb', uppercase && 'text-uppercase', bold && 'font-up-bold', light && 'white-text', color && getColorClass(color), className);
  var children;

  if (bold) {
    children = React.Children.map(props.children, function (child) {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React.createElement("nav", {
    "data-test": "breadcrumb"
  }, React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  light: propTypes.bool,
  uppercase: propTypes.bool,
  bold: propTypes.bool
};

var Fa = function Fa(props) {
  var border = props.border,
      brand = props.brand,
      className = props.className,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      fixed = props.fixed,
      flip = props.flip,
      icon = props.icon,
      inverse = props.inverse,
      light = props.light,
      list = props.list,
      pull = props.pull,
      pulse = props.pulse,
      regular = props.regular,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      stack = props.stack,
      attributes = _objectWithoutProperties(props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

  var iconPrefix = brand || fab ? "fab" : light || fal ? "fal" : regular || far ? "far" : "fa";
  var classes = classNames(iconPrefix, list ? "fa-li" : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? "fa-fw" : false, pull ? "fa-pull-".concat(pull) : false, border ? "fa-border" : false, spin ? "fa-spin" : false, pulse ? "fa-pulse" : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? "fa-inverse" : false, stack ? "fa-".concat(stack) : false, className);
  return React.createElement("i", _extends({
    "data-test": "fa"
  }, attributes, {
    className: classes
  }));
};

Fa.propTypes = {
  icon: propTypes.string.isRequired,
  border: propTypes.bool,
  brand: propTypes.bool,
  className: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  fixed: propTypes.bool,
  flip: propTypes.string,
  inverse: propTypes.bool,
  light: propTypes.bool,
  list: propTypes.bool,
  pull: propTypes.string,
  pulse: propTypes.bool,
  regular: propTypes.bool,
  rotate: propTypes.string,
  spin: propTypes.bool,
  size: propTypes.string,
  stack: propTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: "",
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: "",
  inverse: false,
  light: false,
  list: false,
  pull: "",
  pulse: false,
  regular: false,
  rotate: "",
  spin: false,
  size: "",
  stack: ""
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".bc-icons.breadcrumb-item::before,\n.bc-icons.breadcrumb-item::after {\n  content: none;\n}\n\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\n  content: none;\n}\n\n.bc-icons.breadcrumb-item.active {\n  color: #eeeeee;\n}\n";
styleInject(css);

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      appendIcon = props.appendIcon,
      children = props.children,
      className = props.className,
      bold = props.bold,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClassName = props.iconClassName,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      attributes = _objectWithoutProperties(props, ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"]);

  var classes = classNames(active ? "active" : false, icon && "bc-icons", "breadcrumb-item", className);
  var iconClasses = classNames(appendIcon ? "mx-2" : "mr-2", iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React.createElement(Fragment, null, appendIcon && children, React.createElement(Fa, {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }

    return children;
  };

  return React.createElement("li", _extends({
    "data-test": "breadcrumb-item"
  }, attributes, {
    className: classes
  }), React.createElement(WithBold, null, React.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: propTypes.bool,
  appendIcon: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  bold: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClassName: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string
};
BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: "",
  bold: false,
  icon: "",
  iconBrand: false,
  iconClassName: "",
  iconLight: false,
  iconRegular: false,
  iconSize: ""
};

var css$1 = ".Ripple {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  opacity: 1;\n  transform: scale(0);\n}\n\n.Ripple-outline {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.Ripple.is-reppling {\n  animation: ripple 0.5s linear;\n}\n\n.Ripple-parent {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    transform: scale(3);\n  }\n}\n";
styleInject(css$1);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves(props) {
    var _this;

    _classCallCheck(this, Waves);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Waves).call(this, props));
    _this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.cursorPos.time !== this.props.cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: this.props.cursorPos
          }, function () {
            _this2.reppling();
          });
        } else this.reppling();
      }
    }
  }, {
    key: "reppling",
    value: function reppling() {
      // Get the element
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight; // Make a Square Ripple

      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth); // Make Ripple Position to be center

      var centerize = rippleWidthShouldBe / 2;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: this.state.cursorPos.top - buttonPos.top - centerize,
        left: this.state.cursorPos.left - buttonPos.left - centerize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        "data-test": "waves",
        className: 'Ripple ' + (this.props.outline || this.props.flat || this.props.dark ? 'Ripple-outline ' : '') + (this.state.animate ? 'is-reppling' : ''),
        style: {
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      });
    }
  }]);

  return Waves;
}(React.Component);

Waves.propTypes = {
  outline: propTypes.bool,
  flat: propTypes.bool,
  animate: propTypes.bool,
  cursorPos: propTypes.object,
  children: propTypes.node
};

var Button = function Button(props) {
  var _classNames;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    e.stopPropagation(); // Waves - Get Cursor Position

    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var active = props.active,
      block = props.block,
      circle = props.circle,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      download = props.download,
      outline = props.outline,
      size = props.size,
      rounded = props.rounded,
      gradient = props.gradient,
      floating = props.floating,
      flat = props.flat,
      role = props.role,
      type = props.type,
      social = props.social,
      action = props.action,
      Tag = props.tag,
      target = props.target,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"]);

  var classes = classNames(flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? '-outline' : '', "-").concat(color), 'btn', 'Ripple-parent', className, (_classNames = {
    active: active,
    'btn-floating': floating,
    'btn-rounded': rounded,
    'btn-circle': circle,
    'btn-block': block,
    'btn-action': action
  }, _defineProperty(_classNames, "btn-".concat(social), social), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", disabled), _classNames));

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "button",
    type: Tag === 'button' && !type ? 'button' : type,
    target: target,
    role: Tag === 'a' && !role ? 'button' : role,
    className: classes,
    ref: innerRef,
    onMouseUp: handleClick,
    onTouchStart: handleClick
  }, attributes, {
    download: download,
    disabled: disabled
  }), props.children, disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos,
    outline: outline,
    flat: flat
  }));
};

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};
Button.propTypes = {
  active: propTypes.bool,
  action: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  disabled: propTypes.bool,
  download: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  circle: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.string,
  social: propTypes.string,
  children: propTypes.node,
  tag: propTypes.string,
  target: propTypes.string,
  className: propTypes.string
};

var css$2 = ".btn-group-vertical>.btn,\n.btn-group-vertical>.btn+.btn-group,\n.btn-group-vertical>.btn-group+.btn,\n.btn-group-vertical>.btn-group+.btn-group {\n  margin-left: 0px;\n}\n\n.btn-group-lg>.btn {\n  font-size: 0.9rem;\n  padding: 1rem 2.4rem;\n}\n\n.btn-group-sm>.btn {\n  font-size: 0.6rem;\n  padding: 0.5rem 1.6rem;\n}\n\n.btn-floating.btn.btn-sm,\n.btn-floating.btn.btn-lg {\n  padding: 0;\n}\n";
styleInject(css$2);

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      size = props.size,
      vertical = props.vertical,
      attributes = _objectWithoutProperties(props, ["className", "size", "vertical"]);

  var classes = classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return React.createElement("div", _extends({
    "data-test": "button-group"
  }, attributes, {
    className: classes
  }), props.children);
};

ButtonGroup.propTypes = {
  'aria-label': propTypes.string,
  className: propTypes.string,
  role: propTypes.string,
  size: propTypes.string,
  children: propTypes.node,
  vertical: propTypes.bool
};
ButtonGroup.defaultProps = {
  role: 'group'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      attributes = _objectWithoutProperties(props, ["className"]);

  var classes = classNames(className, "btn-toolbar");
  return React.createElement("div", _extends({
    "data-test": "button-toolbar"
  }, attributes, {
    className: classes
  }), props.children);
};

ButtonToolbar.propTypes = {
  "aria-label": propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  role: propTypes.string
};
ButtonToolbar.defaultProps = {
  role: "toolbar"
};

var Card = function Card(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      wide = props.wide,
      narrow = props.narrow,
      reverse = props.reverse,
      testimonial = props.testimonial,
      ecommerce = props.ecommerce,
      collection = props.collection,
      pricing = props.pricing,
      personal = props.personal,
      news = props.news,
      color = props.color,
      text = props.text,
      border = props.border,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

  var classes = classNames((_classNames = {
    "card-cascade": cascade,
    "card-cascade wider": wide,
    "card-cascade narrower": narrow,
    "card-cascade wider reverse": reverse,
    "testimonial-card": testimonial,
    "card-ecommerce": ecommerce,
    "collection-card": collection,
    "pricing-card": pricing,
    "card-personal": personal,
    "news-card": news
  }, _defineProperty(_classNames, "".concat(text, "-text"), text), _defineProperty(_classNames, "border-".concat(border), border), _classNames), "card", color, className);
  return React.createElement(Tag, _extends({
    "data-test": "card"
  }, attributes, {
    className: classes
  }));
};

Card.propTypes = {
  border: propTypes.string,
  cascade: propTypes.bool,
  className: propTypes.string,
  color: propTypes.string,
  collection: propTypes.bool,
  ecommerce: propTypes.bool,
  narrow: propTypes.bool,
  news: propTypes.bool,
  pricing: propTypes.bool,
  personal: propTypes.bool,
  reverse: propTypes.bool,
  tag: propTypes.string,
  testimonial: propTypes.bool,
  text: propTypes.string,
  wide: propTypes.bool
};
Card.defaultProps = {
  tag: "div"
};

var CardBody = function CardBody(props) {
  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade"]);

  var classes = classNames('card-body', cascade && 'card-body-cascade', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-body"
  }, attributes, {
    className: classes
  }));
};

CardBody.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  cascade: propTypes.bool
};
CardBody.defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      small = props.small,
      muted = props.muted,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent", "small", "muted"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, 'text-muted', muted), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-footer', color, className);
  var component = React.createElement(Tag, _extends({
    "data-test": "card-footer"
  }, attributes, {
    className: classes
  }));

  if (small) {
    component = React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React.createElement("small", null, " ", props.children, " "));
  }

  return component;
};

CardFooter.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool,
  small: propTypes.bool,
  muted: propTypes.bool
};
CardFooter.defaultProps = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      Tag = props.tag,
      deck = props.deck,
      column = props.column,
      attributes = _objectWithoutProperties(props, ["className", "tag", "deck", "column"]);

  var classes = classNames(deck ? 'card-deck' : column ? 'card-columns' : 'card-group', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-group"
  }, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  deck: propTypes.bool,
  column: propTypes.bool
};
CardGroup.defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-header', className, color);
  return React.createElement(Tag, _extends({
    "data-test": "card-header"
  }, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool
};
CardHeader.defaultProps = {
  tag: 'div'
};

var Mask = function Mask(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      pattern = props.pattern,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "overlay", "pattern", "tag"]);

  var classes = classNames('mask', pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
  return React.createElement(Tag, _extends({
    "data-test": "mask"
  }, attributes, {
    className: classes
  }), children);
};

Mask.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  overlay: propTypes.string,
  pattern: propTypes.oneOfType([propTypes.string, propTypes.number]),
  tag: propTypes.string
};
Mask.defaultProps = {
  className: '',
  overlay: '',
  pattern: '',
  tag: 'div'
};

var View = function View(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var cascade = props.cascade,
      children = props.children,
      className = props.className,
      hover = props.hover,
      rounded = props.rounded,
      src = props.src,
      Tag = props.tag,
      waves = props.waves,
      zoom = props.zoom,
      fixed = props.fixed,
      attributes = _objectWithoutProperties(props, ["cascade", "children", "className", "hover", "rounded", "src", "tag", "waves", "zoom", "fixed"]);

  var classes = classNames("view", rounded && "rounded", zoom && "zoom", hover && "overlay", cascade && "view-cascade", waves ? "Ripple-parent" : false, className);
  var viewStyle = src ? {
    backgroundImage: "url(\"".concat(src, "\")"),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    backgroundAttachment: fixed ? "fixed" : null
  } : {};
  return React.createElement(Tag, _extends({
    "data-test": "view"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick,
    style: viewStyle
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

View.defaultProps = {
  cascade: false,
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
  waves: false,
  zoom: false
};
View.propTypes = {
  cascade: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  hover: propTypes.bool,
  rounded: propTypes.bool,
  src: propTypes.string,
  tag: propTypes.string,
  waves: propTypes.bool,
  zoom: propTypes.bool
};

var CardImage = function CardImage(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      overlay = props.overlay,
      top = props.top,
      waves = props.waves,
      hover = props.hover,
      cascade = props.cascade,
      tag = props.tag,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["className", "overlay", "top", "waves", "hover", "cascade", "tag", "zoom"]);

  var classes = classNames(top && 'card-img-top', className);
  var Tag = tag;
  var innerContent = React.createElement(Tag, _extends({
    "data-test": "card-image"
  }, attributes, {
    className: classes
  }), props.children);

  if (props.src) {
    return React.createElement(View, {
      zoom: zoom,
      hover: hover,
      cascade: cascade
    }, React.createElement("div", {
      className: "Ripple-parent",
      onMouseDown: handleClick,
      style: {
        touchAction: 'unset'
      }
    }, innerContent, React.createElement(Mask, {
      overlay: overlay
    }), waves && React.createElement(Waves, {
      cursorPos: cursorPos
    })));
  } else {
    return React.createElement("div", null, innerContent);
  }
};

CardImage.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  zoom: propTypes.bool,
  waves: propTypes.bool,
  className: propTypes.string,
  cascade: propTypes.bool,
  hover: propTypes.bool,
  overlay: propTypes.string,
  top: propTypes.bool,
  src: propTypes.string,
  children: propTypes.node
};
CardImage.defaultProps = {
  tag: 'img',
  overlay: 'white-slight',
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText = function CardText(props) {
  var className = props.className,
      Tag = props.tag,
      textNode = props.children,
      muted = props.muted,
      small = props.small,
      attributes = _objectWithoutProperties(props, ["className", "tag", "children", "muted", "small"]);

  var classes = classNames('card-text', muted && 'text-muted', className);
  var children = small ? React.createElement("small", null, textNode) : textNode;
  return React.createElement(Tag, _extends({
    "data-test": "card-text"
  }, attributes, {
    className: classes
  }), children);
};

CardText.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  muted: propTypes.bool,
  small: propTypes.bool
};
CardText.defaultProps = {
  tag: 'p'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      Tag = props.tag,
      sub = props.sub,
      attributes = _objectWithoutProperties(props, ["className", "tag", "sub"]);

  var classes = classNames(sub ? 'card-subtitle' : 'card-title', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-title"
  }, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  sub: propTypes.bool,
  className: propTypes.string
};
CardTitle.defaultProps = {
  tag: 'h4',
  sub: false
};

var Control = function Control(props) {
  var direction = props.direction,
      className = props.className,
      onClick = props.onClick,
      Tag = props.tag,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      testimonial = props.testimonial,
      multiItem = props.multiItem;
  var text;

  if (direction === 'prev') {
    text = 'Previous';
  } else if (direction === 'next') {
    text = 'Next';
  }

  var classes = classNames('carousel-control-' + direction, className);
  var caretClasses = classNames('carousel-control-' + direction + '-icon');

  if (testimonial) {
    var arrow = direction === 'prev' ? 'left' : 'right';
    classes = classNames('carousel-control-' + direction, arrow, 'carousel-control', className);
    caretClasses = classNames('icon-' + direction);
  }

  if (multiItem) {
    classes = classNames('btn-floating');
  }

  return React.createElement(Tag, {
    "data-test": "carousel-control",
    className: classes,
    "data-slide": direction,
    onClick: onClick
  }, iconLeft ? React.createElement(Fa, {
    icon: "chevron-left"
  }) : iconRight ? React.createElement(Fa, {
    icon: "chevron-right"
  }) : React.createElement("div", null, React.createElement("span", {
    className: caretClasses,
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "sr-only"
  }, text)));
};

Control.propTypes = {
  onClick: propTypes.any,
  direction: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  iconLeft: propTypes.bool,
  iconRight: propTypes.bool,
  testimonial: propTypes.bool,
  multiItem: propTypes.bool
};
Control.defaultProps = {
  tag: 'a'
};

var CarouselIndicator = function CarouselIndicator(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      img = props.img,
      alt = props.alt,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "img", "alt"]);

  var classes = classNames(active && 'active', className);
  return React.createElement("li", _extends({
    "data-test": "carousel-indicator"
  }, attributes, {
    className: classes
  }), img && React.createElement("img", {
    src: img,
    alt: alt,
    className: "img-fluid"
  }), children);
};

CarouselIndicator.propTypes = {
  active: propTypes.bool.isRequired,
  alt: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  img: propTypes.string
};
CarouselIndicator.defaultProps = {
  alt: 'Carousel thumbnail',
  className: '',
  img: ''
};

var CarouselIndicators = function CarouselIndicators(props) {
  var children = props.children,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames("carousel-indicators", className);
  return React.createElement("ol", _extends({
    "data-test": "carousel-indicators"
  }, attributes, {
    className: classes
  }), children);
};

CarouselIndicators.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
CarouselIndicators.defaultProps = {
  className: ""
};

var css$3 = ".carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.carousel-fade .carousel-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block !important;\n  opacity: 0;\n  z-index: 0;\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\n}\n\n.carousel-fade .carousel-item.active {\n  position: relative;\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-multi-item .carousel-item {\n  display: inline-block !important;\n}\n\n.carousel .carousel-slide-item {\n  transition: left 0.5s;\n}\n\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\n  z-index: 2;\n}\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "clearCycleIntervalHandler", function () {
      return clearInterval(_this.cycleInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeAvailableHandler", function () {
      return _this.setState({
        swipeAvailable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartInterval", function () {
      if (_this.props.interval !== false) {
        _this.clearCycleIntervalHandler();

        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      var nextIndex = _this.state.activeItem + 1;
      var nextItem = nextIndex > _this.state.length ? 1 : nextIndex;

      _this.goToIndex(nextItem);
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      var prevIndex = _this.state.activeItem - 1;
      var prevItem = prevIndex < 1 ? _this.state.length : prevIndex;

      _this.goToIndex(prevItem);
    });

    _defineProperty(_assertThisInitialized(_this), "goToIndex", function (item) {
      _this.setState(_objectSpread({}, _this.state, {
        activeItem: item
      }));

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      _this.setState({
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY
      });
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      _this.setState({
        swipeAvailable: false
      });

      var _this$state = _this.state,
          initialX = _this$state.initialX,
          initialY = _this$state.initialY;

      if (initialX === null || initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          _this.next();
        } else {
          _this.prev();
        }
      }

      _this.setState({
        initialX: null,
        initialY: null
      });
    });

    _this.state = {
      activeItem: _this.props.activeItem,
      length: _this.props.length,
      slide: _this.props.slide,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    };
    _this.carouselRef = React.createRef();
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.interval === false) {
        return;
      }

      this.cycleInterval = setInterval(this.next, this.props.interval); // get images src atr

      if (this.props.thumbnails) {
        var CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item img');
        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });
        this.setState(_objectSpread({}, this.state, {
          srcArray: srcArray
        }));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.interval === false) {
        return;
      }

      this.clearCycleIntervalHandler();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItem: this.state.activeItem,
        length: this.state.length,
        slide: this.state.slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeItem = _this$props.activeItem,
          children = _this$props.children,
          className = _this$props.className,
          multiItem = _this$props.multiItem,
          slide = _this$props.slide,
          thumbnails = _this$props.thumbnails,
          interval = _this$props.interval,
          testimonial = _this$props.testimonial,
          Tag = _this$props.tag,
          length = _this$props.length,
          showControls = _this$props.showControls,
          showIndicators = _this$props.showIndicators,
          onHoverStop = _this$props.onHoverStop,
          attributes = _objectWithoutProperties(_this$props, ["activeItem", "children", "className", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators", "onHoverStop"]);

      var swipeAvailable = this.state.swipeAvailable;
      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(React.createElement(CarouselIndicator, {
          img: thumbnails ? _this2.state.srcArray[i - 1] : null,
          key: i,
          active: _this2.state.activeItem === i,
          onClick: function onClick() {
            return _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= this.state.length; i++) {
        _loop(i);
      }

      var isMultiItem = multiItem ? true : false;
      var isTestimonial = testimonial ? true : false;
      return React.createElement(Tag, _extends({
        "data-test": "carousel",
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel,
        onTouchStart: this.startTouch,
        onTouchMove: swipeAvailable ? this.moveTouch : null,
        onTouchEnd: this.swipeAvailableHandler,
        onMouseEnter: onHoverStop ? this.clearCycleIntervalHandler : false,
        onMouseLeave: onHoverStop ? this.restartInterval : false
      }), showControls && multiItem && React.createElement("div", {
        className: "controls-top"
      }, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React.createElement(React.Fragment, null, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "next",
        role: "button",
        onClick: this.next
      })), showIndicators && React.createElement(CarouselIndicators, null, CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(Component);

Carousel.propTypes = {
  activeItem: propTypes.number,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  multiItem: propTypes.bool,
  interval: propTypes.oneOfType([propTypes.number, propTypes.bool]),
  thumbnails: propTypes.bool,
  testimonial: propTypes.bool,
  showControls: propTypes.bool,
  showIndicators: propTypes.bool,
  slide: propTypes.bool,
  length: propTypes.number,
  onHoverStop: propTypes.bool
};
Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true,
  onHoverStop: true
};
Carousel.childContextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var CarouselCaption = function CarouselCaption(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('carousel-caption', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-caption"
  }, attributes, {
    className: classes
  }), children);
};

CarouselCaption.propTypes = {
  active: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselCaption.defaultProps = {
  tag: 'div'
};

var CarouselInner = function CarouselInner(props) {
  var active = props.active,
      children = props.children,
      childrenCount = props.childrenCount,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "childrenCount", "className", "tag"]);

  var classes = classNames('carousel-inner', active ? 'active' : '', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-inner"
  }, attributes, {
    className: classes
  }), children);
};

CarouselInner.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  active: propTypes.bool,
  children: propTypes.node
};
CarouselInner.defaultProps = {
  tag: 'div'
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "moveForward", function () {
      _this.style = {
        position: 'absolute',
        left: '100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "moveBackwards", function () {
      _this.style = {
        position: 'absolute',
        left: '-100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "makeVisible", function () {
      _this.style = {
        left: '0'
      };
    });

    return _this;
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      itemId = parseInt(itemId, 10);
      var classes = classNames('carousel-item', {
        'active carousel-slide-item': this.context.slide,
        'active': !this.context.slide && itemId === this.context.activeItem
      }, className);
      var slideIndex = this.context.activeItem - itemId;

      if (this.context.slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      }

      return React.createElement(Tag, _extends({
        "data-test": "carousel-item"
      }, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(Component);

CarouselItem.propTypes = {
  active: propTypes.bool,
  itemId: propTypes.any,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselItem.defaultProps = {
  tag: 'div'
};
CarouselItem.contextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var MDBCloseIcon = function MDBCloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      props = _objectWithoutProperties(_ref, ["onClick", "className", "ariaLabel"]);

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e);
  };

  var btnClasses = className ? ['close'].concat(_toConsumableArray(className.split(' '))) : ['close'];
  return React.createElement("button", _extends({
    "data-test": "close-button",
    type: "button"
  }, props, {
    className: btnClasses.join(' '),
    onClick: onClickHandler,
    "aria-label": ariaLabel
  }), React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
MDBCloseIcon.defaultProps = {
  ariaLabel: 'Close'
};
MDBCloseIcon.propTypes = {
  className: propTypes.string,
  ariaLabel: propTypes.string,
  onClick: propTypes.func
};

var Col = function Col(props) {
  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      size = props.size,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

  var classes = classNames(size && "col-" + size, xs && "col-xs-" + xs, sm && "col-sm-" + sm, md && "col-md-" + md, lg && "col-lg-" + lg, xl && "col-xl-" + xl, !size && !xs && !sm && !md && !lg && !xl ? "col" : "", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({
    "data-test": "col"
  }, attributes, {
    className: classes
  }));
};

Col.propTypes = {
  size: propTypes.string,
  xs: propTypes.string,
  sm: propTypes.string,
  md: propTypes.string,
  lg: propTypes.string,
  xl: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTransitionTag", function (collapse, callback, delayType) {
      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: collapse,
          height: null
        }, callback());
      }, _this.getDelay(delayType));
    });

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.setTransitionTag(SHOWN, _this.props.onOpened, 'show');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollapse", function () {
      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });

      _this.setTransitionTag(HIDDEN, _this.props.onClosed, 'hide');
    });

    _this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var collapse = prevState.collapse;
      var willOpen = typeof this.props.isOpen !== 'boolean' ? this.props.isOpen === prevState.id : this.props.isOpen;

      if (willOpen && this.state.collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (_typeof(delay) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navbar = _this$props.navbar,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          delay = _this$props.delay,
          onOpened = _this$props.onOpened,
          onClosed = _this$props.onClosed,
          attributes = _objectWithoutProperties(_this$props, ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"]);

      var _this$state = this.state,
          collapse = _this$state.collapse,
          height = _this$state.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = 'collapsing';
          break;

        case SHOWN:
          collapseClass = 'collapse show';
          break;

        case HIDE:
          collapseClass = 'collapsing';
          break;

        case HIDDEN:
          collapseClass = 'collapse';
          break;

        default:
          // HIDDEN
          collapseClass = 'collapse';
      }

      var classes = classNames(collapseClass, navbar ? 'navbar-collapse' : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement("div", _extends({
        "data-test": "collapse"
      }, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(Component);

Collapse.propTypes = {
  isOpen: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  id: propTypes.string,
  className: propTypes.node,
  children: propTypes.node,
  navbar: propTypes.bool,
  delay: propTypes.oneOfType([propTypes.shape({
    show: propTypes.number,
    hide: propTypes.number
  }), propTypes.number]),
  onOpened: propTypes.func,
  onClosed: propTypes.func
};
Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container = function Container(props) {
  var fluid = props.fluid,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["fluid", "className", "tag"]);

  var classes = classNames(fluid ? 'container-fluid' : 'container', className);
  return React.createElement(Tag, _extends({
    "data-test": "container"
  }, attributes, {
    className: classes
  }));
};

Container.propTypes = {
  fluid: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Container.defaultProps = {
  tag: 'div',
  fluid: false
};

var DataTableHead = function DataTableHead(props) {
  var color = props.color,
      columns = props.columns,
      handleSort = props.handleSort,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      sortable = props.sortable,
      sorted = props.sorted,
      textWhite = props.textWhite;
  var theadClasses = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), textWhite && "text-white");
  return React.createElement(Fragment, null, (scrollY || scrollX) && React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement("thead", {
    className: theadClasses || undefined
  }, React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: classNames(col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : null, sortable && col.sort !== 'disabled' && (sorted && col.sort ? "sorting_".concat(col.sort === 'asc' ? 'desc' : 'asc') : 'sorting'))
    }, col.attributes), col.label);
  }))));
};

DataTableHead.propTypes = {
  sorted: propTypes.bool.isRequired,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  handleSort: propTypes.func,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool,
  sortable: propTypes.bool,
  textWhite: propTypes.bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};

var css$4 = ".table-wrapper-scroll-y {\n  display: block;\n  max-height: 200px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n";
styleInject(css$4);

var Table = function Table(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      dark = props.dark,
      fixed = props.fixed,
      theadColor = props.theadColor,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      scrollY = props.scrollY,
      small = props.small,
      striped = props.striped,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "fixed", "theadColor", "hover", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "scrollY", "small", "striped", "className"]);

  var tableClasses = classNames('table', {
    'w-auto': autoWidth,
    'table-bordered': bordered,
    'table-borderless': borderless,
    'btn-table': btn,
    'table-fixed': fixed,
    'table-hover': hover,
    'table-sm': small,
    'table-striped': striped
  }, className);
  var wrapperClasses = classNames({
    'table-dark': dark,
    'table-responsive': responsive,
    'table-responsive-sm': responsiveSm,
    'table-responsive-md': responsiveMd,
    'table-responsive-lg': responsiveLg,
    'table-responsive-xl': responsiveXl,
    'table-wrapper-scroll-y': scrollY
  });
  var wrapperStyles = {
    maxHeight: maxHeight ? "".concat(maxHeight) : null
  };
  return React.createElement("div", {
    "data-test": "table",
    className: wrapperClasses,
    style: wrapperStyles
  }, React.createElement("table", _extends({}, attributes, {
    className: tableClasses
  }), children));
};

Table.propTypes = {
  autoWidth: propTypes.bool,
  bordered: propTypes.bool,
  borderless: propTypes.bool,
  btn: propTypes.bool,
  children: propTypes.node,
  dark: propTypes.bool,
  fixed: propTypes.bool,
  theadColor: propTypes.string,
  hover: propTypes.bool,
  maxHeight: propTypes.string,
  responsive: propTypes.bool,
  responsiveSm: propTypes.bool,
  responsiveMd: propTypes.bool,
  responsiveLg: propTypes.bool,
  responsiveXl: propTypes.bool,
  scrollY: propTypes.bool,
  small: propTypes.bool,
  striped: propTypes.bool,
  className: propTypes.string
};

var TableBody = function TableBody(props) {
  var children = props.children,
      color = props.color,
      rows = props.rows,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "rows", "textWhite"]);

  var classes = classNames(color, {
    "text-white": textWhite
  });
  return React.createElement("tbody", _extends({
    "data-test": "table-body"
  }, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React.createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;

      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? React.createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return React.createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};

TableBody.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  rows: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableBody.defaultProps = {
  textWhite: false
};

var TableFoot = function TableFoot(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React.createElement("thead", _extends({
    "data-test": "table-foot"
  }, attributes, {
    className: classes || undefined
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableFoot.defaultProps = {
  textWhite: false
};

var DataTableTable = function DataTableTable(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable,
    sorted: sorted
  }), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), React.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: propTypes.bool.isRequired,
  bordered: propTypes.bool.isRequired,
  borderless: propTypes.bool.isRequired,
  btn: propTypes.bool.isRequired,
  dark: propTypes.bool.isRequired,
  fixed: propTypes.bool.isRequired,
  hover: propTypes.bool.isRequired,
  handleSort: propTypes.func.isRequired,
  responsive: propTypes.bool.isRequired,
  responsiveSm: propTypes.bool.isRequired,
  responsiveMd: propTypes.bool.isRequired,
  responsiveLg: propTypes.bool.isRequired,
  responsiveXl: propTypes.bool.isRequired,
  sortable: propTypes.bool.isRequired,
  sorted: propTypes.bool.isRequired,
  small: propTypes.bool.isRequired,
  striped: propTypes.bool.isRequired,
  theadColor: propTypes.string.isRequired,
  theadTextWhite: propTypes.bool.isRequired,
  tbodyColor: propTypes.string.isRequired,
  tbodyTextWhite: propTypes.bool.isRequired,
  columns: propTypes.arrayOf(propTypes.object),
  rows: propTypes.arrayOf(propTypes.object),
  children: propTypes.node
};

var DataTableTableScroll = function DataTableTableScroll(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      handleTableBodyScroll = props.handleTableBodyScroll,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      translateScrollHead = props.translateScrollHead,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "handleTableBodyScroll", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement("div", {
    className: "dataTables_scroll"
  }, React.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, React.createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: "relative",
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: "content-box",
      paddingRight: "15px",
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    }
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable,
    sorted: sorted
  })))), React.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, React.createElement(Table, _extends({
    style: {
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    },
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    maxHeight: maxHeight,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    scrollY: scrollY,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: propTypes.bool.isRequired,
  bordered: propTypes.bool.isRequired,
  borderless: propTypes.bool.isRequired,
  btn: propTypes.bool.isRequired,
  dark: propTypes.bool.isRequired,
  fixed: propTypes.bool.isRequired,
  hover: propTypes.bool.isRequired,
  handleSort: propTypes.func.isRequired,
  handleTableBodyScroll: propTypes.func.isRequired,
  responsive: propTypes.bool.isRequired,
  responsiveSm: propTypes.bool.isRequired,
  responsiveMd: propTypes.bool.isRequired,
  responsiveLg: propTypes.bool.isRequired,
  responsiveXl: propTypes.bool.isRequired,
  sortable: propTypes.bool.isRequired,
  sorted: propTypes.bool.isRequired,
  small: propTypes.bool.isRequired,
  striped: propTypes.bool.isRequired,
  theadColor: propTypes.string.isRequired,
  theadTextWhite: propTypes.bool.isRequired,
  tbodyColor: propTypes.string.isRequired,
  tbodyTextWhite: propTypes.bool.isRequired,
  translateScrollHead: propTypes.number.isRequired,
  columns: propTypes.arrayOf(propTypes.object),
  rows: propTypes.arrayOf(propTypes.object),
  children: propTypes.node,
  maxHeight: propTypes.string,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool
};

var ControlledSelectInput = React.forwardRef(function (_ref, inputRef) {
  var value = _ref.value,
      required = _ref.required;
  return React.createElement("input", {
    type: "text",
    ref: inputRef,
    required: required ? required : false,
    readOnly: true,
    value: value,
    onChange: function onChange() {},
    className: "select-dropdown",
    onFocus: function onFocus(e) {
      return e.target.style.caretColor = "transparent";
    }
  });
});
ControlledSelectInput.propTypes = {
  required: propTypes.bool,
  value: propTypes.string
};
ControlledSelectInput.defaultProps = {
  required: false
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onChange && _this.props.onChange(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onInput && _this.props.onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          background = _this$props.background,
          children = _this$props.children,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          disabled = _this$props.disabled,
          error = _this$props.error,
          filled = _this$props.filled,
          gap = _this$props.gap,
          getValue = _this$props.getValue,
          group = _this$props.group,
          hint = _this$props.hint,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          onIconClick = _this$props.onIconClick,
          onIconMouseEnter = _this$props.onIconMouseEnter,
          onIconMouseLeave = _this$props.onIconMouseLeave,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          id = _this$props.id,
          inputRef = _this$props.inputRef,
          noTag = _this$props.noTag,
          outline = _this$props.outline,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          size = _this$props.size,
          success = _this$props.success,
          Tag = _this$props.tag,
          type = _this$props.type,
          validate = _this$props.validate,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          attributes = _objectWithoutProperties(_this$props, ["background", "children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "onIconClick", "onIconMouseEnter", "onIconMouseLeave", "iconRegular", "iconSize", "id", "inputRef", "noTag", "outline", "label", "labelClass", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var isNotEmpty = (!!this.state.innerValue || !!hint || this.state.isFocused || this.state.innerValue === 0) && type !== "checkbox" && type !== "radio";
      var TagInput = "";
      var formControlClass = "";

      if (type === "textarea") {
        formControlClass = outline ? "form-control" : "md-textarea form-control";
        TagInput = "textarea";
      } else {
        formControlClass = "form-control";
        TagInput = "input";
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? "validate" : false, filled ? "filled-in" : false, gap ? "with-gap" : false, type === "checkbox" ? gap ? false : "form-check-input" : false, type === "radio" ? "form-check-input" : false, className);
      var containerClassFix = classNames(type === "checkbox" || type === "radio" ? typeof label === "boolean" && label ? "d-flex" : "form-check my-3" : "md-form", group ? "form-group" : false, size ? "form-".concat(size) : false, outline && "md-outline", background && "md-bg", containerClass);
      var iconClassFix = classNames(isNotEmpty && this.state.isFocused ? "active" : false, iconClass, "prefix");
      var labelClassFix = classNames(isNotEmpty ? "active" : false, disabled ? "disabled" : false, type === "checkbox" ? typeof label === "boolean" && label ? "form-check-label" : "form-check-label mr-5" : false, type === "radio" ? typeof label === "boolean" && label ? "form-check-label" : "form-check-label mr-5" : false, labelClass);

      var renderFunction = function renderFunction() {
        return React.createElement(React.Fragment, null, icon && React.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix,
          onClick: onIconClick ? onIconClick : _this2.setFocus,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave
        }), React.createElement(TagInput, _extends({
          "data-test": "input"
        }, attributes, {
          className: classes,
          id: id,
          placeholder: hint,
          ref: _this2.inputElementRef,
          value: _this2.state.innerValue,
          onBlur: _this2.onBlur,
          onChange: _this2.onChange,
          onInput: _this2.onInput,
          onFocus: _this2.onFocus
        })), label && React.createElement("label", {
          className: labelClassFix,
          htmlFor: id,
          "data-error": error,
          "data-success": success,
          id: id,
          onClick: _this2.setFocus
        }, label), children);
      };

      return noTag ? renderFunction() : React.createElement(Tag, {
        className: containerClassFix
      }, renderFunction());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  containerClass: propTypes.string,
  disabled: propTypes.bool,
  error: propTypes.string,
  filled: propTypes.bool,
  gap: propTypes.bool,
  getValue: propTypes.func,
  group: propTypes.bool,
  hint: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  onIconClick: propTypes.func,
  onIconMouseEnter: propTypes.func,
  onIconMouseLeave: propTypes.func,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  id: propTypes.string,
  inputRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object, propTypes.bool]),
  labelClass: propTypes.string,
  noTag: propTypes.bool,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onInput: propTypes.func,
  outline: propTypes.bool,
  size: propTypes.string,
  success: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  validate: propTypes.bool,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  valueDefault: propTypes.oneOfType([propTypes.number, propTypes.string])
};
Input.defaultProps = {
  className: "",
  containerClass: "",
  disabled: false,
  error: "",
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  onIconMouseEnter: function onIconMouseEnter() {},
  onIconMouseLeave: function onIconMouseLeave() {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  noTag: false,
  outline: false,
  label: "",
  labelClass: "",
  size: "",
  success: "",
  tag: "div",
  type: "text",
  validate: false,
  valueDefault: ""
};

var ControlledSelectOption = function ControlledSelectOption(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      icon = _ref.icon,
      multiple = _ref.multiple,
      selectOption = _ref.selectOption,
      text = _ref.text,
      value = _ref.value,
      separator = _ref.separator,
      isFocused = _ref.isFocused,
      focusShadow = _ref.focusShadow,
      focusBackgroundColor = _ref.focusBackgroundColor,
      selectAllClassName = _ref.selectAllClassName;
  var classes = classNames((disabled || separator) && 'disabled', separator && 'optgroup', checked && 'active');
  var spanClasses = classNames('filtrable', selectAllClassName && selectAllClassName);
  var focusedStyles = {
    backgroundColor: isFocused ? focusBackgroundColor : null,
    boxShadow: isFocused ? focusShadow : null
  };
  return React.createElement("li", {
    "data-multiple": multiple,
    className: classes,
    onClick: function onClick() {
      return selectOption(value);
    },
    style: focusedStyles
  }, icon && React.createElement("img", {
    src: icon,
    alt: "",
    className: "rounded-circle"
  }), React.createElement("span", {
    "data-multiple": multiple,
    className: spanClasses
  }, multiple && React.createElement(React.Fragment, null, React.createElement("input", {
    type: "checkbox",
    value: value,
    className: "form-check-input",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  }), !separator && React.createElement("label", {
    style: {
      height: '10px'
    },
    "data-multiple": multiple
  })), text ? text : value));
};

ControlledSelectOption.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  focusShadow: propTypes.string,
  focusBackgroundColor: propTypes.string,
  icon: propTypes.string,
  isFocused: propTypes.bool,
  multiple: propTypes.bool,
  selectAllClassName: propTypes.string,
  separator: propTypes.bool,
  selectOption: propTypes.func,
  text: propTypes.oneOfType([propTypes.object, propTypes.string]),
  value: propTypes.string
};
ControlledSelectOption.defaultProps = {
  checked: false,
  disabled: false,
  focusShadow: 'inset 0px -17px 15px -16px rgba(0, 0, 0, 0.35)',
  focusBackgroundColor: '#eee',
  icon: '',
  isFocused: false,
  multiple: false,
  separator: false
};

var ControlledSelectOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(ControlledSelectOptions, _Component);

  function ControlledSelectOptions(props) {
    var _this;

    _classCallCheck(this, ControlledSelectOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlledSelectOptions).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "search", function (value) {
      var filteredOptions = _this.state.options.filter(function (option) {
        if (option.text) {
          return option.text.toLowerCase().match(value.toLowerCase().trim());
        } else {
          return option.value.toLowerCase().match(value.toLowerCase().trim());
        }
      });

      _this.props.changeFocus(null);

      _this.setState({
        filteredOptions: filteredOptions
      }, function () {
        return _this.props.setFilteredOptions(_this.state.filteredOptions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      var focused = _this.props.focused;
      (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) && e.preventDefault(); //Enter

      if (e.keyCode === 13 && focused !== null) {
        focused === -1 ? _this.props.selectOption(_this.props.selectAllValue) : _this.props.selectOption(_this.state.filteredOptions[focused].value);
      } //Esc


      e.keyCode === 27 && _this.props.changeFocus(null); //Down

      if (e.keyCode === 40) {
        if (focused === null) {
          _this.props.selectAll && _this.state.filteredOptions.length !== 1 ? _this.props.changeFocus(-1) : _this.props.changeFocus(0);
        } else {
          focused < _this.state.filteredOptions.length - 1 && _this.props.changeFocus(1);
        }
      } //Up


      if (e.keyCode === 38) {
        focused >= (_this.props.selectAll ? 0 : 1) && _this.state.filteredOptions.length > 1 && _this.props.changeFocus(-1);
      }
    });

    _this.state = {
      filteredOptions: _this.props.options || [],
      options: _this.props.options || [],
      searchValue: ''
    };
    _this.inputRef = null;
    return _this;
  }

  _createClass(ControlledSelectOptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.inputRef.current) this.inputRef = this.props.inputRef.current;
      this.inputRef.addEventListener('keydown', this.handleFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.inputRef.removeEventListener('keydown', this.handleFocus);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options !== this.props.options) {
        this.setState({
          filteredOptions: this.props.options,
          options: this.props.options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          multiple = _this$props.multiple,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          selected = _this$props.selected,
          selectOption = _this$props.selectOption,
          selectAll = _this$props.selectAll;
      var classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement');
      return React.createElement("ul", {
        className: classes
      }, search && React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true",
        onKeyDown: this.handleFocus
      }), React.createElement(ControlledSelectOption, {
        checked: false,
        disabled: true,
        icon: null,
        value: selected
      }), selectAll && multiple && this.state.filteredOptions.length > 1 && React.createElement(ControlledSelectOption, {
        text: this.props.selectAllLabel,
        value: this.props.selectAllValue,
        selectAllClassName: this.props.selectAllClassName,
        checked: this.props.allChecked,
        multiple: true,
        selectOption: selectOption,
        isFocused: this.props.focused === -1,
        focusShadow: this.props.focusShadow,
        focusBackgroundColor: this.props.focusBackgroundColor
      }), this.state.filteredOptions.map(function (option, index) {
        return React.createElement(ControlledSelectOption, {
          key: "".concat(option.value, "-").concat(index),
          checked: option.checked,
          disabled: option.disabled,
          multiple: multiple,
          icon: option.icon,
          text: option.text,
          value: option.value,
          separator: option.separator,
          selectOption: selectOption,
          isFocused: index === _this2.props.focused,
          focusShadow: _this2.props.focusShadow,
          focusBackgroundColor: _this2.props.focusBackgroundColor
        });
      }));
    }
  }]);

  return ControlledSelectOptions;
}(Component);

ControlledSelectOptions.propTypes = {
  allChecked: propTypes.bool,
  changeFocus: propTypes.func,
  focused: propTypes.number,
  focusShadow: propTypes.string,
  focusBackgroundColor: propTypes.string,
  inputRef: propTypes.shape({
    current: propTypes.instanceOf(typeof Element === 'undefined' ? function () {} : Element)
  }),
  multiple: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    checked: propTypes.bool,
    separator: propTypes.bool,
    disabled: propTypes.bool,
    icon: propTypes.string,
    image: propTypes.string,
    text: propTypes.oneOfType([propTypes.object, propTypes.string]),
    value: propTypes.string
  })),
  selected: propTypes.string.isRequired,
  selectOption: propTypes.func.isRequired,
  search: propTypes.bool,
  searchLabel: propTypes.string,
  searchId: propTypes.string,
  selectAllClassName: propTypes.string,
  selectAllLabel: propTypes.string,
  selectAllValue: propTypes.string,
  setFilteredOptions: propTypes.func
};
ControlledSelectOptions.defaultProps = {
  focused: null,
  multiple: false,
  options: [],
  search: false,
  selectAllLabel: 'Select All',
  searchId: 'selectSearchInput',
  searchLabel: 'Search'
};

var SelectContext = React.createContext();

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onInputClick", function (_ref) {
      var input = _ref.target;
      var dropdown = input.nextElementSibling;
      dropdown.classList.add("fadeIn");
      !_this.props.outline && (dropdown.style.top = ".6rem");

      _this.setState({
        dropdown: dropdown,
        input: input
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (_ref2) {
      var target = _ref2.target;
      var _this$state = _this.state,
          dropdown = _this$state.dropdown,
          input = _this$state.input;

      if (dropdown) {
        var isMultiple = target.dataset.multiple === "true";
        var isSearchLabel = target.id === "selectSearchInput";

        if (target === input || isMultiple || isSearchLabel) {
          return;
        } else {
          dropdown.classList.remove("fadeIn");

          _this.changeFocus(null);

          _this.setState({
            dropdown: null
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "computeValuesAndText", function (options) {
      var checkedOptions = options.filter(function (option) {
        return option.checked;
      });
      var checkedValues = checkedOptions.map(function (opt) {
        return opt.value;
      });
      var checkedTexts = checkedOptions.map(function (opt) {
        return opt.text ? opt.text : opt.value;
      });
      var selectTextContent = checkedTexts.length ? checkedTexts.join(", ") : _this.props.selected;
      var allChecked = checkedOptions.length === options.filter(function (option) {
        return !option.disabled;
      }).length;
      return {
        isControlledEmpty: !checkedOptions.length,
        selectValue: checkedValues,
        selectTextContent: selectTextContent,
        allChecked: allChecked
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setFilteredOptions", function (filteredOptions) {
      _this.setState({
        filteredOptions: filteredOptions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setOptionStatus", function (option, status) {
      if (!option.disabled) {
        option.checked = status;
      }

      return option;
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilteredOptionsChanges", function (options, filteredOptions) {
      filteredOptions.forEach(function (filteredOption) {
        var index = options.findIndex(function (option) {
          return option.value === filteredOption.value;
        });
        filteredOption.checked !== options[index].checked && _this.setOptionStatus(options[index], filteredOption.checked);
      });
      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "changeFocus", function (value) {
      switch (value) {
        case null:
          _this.setState(function (prevState) {
            return prevState.focused !== value ? {
              focused: null
            } : null;
          });

          break;

        case 0:
          _this.setState({
            focused: 0
          });

          break;

        default:
          _this.setState(function (prevState) {
            return {
              focused: prevState.focused + value
            };
          });

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectOneOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options.forEach(function (option, index) {
          return index !== optionIndex ? _this.setOptionStatus(option, false) : _this.setOptionStatus(option, !option.checked);
        });
        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectMultipleOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = !options[optionIndex].checked;
        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectAllOptions", function () {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var filteredOptions = _toConsumableArray(prevState.filteredOptions).filter(function (option) {
          return !option.disabled;
        });

        var areSomeUnchecked = filteredOptions.some(function (option) {
          return !option.checked;
        });
        areSomeUnchecked ? filteredOptions.map(function (option) {
          return !option.checked && _this.setOptionStatus(option, true);
        }) : filteredOptions.map(function (option) {
          return _this.setOptionStatus(option, false);
        });

        if (filteredOptions.length !== options.length) {
          options = _this.applyFilteredOptionsChanges(options, filteredOptions);
        }

        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectOption", function (value) {
      if (_this.props.multiple) {
        value === _this.props.selectAllValue ? _this.selectAllOptions() : _this.selectMultipleOption(value);
      } else {
        _this.selectOneOption(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerOptionChange", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedValue;
      Array.isArray(text) && (text = text.join(", "));

      _this.setState({
        selectValue: value,
        selectTextContent: text,
        isEmpty: value.length ? false : true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelected", function (selectedValue) {
      return _this.setState({
        selectedValue: selectedValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "returnComponentContent", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          getTextContent = _this$props.getTextContent,
          getValue = _this$props.getValue,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          multiple = _this$props.multiple,
          outline = _this$props.outline,
          required = _this$props.required,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          selected = _this$props.selected,
          selectAll = _this$props.selectAll,
          selectAllClassName = _this$props.selectAllClassName,
          selectAllLabel = _this$props.selectAllLabel,
          selectAllValue = _this$props.selectAllValue,
          focusShadow = _this$props.focusShadow,
          focusBackgroundColor = _this$props.focusBackgroundColor,
          attributes = _objectWithoutProperties(_this$props, ["className", "color", "children", "getTextContent", "getValue", "label", "labelClass", "multiple", "outline", "required", "search", "searchLabel", "searchId", "selected", "selectAll", "selectAllClassName", "selectAllLabel", "selectAllValue", "focusShadow", "focusBackgroundColor"]);

      var _this$state2 = _this.state,
          isEmpty = _this$state2.isEmpty,
          isControlledEmpty = _this$state2.isControlledEmpty,
          isOpened = _this$state2.dropdown,
          selectTextContent = _this$state2.selectTextContent;
      var classes = classNames("select-wrapper mdb-select md-form", color ? "colorful-select dropdown-" + color : "", outline ? "md-outline" : className);
      var labelClasses = classNames(!outline && "mdb-main-label", labelClass, children ? (!isEmpty || isOpened) && "active text-primary" : (!isControlledEmpty || isOpened) && "active text-primary");
      var needToMoveOutline = outline && isEmpty && !isOpened;
      var uncontrolledLabelStyles = {
        transform: needToMoveOutline && "translateY(23px)",
        fontSize: needToMoveOutline && "1rem",
        fontWeight: needToMoveOutline && "300",
        left: !outline && isEmpty && !isOpened && "15px"
      };
      var controlledLabelStyles = {
        zIndex: outline && (!isControlledEmpty || isOpened) && 4,
        transform: isControlledEmpty && !isOpened && "translateY(7px)"
      };

      if (!children) {
        var controlledValue = isControlledEmpty ? selected && !label ? selected : "" : selectTextContent;
        return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React.createElement("span", {
          className: "caret"
        }, "\u25BC"), React.createElement(ControlledSelectInput, {
          value: controlledValue,
          ref: _this.inputRef,
          required: required
        }), React.createElement(ControlledSelectOptions, {
          multiple: multiple,
          options: _this.state.options,
          search: search,
          searchLabel: searchLabel,
          selected: selected,
          selectOption: _this.selectOption,
          selectAll: selectAll,
          selectAllClassName: selectAllClassName,
          selectAllLabel: selectAllLabel,
          selectAllValue: selectAllValue,
          allChecked: _this.state.allChecked,
          inputRef: _this.inputRef,
          setFilteredOptions: _this.setFilteredOptions,
          focused: _this.state.focused,
          changeFocus: _this.changeFocus,
          focusShadow: focusShadow,
          focusBackgroundColor: focusBackgroundColor
        }), label && React.createElement("label", {
          className: labelClasses,
          style: controlledLabelStyles
        }, label)));
      } else {
        return React.createElement(SelectContext.Provider, {
          value: {
            state: _this.state,
            multiple: multiple,
            triggerOptionChange: _this.triggerOptionChange,
            label: label,
            setSelected: _this.setSelected,
            onInputClick: _this.onInputClick
          }
        }, React.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React.createElement("span", {
          className: "caret"
        }, "\u25BC"), children), label && React.createElement("label", {
          className: labelClasses,
          style: uncontrolledLabelStyles
        }, label));
      }
    });

    _this.state = {
      selectedValue: "",
      isEmpty: true,
      isControlledEmpty: true,
      selectValue: [],
      selectTextContent: "",
      options: _this.props.options || [],
      allChecked: false,
      focused: null,
      filteredOptions: _this.props.options || [],
      input: null,
      dropdown: null
    };
    _this.inputRef = React.createRef();

    if (_this.props.options && _this.props.options.length) {
      Object.assign(_this.state, _this.computeValuesAndText(_this.props.options));
    }

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.onDocumentClick);

      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.addEventListener("click", this.onInputClick);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selectValue !== this.state.selectValue) {
        if (typeof this.props.getValue === "function") {
          this.props.getValue(this.state.selectValue);
        }

        if (typeof this.props.getTextContent === "function") {
          this.props.getTextContent(this.state.selectTextContent);
        }

        if (!this.props.children) {
          this.setState({
            isControlledEmpty: !this.state.options.some(function (option) {
              return option.checked;
            })
          });
        }
      }

      if (this.props.options !== prevProps.options) {
        var _this$computeValuesAn = this.computeValuesAndText(this.props.options),
            selectValue = _this$computeValuesAn.selectValue,
            selectTextContent = _this$computeValuesAn.selectTextContent,
            allChecked = _this$computeValuesAn.allChecked;

        this.setState({
          options: this.props.options,
          filteredOptions: this.props.options,
          selectValue: selectValue,
          selectTextContent: selectTextContent,
          allChecked: allChecked
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.onDocumentClick);

      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.removeEventListener("click", this.onInputClick);
      }
    } // open nieghbour ul of clicked input

  }, {
    key: "render",
    value: function render() {
      return this.returnComponentContent();
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  focusShadow: propTypes.string,
  focusBackgroundColor: propTypes.string,
  getTextContent: propTypes.func,
  getValue: propTypes.func,
  label: propTypes.string,
  labelClass: propTypes.string,
  multiple: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    checked: propTypes.bool,
    disabled: propTypes.bool,
    icon: propTypes.string,
    text: propTypes.oneOfType([propTypes.object, propTypes.string]),
    value: propTypes.string
  })),
  outline: propTypes.bool,
  required: propTypes.bool,
  search: propTypes.bool,
  searchLabel: propTypes.string,
  searchId: propTypes.string,
  selected: propTypes.string,
  selectAllClassName: propTypes.string,
  selectAllLabel: propTypes.string,
  selectAllValue: propTypes.string
};
Select.defaultProps = {
  label: "",
  labelClass: "",
  outline: false,
  required: false,
  selected: "",
  selectAllValue: "0"
};

var selectContextHOC = function selectContextHOC(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(HOC, _React$Component);

      function HOC() {
        _classCallCheck(this, HOC);

        return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
      }

      _createClass(HOC, [{
        key: "render",
        value: function render() {
          var _this = this;

          return React.createElement(SelectContext.Consumer, null, function (context) {
            return React.createElement(Component, _extends({}, _this.props, {
              context: context
            }));
          });
        }
      }]);

      return HOC;
    }(React.Component)
  );
};

var SelectInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput() {
    _classCallCheck(this, SelectInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectInput).apply(this, arguments));
  }

  _createClass(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selected && this.props.context.setSelected(this.props.selected);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.context.state.isEmpty !== this.props.context.state.isEmpty) {
        this.props.selected && this.props.context.setSelected(this.props.selected);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classNames("select-dropdown", this.props.className);
      var _this$props = this.props,
          attributes = _this$props.attributes,
          context = _this$props.context;
      var value = context.state.isEmpty ? this.props.selected && !context.label ? this.props.selected : "" : context.state.selectTextContent;
      return React.createElement("input", _extends({
        type: "text",
        readOnly: true,
        onClick: function onClick(e) {
          return context.onInputClick(e);
        },
        value: value
      }, attributes, {
        className: classes
      }));
    }
  }]);

  return SelectInput;
}(React.Component);

SelectInput.propTypes = {
  context: propTypes.object.isRequired,
  className: propTypes.string,
  selected: propTypes.oneOfType([propTypes.string, propTypes.number])
};
SelectInput.defaultProps = {
  className: ""
};
var SelectInput$1 = SelectInput = selectContextHOC(SelectInput);

var css$5 = ".fadeElement {\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n  transition: 0.5s;\n  display: block;\n  width: 100%;\n  top: 0;\n  opacity: 0;\n  transform-origin:top;\n  transform:scaleY(0.7);\n  visibility: hidden;\n  pointer-events: none;\n}\n.fadeElement.fadeIn {\n  transform:scaleY(1);\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n";
styleInject(css$5);

var Options =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "search", function (value) {
      _this.state.options.forEach(function (option) {
        if (!option.children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
          option.style.display = 'none';
        } else {
          option.style.display = 'flex';
        }
      });
    });

    _this.state = {
      options: [],
      searchValue: ""
    };
    _this.optionsRef = React.createRef();
    return _this;
  }

  _createClass(Options, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.search) {
        var options = Array.from(this.optionsRef.current.children).filter(function (child) {
          return child.tagName === 'LI';
        });
        this.setState({
          options: options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "search", "searchLabel", "searchId"]);

      var classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement', className);
      return React.createElement("ul", _extends({}, attributes, {
        className: classes,
        ref: this.optionsRef
      }), search && React.createElement("div", {
        className: "mx-2"
      }, React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      })), children);
    }
  }]);

  return Options;
}(React.Component);

Options.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  search: propTypes.bool,
  searchLabel: propTypes.string,
  searchId: propTypes.string
};
Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "selectOption", function () {
      if (!_this.props.disabled) {
        var selectedOption = _this.optionRef.current;
        var value = [];
        var text;
        var options = selectedOption.parentNode.children;

        if (_this.state.multiple) {
          text = [];

          if (selectedOption.classList.contains("active")) {
            selectedOption.classList.remove("active");

            _this.setState({
              checked: false
            });
          } else {
            selectedOption.classList.add("active");

            _this.setState({
              checked: true
            });
          } // iterate throught child nodes options and add checked to arr


          Array.from(options).forEach(function (option) {
            if (option.classList.contains("active")) {
              text.push(option.textContent);
              option.getElementsByTagName("input")[0].value ? value.push(option.getElementsByTagName("input")[0].value) : value.push(option.textContent);
            }
          });
        } else {
          Array.from(selectedOption.children).forEach(function (child) {
            if (child.nodeName === "SPAN") {
              text = child.textContent;
              _this.props.value ? value.push(_this.props.value) : value.push(text);
            }
          });
          Array.from(options).forEach(function (option) {
            return option.classList.remove("active");
          });
          selectedOption.classList.add("active");
        }

        value.length ? _this.props.context.triggerOptionChange(value, text) : _this.props.context.triggerOptionChange();
      }
    });

    _this.state = {
      multiple: _this.props.context.multiple || false,
      checked: _this.props.checked || _this.props.selected || false
    };
    _this.optionRef = React.createRef();
    return _this;
  }

  _createClass(Option, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.multiple) {
        this.state.checked && this.optionRef.current.click();
      } else {
        if (!this.props.disabled) {
          !this.state.checked && this.optionRef.current.classList.add("active");
          this.selectOption();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          separator = _this$props.separator,
          icon = _this$props.icon,
          triggerOptionClick = _this$props.triggerOptionClick,
          value = _this$props.value,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "disabled", "separator", "icon", "triggerOptionClick", "value"]);

      var classes = classNames(disabled || separator ? "disabled" : "", separator ? "optgroup" : "", className, "justify-content-between align-items-center");
      var input = null;
      var label = null;

      if (this.state.multiple) {
        if (!disabled) {
          input = React.createElement("input", {
            type: "checkbox",
            value: value,
            onChange: function onChange() {
              return false;
            },
            className: "form-check-input",
            checked: this.state.checked
          });
          label = React.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        } else {
          input = React.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            disabled: true
          });
          label = React.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        }
      }

      return React.createElement("li", _extends({
        ref: this.optionRef
      }, attributes, {
        "data-multiple": this.state.multiple,
        className: classes,
        onClick: this.selectOption,
        style: {
          display: "flex"
        }
      }), React.createElement("span", {
        "data-multiple": this.state.multiple,
        className: "filtrable",
        style: {
          flex: "1"
        }
      }, !separator ? input : null, label, children), icon && React.createElement("img", {
        src: this.props.icon,
        alt: "icon",
        className: "rounded-circle"
      }));
    }
  }]);

  return Option;
}(React.Component);

Option.propTypes = {
  children: propTypes.node,
  checked: propTypes.bool,
  className: propTypes.string,
  disabled: propTypes.bool,
  icon: propTypes.string,
  triggerOptionClick: propTypes.func,
  value: propTypes.any,
  separator: propTypes.bool
};
Option.defaultProps = {
  children: "span",
  checked: false,
  className: "",
  disabled: false,
  separator: false,
  icon: "",
  triggerOptionClick: function triggerOptionClick() {},
  value: ""
};
var SelectOption = Option = selectContextHOC(Option);

var DataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      entries = _ref.entries,
      label = _ref.label,
      barReverse = _ref.barReverse;
  return React.createElement("div", {
    className: classNames("dataTables_length", "d-flex", "flex-row", barReverse && "justify-content-end")
  }, React.createElement("label", {
    className: "mt-4"
  }, label), React.createElement(Select, {
    getValue: onChange,
    className: "my-0"
  }, React.createElement(SelectInput$1, {
    selected: value
  }), React.createElement(Options, null, entries.map(function (entry, index) {
    return React.createElement(SelectOption, {
      checked: index === 0,
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  barReverse: propTypes.bool,
  entries: propTypes.arrayOf(propTypes.number).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]).isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired
};

// FREE START
// import DataTableSelect from '../DataTableSelect';
// FREE-END

var DataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
      displayEntries = props.displayEntries,
      entries = props.entries,
      entriesArr = props.entriesArr,
      paging = props.paging,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && displayEntries && React.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label,
    barReverse: barReverse
  }));
};

DataTableEntries.propTypes = {
  barReverse: propTypes.bool,
  handleEntriesChange: propTypes.func.isRequired,
  displayEntries: propTypes.bool.isRequired,
  entries: propTypes.number.isRequired,
  entriesArr: propTypes.arrayOf(propTypes.number).isRequired,
  paging: propTypes.bool.isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]).isRequired
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label,
      barReverse = _ref.barReverse;
  return React.createElement("div", {
    className: classNames("dataTables_filter", "md-form", "flex-row", barReverse && "text-left")
  }, React.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  }));
};

DataTableInput.propTypes = {
  barReverse: propTypes.bool,
  label: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string
};

// FREE START
// import DataTableInput from '../DataTableInput';
// FREE END

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && React.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label,
    barReverse: barReverse
  }));
};

DataTableSearch.propTypes = {
  barReverse: propTypes.bool,
  handleSearchChange: propTypes.func.isRequired,
  search: propTypes.string.isRequired,
  searching: propTypes.bool.isRequired,
  label: propTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      pages = props.pages,
      label = props.label;
  return React.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && React.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};

DataTableInfo.propTypes = {
  activePage: propTypes.number.isRequired,
  entries: propTypes.number.isRequired,
  filteredRows: propTypes.array.isRequired,
  info: propTypes.bool.isRequired,
  pages: propTypes.array.isRequired,
  label: propTypes.arrayOf(propTypes.string)
};
DataTableInfo.defaultProps = {
  label: ["Showing", "to", "of", "entries"]
};

var Pagination = function Pagination(props) {
  var _classNames;

  var children = props.children,
      circle = props.circle,
      className = props.className,
      color = props.color,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutProperties(props, ["children", "circle", "className", "color", "tag", "size"]);

  var classes = classNames((_classNames = {
    'pagination-circle': circle
  }, _defineProperty(_classNames, "pg-".concat(color), color), _defineProperty(_classNames, "pagination-".concat(size), size), _classNames), 'pagination', className);
  return React.createElement(Tag, _extends({
    "data-test": "pagination"
  }, attributes, {
    className: classes
  }), children);
};

Pagination.propTypes = {
  children: propTypes.node,
  circle: propTypes.bool,
  className: propTypes.string,
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  size: propTypes.oneOf(['lg', 'sm'])
};
Pagination.defaultProps = {
  circle: false,
  className: '',
  color: '',
  tag: 'ul'
};

var PageItem = function PageItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "className", "children", "disabled", "tag"]);

  var classes = classNames({
    'disabled': disabled,
    'active': active
  }, 'page-item', className);
  return React.createElement(Tag, _extends({
    "data-test": "page-item"
  }, attributes, {
    className: classes
  }), children);
};

PageItem.propTypes = {
  active: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  disabled: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  tag: 'li'
};

var PageLink = function PageLink(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('page-link', className);
  return React.createElement(Tag, _extends({
    "data-test": "page-link"
  }, attributes, {
    className: classes
  }), children);
};

PageLink.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
PageLink.defaultProps = {
  tag: 'a'
};

var DataTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTablePagination, _Component);

  function DataTablePagination(props) {
    var _this;

    _classCallCheck(this, DataTablePagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTablePagination).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.pages !== _this.props.pages) {
        _this.setState({
          pages: _this.props.pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pagesIndexify", function () {
      var mutablePages = _toConsumableArray(_this.state.pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_this), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, _this.props.pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "choosePagesGroup", function () {
      var pGroupNumber = Math.floor(_this.props.activePage / _this.props.pagesAmount);
      return _this.state.pGroups.length ? _this.state.pGroups[pGroupNumber] : [];
    });

    _this.state = {
      pages: props.pages,
      pGroups: []
    };
    return _this;
  }

  _createClass(DataTablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.groupPages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activePage = _this$props.activePage,
          changeActivePage = _this$props.changeActivePage,
          pages = _this$props.pages,
          label = _this$props.label;
      return React.createElement("div", {
        className: "col-sm-12 col-md-7"
      }, React.createElement("div", {
        className: "dataTables_paginate"
      }, React.createElement(Pagination, null, React.createElement(PageItem, {
        disabled: activePage <= 0
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, page.index === activePage && React.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React.createElement(PageItem, {
        disabled: !pages.length || activePage === pages.length - 1
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(Component);

DataTablePagination.propTypes = {
  activePage: propTypes.number.isRequired,
  changeActivePage: propTypes.func.isRequired,
  pages: propTypes.array.isRequired,
  pagesAmount: propTypes.number.isRequired,
  label: propTypes.arrayOf(propTypes.string).isRequired
};

var ExportToCSV =
/*#__PURE__*/
function (_Component) {
  _inherits(ExportToCSV, _Component);

  function ExportToCSV(props) {
    var _this;

    _classCallCheck(this, ExportToCSV);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExportToCSV).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "computeDataToLink", function () {
      _this.setState(function (prevState) {
        return {
          href: encodeURI("data:text/csv;charset=utf-8," + [prevState.columns.map(function (col) {
            return col.field;
          }).join(","), [].concat.apply([], prevState.data).map(function (row) {
            return Object.values(row).join(",");
          }).join("\n")].join("\n"))
        };
      });
    });

    _this.state = {
      columns: _this.props.columns,
      data: _this.props.data,
      href: ""
    };
    return _this;
  }

  _createClass(ExportToCSV, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.computeDataToLink();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.props.data || prevState.columns !== this.props.columns) {
        this.setState({
          columns: this.props.columns,
          data: this.props.data
        }, this.computeDataToLink());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "circle", "className", "color", "children", "outline", "size", "rounded", "gradient", "floating", "flat"]);

      return React.createElement(Button, _extends({
        active: active,
        block: block,
        circle: circle,
        className: className,
        color: color,
        outline: outline,
        size: size,
        rounded: rounded,
        gradient: gradient,
        floating: floating,
        flat: flat,
        role: "button",
        type: "link"
      }, attributes, {
        href: this.state.href,
        download: "export.csv"
      }), children);
    }
  }]);

  return ExportToCSV;
}(Component);

ExportToCSV.propTypes = {
  columns: propTypes.arrayOf(propTypes.object).isRequired,
  data: propTypes.array.isRequired,
  active: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  gradient: propTypes.string,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  circle: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  size: propTypes.string,
  children: propTypes.node,
  className: propTypes.string
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setUnsearchable", function (columns) {
      var unsearchable = [];
      columns.forEach(function (column) {
        if (column.searchable !== undefined && column.searchable === false) {
          unsearchable.push(column.field);
        }
      });

      _this.setState({
        unsearchable: unsearchable
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function (link) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRowsInitialy", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.rows.length / _this.state.entries);

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * _this.state.entries;

        _this.state.pages.push(_this.state.rows.slice(pageEndIndex - _this.state.entries, pageEndIndex));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkFieldValue", function (array, field) {
      return array[field] && typeof array[field] !== "string" ? array[field].props.searchValue : array[field];
    });

    _defineProperty(_assertThisInitialized(_this), "checkField", function (field, a, b) {
      var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "desc";
      var _ref = [_this.checkFieldValue(a, field), _this.checkFieldValue(b, field)],
          aField = _ref[0],
          bField = _ref[1];
      return direction === "desc" ? aField < bField : aField > bField;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (field, sort) {
      if (sort !== "disabled") {
        _this.setState(function (prevState) {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort(function (a, b) {
                if (_this.props.sortRows && _this.props.sortRows.includes(field)) {
                  return _this.checkField(field, a, b);
                }

                return a[field] > b[field] ? -1 : 1;
              });
              break;

            default:
              prevState.rows.sort(function (a, b) {
                if (_this.props.sortRows && _this.props.sortRows.includes(field)) {
                  return _this.checkField(field, a, b, "asc");
                }

                return a[field] < b[field] ? -1 : 1;
              });
          }

          prevState.columns.forEach(function (col) {
            if (col.sort === "disabled") return;
            col.sort = col.field === field ? col.sort === "desc" ? "asc" : "desc" : "";
          });
          return {
            rows: prevState.rows,
            columns: prevState.columns,
            sorted: true
          };
        }, function () {
          return _this.filterRows();
        });
      } else return;
    });

    _defineProperty(_assertThisInitialized(_this), "filterRows", function () {
      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if ((!_this.state.unsearchable.length || !_this.state.unsearchable.includes(key)) && typeof row[key] !== "function") {
                var stringValue = "";

                if (_this.props.sortRows && typeof row[key] !== "string") {
                  stringValue = row[key].props.searchValue;
                } else {
                  if (row[key]) {
                    stringValue = row[key].toString();
                  }
                }

                if (stringValue.toLowerCase().match(_this.state.search.toLowerCase())) return true;
              }
            }
          }

          return false;
        });
        if (filteredRows.length === 0) filteredRows.push({
          message: "No matching records found",
          colspan: prevState.columns.length
        });
        return {
          filteredRows: filteredRows,
          activePage: 0
        };
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRows", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.filteredRows.length / _this.state.entries);

      _this.setState(function (prevState) {
        prevState.pages = [];

        if (_this.props.paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * prevState.entries;
            prevState.pages.push(prevState.filteredRows.slice(pageEndIndex - prevState.entries, pageEndIndex));
          }

          prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1;
        } else {
          prevState.pages.push(prevState.filteredRows);
          prevState.activePage = 0;
        }

        return _objectSpread({}, prevState);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeActivePage", function (page) {
      _this.setState({
        activePage: page
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });

    _this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: "",
      unsearchable: [],
      translateScrollHead: 0,
      order: props.order || [],
      sorted: false
    };

    if (_this.props.paging) {
      _this.paginateRowsInitialy();
    } else {
      _this.state.pages.push(_this.state.rows);
    }

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.data === "string") {
        this.fetchData(this.props.data);
      }

      this.state.order.length && this.handleSort(this.state.order[0], this.state.order[1]);
      this.setUnsearchable(this.state.columns);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevProps.data !== this.props.data) {
        if (typeof this.props.data === "string") {
          this.fetchData(this.props.data);
        } else {
          this.setState({
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          }, function () {
            return _this2.paginateRows();
          });
        }

        this.setUnsearchable(this.state.columns);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          barReverse = _this$props.barReverse,
          btn = _this$props.btn,
          className = _this$props.className,
          children = _this$props.children,
          dark = _this$props.dark,
          data = _this$props.data,
          displayEntries = _this$props.displayEntries,
          entriesOptions = _this$props.entriesOptions,
          entriesLabel = _this$props.entriesLabel,
          exportToCSV = _this$props.exportToCSV,
          fixed = _this$props.fixed,
          hover = _this$props.hover,
          info = _this$props.info,
          infoLabel = _this$props.infoLabel,
          maxHeight = _this$props.maxHeight,
          order = _this$props.order,
          pagesAmount = _this$props.pagesAmount,
          paging = _this$props.paging,
          paginationLabel = _this$props.paginationLabel,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          searching = _this$props.searching,
          searchLabel = _this$props.searchLabel,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY,
          small = _this$props.small,
          sortable = _this$props.sortable,
          striped = _this$props.striped,
          tbodyColor = _this$props.tbodyColor,
          tbodyTextWhite = _this$props.tbodyTextWhite,
          theadColor = _this$props.theadColor,
          theadTextWhite = _this$props.theadTextWhite,
          sortRows = _this$props.sortRows,
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "barReverse", "btn", "className", "children", "dark", "data", "displayEntries", "entriesOptions", "entriesLabel", "exportToCSV", "fixed", "hover", "info", "infoLabel", "maxHeight", "order", "pagesAmount", "paging", "paginationLabel", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "searching", "searchLabel", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "sortRows"]);

      var _this$state = this.state,
          columns = _this$state.columns,
          entries = _this$state.entries,
          filteredRows = _this$state.filteredRows,
          pages = _this$state.pages,
          activePage = _this$state.activePage,
          search = _this$state.search,
          translateScrollHead = _this$state.translateScrollHead;
      var tableClasses = classNames(className && "".concat(className), "dataTables_wrapper dt-bootstrap4");
      return React.createElement("div", {
        className: tableClasses
      }, React.createElement("div", {
        className: "row".concat(barReverse ? ' flex-row-reverse' : '')
      }, React.createElement(DataTableEntries, {
        paging: paging,
        displayEntries: displayEntries,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel,
        barReverse: barReverse
      }), React.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel,
        barReverse: barReverse
      })), !scrollY && !scrollX && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTable, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        hover: hover,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        sorted: this.state.sorted
      }, attributes))), (scrollY || scrollX) && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTableScroll, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        handleTableBodyScroll: this.handleTableBodyScroll,
        hover: hover,
        maxHeight: maxHeight,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        scrollX: scrollX,
        scrollY: scrollY,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        sorted: this.state.sorted,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), React.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })), exportToCSV && React.createElement("div", {
        className: "row justify-content-end"
      }, React.createElement(ExportToCSV, {
        columns: columns,
        data: pages,
        color: "primary"
      }, "Download CSV")));
    }
  }]);

  return DataTable;
}(Component);

DataTable.propTypes = {
  autoWidth: propTypes.bool,
  barReverse: propTypes.bool,
  bordered: propTypes.bool,
  borderless: propTypes.bool,
  btn: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  dark: propTypes.bool,
  data: propTypes.oneOfType([propTypes.object, propTypes.string]),
  displayEntries: propTypes.bool,
  entries: propTypes.number,
  entriesLabel: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  entriesOptions: propTypes.arrayOf(propTypes.number),
  exportToCSV: propTypes.bool,
  fixed: propTypes.bool,
  hover: propTypes.bool,
  info: propTypes.bool,
  infoLabel: propTypes.arrayOf(propTypes.string),
  maxHeight: propTypes.string,
  order: propTypes.arrayOf(propTypes.string),
  pagesAmount: propTypes.number,
  paging: propTypes.bool,
  paginationLabel: propTypes.arrayOf(propTypes.string),
  responsive: propTypes.bool,
  responsiveSm: propTypes.bool,
  responsiveMd: propTypes.bool,
  responsiveLg: propTypes.bool,
  responsiveXl: propTypes.bool,
  searching: propTypes.bool,
  searchLabel: propTypes.string,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool,
  sortable: propTypes.bool,
  sortRows: propTypes.arrayOf(propTypes.string),
  small: propTypes.bool,
  striped: propTypes.bool,
  theadColor: propTypes.string,
  theadTextWhite: propTypes.bool,
  tbodyColor: propTypes.string,
  tbodyTextWhite: propTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  displayEntries: true,
  entries: 10,
  entriesLabel: "Show entries",
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ["Showing", "to", "of", "entries"],
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ["Previous", "Next"],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: "Search",
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: "",
  theadTextWhite: false,
  tbodyColor: "",
  tbodyTextWhite: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.state.isOpen,
        dropup: this.props.dropup,
        dropright: this.props.dropright,
        dropleft: this.props.dropleft,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      if (this.state.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return ReactDOM.findDOMNode(this);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();

      if (e.which === keyCodes.space && this.state.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.state.isOpen) {
        this.toggle(e);
        container.querySelector("[aria-expanded]").focus();
        return;
      }

      var menuClass = "dropdown-menu";
      var itemClass = "dropdown-item";
      var disabledClass = "disabled";
      var items = container.querySelectorAll(".".concat(menuClass, " .").concat(itemClass, ":not(.").concat(disabledClass, ")"));
      if (!items.length) return;
      var index = -1;

      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ["toggle", "disabled"]),
          className = _omit.className,
          children = _omit.children,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          dropright = _omit.dropright,
          dropleft = _omit.dropleft;

      var classes = classNames((_classNames = {
        "btn-group": group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", this.state.isOpen), _defineProperty(_classNames, "dropup", dropup), _defineProperty(_classNames, "dropright", dropright), _defineProperty(_classNames, "dropleft", dropleft), _classNames), className);
      return React.createElement(Manager, null, React.createElement("div", {
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  disabled: propTypes.bool,
  dropup: propTypes.bool,
  dropright: propTypes.bool,
  dropleft: propTypes.bool,
  group: propTypes.bool,
  size: propTypes.string,
  tag: propTypes.string,
  toggle: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  dropright: false,
  dropleft: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: propTypes.func.isRequired,
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired
};

var propTypes$1 = {
  children: propTypes.node,
  active: propTypes.bool,
  disabled: propTypes.bool,
  divider: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  header: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  toggle: propTypes.bool
};
var contextTypes = {
  toggle: propTypes.func
};
var defaultProps = {
  tag: "button",
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownItem).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return "-1";
      }

      return "0";
    }
  }, {
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ["toggle"]),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "active"]);

      var classes = classNames({
        disabled: props.disabled,
        "dropdown-item": !divider && !header,
        active: active,
        "dropdown-header": header,
        "dropdown-divider": divider
      }, className);

      if (Tag === "button") {
        if (header) {
          Tag = "h6";
        } else if (divider) {
          Tag = "div";
        } else if (props.href) {
          Tag = "a";
        }
      }

      return React.createElement(Tag, _extends({
        type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = propTypes$1;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

var css$6 = ".dropup .dropdown-menu {\n  top: auto !important;\n  bottom: 100% !important;\n  transform: translate3d(5px, 5px, 0px) !important;\n}\n\n.dropdown-menu-right {\n  left: 0 !important;\n  right: auto !important;\n}\n";
styleInject(css$6);

var DropdownMenuProComponent = function DropdownMenuProComponent(_ref) {
  var isOpen = _ref.isOpen,
      Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React.createElement(CSSTransition, {
    "in": isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, React.createElement(Tag, _extends({
    tabIndex: tabIndex,
    role: role
  }, attributes, {
    "aria-hidden": aria,
    key: d_key
  }), children));
};

DropdownMenuProComponent.propTypes = {
  aria: propTypes.bool.isRequired,
  attributes: propTypes.object.isRequired,
  d_key: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  tabIndex: propTypes.string.isRequired,
  tag: propTypes.any.isRequired,
  isOpen: propTypes.bool.isRequired,
  children: propTypes.node.isRequired
};

/*
// PRO-END
import DropdownMenuComponent from './DropdownMenuComponent';
// PRO-START
*/
// FREE-END
// PRO-END

var noFlipModifier = {
  flip: {
    enabled: false
  }
};

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          basic = _this$props.basic,
          className = _this$props.className,
          right = _this$props.right,
          children = _this$props.children,
          tag = _this$props.tag,
          flip = _this$props.flip,
          color = _this$props.color,
          attrs = _objectWithoutProperties(_this$props, ["basic", "className", "right", "children", "tag", "flip", "color"]);

      var classes = classNames('dropdown-menu', color && "dropdown-".concat(color), {
        'dropdown-menu-right': right,
        show: this.context.isOpen,
        basic: basic
      }, className);
      var Tag = tag;

      if (this.context.isOpen) {
        var position1 = this.context.dropup ? 'top' : this.context.dropright ? 'right' : this.context.dropleft ? 'left' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
        attrs.modifiers = !flip ? noFlipModifier : undefined;
      }

      return React.createElement(Popper$1, {
        modifires: attrs.modifiers,
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement
      }, function (_ref) {
        var placement = _ref.placement,
            ref = _ref.ref,
            style = _ref.style;
        return React.createElement(Tag, {
          ref: ref,
          style: style,
          "data-placement": placement,
          className: classes
        }, React.createElement(DropdownMenuProComponent, {
          isOpen: _this.context.isOpen,
          tag: Tag,
          tabIndex: "-1",
          role: "menu",
          attributes: attrs,
          aria: !_this.context.isOpen,
          d_key: "dropDownMenu",
          color: color
        }, children));
      });
    }
  }]);

  return DropdownMenu;
}(Component);

DropdownMenu.propTypes = {
  children: propTypes.node.isRequired,
  basic: propTypes.bool,
  className: propTypes.string,
  flip: propTypes.bool,
  right: propTypes.bool,
  tag: propTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: false,
  right: false,
  tag: 'div',
  color: false
};
DropdownMenu.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired,
  color: propTypes.oneOfType([propTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), propTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _classCallCheck(this, DropdownToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          caret = _this$props.caret,
          nav = _this$props.nav,
          tag = _this$props.tag,
          props = _objectWithoutProperties(_this$props, ["className", "color", "caret", "nav", "tag"]);

      var ariaLabel = props["aria-label"] || "Toggle Dropdown";
      var classes = classNames({
        "dropdown-toggle": caret,
        "nav-link": nav
      }, className);
      var children = props.children || React.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag;

      if (nav && !tag) {
        Tag = "a";
        props.href = "#";
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      } else {
        Tag = tag;
      }

      return React.createElement(Reference, null, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          ref: ref
        }), children) : React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  caret: propTypes.bool,
  color: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  "aria-haspopup": propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  nav: propTypes.bool
};
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "secondary"
};
DropdownToggle.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  toggle: propTypes.func.isRequired
};

var EdgeHeader = function EdgeHeader(props) {
  var color = props.color,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "className", "tag"]);

  var classes = classNames("edge-header", color, className);
  return React.createElement(Tag, _extends({
    "data-test": "edgeHeader"
  }, attributes, {
    className: classes
  }));
};

EdgeHeader.propTypes = {
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
EdgeHeader.defaultProps = {
  color: "deep-purple",
  tag: "div"
};

var Footer = function Footer(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "children", "className", "tag"]);

  var classes = classNames("page-footer", color && color, className);
  return React.createElement(Tag, _extends({
    "data-test": "footer"
  }, attributes, {
    className: classes
  }), children);
};

Footer.propTypes = {
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
Footer.defaultProps = {
  tag: "footer"
};

var FormInline = function FormInline(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      waves = props.waves,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "waves", "children"]);

  var classes = classNames('form-inline', props.waves && 'Ripple-parent', className);
  return React.createElement("form", _extends({
    "data-test": "form-inline"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), props.children, props.waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

FormInline.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  waves: propTypes.bool
};

var FreeBird = function FreeBird(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("container free-bird", className);
  return React.createElement(Tag, _extends({
    "data-test": "freebird"
  }, attributes, {
    className: classes
  }));
};

FreeBird.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
FreeBird.defaultProps = {
  tag: "div"
};

var css$7 = ".hamburger-button__checkbox {\n  display: none;\n}\n\n.hamburger-button__button {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  top: -5px;\n}\n\nlabel.hamburger-button__button {\n  margin-bottom: 0;\n}\n\n#nav-icon1 {\n  width: 1.5em;\n  height: 1.5em;\n  position: relative;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .5s ease-in-out;\n  -moz-transition: .5s ease-in-out;\n  -o-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  cursor: pointer;\n}\n\n#nav-icon1 span {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  border-radius: 1px;\n  background-color: #fff;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .25s ease-in-out;\n  -moz-transition: .25s ease-in-out;\n  -o-transition: .25s ease-in-out;\n  transition: .25s ease-in-out;\n}\n\n#nav-icon1 span:nth-child(1) {\n  top: 5px;\n}\n\n#nav-icon1 span:nth-child(2) {\n  top: 16px;\n}\n\n#nav-icon1 span:nth-child(3) {\n  top: 27px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\n  top: 16px;\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\n  opacity: 0;\n  left: -60px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\n  top: 16px;\n  -webkit-transform: rotate(-135deg);\n  -moz-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n";
styleInject(css$7);

var HamburgerToggler = function HamburgerToggler(props) {
  var id = props.id,
      color = props.color,
      className = props.className,
      isOpen = props.isOpen,
      onClick = props.onClick;
  var classes = classNames('hamburger-button__button', className);
  return React.createElement(React.Fragment, null, React.createElement("input", {
    "data-test": "hamburger-toggler",
    type: "checkbox",
    defaultChecked: isOpen || false,
    onChange: onClick,
    className: "hamburger-button__checkbox",
    id: id
  }), React.createElement("label", {
    id: "nav-icon1",
    className: classes,
    htmlFor: id
  }, React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  })));
};

HamburgerToggler.propTypes = {
  id: propTypes.string,
  color: propTypes.string,
  className: propTypes.string
};

var Iframe =
/*#__PURE__*/
function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Iframe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: '',
      height: '',
      ratio: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var width = _this.props.width;
      var height = _this.props.height;
      var ratio = 9 / 16;

      if (_this.props.ratio) {
        var newRatio = _this.props.ratio.split('by')[0] / _this.props.ratio.split('by')[1];

        if (typeof ratio === 'number') ratio = newRatio;
      }

      if (_this.props.width && _this.props.height) {
        return;
      } else if (_this.props.width) {
        height = _this.props.width * ratio;
      } else if (_this.props.height) {
        width = _this.props.height * (1 / ratio);
      }

      _this.setState(_objectSpread({}, _this.state, {
        width: width,
        height: height,
        ratio: ratio
      }));
    });

    return _this;
  }

  _createClass(Iframe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          allowFullScreen = _this$props.allowFullScreen,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          onMouseOver = _this$props.onMouseOver,
          onMouseOut = _this$props.onMouseOut,
          onLoad = _this$props.onLoad,
          sandbox = _this$props.sandbox,
          src = _this$props.src,
          style = _this$props.style,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? "" : _this$props$title,
          ratio = _this$props.ratio,
          height = _this$props.height,
          width = _this$props.width;
      var classes = classNames('embed-responsive-item', className);
      var wrapperClasses = classNames(!(height || width) && 'embed-responsive', ratio ? "embed-responsive-".concat(ratio) : "embed-responsive-16by9");
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: '0',
        target: '_parent',
        allowFullScreen: allowFullScreen || true,
        height: this.state.height || '100%',
        name: name || undefined,
        width: this.state.width || '100%',
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = returnAttributes(iframeAttributes);
      return React.createElement("div", {
        "data-test": "iframe",
        className: wrapperClasses
      }, React.createElement("iframe", _extends({
        title: title,
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(Component);

Iframe.propTypes = {
  allowFullScreen: propTypes.bool,
  className: propTypes.string,
  height: propTypes.number,
  id: propTypes.string,
  name: propTypes.string,
  onMouseOver: propTypes.func,
  onMouseOut: propTypes.func,
  onLoad: propTypes.func,
  ratio: propTypes.string,
  sandbox: propTypes.string,
  src: propTypes.string.isRequired,
  styles: propTypes.object,
  width: propTypes.number,
  title: propTypes.string
};

var InputGroup = function InputGroup(_ref) {
  var append = _ref.append,
      appendClassName = _ref.appendClassName,
      ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      containerId = _ref.containerId,
      hint = _ref.hint,
      id = _ref.id,
      inputs = _ref.inputs,
      inputTag = _ref.inputTag,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      material = _ref.material,
      prepend = _ref.prepend,
      prependClassName = _ref.prependClassName,
      size = _ref.size,
      Tag = _ref.tag,
      textClassName = _ref.textClassName,
      type = _ref.type,
      value = _ref.value,
      valueDefault = _ref.valueDefault,
      attributes = _objectWithoutProperties(_ref, ["append", "appendClassName", "ariaLabel", "children", "className", "containerClassName", "containerId", "hint", "id", "inputs", "inputTag", "label", "labelClassName", "material", "prepend", "prependClassName", "size", "tag", "textClassName", "type", "value", "valueDefault"]);

  var containerClassNames = classNames("input-group", material && "md-form", size && "input-group-".concat(size), containerClassName);
  var inputClassNames = classNames(className);
  var prependClassNames = classNames("input-group-prepend", prependClassName);
  var appendClassNames = classNames("input-group-append", appendClassName);
  var textClassNames = classNames("input-group-text", material && "md-addon", textClassName);
  return React.createElement(React.Fragment, null, label && React.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), React.createElement(Tag, _extends({}, attributes, {
    className: containerClassNames,
    id: containerId
  }), prepend && React.createElement("div", {
    className: prependClassNames
  }, typeof prepend === "string" ? React.createElement("span", {
    className: textClassNames
  }, prepend) : prepend), inputs || React.createElement(Input, {
    noTag: true,
    type: type,
    className: inputClassNames,
    id: id,
    value: value,
    valueDefault: valueDefault,
    hint: hint,
    "aria-label": ariaLabel
  }), append && React.createElement("div", {
    className: appendClassNames
  }, typeof append === "string" ? React.createElement("span", {
    className: textClassNames
  }, append) : append), children));
};

InputGroup.propTypes = {
  append: propTypes.oneOfType([propTypes.node, propTypes.string]),
  appendClassNames: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  containerClassName: propTypes.string,
  containerId: propTypes.string,
  hint: propTypes.string,
  id: propTypes.string,
  inputs: propTypes.node,
  label: propTypes.string,
  labelClassName: propTypes.string,
  material: propTypes.bool,
  prepend: propTypes.any,
  prependClassName: propTypes.string,
  size: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  textClassName: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  valueDefault: propTypes.string
};
InputGroup.defaultProps = {
  tag: "div",
  type: "text"
};

var InputNumeric = function InputNumeric(props) {
  var onChangeHandler = function onChangeHandler(value) {
    props.getValue && props.getValue(value);
  };

  var className = props.className,
      getValue = props.getValue,
      attributes = _objectWithoutProperties(props, ["className", "getValue"]);

  var classes = classNames('form-control', className);
  return React.createElement(NumericInput, _extends({
    "data-test": "input-numeric"
  }, attributes, {
    onChange: onChangeHandler,
    className: classes
  }));
};

InputNumeric.propTypes = {
  className: propTypes.string,
  getValue: propTypes.func
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      children = props.children,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["className", "children", "fluid"]);

  var classes = classNames('jumbotron', fluid ? 'jumbotron-fluid' : false, className);
  return React.createElement("div", _extends({
    "data-test": "jumbotron"
  }, attributes, {
    className: classes
  }), children);
};

Jumbotron.propTypes = {
  fluid: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames("list-group", className);
  return React.createElement(Tag, _extends({
    "data-test": "list-group"
  }, attributes, {
    className: classes
  }), children);
};

ListGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
ListGroup.defaultProps = {
  tag: "ul"
};

var ListGroupItem = function ListGroupItem(props) {
  var _classNames;

  var active = props.active,
      children = props.children,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      hover = props.hover,
      success = props.success,
      info = props.info,
      warning = props.warning,
      danger = props.danger,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

  var classes = classNames('list-group-item', className, (_classNames = {
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), ' color'), _defineProperty(_classNames, 'list-group-item-action', hover), _classNames));

  if (attributes.href && Tag === 'li') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "list-group-item"
  }, attributes, {
    className: classes
  }), children);
};

ListGroupItem.propTypes = {
  active: propTypes.bool,
  disabled: propTypes.bool,
  hover: propTypes.bool,
  success: propTypes.bool,
  info: propTypes.bool,
  warning: propTypes.bool,
  danger: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
ListGroupItem.defaultProps = {
  tag: 'li'
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      round = props.round,
      thumbnail = props.thumbnail,
      figure = props.figure,
      figImg = props.figImg,
      figCap = props.figCap,
      figCapRight = props.figCapRight,
      figCapLeft = props.figCapLeft,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutProperties(props, ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"]);

  var defaultTag;

  if (heading) {
    defaultTag = "h4";
  } else if (left || right) {
    defaultTag = "a";
  } else if (object || figImg) {
    defaultTag = "img";
  } else if (list) {
    defaultTag = "ul";
  } else if (figure) {
    defaultTag = "figure";
  } else if (figCap || figCapRight || figCapLeft) {
    defaultTag = "figcaption";
  } else {
    defaultTag = "div";
  }

  var Tag = tag || defaultTag;
  var classes = classNames({
    "media-body": body,
    "mt-0": heading,
    "media-left": left,
    "media-right": right,
    "align-self-start": top,
    "align-self-center": middle,
    "align-self-end": bottom,
    "media-object": object,
    "img-thumbnail": thumbnail,
    "media-list": list,
    figure: figure,
    "figure-img": figImg,
    "figure-caption text-center": figCap,
    "figure-caption text-right": figCapRight,
    "figure-caption text-left": figCapLeft,
    "rounded-circle z-depth-1-half": round
  }, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? "media" : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "media"
  }, attributes, {
    className: classes
  }));
};

Media.propTypes = {
  body: propTypes.bool,
  bottom: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  heading: propTypes.bool,
  figure: propTypes.bool,
  figImg: propTypes.bool,
  figCap: propTypes.bool,
  figCapRight: propTypes.bool,
  figCapLeft: propTypes.bool,
  left: propTypes.bool,
  list: propTypes.bool,
  middle: propTypes.bool,
  object: propTypes.bool,
  thumbnail: propTypes.bool,
  round: propTypes.bool,
  right: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  top: propTypes.bool
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_this), "modalContent", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.body.classList.add('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.body.classList.remove('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEntered", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.add('show');
      _this.props.autoFocus && node.focus();

      if (type === 'modal') {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExit", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.remove('show');

      if (type === 'modal') {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop || e.target.closest('[role="dialog"]') && !e.target.classList.contains('modal')) return;

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          backdrop = _this$props.backdrop,
          backdropClassName = _this$props.backdropClassName,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          size = _this$props.size,
          side = _this$props.side,
          fullHeight = _this$props.fullHeight,
          frame = _this$props.frame,
          centered = _this$props.centered,
          position = _this$props.position,
          cascading = _this$props.cascading,
          modalStyle = _this$props.modalStyle,
          wrapClassName = _this$props.wrapClassName,
          animation = _this$props.animation,
          fade = _this$props.fade,
          tabIndex = _this$props.tabIndex,
          role = _this$props.role,
          id = _this$props.id,
          inline = _this$props.inline;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames((_classNames = {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered
      }, _defineProperty(_classNames, "modal-".concat(size), size), _defineProperty(_classNames, "modal-".concat(position), position), _defineProperty(_classNames, "modal-notify white-text modal-".concat(modalStyle), modalStyle), _classNames), 'modal-dialog', className);
      var wrapperClasses = classNames(_defineProperty({
        modal: !inline,
        fade: fade,
        top: fade && !animation && !position
      }, "".concat(animation), fade && animation), fade && position && position.split('-')[1], wrapClassName);
      var backdropClasses = classNames('modal-backdrop', fade ? 'fade' : 'show', backdropClassName);
      var contentClasses = classNames('modal-content', contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: 'block'
        },
        id: id,
        tabIndex: tabIndex,
        role: role,
        'aria-hidden': 'true'
      });
      return React.createElement(Fragment, null, backdrop && React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('backdrop', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('backdrop', node);
        },
        onExited: this.handleOnExited
      }, React.createElement("div", {
        className: backdropClasses
      })), React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onMouseDown: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('modal', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('modal', node);
        }
      }, React.createElement("div", _extends({
        "data-test": "modal",
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  fade: true,
  isOpen: false,
  modalTransitionTimeout: 300,
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050
};
Modal.propTypes = {
  animation: propTypes.string,
  backdrop: propTypes.bool,
  backdropClassName: propTypes.string,
  cascading: propTypes.bool,
  centered: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  contentClassName: propTypes.string,
  fade: propTypes.bool,
  frame: propTypes.bool,
  fullHeight: propTypes.bool,
  hiddenModal: propTypes.func,
  hideModal: propTypes.func,
  id: propTypes.string,
  modalClassName: propTypes.string,
  modalStyle: propTypes.string,
  position: propTypes.string,
  role: propTypes.string,
  size: propTypes.string,
  side: propTypes.bool,
  showModal: propTypes.func,
  tabIndex: propTypes.string,
  wrapClassName: propTypes.string
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames('modal-body', className);
  return React.createElement("div", _extends({
    "data-test": "modal-body"
  }, attributes, {
    className: classes
  }), children);
};

ModalBody.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      children = props.children,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      attributes = _objectWithoutProperties(props, ["className", "children", "center", "start", "end", "around", "between"]);

  var classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });
  return React.createElement("div", _extends({
    "data-test": "modal-footer"
  }, attributes, {
    className: classes
  }), children);
};

ModalFooter.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      closeAriaLabel = props.closeAriaLabel,
      titleClass = props.titleClass,
      attributes = _objectWithoutProperties(props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

  var classes = classNames('modal-header', className);
  var titleClasses = classNames('modal-title', titleClass);

  if (toggle) {
    closeButton = React.createElement("button", {
      type: "button",
      onClick: toggle,
      className: "close",
      "aria-label": closeAriaLabel
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, String.fromCharCode(215)));
  }

  return React.createElement("div", _extends({
    "data-test": "modal-header"
  }, attributes, {
    className: classes
  }), React.createElement(Tag, {
    className: titleClasses
  }, children), closeButton);
};

ModalHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  toggle: propTypes.func,
  className: propTypes.string,
  children: propTypes.node,
  closeAriaLabel: propTypes.string
};
ModalHeader.defaultProps = {
  tag: 'h4',
  closeAriaLabel: 'Close'
};

var Nav = function Nav(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      tabs = props.tabs,
      color = props.color,
      classicTabs = props.classicTabs,
      pills = props.pills,
      header = props.header,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

  var classes = classNames('nav', tabs && 'md-tabs', pills && 'md-pills', header && 'nav-pills card-header-pills', color && !tabs && !classicTabs && !pills ? color : false, pills && color ? 'pills-' + color : false, (tabs || classicTabs) && color ? 'tabs-' + color : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "nav"
  }, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.string,
  classicTabs: propTypes.bool,
  pills: propTypes.bool,
  tabs: propTypes.bool,
  header: propTypes.bool
};
Nav.defaultProps = {
  tag: 'ul',
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;

      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });

    _this.state = {
      isCollapsed: false
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          expand = _this$props.expand,
          light = _this$props.light,
          dark = _this$props.dark,
          sticky = _this$props.sticky,
          fixed = _this$props.fixed,
          scrolling = _this$props.scrolling,
          color = _this$props.color,
          className = _this$props.className,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset,
          Tag = _this$props.tag,
          _double = _this$props["double"],
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var classes = classNames("navbar", light ? "navbar-light" : "", dark ? "navbar-dark" : "", sticky ? "sticky-" + sticky : "", fixed ? "fixed-" + fixed : "", getExpandClass(expand), scrolling || scrollingNavbarOffset ? "scrolling-navbar" : "", this.state.isCollapsed ? "top-nav-collapse" : "", color ? transparent ? this.state.isCollapsed ? color : "" : color : "", _double ? "double-nav" : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  light: propTypes.bool,
  dark: propTypes.bool,
  "double": propTypes.bool,
  fixed: propTypes.string,
  sticky: propTypes.string,
  scrolling: propTypes.bool,
  scrollingNavbarOffset: propTypes.number,
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  expand: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  transparent: propTypes.bool
};
Navbar.defaultProps = {
  tag: "nav",
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames("navbar-brand", className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React.createElement(NavLink$1, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: propTypes.string,
  href: propTypes.string
};

var NavbarNav = function NavbarNav(props) {
  var children = props.children,
      className = props.className,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "right", "left", "tag"]);

  var classes = classNames("navbar-nav", right ? "ml-auto" : left ? "mr-auto" : "justify-content-around w-100", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavbarNav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool
};
NavbarNav.defaultProps = {
  tag: "ul"
};

var NavbarToggler = function NavbarToggler(props) {
  var right = props.right,
      left = props.left,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      image = props.image,
      attributes = _objectWithoutProperties(props, ["right", "left", "children", "className", "tag", "image"]);

  var classes = classNames({
    "navbar-toggler-right": right,
    "navbar-toggler-left": left
  }, "navbar-toggler", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children ? children : image ? React.createElement("span", {
    className: "navbar-toggler-icon",
    style: {
      backgroundImage: "url(\"".concat(image, "\")")
    }
  }) : React.createElement("span", {
    className: "navbar-toggler-icon"
  }));
};

NavbarToggler.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool,
  image: propTypes.string
};
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      text = props.text,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "active", "text", "tag"]);

  var classes = classNames("nav-item", active && "active", text && "navbar-text", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  active: propTypes.bool
};
NavItem.defaultProps = {
  tag: "li"
};

var NavLink = function NavLink(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to"]);

  var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
  return React.createElement(NavLink$1, _extends({
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, props.disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

NavLink.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  to: propTypes.string,
  active: propTypes.bool
};
NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false
};

var Notification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      componentState: _this.props.show ? "show" : "hide"
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      setTimeout(function () {
        _this.setState({
          componentState: ""
        }, function () {
          setTimeout(function () {
            _this.setState({
              componentState: "hide"
            });
          }, 150);
        });
      }, time);
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autohide > 0) this.hide(this.props.autohide);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          show = _this$props.show,
          fade = _this$props.fade,
          message = _this$props.message,
          bodyClassName = _this$props.bodyClassName,
          icon = _this$props.icon,
          iconClassName = _this$props.iconClassName,
          title = _this$props.title,
          titleClassName = _this$props.titleClassName,
          text = _this$props.text,
          closeClassName = _this$props.closeClassName,
          attributes = _objectWithoutProperties(_this$props, ["tag", "className", "show", "fade", "message", "bodyClassName", "icon", "iconClassName", "title", "titleClassName", "text", "closeClassName"]);

      var classes = classNames("toast", fade && "fade", this.state.componentState, className);
      var headerClasses = classNames("toast-header", titleClassName);
      var iconClassNames = classNames("mr-2", iconClassName);
      var bodyClasses = classNames("toast-body", bodyClassName);
      var closeClasses = classNames("ml-2", "mb-1", closeClassName);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), React.createElement("div", {
        className: headerClasses
      }, React.createElement(Fa, {
        icon: icon,
        className: iconClassNames,
        size: "lg"
      }), React.createElement("strong", {
        className: "mr-auto"
      }, title), React.createElement("small", null, text), React.createElement(MDBCloseIcon, {
        className: closeClasses,
        onClick: function onClick() {
          return _this2.hide();
        }
      })), React.createElement("div", {
        className: bodyClasses
      }, message));
    }
  }]);

  return Notification;
}(React.Component);

Notification.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  show: propTypes.bool,
  fade: propTypes.bool,
  autohide: propTypes.number,
  iconClassName: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  titleColor: propTypes.string,
  titleClassName: propTypes.string,
  closeClassName: propTypes.string,
  bodyClassName: propTypes.string,
  bodyColor: propTypes.string,
  message: propTypes.string
};
Notification.defaultProps = {
  icon: "square",
  tag: "div",
  closeClassName: "text-dark"
};

var Popper = function Popper(_ref) {
  var children = _ref.children,
      clickable = _ref.clickable,
      domElement = _ref.domElement,
      modifiers = _ref.modifiers,
      id = _ref.id,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange,
      placement = _ref.placement,
      popover = _ref.popover,
      style = _ref.style,
      tag = _ref.tag;

  var _useState = useState(isVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    setVisible(isVisible);
  }, [isVisible]);
  useEffect(function () {
    onChange && onChange(visible);
  }, [onChange, visible]);
  useEffect(function () {
    window.addEventListener('click', handleClick);
    return function () {
      return window.removeEventListener('click', handleClick);
    };
  });

  function handleClick(e) {
    var element = document.elementsFromPoint(e.clientX, e.clientY).find(function (el) {
      return el.dataset.popper === id;
    });
    if (element) return;
    setVisible(false);
  }

  var Wrapper = children[0];
  var Content = children[1];
  var Tag = tag;
  var tooltipClasses = classNames("fade", popover ? "popover bs-popover-".concat(placement, " popover-enter-done") : "tooltip bs-tooltip-".concat(placement), visible ? "show" : "");
  var contentClasses = classNames(!popover && "tooltip-inner");
  return React.createElement(Manager, null, React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return !domElement ? React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      innerRef: ref,
      "data-popper": id
    })) : React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      ref: ref,
      "data-popper": id
    }));
  }), visible && Content.props.children && React.createElement(Tag, {
    style: style
  }, React.createElement(Popper$1, {
    modifiers: modifiers,
    eventsEnabled: true,
    positionFixed: false,
    placement: placement
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style,
        arrowProps = _ref3.arrowProps;
    return React.createElement(Tag, {
      ref: ref,
      style: style,
      "data-placement": placement,
      className: tooltipClasses,
      "data-popper": id
    }, React.createElement(Content.type, _extends({}, Content.props, {
      className: contentClasses
    }), Content.props.children), React.createElement("span", {
      ref: arrowProps.ref,
      style: arrowProps.style,
      "data-placement": placement,
      className: "arrow"
    }));
  })));
};

Popper.propTypes = {
  children: propTypes.node,
  clickable: propTypes.bool,
  domElement: propTypes.bool,
  modifiers: propTypes.object,
  id: propTypes.string,
  isVisible: propTypes.bool,
  placement: propTypes.string,
  popover: propTypes.bool,
  style: propTypes.objectOf(propTypes.string),
  tag: propTypes.string
};
Popper.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: {
    display: 'inline-block'
  },
  tag: 'div'
};

var PopoverBody = function PopoverBody(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-body', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverBody.defaultProps = {
  tag: "div"
};

var PopoverHeader = function PopoverHeader(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-header', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverHeader.defaultProps = {
  className: "",
  tag: "h3"
};

var Progress = function Progress(_ref) {
  var animated = _ref.animated,
      barClassName = _ref.barClassName,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      material = _ref.material,
      max = _ref.max,
      min = _ref.min,
      preloader = _ref.preloader,
      striped = _ref.striped,
      wrapperStyle = _ref.wrapperStyle,
      value = _ref.value,
      attributes = _objectWithoutProperties(_ref, ["animated", "barClassName", "children", "className", "color", "height", "material", "max", "min", "preloader", "striped", "wrapperStyle", "value"]);

  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames('progress', material && 'md-progress', preloader && (color ? color + '-color' : 'primary-color') + '-dark', className);
  var progressBarClasses = classNames(preloader ? 'indeterminate' : 'progress-bar', barClassName ? barClassName : null, animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null);
  var computedHeight = height ? height : children && '1rem';

  var computedWrapperStyle = _objectSpread({}, wrapperStyle, {
    height: computedHeight
  });

  return React.createElement("div", _extends({
    "data-test": "progress"
  }, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React.createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};

Progress.propTypes = {
  animated: propTypes.bool,
  barClassName: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  height: propTypes.string,
  material: propTypes.bool,
  max: propTypes.number,
  min: propTypes.number,
  preloader: propTypes.bool,
  striped: propTypes.bool,
  wrapperStyle: propTypes.object,
  value: propTypes.number
};
Progress.defaultProps = {
  animated: false,
  barClassName: '',
  className: '',
  color: 'indigo',
  height: '',
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};

var Row = function Row(props) {
  var className = props.className,
      Tag = props.tag,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "center", "start", "end", "around", "between", "top", "bottom", "middle"]);

  var classes = classNames("row", end && "justify-content-end", start && "justify-content-start", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({
    "data-test": "row"
  }, attributes, {
    className: classes
  }));
};

Row.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  end: propTypes.bool,
  start: propTypes.bool,
  center: propTypes.bool,
  between: propTypes.bool,
  around: propTypes.bool
};
Row.defaultProps = {
  tag: "div"
};

var propTypes$2 = {
  activeItem: propTypes.any,
  tabId: propTypes.any,
  className: propTypes.string
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent(props) {
    var _this;

    _classCallCheck(this, TabContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabContent).call(this, props));
    _this.state = {
      activeItem: _this.props.activeItem
    };
    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItemId: this.state.activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes$2));
      var classes = classNames("tab-content", className);
      return React.createElement("div", _extends({
        "data-test": "tabContent"
      }, attributes, {
        className: classes
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return prevState.activeItem !== nextProps.activeItem ? {
        activeItem: nextProps.activeItem
      } : null;
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.childContextTypes = {
  activeItemId: propTypes.any
};
TabContent.propTypes = propTypes$2;

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPane).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabId = _this$props.tabId,
          attributes = _objectWithoutProperties(_this$props, ["className", "tabId"]);

      var classes = classNames('tab-pane', {
        active: tabId === this.context.activeItemId
      }, className);
      return React.createElement("div", _extends({
        "data-test": "tab-pane"
      }, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React.Component);

TabPane.contextTypes = {
  activeItemId: propTypes.any
};
TabPane.propTypes = {
  tabId: propTypes.any,
  className: propTypes.string
};

var TableHead = function TableHead(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React.createElement("thead", _extends({
    "data-test": "table-head"
  }, attributes, {
    className: classes
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : ''
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableHead.defaultProps = {
  textWhite: false
};

var TreeviewContext = React.createContext();

var Treeview = function Treeview(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  useEffect(function () {
    if (props.getValue) {
      props.getValue({
        item: active ? active.closest('li') : active,
        value: active ? active.closest('li').childNodes[1].textContent : active
      });
    }
  }, [active, props]);

  var getActive = function getActive(target) {
    setActive(target);
    return target;
  };

  var theme = props.theme,
      children = props.children,
      className = props.className,
      getValue = props.getValue,
      header = props.header,
      listClassName = props.listClassName,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["theme", "children", "className", "getValue", "header", "listClassName", "tag"]);

  var classes = classNames('border', theme ? "treeview-".concat(theme) : 'treeview', className);
  var ulClasses = classNames('list-unstyled', header ? 'pb-2 mb-1' : 'py-2 my-1', theme && "treeview-".concat(theme, "-list"), theme === 'animated' || !theme && 'pl-3', listClassName);
  var head = header && React.createElement(React.Fragment, null, React.createElement("h6", {
    className: "pt-3 pl-3"
  }, header), React.createElement("hr", null));
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), head, React.createElement("ul", {
    className: ulClasses
  }, React.createElement(TreeviewContext.Provider, {
    value: {
      active: active,
      theme: theme,
      getActive: getActive
    }
  }, children)));
};

Treeview.propTypes = {
  className: propTypes.string,
  header: propTypes.string,
  listClassName: propTypes.string,
  tag: propTypes.string,
  theme: propTypes.string,
  getValue: propTypes.func
};
Treeview.defaultProps = {
  tag: 'div',
  theme: '',
  getValue: function getValue() {}
};

var TreeviewItem = function TreeviewItem(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      target = _useState2[0],
      setTarget = _useState2[1];

  var targetRef = useRef(null);

  var className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      opened = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      theme = _useContext.theme,
      active = _useContext.active,
      getActive = _useContext.getActive;

  useEffect(function () {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
      opened && getActive(targetRef.current);
    }
  }, []);

  var handleClick = function handleClick() {
    return target.classList.contains('opened') ? getActive(null) : getActive(target);
  };

  var classes = classNames(disabled && disabledClassName, theme && "treeview-".concat(theme, "-items treeview-").concat(theme, "-element closed mb-1"), active === target && !active.classList.contains('opened') ? 'opened' : '', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: targetRef,
    onMouseDown: !disabled ? handleClick : null,
    style: {
      transform: 'translateY(0.3em)'
    }
  }), React.createElement(Fa, {
    className: "mr-2",
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), React.createElement("span", null, title));
};

TreeviewItem.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  disabledClassName: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  icon: propTypes.string,
  opened: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
TreeviewItem.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};

var TreeviewList = function TreeviewList(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    setOpen(props.opened);
  }, [props.opened]);

  var handleSwitch = function handleSwitch() {
    return setOpen(!opened);
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      _ = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      theme = _useContext.theme;

  var nestedClasses = classNames('nested', opened && 'active');
  var folder = classNames(theme && "closed treeview-".concat(theme, "-element d-block"), !children && 'ml-2', opened && 'opened', disabled && disabledClassName);
  var classes = classNames(theme && "treeview-".concat(theme, "-items px-0"), className);
  var iconClasses = classNames(theme ? 'mx-2' : 'mr-2');
  var child = children && React.createElement("ul", {
    className: nestedClasses,
    style: {
      height: 'calc(100% + 0.6rem)',
      marginLeft: '2px'
    }
  }, children);
  var collapse = theme && React.createElement(Collapse, {
    isOpen: opened
  }, child);
  var iconArrow = theme !== 'colorful' ? 'angle-right' : opened ? 'minus-circle' : 'plus-circle';
  var arrow = children && React.createElement(Fa, {
    icon: iconArrow,
    rotate: theme !== 'colorful' ? opened ? '90 down' : '0' : '',
    className: "rotate"
  });
  var btn = children && React.createElement(Button, {
    flat: true,
    className: "m-0 py-0 px-1 mr-1 z-depth-0",
    onClick: handleSwitch
  }, arrow);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), React.createElement("span", {
    className: folder,
    onClick: !disabled && theme ? handleSwitch : null
  }, theme ? arrow : btn, React.createElement("span", null, React.createElement(Fa, {
    className: iconClasses,
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), title)), collapse || child);
};

TreeviewList.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  disabledClassName: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  icon: propTypes.string,
  opened: propTypes.bool,
  tag: propTypes.string
};
TreeviewList.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};
TreeviewList.contextTypes = {
  theme: propTypes.string
};

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "outsideClickHandler", function (e) {
      _this.suggestionsList && e.target !== _this.suggestionsList && _this.setState({
        choosed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterRepeated", function (data) {
      return data.filter(function (el, index) {
        return data.indexOf(el) === index;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      var value = e.target.value;

      _this.setState({
        value: value,
        choosed: false,
        focusedListItem: 0
      });

      if (value !== '') {
        _this.setSuggestions(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setSuggestions", function (value) {
      var filteredSuggestions = _this.state.suggestions.filter(function (suggest) {
        return suggest.toLowerCase().includes(value.toLowerCase().trim());
      });

      _this.setState({
        filteredSuggestions: filteredSuggestions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      return _this.setState({
        value: '',
        focusedListItem: 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function () {
      var value = _this.state.filteredSuggestions[_this.state.focusedListItem];

      if (value) {
        _this.setState({
          value: value,
          focusedListItem: 0,
          choosed: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$state = _this.state,
          filteredSuggestions = _this$state.filteredSuggestions,
          focusedListItem = _this$state.focusedListItem;

      if (_this.suggestionsList && _this.state.filteredSuggestions) {
        var suggestionsListNodes = _this.suggestionsList.childNodes;
        suggestionsListNodes.length >= 5 && suggestionsListNodes[_this.state.focusedListItem].scrollIntoView({
          block: "center",
          behavior: "smooth"
        });

        if (e.keyCode === 13) {
          _this.handleSelect();

          e.target.blur();
        }

        e.keyCode === 40 && focusedListItem < filteredSuggestions.length - 1 && _this.setState({
          focusedListItem: focusedListItem + 1
        });
        e.keyCode === 38 && focusedListItem > 0 && _this.setState({
          focusedListItem: focusedListItem - 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateFocus", function (index) {
      return _this.setState({
        focusedListItem: index
      });
    });

    _this.state = {
      value: props.value || props.valueDefault,
      suggestions: [],
      choosed: false,
      filteredSuggestions: [],
      focusedListItem: 0
    };
    _this.suggestionsList = null;
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        suggestions: this.filterRepeated(this.props.data)
      });
      window.addEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      prevState.value !== this.state.value && this.props.getValue && this.props.getValue(this.state.value);
      prevProps.value !== this.props.value && this.setState({
        value: this.props.value
      });
      prevProps.data !== this.props.data && this.setState({
        suggestions: this.filterRepeated(this.props.data)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          value = _this$state2.value,
          filteredSuggestions = _this$state2.filteredSuggestions,
          choosed = _this$state2.choosed;
      var _this$props = this.props,
          clear = _this$props.clear,
          clearColor = _this$props.clearColor,
          clearSize = _this$props.clearSize,
          clearClass = _this$props.clearClass,
          disabled = _this$props.disabled,
          id = _this$props.id,
          className = _this$props.className,
          label = _this$props.label,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          size = _this$props.size,
          labelClass = _this$props.labelClass,
          placeholder = _this$props.placeholder,
          valueDefault = _this$props.valueDefault;
      var btnStyles = classNames(clearClass, 'mdb-autocomplete-clear');
      return React.createElement("div", {
        style: {
          position: "relative"
        }
      }, React.createElement(Input, {
        icon: icon,
        iconSize: iconSize,
        iconBrand: iconBrand,
        iconLight: iconLight,
        iconRegular: iconRegular,
        iconClass: iconClass,
        id: id,
        className: className,
        label: label,
        labelClass: labelClass,
        hint: placeholder,
        disabled: disabled,
        value: value,
        valueDefault: valueDefault,
        onChange: this.handleInput,
        onKeyDown: this.keyDownHandler,
        size: size
      }, clear && value && React.createElement("button", {
        onClick: this.handleClear,
        className: btnStyles,
        style: {
          visibility: "visible"
        }
      }, React.createElement("svg", {
        fill: clearColor,
        height: clearSize,
        viewBox: "0 0 24 24",
        width: clearSize,
        xmlns: "https://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      }), React.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      })))), value && !choosed && React.createElement("ul", {
        ref: function ref(list) {
          return _this2.suggestionsList = list;
        },
        className: "mdb-autocomplete-wrap",
        style: {
          marginTop: "-15px"
        },
        onClick: this.handleSelect
      }, filteredSuggestions.map(function (el, index) {
        return React.createElement("li", {
          key: el + index,
          className: "list-item",
          style: {
            background: "".concat(_this2.state.focusedListItem === index ? '#eee' : '#fff')
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.updateFocus(index);
          }
        }, el);
      })));
    }
  }]);

  return Autocomplete;
}(Component);

Autocomplete.propTypes = {
  clear: propTypes.bool,
  clearColor: propTypes.string,
  clearSize: propTypes.string,
  data: propTypes.arrayOf(propTypes.string),
  disabled: propTypes.bool,
  getValue: propTypes.func,
  id: propTypes.string,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  labelClass: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  iconClassName: propTypes.string,
  placeholder: propTypes.string,
  valueDefault: propTypes.string
};
Autocomplete.defaultProps = {
  clear: false,
  clearColor: "#a6a6a6",
  clearSize: "24",
  data: [],
  disabled: false,
  id: "",
  label: "",
  className: "",
  clearClass: "",
  labelClass: "",
  icon: "",
  iconBrand: false,
  iconSize: "",
  iconLight: false,
  iconRegular: false,
  iconClassName: "",
  placeholder: "",
  valueDefault: ""
};

var Avatar = function Avatar(props) {
  var className = props.className,
      Tag = props.tag,
      round = props.round,
      circle = props.circle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "round", "circle"]);

  var classes = classNames("avatar", round && "rounded", circle && "rounded-circle", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Avatar.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  round: propTypes.bool,
  circle: propTypes.bool
};
Avatar.defaultProps = {
  tag: "div",
  round: false,
  circle: false
};

var ButtonFixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          topSection = _this$props.topSection,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "topSection"]);

      var buttonFixedClasses = classNames("fixed-action-btn active");
      var classes = classNames(floating ? "btn-floating" : "btn", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "".concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, block ? "btn-block" : false, "Ripple-parent", className, {
        active: active,
        disabled: this.props.disabled
      });
      return React.createElement("div", _extends({
        className: buttonFixedClasses,
        ref: innerRef,
        style: {
          bottom: "45px",
          right: "24px"
        }
      }, attributes), React.createElement("a", {
        href: this.props.topSection ? this.props.topSection : "#",
        className: classes,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }, icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })), React.createElement("ul", {
        className: "list-unstyled"
      }, this.props.children));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed.defaultProps = {
  color: "default"
};
ButtonFixed.propTypes = {
  active: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  topSection: propTypes.string
};

var ButtonFixed$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.props.onClick && _this.props.onClick();
    });

    _this.state = {
      cursorPos: {},
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    };
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          buttonStyle = _this$props.buttonStyle,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "buttonStyle"]);

      var classes = classNames(size && "btn-".concat(size), "btn-floating", color ? color : false, "Ripple-parent", className);
      return React.createElement("li", null, React.createElement("a", _extends({}, attributes, {
        style: this.props.buttonStyle,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        className: classes
      }), icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed$1.defaultProps = {
  color: "default"
};
ButtonFixed$1.propTypes = {
  active: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.oneOf(['lg', 'sm']),
  children: propTypes.node,
  className: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  buttonStyle: propTypes.object
};

var CardUp = function CardUp(props) {
  var className = props.className,
      Tag = props.tag,
      color = props.color,
      gradient = props.gradient,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "gradient"]);

  var classes = classNames("card-up", color && color + "-color", gradient && gradient + "-gradient", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardUp.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
CardUp.defaultProps = {
  tag: "div"
};

var css$8 = ".chip.chip-md {\n  height: 42px;\n  line-height: 42px;\n  border-radius: 21px;\n}\n.chip.chip-md img {\n  height: 42px;\n  width: 42px;\n}\n.chip.chip-md .close {\n  height: 42px;\n  line-height: 42px;\n  border-radius: 21px;\n}\n.chip.chip-lg {\n  height: 52px;\n  line-height: 52px;\n  border-radius: 26px;\n}\n.chip.chip-lg img {\n  height: 52px;\n  width: 52px;\n}\n.chip.chip-lg .close {\n  height: 52px;\n  line-height: 52px;\n  border-radius: 26px;\n}\n";
styleInject(css$8);

var Chip = function Chip(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    e.stopPropagation();
    e.preventDefault();
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var handleCloseClick = function handleCloseClick(e) {
    if (props.handleClose) {
      props.handleClose(e);
    }
  };

  var className = props.className,
      Tag = props.tag,
      size = props.size,
      bgColor = props.bgColor,
      text = props.text,
      gradient = props.gradient,
      src = props.src,
      alt = props.alt,
      close = props.close,
      waves = props.waves,
      handleClose = props.handleClose,
      attributes = _objectWithoutProperties(props, ["className", "tag", "size", "bgColor", "text", "gradient", "src", "alt", "close", "waves", "handleClose"]);

  var classes = classNames("chip", size && "chip-" + size, bgColor && bgColor, text && text + "-text", gradient && gradient + "-gradient", waves && "Ripple-parent", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), src && React.createElement("img", {
    src: src,
    alt: alt
  }), props.children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }), close && React.createElement(Fa, {
    icon: "times",
    className: "close",
    onClick: handleCloseClick
  }));
};

Chip.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  size: propTypes.string,
  bgColor: propTypes.string,
  text: propTypes.string,
  gradient: propTypes.string,
  src: propTypes.string,
  alt: propTypes.string,
  close: propTypes.bool,
  handleClose: propTypes.func
};
Chip.defaultProps = {
  tag: "div"
};

var ChipsInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChipsInput, _Component);

  function ChipsInput(props) {
    var _this;

    _classCallCheck(this, ChipsInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChipsInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        isTouched: true
      });

      _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        inputValue: e.target.value,
        isReadyToDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function (e) {
      // 1) get the value:
      var newChipString = _this.inputRef.current.value; // 2) upon pressing Enter:

      if (e.which === 13) {
        // 3) if the string is empty or consists only of spaces: return
        if (/^ *$/.test(newChipString)) {
          return;
        } // 3.5) of the string is already in the array, delete input value and return


        if (_this.state.chipsList.includes(newChipString)) {
          _this.setState({
            inputValue: ""
          });

          return;
        } // 4) else: add the input value to the array and reset it on input:


        _this.setState({
          inputValue: "",
          chipsList: [].concat(_toConsumableArray(_this.state.chipsList), [newChipString])
        });
      } // 5) in case the keyboard events caused the input to be empty, prepare to delete chips:


      if (_this.state.inputValue === "") {
        _this.setState({
          isReadyToDelete: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackspace", function (e) {
      // 1) if the input is already empty (is ready to delete chips) and Backspace is pressed:
      if (_this.state.isReadyToDelete && e.which === 8) {
        // 2) grab the array
        var array = _this.state.chipsList; // 3) delete its last element
        // const popTheArray = array.pop();
        // 4) and update the state with the new array.

        _this.setState({
          chipsList: array
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (param) {
      return function (e) {
        // Close functionality:
        // 1) get the chips list from state:
        var currentChipsList = _this.state.chipsList; // 2) check the chip's index in the said array:

        var index = _this.state.chipsList.indexOf(param); // 3) delete the array item using splice:


        currentChipsList.splice(index, 1); // 4) update state with the new chips list.

        _this.setState({
          chipsList: currentChipsList
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function () {
      _this.setState({
        isTouched: false
      });
    });

    _this.state = {
      chipsList: _this.props.chips,
      inputValue: "",
      isTouched: false,
      isReadyToDelete: false
    };
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(ChipsInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          handleClose = _this$props.handleClose,
          placeholder = _this$props.placeholder,
          secondaryPlaceholder = _this$props.secondaryPlaceholder,
          chipSize = _this$props.chipSize,
          chipColor = _this$props.chipColor,
          chipText = _this$props.chipText,
          chipGradient = _this$props.chipGradient,
          chipWaves = _this$props.chipWaves,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "handleClose", "placeholder", "secondaryPlaceholder", "chipSize", "chipColor", "chipText", "chipGradient", "chipWaves"]);

      var renderedChips = this.state.chipsList.map(function (chip) {
        return React.createElement(Chip, {
          close: true,
          handleClose: _this2.handleClose(chip),
          key: chip.toString(),
          size: chipSize,
          bgColor: chipColor,
          text: chipText,
          gradient: chipGradient,
          waves: chipWaves
        }, chip);
      });
      var calculatePlaceholder;

      if (this.state.chipsList.length < 1) {
        calculatePlaceholder = placeholder;
      } else {
        calculatePlaceholder = secondaryPlaceholder;
      }

      var classes = classNames("chips", this.state.isTouched && "focus", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleBackspace
      }), renderedChips, React.createElement("input", {
        className: "input",
        type: "text",
        placeholder: calculatePlaceholder,
        ref: this.inputRef,
        onKeyUp: this.handleEnter,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: this.handleOutsideClick
      }));
    }
  }]);

  return ChipsInput;
}(Component);

ChipsInput.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  placeholder: propTypes.string,
  secondaryPlaceholder: propTypes.string,
  chipSize: propTypes.string,
  chipColor: propTypes.string,
  chipText: propTypes.string,
  chipGradient: propTypes.string
};
ChipsInput.defaultProps = {
  tag: "div",
  chips: []
};

var CollapseHeader = function CollapseHeader(props) {
  var className = props.className,
      tagClassName = props.tagClassName,
      children = props.children,
      Tag = props.tag,
      triggerOnClick = props.triggerOnClick,
      attributes = _objectWithoutProperties(props, ["className", "tagClassName", "children", "tag", "triggerOnClick"]);

  var classes = classNames("card-header", className);
  var tagClasses = classNames("mb-0", tagClassName);
  return React.createElement("div", _extends({}, attributes, {
    className: classes,
    style: {
      cursor: "pointer"
    }
  }), React.createElement(Tag, {
    className: tagClasses
  }, children));
};

CollapseHeader.defaultProps = {
  tag: "h5"
};
CollapseHeader.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tagClassName: propTypes.string,
  tag: propTypes.string,
  triggerOnClick: propTypes.func
};

var css$9 = "/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n";
styleInject(css$9);

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleDateChange", function (date) {
      _this.setState({
        selectedDate: date ? date._d : _this.props.value
      });
    });

    _this.state = {
      selectedDate: props.value || props.valueDefault,
      muiTheme: createMuiTheme(_objectSpread({}, props.theme, {
        typography: {
          useNextVariants: true
        }
      }))
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.getValue && prevState.selectedDate !== this.state.selectedDate) {
        this.props.getValue(this.state.selectedDate);
      }

      if (this.props.value !== prevProps.value) {
        this.setState({
          selectedDate: this.props.value
        });
      }

      if (prevProps.theme !== this.props.theme) {
        this.setState({
          muiTheme: createMuiTheme(this.props.theme)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          adornmentPosition = _this$props.adornmentPosition,
          allowKeyboardControl = _this$props.allowKeyboardControl,
          animateYearScrolling = _this$props.animateYearScrolling,
          autoOk = _this$props.autoOk,
          cancelLabel = _this$props.cancelLabel,
          clearable = _this$props.clearable,
          clearLabel = _this$props.clearLabel,
          disableFuture = _this$props.disableFuture,
          disableOpenOnEnter = _this$props.disableOpenOnEnter,
          disablePast = _this$props.disablePast,
          emptyLabel = _this$props.emptyLabel,
          initialFocusedDate = _this$props.initialFocusedDate,
          InputAdornmentProps = _this$props.InputAdornmentProps,
          invalidDateMessage = _this$props.invalidDateMessage,
          invalidLabel = _this$props.invalidLabel,
          keyboard = _this$props.keyboard,
          keyboardIcon = _this$props.keyboardIcon,
          leftArrowIcon = _this$props.leftArrowIcon,
          mask = _this$props.mask,
          maxDate = _this$props.maxDate,
          maxDateMessage = _this$props.maxDateMessage,
          minDate = _this$props.minDate,
          minDateMessage = _this$props.minDateMessage,
          okLabel = _this$props.okLabel,
          onInputChange = _this$props.onInputChange,
          openToYearSelection = _this$props.openToYearSelection,
          rightArrowIcon = _this$props.rightArrowIcon,
          showTodayButton = _this$props.showTodayButton,
          TextFieldComponent = _this$props.TextFieldComponent,
          todayLabel = _this$props.todayLabel,
          locale = _this$props.locale,
          format = _this$props.format,
          className = _this$props.className,
          getValue = _this$props.getValue,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["theme", "adornmentPosition", "allowKeyboardControl", "animateYearScrolling", "autoOk", "cancelLabel", "clearable", "clearLabel", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "initialFocusedDate", "InputAdornmentProps", "invalidDateMessage", "invalidLabel", "keyboard", "keyboardIcon", "leftArrowIcon", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "okLabel", "onInputChange", "openToYearSelection", "rightArrowIcon", "showTodayButton", "TextFieldComponent", "todayLabel", "locale", "format", "className", "getValue", "value", "valueDefault", "tag"]);

      var classes = classNames('md-form', className);
      return React.createElement(Tag, {
        className: classes
      }, React.createElement(MuiThemeProvider, {
        theme: this.state.muiTheme
      }, React.createElement(MuiPickersUtilsProvider, {
        locale: locale,
        moment: moment,
        utils: MomentUtils
      }, React.createElement(DatePicker$1, _extends({}, attributes, {
        adornmentPosition: adornmentPosition,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        autoOk: autoOk,
        cancelLabel: cancelLabel,
        clearable: clearable,
        clearLabel: clearLabel,
        disableFuture: disableFuture,
        disableOpenOnEnter: disableOpenOnEnter,
        disablePast: disablePast,
        emptyLabel: emptyLabel,
        initialFocusedDate: initialFocusedDate,
        InputAdornmentProps: InputAdornmentProps,
        invalidDateMessage: invalidDateMessage,
        invalidLabel: invalidLabel,
        keyboard: keyboard,
        keyboardIcon: keyboardIcon,
        leftArrowIcon: leftArrowIcon,
        mask: mask,
        maxDate: maxDate,
        maxDateMessage: maxDateMessage,
        minDate: minDate,
        minDateMessage: minDateMessage,
        okLabel: okLabel,
        onInputChange: onInputChange,
        openToYearSelection: openToYearSelection,
        rightArrowIcon: rightArrowIcon,
        showTodayButton: showTodayButton,
        TextFieldComponent: TextFieldComponent,
        todayLabel: todayLabel,
        format: format || "DD MMMM, YYYY",
        value: this.state.selectedDate,
        onChange: this.handleDateChange
      })))));
    }
  }]);

  return DatePicker;
}(Component);

DatePicker.propTypes = {
  theme: propTypes.object,
  adornmentPosition: propTypes.string,
  allowKeyboardControl: propTypes.bool,
  animateYearScrolling: propTypes.bool,
  autoOk: propTypes.bool,
  cancelLabel: propTypes.node,
  clearable: propTypes.bool,
  clearLabel: propTypes.node,
  disableFuture: propTypes.object,
  disableOpenOnEnter: propTypes.bool,
  disablePast: propTypes.bool,
  emptyLabel: propTypes.string,
  initialFocusedDate: propTypes.string,
  InputAdornmentProps: propTypes.object,
  invalidDateMessage: propTypes.node,
  invalidLabel: propTypes.string,
  keyboard: propTypes.bool,
  keyboardIcon: propTypes.node,
  leftArrowIcon: propTypes.node,
  mask: propTypes.any,
  maxDate: propTypes.string,
  maxDateMessage: propTypes.node,
  minDate: propTypes.string,
  minDateMessage: propTypes.node,
  okLabel: propTypes.node,
  onInputChange: propTypes.func,
  openToYearSelection: propTypes.bool,
  rightArrowIcon: propTypes.node,
  showTodayButton: propTypes.bool,
  TextFieldComponent: propTypes.string,
  todayLabel: propTypes.string,
  locale: propTypes.string,
  format: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  getValue: propTypes.func,
  value: propTypes.instanceOf(Date),
  valueDefault: propTypes.instanceOf(Date)
};
DatePicker.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: function getValue() {}
};

function RotatingCard(props) {
  var className = props.className,
      Tag = props.tag,
      InnerTag = props.innerTag,
      flipped = props.flipped,
      attributes = _objectWithoutProperties(props, ["className", "tag", "innerTag", "flipped"]);

  var classes = classNames("card-rotating effect__click", props.flipped && "flipped", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: "card-wrapper"
  }), React.createElement(InnerTag, {
    className: classes
  }, props.children));
}

RotatingCard.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  innerTag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  flipped: propTypes.bool
};
RotatingCard.defaultProps = {
  tag: "div",
  innerTag: "div",
  flipped: false
};

var css$a = ".file-field .file-field-right .file-path-wrapper {\n  padding-left: 0;\n  padding-right: 10px;\n}\n";
styleInject(css$a);

var InputFile = function InputFile(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var fileChange = function fileChange(files) {
    if (files.length > 0) {
      if (files.length > 1) {
        var filesNames = [];

        for (var i = 0; i < files.length; i++) {
          filesNames.push(files[i].name);
        }

        setFiles(filesNames);
      } else {
        setFiles(files[0].name);
      }
    } else {
      setFiles(false);
    }
  };

  var onChangeHandler = function onChangeHandler(e) {
    fileChange(e.target.files);
    props.getValue && props.getValue(e.target.files);
  };

  var resetFiles = function resetFiles() {
    files && setFiles(false);
  };

  var className = props.className,
      btnTitle = props.btnTitle,
      btnColor = props.btnColor,
      textFieldTitle = props.textFieldTitle,
      multiple = props.multiple,
      reset = props.reset,
      resetClassName = props.resetClassName,
      resetAriaLabel = props.resetAriaLabel,
      reverse = props.reverse;
  var btnClass = classNames("btn", "btn-" + btnColor, "btn-sm", reverse ? "float-right" : "float-left");
  var inputFieldClass = classNames("file-path", "validate", files ? "valid" : false, className);
  var wrapperClass = classNames("file-field", "md-form", reverse && "file-field-right");
  return React.createElement("div", {
    className: wrapperClass
  }, React.createElement("div", {
    className: btnClass
  }, React.createElement("span", null, btnTitle), React.createElement("input", {
    multiple: multiple,
    onChange: onChangeHandler,
    type: "file"
  })), React.createElement("div", {
    className: "file-path-wrapper"
  }, React.createElement("input", {
    className: inputFieldClass,
    type: "text",
    placeholder: files ? files : textFieldTitle,
    style: {
      position: reset ? "relative" : null
    }
  })), reset && React.createElement(MDBCloseIcon, {
    onClick: resetFiles,
    className: resetClassName,
    ariaLabel: resetAriaLabel ? resetAriaLabel : null,
    style: {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translateY(-50%)"
    }
  }));
};

InputFile.propTypes = {
  className: propTypes.string,
  btnTitle: propTypes.string,
  btnColor: propTypes.string,
  textFieldTitle: propTypes.string,
  multiple: propTypes.bool,
  reset: propTypes.bool,
  resetClassName: propTypes.string,
  resetAriaLabel: propTypes.string,
  reverse: propTypes.bool
};
InputFile.defaultProps = {
  btnTitle: "Choose file",
  textFieldTitle: "Upload your file",
  btnColor: "primary",
  reset: false,
  reverse: false
};

var css$b = ".thumb {\n  transition: top .2s, height .2s, width .2s, margin-left .2s;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none;\n}\n\n/* thumb */\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #4285f4;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: 0.3s; }\n  input[type=range]:focus::-webkit-slider-runnable-track {\n    background: #ccc; }\n  input[type=range]::-moz-range-track {\n    /*required for proper track sizing in FF*/\n    height: 3px;\n    background: #c2c0c2;\n    border: none; }\n  input[type=range]::-moz-range-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: #4285f4;\n    margin-top: -5px; }\n  input[type=range]:-moz-focusring {\n    /*hide the outline behind the border*/\n    outline: 1px solid #ffffff;\n    outline-offset: -1px; }\n  input[type=range]:focus::-moz-range-track {\n    background: #c2c0c2; }\n  input[type=range]::-ms-track {\n    height: 3px;\n    background: transparent;\n    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n    border-color: transparent;\n    /*leave room for the larger thumb to overflow with a transparent border */\n    border-width: 6px 0;\n    color: transparent;\n    /*remove default tick marks*/ }\n  input[type=range]::-ms-fill-lower {\n    background: #c2c0c2; }\n  input[type=range]::-ms-fill-upper {\n    background: #c2c0c2; }\n  input[type=range]::-ms-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: #4285f4; }\n  input[type=range]:focus::-ms-fill-lower {\n    background: #c2c0c2; }\n  input[type=range]:focus::-ms-fill-upper {\n    background: #c2c0c2; }";
styleInject(css$b);

var InputRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputRange, _React$Component);

  function InputRange(props) {
    var _this;

    _classCallCheck(this, InputRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRange).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var input = _this.inputRef.current;
      var inputWidth = input.offsetWidth;
      var oneStep = inputWidth / (_this.props.max - _this.props.min);

      _this.setState({
        value: _this.props.value,
        leftPosition: oneStep * _this.props.value - oneStep * _this.props.min,
        oneStep: oneStep
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rangeChange", function (e) {
      var newValue = e.target.value;

      _this.setState({
        value: newValue,
        leftPosition: _this.state.oneStep * newValue - _this.state.oneStep * _this.props.min
      });

      _this.props.getValue && _this.props.getValue(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "rangeFocus", function () {
      _this.setState({
        thumbActive: true,
        thumbHeight: "30px",
        thumbWidth: "30px",
        thumbTop: "-20px",
        thumbMarginLeft: "-15px"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rangeMouseLeave", function () {
      var input = _this.inputRef.current;
      input.blur();

      _this.setState({
        thumbActive: false,
        thumbHeight: 0,
        thumbWidth: 0,
        thumbTop: "10px",
        thumbMarginLeft: "-6px"
      });
    });

    _this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: "10px",
      thumbMarginLeft: "-6px",
      input: "input",
      oneStep: ""
    };
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(InputRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          formClassName = _this$props.formClassName,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          Tag = _this$props.tag;
      var inputClass = classNames(className);
      var formClass = classNames("range-field", formClassName);
      var thumbClass = classNames("thumb", this.state.thumbActive ? "active" : false);
      return React.createElement(Tag, {
        className: formClass
      }, React.createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        step: step,
        value: this.state.value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseLeave: this.rangeMouseLeave
      }), React.createElement("span", {
        className: thumbClass,
        style: {
          left: this.state.leftPosition,
          height: this.state.thumbHeight,
          width: this.state.thumbWidth,
          top: this.state.thumbTop,
          marginLeft: this.state.thumbMarginLeft
        }
      }, React.createElement("span", {
        className: "value"
      }, this.state.value)));
    }
  }]);

  return InputRange;
}(React.Component);

InputRange.propTypes = {
  className: propTypes.string,
  min: propTypes.number,
  max: propTypes.number,
  value: propTypes.number,
  getValue: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  step: propTypes.number,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false,
  tag: "div"
};

var InputSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputSwitch, _React$Component);

  function InputSwitch(props) {
    var _this;

    _classCallCheck(this, InputSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSwitch).call(this, props));
    _this.state = {
      value: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.checked
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.checked !== this.state.value) {
        this.setState({
          value: this.props.checked
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: !this.state.value
      });
      this.props.getValue && this.props.getValue(event.target.checked);
      this.props.onChange && this.props.onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          getValue = _this$props.getValue,
          labelLeft = _this$props.labelLeft,
          labelRight = _this$props.labelRight,
          onChange = _this$props.onChange,
          attributes = _objectWithoutProperties(_this$props, ["className", "checked", "disabled", "getValue", "labelLeft", "labelRight", "onChange"]);

      var classes = classNames("switch", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), React.createElement("label", null, labelLeft, React.createElement("input", {
        disabled: this.props.disabled,
        value: this.state.value,
        checked: this.state.value,
        onChange: this.handleChange,
        type: "checkbox"
      }), React.createElement("span", {
        className: "lever"
      }), labelRight));
    }
  }]);

  return InputSwitch;
}(React.Component);

InputSwitch.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  checked: propTypes.bool,
  getValue: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  labelLeft: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  labelRight: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  onChange: propTypes.func
};
InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: "Off",
  labelRight: "On"
};

var css$c = ".ReactModal__Overlay {\n    z-index: 2000 !important;\n}";
styleInject(css$c);

var css$d = "\n/*\n * Container style\n */\n .ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n.scrollbar-container {\n  position: relative;\n  height: 100%;\n}\n";
styleInject(css$d);

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this._container = ref;

      _this.props.containerRef(ref);
    });

    _this._handlerByEvent = new Map();
    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._ps = new PerfectScrollbar(this._container, this.props.option); // hook up events

      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this2.props[handlerNameByEvent[key]];

        if (callback) {
          var handler = function handler() {
            return callback(_this2._container);
          };

          _this2._handlerByEvent.set(key, handler);

          _this2._container.addEventListener(key, handler, false);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._ps.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (value, key) {
        _this3._container.removeEventListener(key, value, false);
      });

      this._handlerByEvent.clear();

      this._ps.destroy();

      this._ps = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement("div", {
        className: "scrollbar-container ".concat(className),
        ref: this.handleRef
      }, children);
    }
  }]);

  return ScrollBar;
}(Component);

ScrollBar.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined
};
ScrollBar.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  option: propTypes.object,
  containerRef: propTypes.func,
  onScrollY: propTypes.func,
  onScrollX: propTypes.func,
  onScrollUp: propTypes.func,
  onScrollDown: propTypes.func,
  onScrollLeft: propTypes.func,
  onScrollRight: propTypes.func,
  onYReachStart: propTypes.func,
  onYReachEnd: propTypes.func,
  onXReachStart: propTypes.func,
  onXReachEnd: propTypes.func
};

var ScrollBox = function ScrollBox(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames("scroll-box", className);
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

ScrollBox.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ScrollSpyList = function ScrollSpyList(props) {
  var className = props.className,
      children = props.children,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["className", "children", "color"]);

  var classes = classNames("nav md-tabs horizontal-spy", color ? color : false, className);
  return React.createElement("ul", _extends({}, attributes, {
    role: "navigation",
    className: classes
  }), children);
};

ScrollSpyList.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.string
};

var ScrollSpyListItem = function ScrollSpyListItem(props) {
  var className = props.className,
      children = props.children,
      active = props.active,
      attributes = _objectWithoutProperties(props, ["className", "children", "active"]);

  var classes = classNames("nav-link ", active ? "active" : false, className);
  return React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", _extends({}, attributes, {
    className: classes,
    role: "tab"
  }), children));
};

ScrollSpyListItem.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  active: propTypes.bool
};

var ScrollSpyText = function ScrollSpyText(props) {
  var className = props.className,
      children = props.children,
      scrollSpyRef = props.scrollSpyRef,
      attributes = _objectWithoutProperties(props, ["className", "children", "scrollSpyRef"]);

  var classes = classNames("scrollspy-example z-depth-1", className);
  return React.createElement("div", _extends({}, attributes, {
    ref: props.scrollSpyRef,
    className: classes
  }), children);
};

ScrollSpyText.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  scrollSpyRef: propTypes.oneOfType([propTypes.func, propTypes.object])
};

var css$e = ".popover-enter {\n  opacity: 0.01;\n  transform: scale(0.9) translateY(50%);\n}\n\n.popover-enter-active {\n  opacity: 1;\n  transform: scale(1);\n  transition: scale 300ms ease-out, opacity 300ms ease;\n}\n\n.popover-enter-done {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.popover-exit {\n  opacity: 1;\n  transform: scale(0.8);\n  transition: all 300ms ease-out;\n}\n\n.popover-exit-active {\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 300ms ease-out;\n}\n\n/* slide from side */\n\n.side-slide-enter, .side-slide-appear {\n  opacity: 0.2;\n  transform: translateX(-100%);\n}\n\n.side-slide-enter-active, .side-slide-appear-active {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: transform 300ms ease-out, opacity 300ms ease;\n}\n\n.side-slide-enter-done {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.side-slide-exit {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 300ms ease-out;\n}\n\n.side-slide-exit-active {\n  opacity: 0.2;\n  transform: translateX(-100%);\n  transition: all 300ms ease-out;\n}\n\n.right-side-slide-enter, .right-side-slide-appear {\n  opacity: 0.2;\n  transform: translateX(100%);\n}\n\n.right-side-slide-enter-active, .right-side-slide-appear-active {\n  opacity: 1;\n  transform: translateX(0%) !important;\n  transition: transform 300ms ease-out, opacity 300ms ease;\n}\n\n.right-side-slide-enter-done {\n  opacity: 1;\n  transform: translateX(0%) !important;\n}\n\n.right-side-slide-exit {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 300ms ease-out;\n}\n\n.right-side-slide-exit-active {\n  opacity: 0.2;\n  transform: translateX(100%);\n  transition: all 300ms ease-out;\n}\n\n.side-nav[data-animate=\"false\"]{\n  transform: translateX(0%);\n}\n\n\n.side-nav.wide {\n    transition-property: all;\n    transition-duration: 300ms;\n    transition-timing-function: ease-out;\n}\n\n\n.side-nav.wide.slim {\n    width: 3.75rem;\n    transition-property: all;\n    transition-duration: 300ms;\n    transition-timing-function: ease-out;\n    right: 3.75rem;\n}\n\n.right-aligned.side-nav.wide.slim {\n    right: 0;\n}\n\n\n";
styleInject(css$e);

var defaultValue = {
  slim: false
};
var SideNavContext = React.createContext(defaultValue);

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      _this.initialX = e.touches[0].clientX;
      _this.initialY = e.touches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      if (_this.initialX === null) {
        return;
      }

      if (_this.initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = _this.initialX - currentX;
      var diffY = _this.initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          !_this.props.right && _this.handleOverlayClick();
        } else {
          _this.props.right && _this.handleOverlayClick();
        }
      }

      _this.initialX = null;
      _this.initialY = null;
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      if (!_this.props.hidden && _this.props.responsive) {
        _this.setState({
          isOpen: window.innerWidth > _this.props.breakWidth
        });

        if (window.innerWidth > _this.props.breakWidth) {
          _this.setState({
            isOpen: true,
            isFixed: _this.state.initiallyFixed
          });
        } else {
          _this.setState({
            isOpen: false,
            isFixed: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSlim", function (e) {
      return function () {
        _this.setState({
          slim: !_this.state.slim
        });

        var sidenav = ReactDOM.findDOMNode(_this.sideNavRef.current);
        sidenav.classList.toggle("slim");
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClick", function () {
      if (_this.state.isFixed) return;

      _this.setState({
        isOpen: false
      });

      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (!_this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      }

      e.stopPropagation();
    });

    function isOpen() {
      if (props.fixed) {
        if (window.innerWidth <= props.breakWidth) {
          return props.responsive ? false : true;
        }

        return true;
      } else {
        if (props.triggerOpening) {
          if (window.innerWidth > props.breakWidth) {
            return true;
          }

          return false;
        }

        return false;
      }
    }

    _this.sideNavRef = React.createRef();
    _this.initialX = null;
    _this.initialY = null;
    _this.state = {
      initiallyFixed: props.fixed,
      isFixed: !isOpen() ? false : props.fixed,
      isOpen: isOpen(),
      cursorPos: {},
      slim: _this.props.slim,
      slimInitial: _this.props.slim
    };
    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.triggerOpening && !this.props.responsive) {
        throw new Error('Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true');
      }

      this.sideNavRef.current.addEventListener("touchstart", this.startTouch);
      this.sideNavRef.current.addEventListener("touchmove", this.moveTouch);
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.triggerOpening !== this.props.triggerOpening) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
      this.sideNavRef.current.removeEventListener("touchstart", this.startTouch);
      this.sideNavRef.current.removeEventListener("touchmove", this.moveTouch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bg = _this$props.bg,
          breakWidth = _this$props.breakWidth,
          children = _this$props.children,
          className = _this$props.className,
          hidden = _this$props.hidden,
          href = _this$props.href,
          logo = _this$props.logo,
          mask = _this$props.mask,
          onOverlayClick = _this$props.onOverlayClick,
          right = _this$props.right,
          triggerOpening = _this$props.triggerOpening,
          showOverlay = _this$props.showOverlay,
          fixed = _this$props.fixed,
          responsive = _this$props.responsive,
          slim = _this$props.slim,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["bg", "breakWidth", "children", "className", "hidden", "href", "logo", "mask", "onOverlayClick", "right", "triggerOpening", "showOverlay", "fixed", "responsive", "slim", "tag"]);

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isFixed = _this$state.isFixed;
      var classes = classNames("side-nav", "wide", right && "right-aligned", this.state.slimInitial && "slim", className);
      var overlay = React.createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = React.createElement(Tag, _extends({}, attributes, {
        ref: this.sideNavRef,
        className: classes,
        "data-animate": isFixed ? false : undefined,
        style: bg ? {
          backgroundImage: "url(".concat(bg)
        } : undefined
      }), React.createElement(ScrollBar, {
        option: {
          suppressScrollX: true
        }
      }, React.createElement("ul", {
        className: "list-unstyled"
      }, logo && React.createElement("li", null, React.createElement("div", {
        className: "logo-wrapper"
      }, React.createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, React.createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })))), children)), mask && React.createElement("div", {
        className: "sidenav-bg ".concat(mask)
      }));
      return React.createElement(SideNavContext.Provider, {
        value: {
          slimInitial: this.state.slimInitial,
          slim: this.state.slim,
          toggleSlim: this.toggleSlim,
          right: this.props.right
        }
      }, isFixed ? sidenav : React.createElement(CSSTransition, {
        appear: !this.state.isFixed,
        timeout: {
          enter: 300,
          exit: 300
        },
        classNames: right ? "right-side-slide" : "side-slide",
        "in": isOpen
      }, sidenav), isFixed ? false : showOverlay && isOpen && overlay);
    }
  }]);

  return SideNav;
}(React.Component);

SideNav.propTypes = {
  bg: propTypes.string,
  breakWidth: propTypes.number,
  children: propTypes.node,
  className: propTypes.string,
  hidden: propTypes.bool,
  href: propTypes.string,
  logo: propTypes.string,
  mask: propTypes.string,
  onOverlayClick: propTypes.func,
  right: propTypes.bool,
  triggerOpening: propTypes.bool,
  tag: propTypes.string,
  fixed: propTypes.bool,
  showOverlay: propTypes.bool,
  responsive: propTypes.bool,
  slim: propTypes.bool
};
SideNav.defaultProps = {
  bg: "",
  breakWidth: 1400,
  className: "",
  hidden: false,
  href: "#",
  logo: "",
  mask: "",
  onOverlayClick: function onOverlayClick() {},
  right: false,
  triggerOpening: false,
  tag: "div",
  fixed: false,
  responsive: true,
  showOverlay: true,
  slim: false
};

var SideNavCat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavCat, _React$Component);

  function SideNavCat(props) {
    var _this;

    _classCallCheck(this, SideNavCat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavCat).call(this, props));
    _this.state = {
      cursorPos: {},
      isOpenID: ""
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNavCat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpenID: this.props.isOpen ? this.props.id : ""
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, id) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(id);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          className = _this$props.className,
          name = _this$props.name,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          isOpen = _this$props.isOpen,
          isOpenID = _this$props.isOpenID,
          id = _this$props.id,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "className", "name", "icon", "iconBrand", "iconLight", "iconRegular", "iconSize", "onClick", "disabled", "isOpen", "isOpenID", "id"]);

      var classes = classNames("collapsible-header", "Ripple-parent", "arrow-r", isOpen && "active", disabled && "disabled", className);
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var iconClass = ['mr-2'];
        slim && iconClass.push('v-slim-icon');
        return React.createElement(Tag, null, React.createElement("a", _extends({
          className: classes,
          onClick: function onClick(e) {
            return _this2.handleClick(e, id);
          }
        }, attributes), icon && React.createElement(Fa, {
          icon: icon,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          size: iconSize,
          className: iconClass.join(" ")
        }), name, React.createElement(Fa, {
          icon: "angle-down",
          className: "rotate-icon"
        }), React.createElement(Waves, {
          cursorPos: _this2.state.cursorPos
        })), React.createElement(Collapse, {
          id: id,
          isOpen: _this2.state.isOpenID
        }, React.createElement("div", {
          className: "collapsible-body",
          style: {
            display: "block"
          }
        }, React.createElement("ul", null, children))));
      });
    }
  }]);

  return SideNavCat;
}(React.Component);

_defineProperty(SideNavCat, "displayName", "SideNavCat");

SideNavCat.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  id: propTypes.string,
  isOpen: propTypes.bool,
  isOpenID: propTypes.string,
  name: propTypes.string,
  onClick: propTypes.func,
  tag: propTypes.string
};
SideNavCat.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  iconBrand: false,
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  id: "",
  isOpen: false,
  isOpenID: "",
  name: "",
  onClick: function onClick() {},
  tag: "li"
};

var SideNavItem = function SideNavItem(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      // Waves - Get Cursor Position
      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos); // do the passed in callback:

      if (props.onClick) {
        props.onClick(e);
      }

      e.stopPropagation();
    }
  };

  var Tag = props.tag,
      children = props.children,
      href = props.href,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "children", "href", "className", "innerRef"]);

  var classes = classNames("Ripple-parent", className);
  return React.createElement(Tag, _extends({
    className: classes,
    ref: innerRef,
    onClick: handleClick
  }, attributes), React.createElement("a", {
    className: classes,
    href: href
  }, children, React.createElement(Waves, {
    cursorPos: cursorPos
  })));
};

SideNavItem.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  tag: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
SideNavItem.defaultProps = {
  tag: "li"
};

var SideNavLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavLink, _React$Component);

  function SideNavLink(props) {
    var _this;

    _classCallCheck(this, SideNavLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavLink).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideNavLink, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          to = _this$props.to,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          topLevel = _this$props.topLevel,
          shortcut = _this$props.shortcut,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "to", "className", "innerRef", "topLevel", "shortcut"]);

      var classes = classNames('Ripple-parent', topLevel && 'collapsible-header', className);
      var sideNavLink = React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var shortcut;

        function calculateShortcut() {
          if (typeof children === 'string') {
            var wordsArray = children.toString().split(' ');

            if (wordsArray.length === 1) {
              return wordsArray[0].substr(0, 2).toUpperCase();
            }

            if (wordsArray.length >= 2) {
              var firstLetter = wordsArray[0].substr(0, 1);
              var secondLetter = wordsArray[1].substr(0, 1);
              return firstLetter.concat(secondLetter).toUpperCase();
            }
          }

          return children;
        }

        if (slim) {
          shortcut = _this2.props.shortcut || calculateShortcut();
        }

        return React.createElement(NavLink$1, _extends({
          className: classes,
          ref: innerRef,
          onClick: _this2.handleClick,
          to: to
        }, attributes), slim ? React.createElement(React.Fragment, null, React.createElement("span", {
          className: "sv-slim"
        }, shortcut), React.createElement("span", {
          className: "sv-normal"
        }, children)) : React.createElement("span", {
          className: "sv-normal"
        }, children), React.createElement(Waves, {
          cursorPos: _this2.state.cursorPos
        }));
      });
      return topLevel ? React.createElement("li", null, " ", sideNavLink) : sideNavLink;
    }
  }]);

  return SideNavLink;
}(React.Component);

SideNavLink.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  tag: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  topLevel: propTypes.bool,
  shortcut: propTypes.string
};
SideNavLink.defaultProps = {
  to: '#',
  topLevel: false
};

var SideNavNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavNav, _React$Component);

  function SideNavNav(props) {
    var _this;

    _classCallCheck(this, SideNavNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (number) {
      return function () {
        var state = "";

        if (_this.state.accordion !== number) {
          state = number;
        } else {
          state = null;
        }

        _this.setState({
          accordion: state
        });
      };
    });

    _this.state = {
      accordion: null
    };
    return _this;
  }

  _createClass(SideNavNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "className"]);

      var accordion = this.state.accordion;
      var classes = classNames("collapsible", "collapsible-accordion", className);
      var modified = React.Children.map(this.props.children, function (child, i) {
        if (child.type.displayName === "SideNavCat") {
          return React.cloneElement(child, {
            onClick: _this2.onClick(i),
            isOpen: accordion === i
          });
        } else {
          return child;
        }
      });
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim,
            slimInitial = _ref.slimInitial,
            toggleSlim = _ref.toggleSlim,
            right = _ref.right;
        var iconClass = ['mr-2', "sv-slim-icon", "fas", "icon-rotate"];
        right & slim && iconClass.push('fa-angle-double-left');
        right & !slim && iconClass.push('fa-angle-double-right');
        !right & !slim && iconClass.push('fa-angle-double-left');
        !right & slim && iconClass.push('fa-angle-double-right');
        return React.createElement(React.Fragment, null, React.createElement("li", null, React.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), modified, slimInitial && React.createElement("li", {
          onClick: toggleSlim()
        }, React.createElement("a", {
          href: "#!",
          className: "waves-effect"
        }, React.createElement("i", {
          className: iconClass.join(" ")
        }), "Minimize menu")))));
      });
    }
  }]);

  return SideNavNav;
}(React.Component);

SideNavNav.propTypes = {
  children: propTypes.node,
  tag: propTypes.string,
  className: propTypes.string
};
SideNavNav.defaultProps = {
  tag: "ul"
};

var SimpleChart = function SimpleChart(props) {
  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {
    if (!x || !y) console.error('x or y missing to describeArc');
    var start = polarToCartesian(x, y, radius, endAngle),
        end = polarToCartesian(x, y, radius, startAngle),
        arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
  };

  var percent = Math.min(props.percent || 0, 100),
      radius = props.width / 2 - props.strokeWidth / 2 - props.padding,
      center = radius + props.strokeWidth / 2 + props.padding,
      startAngle = 0,
      endAngle = 3.6 * percent,
      label = "".concat(percent, "%"),
      labelLeftOffset = label.length === 3 || label.length === 4 ? -0.95 : -0.6,
      arc = describeArc(center, center, radius, startAngle, endAngle - .001);
  return React.createElement("svg", {
    className: "react-chart ".concat(props.type),
    width: props.width,
    style: _objectSpread({
      overflow: 'visible',
      border: props.border
    }, props.style),
    height: props.height
  }, React.createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    fill: props.fillColor,
    stroke: props.railColor,
    strokeWidth: props.strokeWidth
  }), React.createElement("path", {
    fill: props.fillColor,
    stroke: props.strokeColor,
    strokeWidth: props.strokeWidth,
    d: arc
  }), React.createElement("text", {
    x: center,
    y: center,
    dx: "".concat(labelLeftOffset, "em"),
    dy: ".35em",
    fill: props.labelColor,
    fontWeight: props.labelFontWeight,
    fontSize: props.labelFontSize
  }, label));
};

SimpleChart.defaultProps = {
  width: 150,
  height: 150,
  border: 'none',
  strokeWidth: 10,
  style: {},
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  strokeColor: '#408AE5',
  railColor: '#f5f5f5',
  fillColor: 'none',
  percent: 70,
  padding: 0
};
SimpleChart.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  strokeWidth: propTypes.number,
  strokeColor: propTypes.string,
  labelFontWeight: propTypes.string,
  labelFontSize: propTypes.string,
  fillColor: propTypes.string,
  startAngle: propTypes.number,
  endAngle: propTypes.number,
  radius: propTypes.number,
  style: propTypes.object
};

var SmoothScroll = function SmoothScroll(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      spy = props.spy,
      smooth = props.smooth,
      offset = props.offset,
      duration = props.duration,
      block = props.block,
      color = props.color,
      outline = props.outline,
      size = props.size,
      rounded = props.rounded,
      gradient = props.gradient,
      floating = props.floating,
      flat = props.flat,
      social = props.social,
      btn = props.btn,
      fixed = props.fixed,
      bottom = props.bottom,
      right = props.right,
      top = props.top,
      left = props.left,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to", "spy", "smooth", "offset", "duration", "block", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "social", "btn", "fixed", "bottom", "right", "top", "left"]);

  var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", (btn || floating) && "btn", floating && "btn-floating", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? "-outline" : "", "-").concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, block ? "btn-block" : false, social ? "btn-" + social : false, "Ripple-parent", className);
  var fixedStyles = {
    position: "fixed",
    top: top ? "".concat(top, "px") : null,
    bottom: bottom ? "".concat(bottom, "px") : !top ? "45px" : null,
    left: left ? "".concat(left, "px") : null,
    right: right ? "".concat(right, "px") : !left ? "24px" : null
  };
  return React.createElement(Link, _extends({
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to,
    spy: spy,
    smooth: smooth,
    offset: offset,
    duration: duration,
    style: fixed ? fixedStyles : null
  }, attributes), children, props.disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

SmoothScroll.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  active: propTypes.bool,
  spy: propTypes.bool,
  smooth: propTypes.bool,
  offset: propTypes.number,
  duration: propTypes.number,
  block: propTypes.bool,
  color: propTypes.string,
  outline: propTypes.bool,
  size: propTypes.string,
  rounded: propTypes.bool,
  gradient: propTypes.string,
  floating: propTypes.bool,
  flat: propTypes.bool,
  social: propTypes.string,
  fixed: propTypes.bool,
  top: propTypes.string,
  bottom: propTypes.string,
  right: propTypes.string,
  left: propTypes.string
};
SmoothScroll.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500
};

var Spinner = function Spinner(props) {
  var theChosenColorSpinner = function theChosenColorSpinner(spinnerClasses) {
    if (props.multicolor) {
      var theSpinnerItself = React.createElement("div", null, React.createElement("div", {
        className: "spinner-layer spinner-blue"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-red"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-yellow"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-green"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))));
      return theSpinnerItself;
    } else {
      var _theSpinnerItself = React.createElement("div", {
        className: spinnerClasses
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      })));

      return _theSpinnerItself;
    }
  };

  var className = props.className,
      big = props.big,
      small = props.small,
      red = props.red,
      green = props.green,
      yellow = props.yellow;
  var wrapperClasses = classNames("preloader-wrapper", "active", big ? "big" : false, small ? "small" : false, className);
  var spinnerClasses = classNames("spinner-layer", red ? "spinner-red-only" : false, green ? "spinner-green-only" : false, yellow ? "spinner-yellow-only" : "spinner-blue-only", className);

  if (props.crazy) {
    return React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, theChosenColorSpinner(spinnerClasses)))));
  } else {
    return React.createElement("div", {
      className: wrapperClasses
    }, theChosenColorSpinner(spinnerClasses));
  }
};

Spinner.propTypes = {
  className: propTypes.string,
  big: propTypes.bool,
  small: propTypes.bool,
  crazy: propTypes.bool,
  red: propTypes.bool,
  green: propTypes.bool,
  yellow: propTypes.bool,
  multicolor: propTypes.bool
};
Spinner.defaultProps = {
  tag: "div"
};

var Step = function Step(props) {
  var Tag = props.tag,
      form = props.form,
      icon = props.icon,
      stepName = props.stepName,
      vertical = props.vertical;
  var iconClass = classNames("fa fa-" + icon, "Ripple-parent");
  var stepClass = classNames(form ? "steps-step" : icon && vertical ? "steps-step-3" : icon && !vertical ? "steps-step-2" : null, props.className);
  var step;

  if (form) {
    step = React.createElement(Tag, {
      className: stepClass
    }, props.children);
  } else if (icon && !vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popper, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-2 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else if (icon && vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popper, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-3 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else {
    step = React.createElement("li", {
      className: stepClass
    }, props.children);
  }

  return step;
};

Step.defaultProps = {
  tag: "div",
  form: false,
  vertical: false
};

var css$f = "/* Stepper Form */\n\n/* Stepper v.2 (Form) */\n.steps-form {\n  display: table;\n  width: 100%;\n  position: relative; }\n.steps-form .steps-row {\n  display: table-row; }\n.steps-form .steps-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc; }\n.steps-form .steps-row .steps-step {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n.steps-form .steps-row .steps-step p {\n  margin-top: 0.5rem; }\n.steps-form .steps-row .steps-step button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form .steps-row .steps-step .btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  margin-top: 0; }\n\n/* Stepper v.3 (Icons) */\n.steps-form-2 {\n  display: table;\n  width: 100%;\n  position: relative; }\n.steps-form-2 .steps-row-2 {\n  display: table-row; }\n.steps-form-2 .steps-row-2:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 99%;\n  height: 2px;\n  background-color: #7283a7; }\n.steps-form-2 .steps-row-2 .steps-step-2 {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n.steps-form-2 .steps-row-2 .steps-step-2 p {\n  margin-top: 0.5rem; }\n.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {\n  width: 70px;\n  height: 70px;\n  border: 2px solid #59698D;\n  background-color: white !important;\n  color: #59698D !important;\n  border-radius: 50%;\n  padding: 22px 18px 15px 18px;\n  margin-top: -22px; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {\n  border: 2px solid #4285F4;\n  color: #4285F4 !important;\n  background-color: white !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa {\n  font-size: 1.7rem; }\n .steps-row-2:first-child .btn {\n  margin-left: 0\n}\n.steps-row-2:last-child .btn {\n  margin-right: 0\n}\n\n\n/* Stepper v.4 (Icon-vertical) */\n\n.steps-form-3 {\n  width: 2px;\nheight: 470px;\n  position: relative; }\n.steps-form-3 .steps-row-3 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n.steps-form-3 .steps-row-3:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  background-color: #7283a7; }\n.steps-form-3 .steps-row-3 .steps-step-3 {\n  height: 150px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  position: relative; }\n.steps-form-3 .steps-row-3 .steps-step-3.no-height {\n  height: 50px; }\n.steps-form-3 .steps-row-3 .steps-step-3 p {\nmargin-top: 0.5rem; }\n.steps-form-3 .steps-row-3 .steps-step-3 button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #59698D;\n  background-color: white !important;\n  color: #59698D !important;\n  border-radius: 50%;\n  padding: 18px 18px 15px 15px;\n  margin-top: -22px; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3:hover {\n  border: 2px solid #4285F4;\n  color: #4285F4 !important;\n  background-color: white !important; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fa {\n  font-size: 1.7rem; }\n";
styleInject(css$f);

var Stepper = function Stepper(props) {
  var vertical = props.vertical,
      form = props.form,
      icon = props.icon;
  var stepperClass = classNames(form ? "steps-form" : icon && vertical ? "steps-form-3" : icon && !vertical ? "steps-form-2" : "stepper", vertical && !icon ? "stepper-vertical" : form || icon ? null : "stepper-horizontal", props.className);
  var wrapperFix = classNames(form ? "steps-row" : icon && vertical ? "steps-row-3 d-flex justify-content-between" : icon && !vertical ? "steps-row-2 d-flex justify-content-between" : null); // wrapper shim in case props.form

  var stepper;

  if (form || icon) {
    stepper = React.createElement("div", {
      className: stepperClass
    }, React.createElement("div", {
      className: wrapperFix
    }, props.children));
  } else {
    stepper = React.createElement("ul", {
      className: stepperClass
    }, props.children);
  }

  return stepper;
};

Stepper.propTypes = {
  vertical: propTypes.bool,
  form: propTypes.bool,
  icon: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};
Stepper.defaultProps = {
  form: false
};

var Sticky =
/*#__PURE__*/
function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sticky)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSticky: false,
      wasSticky: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleContainerEvent", function (_ref) {
      var distanceFromTop = _ref.distanceFromTop,
          distanceFromBottom = _ref.distanceFromBottom,
          eventSource = _ref.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;

      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();

      var contentClientRect = _this.content.getBoundingClientRect();

      var calculatedHeight = contentClientRect.height;
      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;
      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;
      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;
      var style = !isSticky ? {} : {
        position: "fixed",
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = "translateZ(0)";
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    });

    return _this;
  }

  _createClass(Sticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");
      this.context.subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : "".concat(this.state.isSticky ? this.state.calculatedHeight : 0, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = React.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = ReactDOM.findDOMNode(content);
        }
      });
      return React.createElement("div", null, React.createElement("div", {
        ref: function ref(placeholder) {
          return _this2.placeholder = placeholder;
        }
      }), element);
    }
  }]);

  return Sticky;
}(Component);

_defineProperty(Sticky, "propTypes", {
  topOffset: propTypes.number,
  bottomOffset: propTypes.number,
  relative: propTypes.bool,
  children: propTypes.func.isRequired
});

_defineProperty(Sticky, "defaultProps", {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
});

_defineProperty(Sticky, "contextTypes", {
  subscribe: propTypes.func,
  unsubscribe: propTypes.func,
  getParent: propTypes.func
});

var Container$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "events", ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"]);

    _defineProperty(_assertThisInitialized(_this), "subscribers", []);

    _defineProperty(_assertThisInitialized(_this), "subscribe", function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    });

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notifySubscribers", function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;
        raf(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getParent", function () {
      return _this.node;
    });

    return _this;
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(PureComponent);

_defineProperty(Container$1, "childContextTypes", {
  subscribe: propTypes.func,
  unsubscribe: propTypes.func,
  getParent: propTypes.func
});

var MDBStreak = function MDBStreak(_ref) {
  var children = _ref.children,
      by = _ref.by,
      byClass = _ref.byClass,
      wrapperClass = _ref.wrapperClass,
      size = _ref.size,
      quoteClass = _ref.quoteClass,
      photo = _ref.photo,
      overlayClass = _ref.overlayClass;
  var byClasses = classNames("text-center", "font-italic", "mb-0", byClass);
  var wrapperClasses = classNames("streak", photo && "streak-photo", size && "streak-".concat(size), wrapperClass);
  var quoteClasses = classNames("h2-responsive", quoteClass);
  var overlayClasses = classNames("flex-center", overlayClass);
  return React.createElement("div", {
    className: wrapperClasses,
    style: {
      backgroundImage: "url(\"".concat(photo, "\")"),
      backgroundAttachment: "fixed"
    }
  }, React.createElement("div", {
    className: overlayClasses
  }, React.createElement("ul", {
    className: "mb-0 list-unstyled"
  }, React.createElement("li", null, React.createElement("h2", {
    className: quoteClasses
  }, React.createElement(Fa, {
    icon: "quote-left"
  }), " ", children, " ", React.createElement(Fa, {
    icon: "quote-right"
  }))), React.createElement("li", {
    className: "mb-0"
  }, React.createElement("h5", {
    className: byClasses
  }, "~ ", by)))));
};

MDBStreak.propTypes = {
  size: propTypes.oneOf(['lg', 'md']),
  by: propTypes.string,
  wrapperClass: propTypes.string,
  byClass: propTypes.string,
  quoteClass: propTypes.string,
  photo: propTypes.string,
  overlayClass: propTypes.string
};
MDBStreak.defaultProps = {
  wrapperClass: "grey lighten-3"
};

var css$g = ".react-bootstrap-table {\n  padding-top: 65px;\n}\n\n.react-bootstrap-table .caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.react-bootstrap-table .dropup .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid\\9;\n}\n\n.react-bootstrap-table-pagination .pagination {\n  float: right;\n}\n\n.react-bootstrap-table-pagination .pagination .page-item.active .page-link {\n  background-color: #09c;\n}\n\n.react-bootstrap-table-pagination .select-wrapper {\n  display: inline-block;\n  width: 100px;\n  margin: 0 15px;\n}\n\n.react-bootstrap-table-pagination .dropdown-item {\n  padding: 0;\n}\n\n.react-bootstrap-table-pagination-total {\n  display: block;\n}\n\n.react-bootstrap-table .md-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 200px;\n}\n\n.react-bootstrap-table-pagination > * {\n  position: inherit;\n}\n\n.react-bs-table-sizePerPage-dropdown {\n  position: absolute;\n  top: 0;\n  left: 0;\n}";
styleInject(css$g);

var TableEditable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableEditable, _React$Component);

  function TableEditable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableEditable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableEditable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.data && _this.setState(_objectSpread({}, _this.state, {
        data: _this.props.data
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "addRow", function () {
      var newData = _toConsumableArray(_this.state.data);

      var newRow = [];

      _this.props.columns.forEach(function () {
        newRow.push("");
      });

      newData.push(newRow);

      _this.setState(_objectSpread({}, _this.state.data, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "removeRow", function (index) {
      var newData = _toConsumableArray(_this.state.data);

      newData = [].concat(_toConsumableArray(newData.slice(0, index)), _toConsumableArray(newData.slice(index + 1)));

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseIndex", function (index) {
      if (index === 0) return;

      var newData = _this.changeArrayOrder(index, index - 1);

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "increaseIndex", function (index) {
      if (index === _this.state.data.length - 1) return;

      var newData = _this.changeArrayOrder(index, index + 1);

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "changeArrayOrder", function (oldIndex, newIndex) {
      var array = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _toConsumableArray(_this.state.data);
      var newArray = array;

      var oldIndexValue = _toConsumableArray(newArray[oldIndex]);

      var newIndexValue = _toConsumableArray(newArray[newIndex]);

      newArray.splice(oldIndex, 1, newIndexValue);
      newArray.splice(newIndex, 1, oldIndexValue);
      return newArray;
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurHandler", function (trIndex, tdIndex, e) {
      var value = e.target.innerText;

      var newData = _toConsumableArray(_this.state.data);

      newData = newData.map(function (item, index) {
        if (index !== trIndex) {
          return item;
        }

        return item.map(function (tdItem, index) {
          if (index !== tdIndex) {
            return tdItem;
          }

          return tdItem = value;
        });
      });

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    return _this;
  }

  _createClass(TableEditable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.data !== this.props.data && this.props.data !== this.state.data) {
        this.setState({
          data: this.props.data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          small = _this$props.small,
          bordered = _this$props.bordered,
          striped = _this$props.striped,
          hover = _this$props.hover,
          data = _this$props.data,
          columns = _this$props.columns,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          attributes = _objectWithoutProperties(_this$props, ["className", "small", "bordered", "striped", "hover", "data", "columns", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl"]);

      var classes = classNames("table", small && "table-sm", bordered && "table-bordered", striped && "table-striped", hover && "table-hover", className);
      var wrapperClasses = classNames("table-editable text-center", responsive && "table-responsive", responsiveSm && "table-responsive-sm", responsiveMd && "table-responsive-md", responsiveLg && "table-responsive-lg", responsiveXl && "table-responsive-xl");
      return React.createElement("div", {
        className: wrapperClasses
      }, React.createElement("span", {
        onClick: this.addRow,
        className: "table-add float-right mb-3 mr-2"
      }, React.createElement("a", {
        href: "#!",
        className: "text-success"
      }, React.createElement(Fa, {
        icon: "plus",
        size: "2x"
      }))), React.createElement("table", _extends({}, attributes, {
        className: classes
      }), React.createElement("thead", null, React.createElement("tr", null, this.props.columns && this.props.columns.map(function (th, i) {
        return React.createElement("th", {
          key: i
        }, th);
      }), React.createElement("th", null, "Sort "), React.createElement("th", null, "Delete "))), React.createElement("tbody", null, this.state.data.map(function (tr, trIndex) {
        return React.createElement("tr", {
          key: trIndex
        }, tr.map(function (td, tdIndex) {
          return React.createElement("td", {
            key: tdIndex,
            contentEditable: true,
            suppressContentEditableWarning: "true",
            onBlur: function onBlur(e) {
              return _this2.onBlurHandler(trIndex, tdIndex, e);
            }
          }, td);
        }), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.decreaseIndex(trIndex);
          },
          className: "table-up"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-up"
        }))), React.createElement("span", {
          onClick: function onClick() {
            return _this2.increaseIndex(trIndex);
          },
          className: "table-down"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-down"
        })))), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.removeRow(trIndex);
          },
          className: "table-remove"
        }, React.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-rounded btn-sm my-0"
        }, "Remove"))));
      }))));
    }
  }]);

  return TableEditable;
}(React.Component);

TableEditable.propTypes = {
  className: propTypes.string,
  small: propTypes.bool,
  bordered: propTypes.bool,
  striped: propTypes.bool,
  hover: propTypes.bool,
  data: propTypes.array,
  columns: propTypes.array,
  children: propTypes.node,
  responsive: propTypes.bool,
  responsiveSm: propTypes.bool,
  responsiveMd: propTypes.bool,
  responsiveLg: propTypes.bool,
  responsiveXl: propTypes.bool
};

var Testimonial = function Testimonial(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("testimonial", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Testimonial.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Testimonial.defaultProps = {
  tag: "div"
};

var css$h = "@media (max-width: 1025px) {\n  .stepper.timeline li {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n\n.stepper.timeline li a {\n  padding: 0px 24px;\n  left: 50%;\n}\n@media (max-width: 450px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n.stepper.timeline li a .circle {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  margin-left: -50px;\n  background-color: #fff;\n  z-index: 2;\n}\n\n.stepper.timeline li .step-content {\n  width: 45%;\n  float: left;\n  border-radius: 2px;\n  position: relative;\n  background-color: #fff;\n}\n.stepper.timeline li .step-content:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #e0e0e0;\n  border-right: 0 solid #e0e0e0;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n.stepper.timeline li .step-content:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n@media (max-width: 450px) {\n  .stepper.timeline li .step-content {\n    width: 80%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li .step-content {\n    width: 85%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n\n.stepper.timeline li.timeline-inverted {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n.stepper.timeline li.timeline-inverted .step-content {\n  float: right;\n}\n.stepper.timeline li.timeline-inverted .step-content:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n.stepper.timeline li.timeline-inverted .step-content:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.stepper.timeline.stepper-vertical li:not(:last-child):after {\n  content: \" \";\n  position: absolute;\n  width: 3px;\n  background-color: #e0e0e0;\n  left: 50%;\n  top: 57px;\n  margin-left: -1.5px;\n}\n@media (max-width: 450px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n";
styleInject(css$h);

var Timeline = function Timeline(props) {
  var children = props.children;
  return React.createElement("ul", {
    className: "stepper stepper-vertical timeline pl-0"
  }, children);
};

var TimelineStep = function TimelineStep(props) {
  var href = props.href,
      color = props.color,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClass = props.iconClass,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      className = props.className,
      children = props.children,
      inverted = props.inverted,
      colorful = props.colorful,
      hoverable = props.hoverable,
      label = props.label;
  var circleClasses = classNames("circle", "z-depth-1-half", color ? color : "primary-color", className);
  var stepContentClasses = classNames("step-content", "z-depth-1", "ml-xl-0", colorful ? "p-0 mt-2" : "p-4", hoverable && "hoverable");
  var liClasses = classNames(inverted && "timeline-inverted");
  return React.createElement("li", {
    className: liClasses
  }, React.createElement("a", {
    href: href
  }, React.createElement("span", {
    className: circleClasses
  }, icon && React.createElement(Fa, {
    icon: icon,
    size: iconSize,
    brand: iconBrand,
    light: iconLight,
    regular: iconRegular,
    className: iconClass
  }), label)), React.createElement("div", {
    className: stepContentClasses
  }, children));
};

TimelineStep.propTypes = {
  href: propTypes.string,
  color: propTypes.string,
  size: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  className: propTypes.string
};
TimelineStep.defaultProps = {
  href: "#"
};

var css$i = ".time-picker-clock {\n  border-radius: 100%;\n  position: relative;\n  /* transition: 0.3s cubic-bezier(.25,.8,.50,1); */\n  user-select: none;\n  background: #f0f0f0;\n  animation: show-up-clock 0.2s linear;\n}\n@keyframes show-up-clock {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.time-picker-clock__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.time-picker-clock__hand {\n  height: calc(50% - 28px);\n  width: 2px;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n  will-change: transform;\n  z-index: 1;\n  background-color: rgba(0, 150, 136, 0.25);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring {\n  background-color: rgba(0, 150, 136, 0.25);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 2.5rem;\n  height: 2.5rem;\n  content: \"\";\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring:before {\n  background-color: rgba(0, 77, 64, 0.75);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand:after {\n  content: \"\";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 100%;\n  left: 50%;\n  border-radius: 50%;\n  background-color: rgba(0, 77, 64, 0.75);\n  opacity: 0.75;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 1rem;\n  line-height: 1.2;\n  justify-content: center;\n  left: calc(50% - 40px / 2);\n  height: 40px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 40px / 2);\n  width: 40px;\n  user-select: none;\n}\n.time-picker-clock > span:hover,\n.time-picker-clock > span.active:hover {\n  cursor: pointer;\n}\n.time-picker-clock > span:active:hover,\n.time-picker-clock > span.active:active:hover {\n  cursor: move;\n}\n.time-picker-clock:active:hover {\n  cursor: move;\n}\n.time-picker-clock > span > span {\n  z-index: 1;\n}\n\n.time-picker-clock > span:before,\n.time-picker-clock > span:after {\n  content: \"\";\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span > span:after,\n.time-picker-clock > span > span:before {\n  height: 40px;\n  width: 40px;\n}\n.time-picker-clock > span.active {\n  color: #fff;\n  cursor: default;\n  z-index: 2;\n  background: blue;\n}\n.time-picker-clock > span > span.disabled {\n  pointer-events: none;\n}\n\n.picker__footer .clockpicker-button {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n";
styleInject(css$i);

var propTypes$3 = {
  color: propTypes.string.isRequired,
  hours: propTypes.string.isRequired,
  minutes: propTypes.string.isRequired,
  dayTime: propTypes.string.isRequired,
  unitsMode: propTypes.string.isRequired,
  handleModeChange: propTypes.func.isRequired,
  hoursFormat: propTypes.number.isRequired
};

var TimePickerDisplay = function TimePickerDisplay(_ref) {
  var color = _ref.color,
      hours = _ref.hours,
      minutes = _ref.minutes,
      dayTime = _ref.dayTime,
      unitsMode = _ref.unitsMode,
      handleModeChange = _ref.handleModeChange,
      hoursFormat = _ref.hoursFormat;
  var displayClasses = classNames('picker__date-display', "btn-".concat(color));
  var hourClasses = classNames('clockpicker-span-hours', unitsMode === 'h' && 'text-primary');
  var minuteClasses = classNames('clockpicker-span-minutes', unitsMode === 'm' && 'text-primary');
  return React.createElement("div", {
    className: displayClasses
  }, React.createElement("div", {
    className: "clockpicker-display"
  }, React.createElement("div", {
    className: "clockpicker-display-column"
  }, React.createElement("span", {
    className: hourClasses,
    onClick: function onClick() {
      return handleModeChange('h');
    }
  }, hours !== '' ? hours : "--"), ":", React.createElement("span", {
    className: minuteClasses,
    onClick: function onClick() {
      return handleModeChange('m');
    }
  }, minutes !== '' ? minutes : "--")), hoursFormat === 12 && React.createElement("div", {
    className: "clockpicker-display-column clockpicker-display-am-pm"
  }, React.createElement("div", {
    className: "clockpicker-span-am-pm"
  }, dayTime.toUpperCase()))));
};

TimePickerDisplay.propTypes = propTypes$3;

var propTypes$4 = {
  angle: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  scale: propTypes.number.isRequired
};

var TimpiePickerClockHand = function TimpiePickerClockHand(_ref) {
  var angle = _ref.angle,
      between = _ref.between,
      color = _ref.color,
      scale = _ref.scale;
  var classes = classNames('time-picker-clock__hand', color, between && 'between');
  return React.createElement("div", {
    className: classes,
    style: {
      transform: "rotate(".concat(angle, "deg)"),
      height: "calc((50% - 28px) * ".concat(scale, ")")
    }
  }, React.createElement("div", {
    className: "time-picker-clock__hand--ring"
  }));
};

TimpiePickerClockHand.propTypes = propTypes$4;

var propTypes$5 = {
  className: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  max: propTypes.number.isRequired,
  min: propTypes.number.isRequired,
  rotate: propTypes.number.isRequired,
  step: propTypes.number.isRequired,
  startFromInner: propTypes.bool.isRequired,
  allowedValues: propTypes.arrayOf(propTypes.number),
  autoSwitch: propTypes.bool,
  color: propTypes.string,
  "double": propTypes.bool,
  handleModeChange: propTypes.func,
  size: propTypes.number,
  value: propTypes.number
};
var defaultProps$1 = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  "double": false,
  handleModeChange: function handleModeChange() {},
  size: 270,
  value: 0
};

var TimePickerClock =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePickerClock, _Component);

  function TimePickerClock(props) {
    var _this;

    _classCallCheck(this, TimePickerClock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePickerClock).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "buildComponentState", function () {
      var _this$props = _this.props,
          size = _this$props.size,
          max = _this$props.max,
          min = _this$props.min,
          _double = _this$props["double"],
          rotate = _this$props.rotate,
          value = _this$props.value;
      var clockRadius = size / 2;
      var digitsAmount = max - min + 1;
      var digitsInRound = _double ? digitsAmount / 2 : digitsAmount;
      var degreesPerUnit = 360 / digitsInRound;
      var outerRadius = clockRadius - 4;
      var innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40

      var degrees = degreesPerUnit * Math.PI / 180;
      var handAngle = rotate + degreesPerUnit * (value - min);

      _this.setState({
        clockRadius: clockRadius,
        degrees: degrees,
        degreesPerUnit: degreesPerUnit,
        digitsInRound: digitsInRound,
        handAngle: handAngle,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        value: value
      }, function () {
        return _this.setState({
          handScale: _this.getScale(value)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getScale", function (value) {
      if (_this.props.startFromInner && _this.props["double"]) {
        return value - _this.props.min >= _this.state.digitsInRound ? _this.state.outerRadius / _this.state.clockRadius : _this.state.innerRadius / _this.state.clockRadius;
      }

      return value - _this.props.min >= _this.state.digitsInRound ? _this.state.innerRadius / _this.state.clockRadius : _this.state.outerRadius / _this.state.clockRadius;
    });

    _defineProperty(_assertThisInitialized(_this), "getAngle", function (center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - _this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    });

    _defineProperty(_assertThisInitialized(_this), "getCoords", function (e) {
      var _this$clockRef$curren = _this.clockRef.current.getBoundingClientRect(),
          width = _this$clockRef$curren.width,
          top = _this$clockRef$curren.top,
          left = _this$clockRef$curren.left;

      var _ref = 'touches' in e ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      return {
        center: center,
        coords: coords
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (value) {
      var radius = (_this.state.clockRadius - 24) * _this.getScale(value);

      var rotateRadians = _this.props.rotate * Math.PI / 180;
      return {
        x: Math.round(Math.sin((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius),
        y: Math.round(-Math.cos((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius)
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isValueAllowed", function (value) {
      return _this.props.allowedValues.length ? _this.props.allowedValues.find(function (item) {
        return item === value;
      }) : value >= _this.props.min && value <= _this.props.max;
    });

    _defineProperty(_assertThisInitialized(_this), "isOnInner", function (center, coords) {
      var centerDistance = _this.euclidean(center, coords);

      var betweenRadiusDistance = (_this.state.outerRadius + _this.state.innerRadius) / 2 - 16;

      if (_this.props["double"]) {
        return _this.props.startFromInner ? centerDistance > betweenRadiusDistance : centerDistance < betweenRadiusDistance;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "computeTimeNumber", function (number) {
      return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
    });

    _defineProperty(_assertThisInitialized(_this), "computeHandAngle", function (exactAngle) {
      if (360 % _this.props.max !== 0) {
        return exactAngle >= 360 - _this.state.degreesPerUnit / 2 ? 0 : exactAngle;
      }

      return exactAngle <= _this.state.degreesPerUnit / 2 ? 360 : exactAngle;
    });

    _defineProperty(_assertThisInitialized(_this), "euclidean", function (p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    });

    _defineProperty(_assertThisInitialized(_this), "transformPosition", function (value) {
      var _this$setPosition = _this.setPosition(value),
          x = _this$setPosition.x,
          y = _this$setPosition.y;

      return {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      };
    });

    _defineProperty(_assertThisInitialized(_this), "genClockDigits", function () {
      var children = [];

      var _loop = function _loop(value) {
        var classes = classNames('clockpicker-tick', value === _this.state.value && 'active', !_this.isValueAllowed(value) && 'disabled');
        children.push(React.createElement("span", {
          className: classes,
          style: Object.assign(_this.transformPosition(value), {
            fontSize: !_this.props["double"] ? '140%' : _this.props.startFromInner ? value <= 12 ? '120%' : '100%' : value > 12 ? '120%' : '100%'
          }),
          key: value,
          onMouseDown: function onMouseDown(e) {
            return _this.onMouseDown(e, value);
          },
          onTouchStart: function onTouchStart(e) {
            return _this.onMouseDown(e, value);
          }
        }, _this.props.max > 24 ? _this.computeTimeNumber(value) : value === 24 ? '00' : value));
      };

      for (var value = _this.props.min; value <= _this.props.max; value += _this.props.step) {
        _loop(value);
      }

      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e, value) {
      e.preventDefault();

      _this.setState({
        isDragging: true
      });

      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);

      var handScale = _this.getScale(value);

      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      e.preventDefault();

      if (_this.state.isDragging) {
        _this.setState({
          isDragging: false
        });

        if (_this.props.autoSwitch) _this.props.handleModeChange('m');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      e.preventDefault();
      if (_this.state.isDragging) _this.setState({
        isDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragMove", function (e) {
      e.preventDefault();
      if (!_this.state.isDragging && e.type !== 'click') return;

      var _this$getCoords = _this.getCoords(e),
          center = _this$getCoords.center,
          coords = _this$getCoords.coords;

      var isOnInner = _this.isOnInner(center, coords);

      var exactHandAngle = _this.getAngle(center, coords);

      var computedHandAngle = _this.computeHandAngle(exactHandAngle);

      var value = Math.round((computedHandAngle - _this.props.rotate) / _this.state.degreesPerUnit) + _this.props.min + (isOnInner ? _this.state.digitsInRound : 0);
      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);

      var handScale = _this.getScale(value);

      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateValue", function (value, handAngle, handScale) {
      _this.props.handleChange(value);

      _this.setState({
        value: value,
        handAngle: handAngle,
        handScale: handScale
      });
    });

    _this.state = {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      handAngle: 0,
      handScale: 1,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      value: 0
    };
    _this.clockRef = React.createRef();
    return _this;
  }

  _createClass(TimePickerClock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildComponentState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.max !== this.props.max || prevProps.min !== this.props.min || this.state.value !== this.props.value) {
        this.buildComponentState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classNames('time-picker-clock', 'clockpicker-dial', this.props.className, this.state.value === null && 'time-picker-clock--indeterminate');
      return React.createElement("div", {
        className: classes,
        style: {
          height: "".concat(this.props.size, "px"),
          width: "".concat(this.props.size, "px"),
          visibility: 'visible'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave,
        onTouchStart: this.onMouseDown,
        onTouchEnd: this.onMouseUp,
        onMouseMove: this.onDragMove,
        onTouchMove: this.onDragMove,
        ref: this.clockRef
      }, React.createElement(TimpiePickerClockHand, {
        between: this.state.value % this.props.step !== 0,
        color: this.props.color,
        angle: this.state.handAngle,
        scale: this.state.handScale
      }), this.genClockDigits());
    }
  }]);

  return TimePickerClock;
}(Component);

TimePickerClock.propTypes = propTypes$5;
TimePickerClock.defaultProps = defaultProps$1;

var propTypes$6 = {
  color: propTypes.string.isRequired,
  dayTime: propTypes.string.isRequired,
  handleDayTimeChange: propTypes.func.isRequired
};

var TimePickerAmPmBlock = function TimePickerAmPmBlock(_ref) {
  var color = _ref.color,
      dayTime = _ref.dayTime,
      handleDayTimeChange = _ref.handleDayTimeChange;
  var classesAM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'am-button', dayTime === 'am' && 'active', "btn-".concat(color));
  var classesPM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', dayTime === 'pm' && 'active', "btn-".concat(color));
  return React.createElement("div", {
    className: "clockpicker-am-pm-block d-flex justify-content-between"
  }, React.createElement("button", {
    type: "button",
    className: classesAM,
    onClick: function onClick() {
      return handleDayTimeChange('am');
    }
  }, "AM"), React.createElement("button", {
    type: "button",
    className: classesPM,
    onClick: function onClick() {
      return handleDayTimeChange('pm');
    }
  }, "PM"));
};

TimePickerAmPmBlock.propTypes = propTypes$6;

var propTypes$7 = {
  cancelable: propTypes.bool.isRequired,
  cancelText: propTypes.string.isRequired,
  clearable: propTypes.bool.isRequired,
  clearText: propTypes.string.isRequired,
  doneText: propTypes.string.isRequired,
  handleCancelClick: propTypes.func.isRequired,
  handleClearClick: propTypes.func.isRequired,
  handleDoneClick: propTypes.func.isRequired
};

var TimePickerFooter = function TimePickerFooter(_ref) {
  var cancelable = _ref.cancelable,
      cancelText = _ref.cancelText,
      clearable = _ref.clearable,
      clearText = _ref.clearText,
      doneText = _ref.doneText,
      handleCancelClick = _ref.handleCancelClick,
      handleClearClick = _ref.handleClearClick,
      handleDoneClick = _ref.handleDoneClick;
  return React.createElement("div", {
    className: "picker__footer"
  }, clearable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleClearClick
  }, clearText), cancelable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleCancelClick
  }, cancelText), React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleDoneClick
  }, doneText));
};

TimePickerFooter.propTypes = propTypes$7;

var propTypes$8 = {
  id: propTypes.string.isRequired,
  allowedValues: propTypes.arrayOf(propTypes.number),
  autoSwitch: propTypes.bool,
  cancelable: propTypes.bool,
  cancelText: propTypes.string,
  clearable: propTypes.bool,
  clearText: propTypes.string,
  closeOnCancel: propTypes.bool,
  color: propTypes.string,
  doneText: propTypes.string,
  getValue: propTypes.func,
  hours: propTypes.number,
  hoursFormat: propTypes.number,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  minutes: propTypes.number,
  placeholder: propTypes.string,
  startFromInner: propTypes.bool
};
var defaultProps$2 = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  doneText: 'Done',
  getValue: function getValue() {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};

var TimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setInputText", function () {
      var value = '';

      if (_this.state.hours !== null && _this.state.minutes !== null) {
        value = _this.props.hoursFormat === 12 ? "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes).concat(_this.state.dayTime.toUpperCase()) : "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes);
      }

      _this.setState({
        value: value,
        unitsMode: 'h'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "computeTimeNumber", function (number) {
      if (number !== null) {
        number = _this.state.unitsMode === 'h' && number === 24 ? 0 : number;
        return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
      }

      return '';
    });

    _defineProperty(_assertThisInitialized(_this), "handlePickerDialogOpen", function () {
      return _this.setState({
        pickerDialogOpen: !_this.state.pickerDialogOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleModeChange", function (unitsMode) {
      return _this.setState({
        unitsMode: unitsMode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDayTimeChange", function (dayTime) {
      return _this.setState({
        dayTime: dayTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMinutesChange", function (minutes) {
      return _this.setState({
        minutes: minutes
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoursChange", function (hours) {
      _this.setState({
        hours: hours
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (e.target.classList.value === 'picker__holder') {
        _this.handlePickerDialogOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoneClick", function () {
      _this.setInputText();

      _this.handlePickerDialogOpen();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearClick", function () {
      _this.handleHoursChange(null);

      _this.handleMinutesChange(null);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelClick", function () {
      _this.handleHoursChange(_this.props.hours);

      _this.handleMinutesChange(_this.props.minutes);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');

      if (_this.props.closeOnCancel) {
        _this.handlePickerDialogOpen();
      }
    });

    _this.state = {
      allowedValues: [],
      computedHours: '',
      computedMinutes: '',
      dayTime: 'am',
      hours: _this.props.hours,
      minutes: _this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        computedHours: this.computeTimeNumber(this.state.hours),
        computedMinutes: this.computeTimeNumber(this.state.minutes)
      }, function () {
        return _this2.setInputText();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.minutes !== this.state.minutes) {
        this.setState({
          computedMinutes: this.computeTimeNumber(this.state.minutes)
        });
      }

      if (prevState.hours !== this.state.hours) {
        this.setState({
          computedHours: this.computeTimeNumber(this.state.hours)
        });
      }

      if (prevState.value !== this.state.value) {
        this.props.getValue(this.state.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          computedHours = _this$state.computedHours,
          computedMinutes = _this$state.computedMinutes,
          dayTime = _this$state.dayTime,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          pickerDialogOpen = _this$state.pickerDialogOpen,
          unitsMode = _this$state.unitsMode,
          value = _this$state.value;
      var _this$props = this.props,
          allowedValues = _this$props.allowedValues,
          autoSwitch = _this$props.autoSwitch,
          cancelable = _this$props.cancelable,
          cancelText = _this$props.cancelText,
          clearable = _this$props.clearable,
          clearText = _this$props.clearText,
          color = _this$props.color,
          doneText = _this$props.doneText,
          hoursFormat = _this$props.hoursFormat,
          id = _this$props.id,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          startFromInner = _this$props.startFromInner;
      var inputClasses = classNames("form-control", "timepicker", pickerDialogOpen && "picker__input picker__input--active");
      var clockClasses = classNames("clockpicker", "picker", pickerDialogOpen && "picker--opened");
      var hoursClasses = classNames("clockpicker-hours", unitsMode !== "h" && "clockpicker-dial-out");
      var minutesClasses = classNames("clockpicker-minutes", unitsMode !== "m" && "clockpicker-dial-out");
      return React.createElement("div", {
        className: "md-form"
      }, React.createElement("input", {
        type: "text",
        placeholder: placeholder,
        id: id,
        className: inputClasses,
        value: value,
        onClick: this.handlePickerDialogOpen,
        readOnly: true
      }), React.createElement("label", {
        htmlFor: id,
        className: "active"
      }, label), pickerDialogOpen && React.createElement("div", {
        className: clockClasses
      }, React.createElement("div", {
        className: "picker__holder",
        onClick: this.handleBackdropClick
      }, React.createElement("div", {
        className: "picker__frame"
      }, React.createElement("div", {
        className: "picker__wrap"
      }, React.createElement("div", {
        className: "picker__box"
      }, React.createElement(TimePickerDisplay, {
        color: color,
        hours: computedHours,
        minutes: computedMinutes,
        dayTime: dayTime,
        unitsMode: unitsMode,
        handleModeChange: this.handleModeChange,
        hoursFormat: hoursFormat
      }), React.createElement("div", {
        className: "picker__calendar-container"
      }, React.createElement("div", {
        className: "clockpicker-plate"
      }, unitsMode === 'h' ? React.createElement(TimePickerClock, {
        allowedValues: allowedValues,
        autoSwitch: autoSwitch,
        className: hoursClasses,
        color: color,
        "double": hoursFormat === 24,
        handleChange: this.handleHoursChange,
        handleModeChange: this.handleModeChange,
        min: 1,
        max: hoursFormat,
        step: 1,
        rotate: 30,
        startFromInner: startFromInner,
        value: hours
      }) : React.createElement(TimePickerClock, {
        className: minutesClasses,
        color: color,
        handleChange: this.handleMinutesChange,
        min: 0,
        max: 59,
        step: 5,
        rotate: 0,
        startFromInner: startFromInner,
        value: minutes
      })), hoursFormat === 12 && React.createElement(TimePickerAmPmBlock, {
        color: color,
        dayTime: dayTime,
        handleDayTimeChange: this.handleDayTimeChange
      })), React.createElement(TimePickerFooter, {
        cancelText: cancelText,
        clearText: clearText,
        doneText: doneText,
        cancelable: cancelable,
        clearable: clearable,
        handleCancelClick: this.handleCancelClick,
        handleClearClick: this.handleClearClick,
        handleDoneClick: this.handleDoneClick
      })))))));
    }
  }]);

  return TimePicker;
}(Component);

TimePicker.propTypes = propTypes$8;
TimePicker.defaultProps = defaultProps$2;

var css$j = ".Toastify__toast-container {\n  z-index: 9999;\n  position: fixed;\n  padding: 4px;\n  width: 320px;\n  box-sizing: border-box;\n  color: #fff; }\n  .Toastify__toast-container--top-left {\n    top: 1em;\n    left: 1em; }\n  .Toastify__toast-container--top-center {\n    top: 1em;\n    left: 50%;\n    margin-left: -160px; }\n  .Toastify__toast-container--top-right {\n    top: 1em;\n    right: 1em; }\n  .Toastify__toast-container--bottom-left {\n    bottom: 1em;\n    left: 1em; }\n  .Toastify__toast-container--bottom-center {\n    bottom: 1em;\n    left: 50%;\n    margin-left: -160px; }\n  .Toastify__toast-container--bottom-right {\n    bottom: 1em;\n    right: 1em; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast-container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0; }\n    .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {\n      top: 0; }\n    .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {\n      bottom: 0; }\n    .Toastify__toast-container--rtl {\n      right: 0;\n      left: initial; } }\n\n.Toastify__toast {\n  position: relative;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 8px;\n  border-radius: 1px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  max-height: 800px;\n  overflow: hidden;\n  font-family: sans-serif;\n  cursor: pointer;\n  direction: ltr; }\n  .Toastify__toast--rtl {\n    direction: rtl; }\n  .Toastify__toast--default {\n    background: #fff;\n    color: #aaa; }\n  .Toastify__toast--info {\n    background: #3498db; }\n  .Toastify__toast--success {\n    background: #07bc0c; }\n  .Toastify__toast--warning {\n    background: #f1c40f; }\n  .Toastify__toast--error {\n    background: #e74c3c; }\n  .Toastify__toast-body {\n    margin: auto 0;\n    -ms-flex: 1;\n        flex: 1; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast {\n    margin-bottom: 0; } }\n\n.Toastify__close-button {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: 0.3s ease;\n  -ms-flex-item-align: start;\n      align-self: flex-start; }\n  .Toastify__close-button--default {\n    color: #000;\n    opacity: 0.3; }\n  .Toastify__close-button:hover, .Toastify__close-button:focus {\n    opacity: 1; }\n\n@keyframes Toastify__trackProgress {\n  0% {\n    transform: scaleX(1); }\n  100% {\n    transform: scaleX(0); } }\n\n.Toastify__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n  opacity: 0.7;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left; }\n  .Toastify__progress-bar--animated {\n    animation: Toastify__trackProgress linear 1 forwards; }\n  .Toastify__progress-bar--controlled {\n    transition: transform .2s; }\n  .Toastify__progress-bar--rtl {\n    right: 0;\n    left: initial;\n    transform-origin: right; }\n  .Toastify__progress-bar--default {\n    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }\n\n@keyframes Toastify__bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    transform: translate3d(5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    transform: translate3d(0, -5px, 0); }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes Toastify__bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    transform: translate3d(0, 5px, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0); } }\n\n.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {\n  animation-name: Toastify__bounceInLeft; }\n\n.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {\n  animation-name: Toastify__bounceInRight; }\n\n.Toastify__bounce-enter--top-center {\n  animation-name: Toastify__bounceInDown; }\n\n.Toastify__bounce-enter--bottom-center {\n  animation-name: Toastify__bounceInUp; }\n\n.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {\n  animation-name: Toastify__bounceOutLeft; }\n\n.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {\n  animation-name: Toastify__bounceOutRight; }\n\n.Toastify__bounce-exit--top-center {\n  animation-name: Toastify__bounceOutUp; }\n\n.Toastify__bounce-exit--bottom-center {\n  animation-name: Toastify__bounceOutDown; }\n\n@keyframes Toastify__zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes Toastify__zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.Toastify__zoom-enter {\n  animation-name: Toastify__zoomIn; }\n\n.Toastify__zoom-exit {\n  animation-name: Toastify__zoomOut; }\n\n@keyframes Toastify__flipIn {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes Toastify__flipOut {\n  from {\n    transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.Toastify__flip-enter {\n  animation-name: Toastify__flipIn; }\n\n.Toastify__flip-exit {\n  animation-name: Toastify__flipOut; }\n\n@keyframes Toastify__slideInRight {\n  from {\n    transform: translate3d(110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInLeft {\n  from {\n    transform: translate3d(-110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInUp {\n  from {\n    transform: translate3d(0, 110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInDown {\n  from {\n    transform: translate3d(0, -110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(110%, 0, 0); } }\n\n@keyframes Toastify__slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(-110%, 0, 0); } }\n\n@keyframes Toastify__slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 500px, 0); } }\n\n@keyframes Toastify__slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -500px, 0); } }\n\n.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {\n  animation-name: Toastify__slideInLeft; }\n\n.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {\n  animation-name: Toastify__slideInRight; }\n\n.Toastify__slide-enter--top-center {\n  animation-name: Toastify__slideInDown; }\n\n.Toastify__slide-enter--bottom-center {\n  animation-name: Toastify__slideInUp; }\n\n.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {\n  animation-name: Toastify__slideOutLeft; }\n\n.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {\n  animation-name: Toastify__slideOutRight; }\n\n.Toastify__slide-exit--top-center {\n  animation-name: Toastify__slideOutUp; }\n\n.Toastify__slide-exit--bottom-center {\n  animation-name: Toastify__slideOutDown; }";
styleInject(css$j);

// FREE

export { Alert, Animation, Autocomplete, Avatar, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonFixed, ButtonFixed$1 as ButtonFixedItem, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImage, CardText, CardTitle, CardUp, Carousel, CarouselCaption, Control as CarouselControl, CarouselIndicator, CarouselIndicators, CarouselInner, CarouselItem, Chip, ChipsInput, MDBCloseIcon as CloseIcon, Col, Collapse, CollapseHeader, Container, DataTable, DatePicker, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, EdgeHeader, ExportToCSV, Fa, RotatingCard as FlippingCard, Footer, FormInline, FreeBird, HamburgerToggler, Iframe, Input, InputFile, InputGroup, InputNumeric, InputRange, InputSwitch, Jumbotron, css$c as LightboxStyles, ListGroup, ListGroupItem, Alert as MDBAlert, Animation as MDBAnimation, Autocomplete as MDBAutocomplete, Avatar as MDBAvatar, Badge as MDBBadge, Breadcrumb as MDBBreadcrumb, BreadcrumbItem as MDBBreadcrumbItem, Button as MDBBtn, ButtonFixed as MDBBtnFixed, ButtonFixed$1 as MDBBtnFixedItem, ButtonGroup as MDBBtnGroup, ButtonToolbar as MDBBtnToolbar, Card as MDBCard, CardBody as MDBCardBody, CardFooter as MDBCardFooter, CardGroup as MDBCardGroup, CardHeader as MDBCardHeader, CardImage as MDBCardImage, CardText as MDBCardText, CardTitle as MDBCardTitle, CardUp as MDBCardUp, Carousel as MDBCarousel, CarouselCaption as MDBCarouselCaption, CarouselIndicator as MDBCarouselIndicator, CarouselIndicators as MDBCarouselIndicators, CarouselInner as MDBCarouselInner, CarouselItem as MDBCarouselItem, Chip as MDBChip, ChipsInput as MDBChipsInput, MDBCloseIcon, Col as MDBCol, Collapse as MDBCollapse, CollapseHeader as MDBCollapseHeader, Container as MDBContainer, Control as MDBControl, DataTable as MDBDataTable, DatePicker as MDBDatePicker, Dropdown as MDBDropdown, DropdownItem as MDBDropdownItem, DropdownMenu as MDBDropdownMenu, DropdownToggle as MDBDropdownToggle, EdgeHeader as MDBEdgeHeader, ExportToCSV as MDBExportToCSV, InputFile as MDBFileInput, Footer as MDBFooter, FormInline as MDBFormInline, FreeBird as MDBFreeBird, HamburgerToggler as MDBHamburgerToggler, Fa as MDBIcon, Iframe as MDBIframe, Input as MDBInput, InputGroup as MDBInputGroup, InputNumeric as MDBInputSelect, Jumbotron as MDBJumbotron, ListGroup as MDBListGroup, ListGroupItem as MDBListGroupItem, Mask as MDBMask, Media as MDBMedia, Modal as MDBModal, ModalBody as MDBModalBody, ModalFooter as MDBModalFooter, ModalHeader as MDBModalHeader, Nav as MDBNav, NavItem as MDBNavItem, NavLink as MDBNavLink, Navbar as MDBNavbar, NavbarBrand as MDBNavbarBrand, NavbarNav as MDBNavbarNav, NavbarToggler as MDBNavbarToggler, Notification as MDBNotification, PageItem as MDBPageItem, PageLink as MDBPageNav, Pagination as MDBPagination, Popper as MDBPopover, PopoverBody as MDBPopoverBody, PopoverHeader as MDBPopoverHeader, Popper as MDBPopper, Progress as MDBProgress, InputRange as MDBRangeInput, RotatingCard as MDBRotatingCard, Row as MDBRow, ScrollBar as MDBScrollbar, ScrollBox as MDBScrollspyBox, ScrollSpyList as MDBScrollspyList, ScrollSpyListItem as MDBScrollspyListItem, ScrollSpyText as MDBScrollspyText, Select as MDBSelect, SelectInput$1 as MDBSelectInput, SelectOption as MDBSelectOption, Options as MDBSelectOptions, SideNav as MDBSideNav, SideNavCat as MDBSideNavCat, SideNavItem as MDBSideNavItem, SideNavLink as MDBSideNavLink, SideNavNav as MDBSideNavNav, SimpleChart as MDBSimpleChart, SmoothScroll as MDBSmoothScroll, Spinner as MDBSpinner, Step as MDBStep, Stepper as MDBStepper, Sticky as MDBSticky, Container$1 as MDBStickyContent, MDBStreak, InputSwitch as MDBSwitch, TabContent as MDBTabContent, TabPane as MDBTabPane, Table as MDBTable, TableBody as MDBTableBody, TableEditable as MDBTableEditable, TableFoot as MDBTableFoot, TableHead as MDBTableHead, Testimonial as MDBTestimonial, TimePicker as MDBTimePicker, Timeline as MDBTimeline, TimelineStep as MDBTimelineStep, Popper as MDBTooltip, Treeview as MDBTreeview, TreeviewItem as MDBTreeviewItem, TreeviewList as MDBTreeviewList, View as MDBView, Waves as MDBWaves, Mask, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Notification, PageItem, PageLink, Pagination, ScrollBar as PerfectScrollbar, Popper as Popover, PopoverBody, PopoverHeader, Popper, Progress, Row, ScrollBox as ScrollSpyBox, ScrollSpyList, ScrollSpyListItem, ScrollSpyText, Select, SelectInput$1 as SelectInput, SelectOption, Options as SelectOptions, SideNav, SideNavCat, SideNavItem, SideNavLink, SideNavNav, SimpleChart, SmoothScroll, Spinner, Step, Stepper, Sticky, Container$1 as StickyContainer, MDBStreak as Streak, TabContent, TabPane, Table, TableBody, TableEditable, TableFoot, TableHead, Testimonial, TimePicker, Timeline, TimelineStep, Popper as Tooltip, Treeview, TreeviewItem, TreeviewList, View, Waves };
