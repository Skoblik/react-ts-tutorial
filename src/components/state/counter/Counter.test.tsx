import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter Component", () => {
  test("should render the component", () => {
    render(<Counter />);

    const countTextContainer = screen.getByText(/count:/i);
    const incrementButton = screen.getByRole("button", {
      name: /increment 10/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement 10/i,
    });
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });

    expect(countTextContainer).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  test("should increment count by 10", () => {
    render(<Counter />);

    const countTextContainer = screen.getByText(/count:/i);
    const incrementButton = screen.getByRole("button", {
      name: /increment 10/i,
    });

    expect(countTextContainer).toHaveTextContent("Count: 0");

    user.click(incrementButton);
    expect(countTextContainer).toHaveTextContent("Count: 10");
  });

  test("should decrement count by 10", () => {
    render(<Counter />);

    const countTextContainer = screen.getByText(/count:/i);
    const decrementButton = screen.getByRole("button", {
      name: /decrement 10/i,
    });

    expect(countTextContainer).toHaveTextContent("Count: 0");

    user.click(decrementButton);
    expect(countTextContainer).toHaveTextContent("Count: -10");
  });

  test("should reset count to 0 from incremented", () => {
    render(<Counter />);

    const countTextContainer = screen.getByText(/count:/i);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    const incrementButton = screen.getByRole("button", {
      name: /increment 10/i,
    });

    user.click(incrementButton);
    expect(countTextContainer).toHaveTextContent("Count: 10");

    user.click(resetButton);
    expect(countTextContainer).toHaveTextContent("Count: 0");
  });

  test("should reset count to 0 from decremented", () => {
    render(<Counter />);

    const countTextContainer = screen.getByText(/count:/i);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    const decrementButton = screen.getByRole("button", {
      name: /decrement 10/i,
    });

    user.click(decrementButton);
    expect(countTextContainer).toHaveTextContent("Count: -10");

    user.click(resetButton);
    expect(countTextContainer).toHaveTextContent("Count: 0");
  });
});
