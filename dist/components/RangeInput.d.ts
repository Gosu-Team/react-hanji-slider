import React from "react";
interface RangeInputProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    isDragging: boolean;
    setIsDragging: (value: boolean) => void;
    separatorColor?: string;
}
declare const RangeInput: React.FC<RangeInputProps>;
export default RangeInput;
