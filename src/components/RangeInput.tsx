import React, { useRef } from "react";

interface RangeInputProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
  separatorColor?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({
  isDragging,
  setIsDragging,
  min,
  max,
  value,
  onChange,
  separatorColor = "#fff",
}) => {
  const sliderRef = useRef<HTMLButtonElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging || sliderRef.current === null) {
      return;
    }

    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;

    const rect = sliderRef.current.getBoundingClientRect();
    let newValue =
      ((clientX - rect.left) / rect.width) * (max - min) + min;

    newValue = Math.max(Math.min(newValue, max), min);

    onChange(Math.round(newValue));
  };

  const handleDown = (event: React.MouseEvent | React.TouchEvent): void => {
    setIsDragging(true);

    if (event.type === "mousedown" || event.type === "touchstart") {
      handleMove(event.nativeEvent);
    }
  };

  const handleUp = (): void => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const handleMoveTouch = (event: TouchEvent): void => {
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
  }, [isDragging]);

  const styles: Record<string, React.CSSProperties> = {
    root: {
      height: 0,
      width: "100%",
      border: 0,
      padding: 0,
      transition: "opacity 0.3s",
      ...(isDragging && {
        opacity: 0.3,
      }),
    },
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
      display: "inline-block",
      width: "10px",
      height: "10px",
      transform: "rotate(45deg)",
      gridArea: "1/1",
      borderBottom: `1px solid ${separatorColor}`,
      borderLeft: `1px solid ${separatorColor}`,
      marginLeft: "-11px",
    },
    arrowSecondary: {
      display: "inline-block",
      width: "10px",
      height: "10px",
      gridArea: "1/1",
      borderBottom: `1px solid ${separatorColor}`,
      borderLeft: `1px solid ${separatorColor}`,
      transform: "rotate(-135deg)",
      marginLeft: "1px",
    },
  };

  return (
    <button
      ref={sliderRef}
      onMouseDown={handleDown}
      onTouchStart={handleDown}
      style={styles.root}
    >
      <div style={styles.thumb}>
        <div style={styles.line}>
          <div style={styles.arrowPrimary} />
          <div style={styles.arrowSecondary} />
        </div>
      </div>
    </button>
  );
};

export default RangeInput;
