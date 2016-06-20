'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabVisibility = function (_Component) {
    _inherits(TabVisibility, _Component);

    function TabVisibility(props) {
        _classCallCheck(this, TabVisibility);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabVisibility).call(this, props));

        _this.state = {
            tabIsVisible: true,
            hiddenTime: 0
        };

        _this.eventName = null;
        _this.eventKey = null;
        return _this;
    }

    _createClass(TabVisibility, [{
        key: 'componentDidMount',
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
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener(this.eventName);
        }
    }, {
        key: 'handleTabVisibility',
        value: function handleTabVisibility(e) {

            var tabIsVisible = !e.target[this.eventKey];

            if (!tabIsVisible) {
                this.cycle = setInterval(this.countHiddenTime.bind(this), 1000);
            }

            this.setState({ tabIsVisible: tabIsVisible });

            this.onTabVisibilityChange({
                tabIsVisible: tabIsVisible,
                hiddenTime: this.state.hiddenTime
            });

            if (tabIsVisible && this.cycle !== null) {
                clearInterval(this.cycle);
                this.setState({
                    hiddenTime: 0
                });
            }
        }
    }, {
        key: 'countHiddenTime',
        value: function countHiddenTime() {
            var hiddenTime = this.state.hiddenTime;
            hiddenTime++;
            this.setState({ hiddenTime: hiddenTime });
        }
    }, {
        key: 'onTabVisibilityChange',
        value: function onTabVisibilityChange(status) {}
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return TabVisibility;
}(_react.Component);

module.exports = TabVisibility;
