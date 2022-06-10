# @kimbro95-hooks/leave

📌React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.

## Installation

#### npm

`npm i @kimbro95-hooks/leave`

## Usage

```js
import React from "react";
import usePreventLeave from "@kimbro95-hooks/leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return <button onClick={saveChanges}>Save changes</button>;
}
```

### Return

| Return value | Type   | Description                                                                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Functions    | Object | A object containing functions `enablePrevent` and `disablePrevent`, use this functions to enable/disable the leaving prevention |