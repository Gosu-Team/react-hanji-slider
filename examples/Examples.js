import React from 'react';
import HanjiSlider from "../dist/index";
import imgPrimary from './1.jpg';
import imgSecondary from './2.jpg';


// interface Animation {
//   speed?: number,
//   step1: number,
//   step2: number
//   step3: number
// }

// interface ProgressAnimationProps {
//   percentage: number
//   setPercentage: React.Dispatch<React.SetStateAction<number>>
//   animation: Animation | null
// }

const useProgressAnimation = ({
  animation,
  percentage,
  setPercentage
}) => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [decreasing, setDecreasing] = React.useState(false);

  React.useEffect(() => {
    if (animation === null || isAnimated) return

    const timer = setInterval(() => {
      if (!decreasing && percentage < animation.step2) {
        setPercentage(prevProgress => prevProgress + 1)
      } else if (!decreasing && percentage >= animation.step2) {
        setDecreasing(true);
      } else if (decreasing && percentage > animation.step3) {
        setPercentage(prevProgress => prevProgress - 1)
      } else if (decreasing && percentage <= animation.step3) {
        setIsAnimated(true)
        clearInterval(timer);
      }
    }, (animation != null) ? animation.speed : 1);
    return () => { clearInterval(timer); };
  }, [percentage, animation, decreasing, isAnimated]);
};



export default function Examples() {
  const [percentage, setPercentage] = React.useState(0)

  useProgressAnimation({
    percentage,
    setPercentage,
    animation: {
      speed: 10,
      step1: 0,
      step2: 100,
      step3: 90
    }
  })

  return (
    <div className="main">
      <HanjiSlider
        value={percentage}
        slidePrimary={
          <div>
            <h2>Primary</h2>
            <img src={imgPrimary} alt="My Awesome Image" />
          </div>
        }
        styleSecondary={{ background: 'yellow' }}
        slideSecondary={
          <div>
            <h2>Secondary</h2>
            <img src={imgSecondary} alt="My Awesome Image" />
          </div>
        } />
    </div>
  );
}
