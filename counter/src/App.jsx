import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(5);

  const handleIncrement = () => {
    ///// If we write like below then only the one value increment happens. Because useState send all task in single batch.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // This will work because setter function provides the previous updated value
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Counter Value: {counter}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
