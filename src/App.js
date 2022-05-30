import React, { useEffect, useRef } from "react";

// useConfirm
// const useConfirm = (message = "", callback, rejection) => {
//   if (typeof callback !== "function") {
//     return;
//   }
//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       callback();
//     } else {
//       try {
//         rejection();
//       } catch (error) {
//         return;
//       }
//     }
//   }
//   return confirmAction;
// }

// const App = () => {
//   const deleteData = () => console.log("delete...");
//   const abort = () => console.log("aborted");
//   const confirmDelete = useConfirm("Are u sure ?", deleteData, abort);
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete</button>
//     </div>
//   );
// };

// usePreventLeave
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const unablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  return { unablePrevent, disablePrevent }
}

const App = () => {
  const { unablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={unablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default App;