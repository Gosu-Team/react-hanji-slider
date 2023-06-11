import { type Dispatch, type SetStateAction } from 'react';
import { type Animation } from '../components/HanjiSlider';
interface ProgressAnimationProps {
    percentage: number;
    setPercentage: Dispatch<SetStateAction<number>>;
    animation: Animation | null;
}
declare const useProgressAnimation: ({ percentage, setPercentage, animation }: ProgressAnimationProps) => void;
export default useProgressAnimation;
