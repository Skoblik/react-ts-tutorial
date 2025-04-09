import "./App.css";
import { Button } from "./components/button/Button";
import { Container } from "./components/container/Container";
import { Greet } from "./components/greet/Greet";
import { Heading } from "./components/heading/Heading";
import { Input } from "./components/input/Input";
import { Oscar } from "./components/oscar/Oscar";
import { PersonList } from "./components/person list/PersonList";
import { Person } from "./components/person/Person";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/status/Status";
import { nameList, personName } from "./data/PersonStorage";

function App() {
  return (
    <div className="App">
      <Greet name="Yurii" messageCount={15} isLoggedIn={true} />
      {/* <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Heading component</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      <LoggedIn />
      <User name="Bobr" email="bobr_k@test.com" />
      <Counter />
    </div>
  );
}

export default App;
