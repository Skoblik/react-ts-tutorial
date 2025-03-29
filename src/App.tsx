import "./App.css";
import { Greet } from "./components/greet/Greet";
import { Heading } from "./components/heading/Heading";
import { Oscar } from "./components/oscar/Oscar";
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
      <Heading>Heading component</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
