import "./App.css";
import { Greet } from "./components/greet/Greet";
import { Person } from "./components/person/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <Greet name="Yurii" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
