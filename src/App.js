import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  }
  return { value, onChange };
}

// 함수형 컴포넌트
const App = () => {
  const name = useInput("KimBro");
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