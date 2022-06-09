# @kimbro95-hooks/use-title

📌React Hook to update your document's title.

## Installation

#### npm

`npm i @kimbro95-hooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@kimbro95-hooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |