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

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const RangeInput = ({ isDragging, setIsDragging, min, max, value, onChange, separatorColor = "#fff", }) => {
    const sliderRef = React__default["default"].useRef(null);
    const handleMove = (event) => {
        if (!isDragging || sliderRef.current === null) {
            return;
        }
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const rect = sliderRef.current.getBoundingClientRect();
        let newValue = ((clientX - rect.left) / rect.width) * (max - min) + min;
        newValue = Math.max(Math.min(newValue, max), min);
        onChange(Math.round(newValue));
    };
    const handleDown = (event) => {
        setIsDragging(true);
        if (event.type === "mousedown" || event.type === "touchstart") {
            handleMove(event.nativeEvent);
        }
    };
    const handleUp = () => {
        setIsDragging(false);
    };
    React__default["default"].useEffect(() => {
        const handleMoveTouch = (event) => {
            handleMove(event);
        };
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("touchmove", handleMoveTouch);
        window.addEventListener("touchend", handleUp);
        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("touchmove", handleMoveTouch);
            window.removeEventListener("touchend", handleUp);
        };
    }, [handleMove, handleUp]);
    const styles = {
        root: Object.assign({ border: 0, padding: 0, transition: "opacity 0.3s" }, (isDragging && {
            opacity: 0.3,
        })),
        thumb: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "16px",
            transform: "translateX(-50%)",
            cursor: "col-resize",
            left: `${((value - min) / (max - min)) * 100}%`,
        },
        line: {
            height: "100%",
            width: "1px",
            background: separatorColor,
            marginLeft: "8px",
            display: "grid",
            alignItems: "center",
        },
        arrowPrimary: {
            width: "10px",
            height: "10px",
            transform: "rotate(45deg)",
            gridArea: "1/1",
            borderBottom: `1px solid ${separatorColor}`,
            borderLeft: `1px solid ${separatorColor}`,
            marginLeft: "-11px",
        },
        arrowSecondary: {
            width: "10px",
            height: "10px",
            gridArea: "1/1",
            borderBottom: `1px solid ${separatorColor}`,
            borderLeft: `1px solid ${separatorColor}`,
            transform: "rotate(-135deg)",
            marginLeft: "1px",
        },
    };
    return (React__default["default"].createElement("button", { ref: sliderRef, onMouseDown: handleDown, onTouchStart: handleDown, style: styles.root },
        React__default["default"].createElement("div", { style: styles.thumb },
            React__default["default"].createElement("div", { style: styles.line },
                React__default["default"].createElement("div", { style: styles.arrowPrimary }),
                React__default["default"].createElement("div", { style: styles.arrowSecondary })))));
};

const HanjiSlider = ({ defaultPercentage = 50, styleWrap, slidePrimary, stylePrimary, slideSecondary, styleSecondary, separatorColor, }) => {
    const [isDragging, setIsDragging] = React__default["default"].useState(false);
    const [percentage, setPercentage] = React__default["default"].useState(defaultPercentage);
    const handleSliderChange = (value) => {
        setPercentage(value);
    };
    const styles = {
        root: Object.assign(Object.assign({ position: "relative", display: "grid" }, (isDragging && {
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
        })), styleWrap),
        secondary: Object.assign(Object.assign({ overflow: "auto", width: "100%", gridArea: "1 / 1", clipPath: `polygon(var(--percentage) 0%, 100% 0%, 100% 100%, var(--percentage) 100%)` }, styleSecondary), { "--percentage": `${percentage}%` }),
        primary: Object.assign({ overflow: "auto", width: "100%", gridArea: "1 / 1" }, stylePrimary),
    };
    return (React__default["default"].createElement("div", { style: styles.root },
        React__default["default"].createElement("div", { style: styles.primary }, slidePrimary),
        React__default["default"].createElement("div", { style: styles.secondary }, slideSecondary),
        React__default["default"].createElement(RangeInput, { isDragging: isDragging, setIsDragging: setIsDragging, min: 0, max: 100, value: percentage, onChange: handleSliderChange, separatorColor: separatorColor })));
};
HanjiSlider.displayName = "ReactHanjiSlider";

exports["default"] = HanjiSlider;
//# sourceMappingURL=index.js.map
