import { PersonListProps } from "./PersonList.types";

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>List of persons</h1>
      <ul>
        {props.names.map((name) => {
          return (
            <li key={name.last}>
              {name.first} {name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
