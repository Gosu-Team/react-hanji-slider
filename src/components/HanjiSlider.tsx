import * as React from "react";
import RangeInput from "./RangeInput";
import "./style.scss";
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

  return (
    <div className={`hanji-root ${isDragging ? 'hanji-no-selection' : ''}`}>
      <div
        style={{ ...percentagePrimary, ...stylePrimary }}
        className="hanji-before">
        {slidePrimary}
      </div>
      <div
        style={{ ...percentageSecondary, ...styleSecondary }}
        className="hanji-after">
        {slideSecondary}
      </div>

      <RangeInput
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        min={0}
        max={100}
        value={percentage}
        onChange={handleSliderChange} />
    </div>
  )
}

ReactHanjiSlider.displayName = "ReactHanjiSlider";
