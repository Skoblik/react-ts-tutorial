import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";
import { personName } from "../../data/PersonStorage";

const messageCount = 10;

describe("Greet Component", () => {
  test("should render the component", () => {
    render(
      <Greet
        name={personName.first}
        messageCount={messageCount}
        isLoggedIn={true}
      />
    );
    const greetElement = screen.getByRole("heading", { level: 2 });
    expect(greetElement).toBeInTheDocument();
  });

  test("should render the component with proper text", () => {
    render(
      <Greet
        name={personName.first}
        messageCount={messageCount}
        isLoggedIn={true}
      />
    );

    const greetElement = screen.getByRole("heading", { level: 2 });
    expect(greetElement).toHaveTextContent(
      `Greetings ${personName.first}! Lucky thing will happen today with you ${messageCount} times`
    );
  });

  test("should render the component with proper text when 'messageCount' not defined", () => {
    render(<Greet name={personName.first} isLoggedIn={true} />);

    const greetElement = screen.getByRole("heading", { level: 2 });
    expect(greetElement).toHaveTextContent(
      `Greetings ${personName.first}! Lucky thing will happen today with you 0 times`
    );
  });
});
