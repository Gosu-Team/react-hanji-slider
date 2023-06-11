import React from "react";
import HanjiSlider from "../dist/index";
import imgPrimary from './1.jpg';
import imgSecondary from './2.jpg';

export default function Examples() {
  return (
    <div className="main">
      <HanjiSlider
        animation={{step1: 0, step2: 100, step3: 75}}
        slidePrimary={
          <div>
            <h2>Primary</h2>
            <img src={imgPrimary} alt="My Awesome Image" />
          </div>
        }
        styleSecondary={{background: 'yellow'}}
        slideSecondary={
          <div>
            <h2>Secondary</h2>
            <img src={imgSecondary} alt="My Awesome Image" />
          </div>
        } />
    </div>
  );
}
