import * as React from "react";
import "./style.scss";
const { useState } = React;


const DEFAULT_PERCENTAGE = 50

interface HanjiSliderProps {
  slideBefore: React.ReactElement
  slideAfter: React.ReactElement
}

export const ReactHanjiSlider = ({ slideBefore, slideAfter }: HanjiSliderProps): React.ReactElement => {
  const [percentage, setPercentage] = useState(DEFAULT_PERCENTAGE)


  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPercentage(Number(event.target.value))
  };

  const style: React.CSSProperties = {
    '--percentage': `${100 - percentage}%`
  } as React.CSSProperties;

  return (
    <div className="hanji_root" >
      <div className="hanji_before">{slideBefore}</div>
      <div style={style} className="hanji_after">{slideAfter}</div>

      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleSliderChange}
      />
    </div>
  )
}

ReactHanjiSlider.displayName = "ReactHanjiSlider";
