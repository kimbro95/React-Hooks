import React from "react";

// useNotification
const useNotification = (title, options) => {
  if(!("Notification" in window)){
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }
  return fireNotif;
};

const App = () => {
  const triggerNotifi = useNotification("Hello", {body : "this is body"});
  return (
    <div className="App">
      <button onClick={triggerNotifi}>Hi</button>
    </div>
  );
};

export default App;