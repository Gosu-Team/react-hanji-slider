"use client"


function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

___$insertStyle(".hanji-root {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  height: 100%;\n  overflow-wrap: anywhere;\n}\n.hanji-root .hanji-after {\n  clip-path: polygon(var(--percentage) 0%, 100% 0%, 100% 100%, var(--percentage) 100%);\n}\n.hanji-root .hanji-before,\n.hanji-root .hanji-after {\n  width: 100%;\n  grid-area: 1/1;\n}\n.hanji-root img {\n  vertical-align: middle;\n}\n\n.hanji-no-selection {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.hanji-range-wrap {\n  height: 0;\n  width: 100%;\n  border: 0;\n  padding: 0;\n  transition: opacity 0.3s;\n}\n.hanji-range-wrap:active {\n  opacity: 0.3;\n}\n\n.hanji-range-thumb {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 16px;\n  transform: translateX(-50%);\n  cursor: col-resize;\n}\n\n.hanji-range-line {\n  height: 100%;\n  width: 1px;\n  background: #fff;\n  margin-left: 8px;\n  margin-right: 8px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.hanji-arrow-primary {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  grid-area: 1/1;\n  border-bottom: 1px solid #fff;\n  border-left: 1px solid #fff;\n  margin-left: -11px;\n}\n\n.hanji-arrow-secondary {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  grid-area: 1/1;\n  border-bottom: 1px solid #fff;\n  border-left: 1px solid #fff;\n  transform: rotate(-135deg);\n  margin-right: -11px;\n}");

const RangeInput = ({ isDragging, setIsDragging, min, max, value, onChange }) => {
    const sliderRef = React.useRef(null);
    const handleMouseMove = (event) => {
        if (!isDragging || sliderRef.current === null) {
            return;
        }
        const rect = sliderRef.current.getBoundingClientRect();
        let newValue = ((event.clientX - rect.left) / rect.width) * (max - min) + min;
        newValue = Math.max(Math.min(newValue, max), min);
        onChange(Math.round(newValue));
    };
    const handleMouseDown = () => { setIsDragging(true); };
    const handleMouseUp = () => { setIsDragging(false); };
    React__default["default"].useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);
    return (React__default["default"].createElement("button", { ref: sliderRef, onMouseDown: handleMouseDown, className: "hanji-range-wrap" },
        React__default["default"].createElement("div", { className: "hanji-range-thumb", style: {
                left: `${((value - min) / (max - min)) * 100}%`,
            } },
            React__default["default"].createElement("div", { className: "hanji-range-line" },
                React__default["default"].createElement("div", { className: "hanji-arrow-primary" }),
                React__default["default"].createElement("div", { className: "hanji-arrow-secondary" })))));
};

const { useState } = React__namespace;
const ReactHanjiSlider = ({ defaultPercentage = 50, slidePrimary, stylePrimary, slideSecondary, styleSecondary, }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [percentage, setPercentage] = useState(defaultPercentage);
    const handleSliderChange = (value) => {
        setPercentage(value);
    };
    const percentagePrimary = {
        '--percentage': `${percentage}%`
    };
    const percentageSecondary = {
        '--percentage': `${100 - percentage}%`
    };
    return (React__namespace.createElement("div", { className: `hanji-root ${isDragging ? 'hanji-no-selection' : ''}` },
        React__namespace.createElement("div", { style: Object.assign(Object.assign({}, percentagePrimary), stylePrimary), className: "hanji-before" }, slidePrimary),
        React__namespace.createElement("div", { style: Object.assign(Object.assign({}, percentageSecondary), styleSecondary), className: "hanji-after" }, slideSecondary),
        React__namespace.createElement(RangeInput, { isDragging: isDragging, setIsDragging: setIsDragging, min: 0, max: 100, value: percentage, onChange: handleSliderChange })));
};
ReactHanjiSlider.displayName = "ReactHanjiSlider";

exports["default"] = ReactHanjiSlider;
//# sourceMappingURL=index.js.map
