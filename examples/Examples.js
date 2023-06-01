import React from "react";
import HanjiSlider from "../dist/index";

export default function Examples() {
  return (
    <div className="main">
      <HanjiSlider
        slideBefore={
          <div>1111111111111111111111111111111111111111111111111</div>
        }
        slideAfter={
          <div>22222222222222222222222222222222222222222222222222</div>
        } />
    </div>
  );
}
