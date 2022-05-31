import React, { useEffect, useRef, useState } from "react";

// useFadeIn
// const useFadeIn = (duration = 1, delay = 0) => {
//   const element = useRef();
//   useEffect(() => {
//     if (typeof duration !== "number" || typeof delay !== "number") return;
//     if (element.current) {
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
//       current.style.opacity = 1;
//     }
//   }, [])
//   return { ref: element, style: { opacity: 0 } };
// }

// const App = () => {
//   const fadeInH1 = useFadeIn(1, 2);
//   const fadeInP = useFadeIn(3, 5);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hi</h1>
//       <p {...fadeInP}>P tag</p>
//     </div>
//   );
// };


// useNetwork
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
}

const App = () => {
  const handleNewtworkChange = (online) => {
    console.log(online ? "Online" : "Offline")
  };
  const onLine = useNetwork(handleNewtworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;