import { useState } from "react";
import "./App.css";
import Triangle from "./components/Triangle";

function App() {
  const [sideA, setSideA] = useState("200,10");
  const [sideB, setSideB] = useState("250,190");
  const [sideC, setSideC] = useState("160,210");
  return (
    <div style={{ color: "black" }}>
      <input
        type="text"
        onChange={(e) => setSideA(e.target.value)}
        placeholder="x,y for a"
      />
      <input
        type="text"
        onChange={(e) => setSideB(e.target.value)}
        placeholder="x,y for b"
      />
      <input
        type="text"
        onChange={(e) => setSideC(e.target.value)}
        placeholder="x,y for c"
      />
      <svg width="500" height="500">
        <Triangle a={sideA} b={sideB} c={sideC} />
      </svg>
    </div>
  );
}

export default App;
