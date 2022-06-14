# @bro95-hooks/use-fullscreen

📌React Hook to make any element go Fullscreen

## Installation

#### npm

`npm i @bro95-hooks/use-fullscreen`

## Usage

```js
import React from "react";
import useFullscreen from "@bro95-hooks/use-fullscreen";

function App() {
  const onChange = isFull =>
    console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen");
  const { element, triggerFull, exitFull } = useFullscreen(onChange);
  return (
    <div ref={element}>
      <h1>Hello</h1>
      <button onClick={triggerFull}>Make this Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
}
```

### Arguments

| Argument | Type     | Description                                                       | Arguments        | Required |
| -------- | -------- | ----------------------------------------------------------------- | ---------------- | -------- |
| onChange | function | Function to be called when the screen goes Fullscreen or exits is | isFull : Boolean | no       |

### Return

`useFullscreen` returns an object containing the following:

| Return value | Type      | Description                                                |
| ------------ | --------- | ---------------------------------------------------------- |
| element      | React Ref | Ref to add to the element that you want to make fullscreen |
| triggerFull  | Function  | Function to make the element enter fullscreen              |
| exitFull     | Function  | Function to make the document exit fullscreen              |