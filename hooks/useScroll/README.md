# @bro95-hooks/use-scroll

📌React Hook to get X / Y coordinates of current position of the scroll.

## Installation

#### npm

`npm i @bro95-hooks/use-scroll`

## Usage

```js
import React from "react";
import useScroll from "@bro95-hooks/use-scroll";
function App() {
  const { x, y } = useScroll();
  return (
    <h1>
      We are in: {x} / {y}
    </h1>
  );
}
```

### Return

| Return value | Type   | Description                                                             | Default value        |
| ------------ | ------ | ----------------------------------------------------------------------- | ---------------------|
| Coords       | Object | An object containing the x/y coordinates of the current scroll position | `{ x : 0,  y : 0 }`  |