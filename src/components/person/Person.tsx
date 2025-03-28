import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>{`Author: ${props.name.first} ${props.name.last}`}</p>
    </div>
  );
};
