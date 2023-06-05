import React, { useRef } from "react";
import "./style.scss";

interface RangeInputProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  isDragging: boolean
  setIsDragging: (value: boolean) => void
}

const RangeInput: React.FC<RangeInputProps> = ({
  isDragging,
  setIsDragging,
  min,
  max,
  value,
  onChange
}) => {

  const sliderRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: MouseEvent): void => {
    if (!isDragging || sliderRef.current === null) {
      return;
    }

    const rect = sliderRef.current.getBoundingClientRect();
    let newValue = ((event.clientX - rect.left) / rect.width) * (max - min) + min;

    newValue = Math.max(Math.min(newValue, max), min);

    onChange(Math.round(newValue));
  };

  const handleMouseDown = (): void => { setIsDragging(true); };

  const handleMouseUp = (): void => { setIsDragging(false); };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <button
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      className="hanji-range-wrap"
    >
      <div className="hanji-range-thumb" style={{
        left: `${((value - min) / (max - min)) * 100}%`,
      }}>
        <div className="hanji-range-line">
          <div className="hanji-arrow-primary"></div>
          <div className="hanji-arrow-secondary"></div>
        </div>
      </div>
    </button>
  );
};

export default RangeInput;
