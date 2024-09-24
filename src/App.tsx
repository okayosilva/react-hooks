import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleMinus() {
    setCount((prevState) => prevState - 1);
  }

  function handlePlus() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className="">
      <p>{count}</p>

      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
