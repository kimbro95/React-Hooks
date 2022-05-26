import React, { useEffect, useState } from "react";

const App = () => {
  const hello = () => console.log("hello !!!");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
}

export default App;