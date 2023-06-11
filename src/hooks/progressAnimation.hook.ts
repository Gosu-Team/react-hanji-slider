import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import { type Animation } from '../components/HanjiSlider';

interface ProgressAnimationProps {
  percentage: number
  setPercentage: Dispatch<SetStateAction<number>>
  animation: Animation | null
}

const useProgressAnimation = ({
  percentage,
  setPercentage,
  animation
}: ProgressAnimationProps): void => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [decreasing, setDecreasing] = useState(false);

  useEffect(() => {
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

export default useProgressAnimation;
