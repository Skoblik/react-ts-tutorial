import "./App.css";
import { Greet } from "./components/greet/Greet";
import { PersonList } from "./components/person list/PersonList";
import { Person } from "./components/person/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Person",
      last: "One",
    },
    {
      first: "Person",
      last: "Two",
    },
    {
      first: "Person",
      last: "Three",
    },
  ];

  return (
    <div className="App">
      <Greet name="Yurii" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
