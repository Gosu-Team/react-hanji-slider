import * as React from "react";
import "./style.scss";
interface HanjiSliderProps {
    slidePrimary: React.ReactElement;
    stylePrimary?: Record<string, unknown>;
    slideSecondary: React.ReactElement;
    styleSecondary?: Record<string, unknown>;
    defaultPercentage?: number;
}
export declare const ReactHanjiSlider: {
    ({ defaultPercentage, slidePrimary, stylePrimary, slideSecondary, styleSecondary, }: HanjiSliderProps): React.ReactElement;
    displayName: string;
};
export {};
