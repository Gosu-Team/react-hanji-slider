﻿# React Hanji Slider

**React Hanji Slider** is a dynamic, user-friendly React component that allows users to compare two blocks of content interactively. By dragging a slider control, users can unveil or conceal the respective content blocks, providing a visually engaging method for comparing different types of data or images.

## Demo


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
import ReactHanjiSlider from "react-stack-photos";
```

```jsx
<ReactHanjiSlider slideBefore="<div>Any Component</div>" slideAfter="<div>Any Component</div>"/>
```

## Props

| Property           | Type           | Default | Description                                                    |
| :----------------- | :------------- | :------ | :--------------------------------------------------------------|
| `slideBefore`      | `Element`      | `null`  | Used to compare with second component                          |
| `height`           | `Element`      | `null`  | Used to compare with first component                           |