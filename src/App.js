import "./App.css";
import Counterfunc from "./CounterFunction.js";
import Counterclass from "./CounterClass.js";
import Counterclass2 from "./CounterClass2.js";
import CounterClassBest from "./counterClassBest.js";

function App() {
  return (
    <div className="App">
      <Counterfunc />
      <Counterclass />
      <Counterclass2 />
      <CounterClassBest />
    </div>
  );
}

export default App;
