import { render, screen } from "@testing-library/react";
import { Status } from "./Status";

describe("Status Component", () => {
  test("should render the component", () => {
    render(<Status status="success" />);
    const statusElement = screen.getByRole("heading", { level: 2 });
    expect(statusElement).toBeInTheDocument();
  });

  test("should render the component with 'success' status", () => {
    render(<Status status="success" />);
    const statusElement = screen.getByRole("heading", { level: 2 });
    expect(statusElement).toHaveTextContent(
      "Status - Data fetched successfully"
    );
  });

  test("should render the component with 'error' status", () => {
    render(<Status status="error" />);
    const statusElement = screen.getByRole("heading", { level: 2 });
    expect(statusElement).toHaveTextContent("Status - Error fetching data");
  });

  test("should render the component with 'loading' status", () => {
    render(<Status status="loading" />);
    const statusElement = screen.getByRole("heading", { level: 2 });
    expect(statusElement).toHaveTextContent("Status - Loading...");
  });
});
