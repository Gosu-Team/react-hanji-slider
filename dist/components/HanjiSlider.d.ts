import * as React from "react";
interface HanjiSliderProps {
    slidePrimary: React.ReactElement;
    stylePrimary?: Record<string, unknown>;
    slideSecondary: React.ReactElement;
    styleSecondary?: Record<string, unknown>;
    defaultPercentage?: number;
    styleWrap?: Record<string, unknown>;
    separatorColor?: string;
}
export declare const ReactHanjiSlider: {
    ({ defaultPercentage, styleWrap, slidePrimary, stylePrimary, slideSecondary, styleSecondary, separatorColor }: HanjiSliderProps): React.ReactElement;
    displayName: string;
};
export {};
