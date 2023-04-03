import React from "react";

// don't change the Component name "App"
export default function App() {
  const [change, setChange] = React.useState(false);
  const changeHandler = () => {
    setChange(true);
  };
  return (
    <div>
      <p className={`${!change ? "active" : ""}`}>Style me!</p>
      <button onClick={changeHandler}>Toggle style</button>
    </div>
  );
}
