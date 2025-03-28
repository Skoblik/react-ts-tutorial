import "./App.css";
import { Greet } from "./components/greet/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Yurii" messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
