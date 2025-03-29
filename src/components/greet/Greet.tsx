import { GreetProps } from "./Greet.types";

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // Destructuring with default value
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Greetings ${props.name}! Lucky thing will happen today with you ${messageCount} times`
          : "You are not logged in"}
      </h2>
    </div>
  );
};
