import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div aria-label="person">
      <p>{`Author: ${props.name.first} ${props.name.last}`}</p>
    </div>
  );
};
