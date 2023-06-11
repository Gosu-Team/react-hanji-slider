import React from "react";
export interface Animation {
    speed?: number;
    step1: number;
    step2: number;
    step3: number;
}
interface HanjiSliderProps {
    slidePrimary: React.ReactElement;
    stylePrimary?: React.CSSProperties;
    slideSecondary: React.ReactElement;
    styleSecondary?: React.CSSProperties;
    defaultPercentage?: number;
    styleWrap?: React.CSSProperties;
    separatorColor?: string;
    animation?: Animation;
}
export declare const HanjiSlider: React.FC<HanjiSliderProps>;
export {};
