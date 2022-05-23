import React, { useState } from "react";

// 함수형 컴포넌트
const App = () => {
  const [item, setItem] = useState(1);
  const plus = () => setItem(item + 1);
  const minus = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello CodeSandbox {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

// 클래스형 컴포넌트
class ClassApp extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox Class {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
  plus = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }

  minus = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
}

export default App;