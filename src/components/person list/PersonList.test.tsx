import { render, screen } from "@testing-library/react";
import { PersonList } from "./PersonList";

const nameList = [
  {
    first: "Person",
    last: "One",
  },
  {
    first: "Person",
    last: "Two",
  },
  {
    first: "Person",
    last: "Three",
  },
];

describe("PersonList Component", () => {
  test("should render the heading", () => {
    render(<PersonList names={nameList} />);
    const personListElement = screen.getByRole("heading", {
      name: /list of persons/i,
    });
    expect(personListElement).toBeInTheDocument();
  });

  test("should render the list", () => {
    render(<PersonList names={nameList} />);
    const personListElement = screen.getByRole("list");
    expect(personListElement).toBeInTheDocument();
  });

  test("should render the listItems", () => {
    render(<PersonList names={nameList} />);
    const personListElement = screen.getAllByRole("listitem");
    expect(personListElement).toHaveLength(3);
  });
});
