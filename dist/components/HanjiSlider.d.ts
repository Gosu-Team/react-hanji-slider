import React from "react";
interface HanjiSliderProps {
    slidePrimary: React.ReactElement;
    stylePrimary?: React.CSSProperties;
    slideSecondary: React.ReactElement;
    styleSecondary?: React.CSSProperties;
    defaultPercentage?: number;
    value?: number;
    styleWrap?: React.CSSProperties;
    separatorColor?: string;
}
export declare const HanjiSlider: React.FC<HanjiSliderProps>;
export {};
