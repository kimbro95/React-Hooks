import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";

// useScroll 
// const useScroll  = () => {
//   const [state, setState ] = useState({
//     x: 0,
//     y: 0
//   });
//   const onScroll = () => {
//     setState({
//       y: window.pageYOffset,
//       x: window.pageYOffset
//     });
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])
//   return state;
// }

// const App = () => {
//   const { y } = useScroll();

//   return (
//     <div className="App" style={{ height: "1000vh"}}>
//       <h1 style={{position: "fixed", color : y > 100 ? "red" : "blue"}}>hi</h1>
//     </div>
//   );
// };

// useFullscreen
const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
      if(callback && typeof callback === "function"){
        callback(true);
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen();
    if(callback && typeof callback === "function"){
      callback(false);
    }
  }
  return {element, triggerFull, exitFull};
}

const App = () => {
  const onFull = (isFull) => {
    console.log(isFull ? "Full" : "Not Full");
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFull);

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={triggerFull}>Full Screen</button>
        <button onClick={exitFull}>Exit Screen</button>
      </div>
    </div>
  );
};

export default App;