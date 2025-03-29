import "./App.css";
import { Greet } from "./components/greet/Greet";
import { PersonList } from "./components/person list/PersonList";
import { Person } from "./components/person/Person";
import { Status } from "./components/status/Status";
import { nameList, personName } from "./data/PersonStorage";

function App() {
  return (
    <div className="App">
      <Greet name="Yurii" messageCount={11} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
    </div>
  );
}

export default App;
