type GreetProps = {
  name: string;
  messageCount: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Greetings {props.name}! Lucky thing will happen today with you{" "}
        {props.messageCount} times
      </h2>
    </div>
  );
};
