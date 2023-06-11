# React Hanji Slider

**React Hanji Slider** is a React component that allows users to compare two blocks of content interactively. By dragging a slider control, users can unveil or conceal the respective content blocks, providing a visually engaging method for comparing different types of data or images

## Demo

Examples: https://react-hanji-slider-demo.vercel.app/

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-hanji-slider --save
```

If you're using `yarn`, run:

```sh
yarn add react-hanji-slider
```

## Usage

To use the component, first import `ReactHanjiSlider` into your file:

```jsx
import ReactHanjiSlider from "react-hanji-slider";
```

```jsx
<ReactHanjiSlider
  slidePrimary={<div>Primary Component 🥢</div>}
  slideSecondary={<div>Secondary Component 🍚</div>}
/>
```

## Props

| Property             | Type           | Default     | Description                                                 |
| :--------------------|:---------------|:------------|:------------------------------------------------------------|
| `slidePrimary`       | `Element`      | `null`      | Used to compare with Secondary component                    |
| `stylePrimary`       | `styles`       | `undefined` | Styles for Primary component wrap                           |
| `slideSecondary`     | `Element`      | `null`      | Used to compare with Primary component                      |
| `styleSecondary`     | `styles`       | `undefined` | Styles for Secondary component wrap                         |
| `styleWrap`          | `styles`       | `undefined` | Styles for root wrap                                        |
| `defaultPercentage`  | `number`       | `50`        | Default proportion of content visibility                    |
| `separatorColor`     | `string`       | `#fff`      | Color of separator                                          |
| `animation`          | `object`       | `null`      | speed?: number, step1: number, step2: number, step3: number |
