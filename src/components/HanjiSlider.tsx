import * as React from "react";
import RangeInput from "./RangeInput";
const { useState } = React;

interface HanjiSliderProps {
  slidePrimary: React.ReactElement
  stylePrimary?: Record<string, unknown>,
  slideSecondary: React.ReactElement
  styleSecondary?: Record<string, unknown>,
  defaultPercentage?: number
}

export const ReactHanjiSlider = ({
  defaultPercentage = 50,
  slidePrimary,
  stylePrimary,
  slideSecondary,
  styleSecondary,
}: HanjiSliderProps): React.ReactElement => {
  const [isDragging, setIsDragging] = useState(false);
  const [percentage, setPercentage] = useState(defaultPercentage)

  const handleSliderChange = (value: number): void => {
    setPercentage(value)
  };

  const percentagePrimary: React.CSSProperties = {
    '--percentage': `${percentage}%`
  } as React.CSSProperties;

  const percentageSecondary: React.CSSProperties = {
    '--percentage': `${100 - percentage}%`
  } as React.CSSProperties;

  const styles: Record<string, React.CSSProperties> = {
    root: {
      position: 'relative',
      display: 'grid',
      overflow: 'hidden',
      height: '100%',
      overflowWrap: 'anywhere',
      ...(isDragging && {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }),
    },
    secondary: {
      width: '100%',
      gridArea: '1 / 1',
      clipPath: `polygon(var(--percentage) 0%, 100% 0%, 100% 100%, var(--percentage) 100%)`,
      ...percentageSecondary,
      ...styleSecondary
    },
    primary: {
      width: '100%',
      gridArea: '1 / 1',
      ...percentagePrimary,
      ...stylePrimary
    },
  }

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
        onChange={handleSliderChange} />
    </div >
  )
}

ReactHanjiSlider.displayName = "ReactHanjiSlider";
