import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) setValue(value);
  }
  return { value, onChange };
}

// 함수형 컴포넌트
const App = () => {
  const maxLength = (value) => value.length <= 10;
  //const maxLength = (value) => !value.includes("@");
  const name = useInput("KimBro", maxLength);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        //value={name.value}
        //onChange={name.onChange}
        {...name}
      />
    </div>
  );
}

export default App;