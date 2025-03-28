import { GreetProps } from "./Greet.types";

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Greetings ${props.name}! Lucky thing will happen today with you ${props.messageCount} times`
          : "You are not logged in"}
      </h2>
    </div>
  );
};
