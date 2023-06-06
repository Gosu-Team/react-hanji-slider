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
    const styles = {
        root: Object.assign({ height: 0, width: '100%', border: 0, padding: 0, transition: `opacity 0.3s` }, (isDragging && {
            opacity: 0.3
        })),
        thumb: {
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '16px',
            transform: 'translateX(-50%)',
            cursor: 'col-resize',
            left: `${((value - min) / (max - min)) * 100}%`
        },
        line: {
            height: '100%',
            width: '1px',
            background: '#fff',
            marginLeft: '8px',
            display: 'grid',
            alignItems: 'center',
        },
        arrowPrimary: {
            display: 'inline-block',
            width: '10px',
            height: '10px',
            transform: 'rotate(45deg)',
            gridArea: ' 1/1',
            borderBottom: '1px solid #fff',
            borderLeft: '1px solid #fff',
            marginLeft: '-11px',
        },
        arrowSecondary: {
            display: 'inline-block',
            width: '10px',
            height: '10px',
            gridArea: ' 1/1',
            borderBottom: '1px solid #fff',
            borderLeft: '1px solid #fff',
            transform: 'rotate(-135deg)',
            marginRight: '-11px',
        }
    };
    return (React__default["default"].createElement("button", { ref: sliderRef, onMouseDown: handleMouseDown, style: styles.root },
        React__default["default"].createElement("div", { style: styles.thumb },
            React__default["default"].createElement("div", { style: styles.line },
                React__default["default"].createElement("div", { style: styles.arrowPrimary }),
                React__default["default"].createElement("div", { style: styles.arrowSecondary })))));
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
    const styles = {
        root: Object.assign({ position: 'relative', display: 'grid', overflow: 'hidden', height: '100%', overflowWrap: 'anywhere' }, (isDragging && {
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
        })),
        secondary: Object.assign(Object.assign({ width: '100%', gridArea: '1 / 1', clipPath: `polygon(var(--percentage) 0%, 100% 0%, 100% 100%, var(--percentage) 100%)` }, percentageSecondary), styleSecondary),
        primary: Object.assign(Object.assign({ width: '100%', gridArea: '1 / 1' }, percentagePrimary), stylePrimary),
    };
    return (React__namespace.createElement("div", { style: styles.root },
        React__namespace.createElement("div", { style: styles.primary }, slidePrimary),
        React__namespace.createElement("div", { style: styles.secondary }, slideSecondary),
        React__namespace.createElement(RangeInput, { isDragging: isDragging, setIsDragging: setIsDragging, min: 0, max: 100, value: percentage, onChange: handleSliderChange })));
};
ReactHanjiSlider.displayName = "ReactHanjiSlider";

exports["default"] = ReactHanjiSlider;
//# sourceMappingURL=index.js.map
