import { render, screen } from "@testing-library/react";
import { Person } from "./Person";
import { personName } from "../../data/PersonStorage";

describe("Person Component", () => {
  test("should render the component", () => {
    render(<Person name={personName} />);
    const personElement = screen.getByLabelText("person");
    expect(personElement).toBeInTheDocument();
  });

  test("should render the component with proper text", () => {
    render(<Person name={personName} />);
    const personElement = screen.getByLabelText("person");
    expect(personElement).toHaveTextContent("Author: Yurii The Great");
  });
});
