import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Counter App</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
