import { PersonListProps } from "./PersonList.types";

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>List of persons</h1>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
