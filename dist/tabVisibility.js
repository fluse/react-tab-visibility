"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabVisibility =
/*#__PURE__*/
function (_Component) {
  _inherits(TabVisibility, _Component);

  function TabVisibility(props) {
    var _this;

    _classCallCheck(this, TabVisibility);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabVisibility).call(this, props));
    _this.state = {
      tabIsVisible: true,
      hiddenTime: 0
    };
    _this.cycle = null;
    _this.eventName = null;
    _this.eventKey = null;
    return _this;
  }

  _createClass(TabVisibility, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
      };

      for (var stateKey in keys) {
        if (stateKey in document) {
          this.eventKey = stateKey;
          this.eventName = keys[stateKey];
          break;
        }
      }

      document.addEventListener(this.eventName, this.handleTabVisibility.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener(this.eventName, this.handleTabVisibility.bind(this));
    }
  }, {
    key: "handleTabVisibility",
    value: function handleTabVisibility(e) {
      var tabIsVisible = !e.target[this.eventKey];
      var hiddenTime = this.state.hiddenTime;

      if (!tabIsVisible) {
        hiddenTime = 0;
        this.cycle = setInterval(this.countHiddenTime.bind(this), 1000);
      }

      if (tabIsVisible && !!this.cycle) {
        clearInterval(this.cycle);
      }

      this.setState({
        tabIsVisible: tabIsVisible,
        hiddenTime: hiddenTime
      });
      this.onTabVisibilityChange({
        tabIsVisible: tabIsVisible,
        hiddenTime: hiddenTime
      });
    }
  }, {
    key: "countHiddenTime",
    value: function countHiddenTime() {
      var hiddenTime = this.state.hiddenTime + 1;
      this.setState({
        hiddenTime: hiddenTime
      });
    }
  }, {
    key: "onTabVisibilityChange",
    value: function onTabVisibilityChange(status) {}
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return TabVisibility;
}(_react.Component);

exports["default"] = TabVisibility;