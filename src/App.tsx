import "./App.css";
import Triangle from "./components/Triangle";

function App() {
  return (
    <div style={{ color: "black" }}>
      <svg width="500" height="500">
        <Triangle a="200,10" b="250,190" c="160,210" />
      </svg>
    </div>
  );
}

export default App;
