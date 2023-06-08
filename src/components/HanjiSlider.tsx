import React from "react";
import RangeInput from "./RangeInput";

interface HanjiSliderProps {
  slidePrimary: React.ReactElement;
  stylePrimary?: React.CSSProperties;
  slideSecondary: React.ReactElement;
  styleSecondary?: React.CSSProperties;
  defaultPercentage?: number;
  styleWrap?: React.CSSProperties;
  separatorColor?: string;
}

export const HanjiSlider: React.FC<HanjiSliderProps> = ({
  defaultPercentage = 50,
  styleWrap,
  slidePrimary,
  stylePrimary,
  slideSecondary,
  styleSecondary,
  separatorColor,
}) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [percentage, setPercentage] = React.useState(defaultPercentage);

  const handleSliderChange = (value: number): void => {
    setPercentage(value);
  };

  const styles: Record<string, React.CSSProperties> = {
    root: {
      position: "relative",
      display: "grid",
      ...(isDragging && {
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }),
      ...styleWrap,
    },
    secondary: {
      overflow: "auto",
      width: "100%",
      gridArea: "1 / 1",
      clipPath: `polygon(var(--percentage) 0%, 100% 0%, 100% 100%, var(--percentage) 100%)`,
      ...styleSecondary,
      ...{ "--percentage": `${percentage}%` }
    },
    primary: {
      overflow: "auto",
      width: "100%",
      gridArea: "1 / 1",
      ...stylePrimary,
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.primary}>
        {slidePrimary}
      </div>
      <div style={styles.secondary}>
        {slideSecondary}
      </div>
      <RangeInput
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        min={0}
        max={100}
        value={percentage}
        onChange={handleSliderChange}
        separatorColor={separatorColor}
      />
    </div>
  );
};

HanjiSlider.displayName = "ReactHanjiSlider";
