import React,{useState} from "react";

function CounterFunction() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="App-headergrey">
      <h3>Counter with hooks</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment!</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </div>
  );
}

export default CounterFunction;
