# @bro95-hooks/use-input

📌React Hook to put the value in target.

## Installation

#### npm

`npm i @bro95-hooks/use-input`

## Usage

```js
import React from "react";
import useInput from "@nooks/use-input"

const App = () => {
  const validator = value => !value.includes("@");
  const name = useInput("Mr. ", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
};
```