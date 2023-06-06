import React, { useRef } from "react";

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

  const styles: Record<string, React.CSSProperties> = {
    root: {
      height: 0,
      width: '100%',
      border: 0,
      padding: 0,
      transition: `opacity 0.3s`,
      ...(isDragging && {
        opacity: 0.3
      }),
    },
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
  }

  return (
    <button
      ref={sliderRef}
      onMouseDown={handleMouseDown}
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
