import React from "react";
import "./style.scss";
interface RangeInputProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    isDragging: boolean;
    setIsDragging: (value: boolean) => void;
}
declare const RangeInput: React.FC<RangeInputProps>;
export default RangeInput;
