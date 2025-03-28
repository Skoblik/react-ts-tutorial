import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet Component", () => {
  test("should render the component", () => {
    render(<Greet name="Yurii" messageCount={10} isLoggedIn={true} />);
    const greetElement = screen.getByRole("heading", { level: 2 });
    expect(greetElement).toBeInTheDocument();
  });

  test("should render the component with proper text", () => {
    const name = "Yurii";
    const messageCount = 10;
    render(<Greet name={name} messageCount={messageCount} isLoggedIn={true} />);

    const greetElement = screen.getByRole("heading", { level: 2 });
    expect(greetElement).toHaveTextContent(
      `Greetings ${name}! Lucky thing will happen today with you ${messageCount} times`
    );
  });
});
