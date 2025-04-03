import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LoggedIn } from "./LoggedIn";

describe("LoggedIn Component", () => {
  test("should render the component default text", () => {
    render(<LoggedIn />);
    const loggedOutTextContainer = screen.getByText(/logged out/i);
    expect(loggedOutTextContainer).toBeInTheDocument();
  });

  test("should render the component Login button", () => {
    render(<LoggedIn />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("should render the component Logout button", () => {
    render(<LoggedIn />);
    const logoutButton = screen.getByRole("button", {
      name: /logout/i,
    });
    expect(logoutButton).toBeInTheDocument();
  });

  test("should render message after user click login", () => {
    render(<LoggedIn />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    const loggedOutTextContainer = screen.queryByText(/logged out/i);
    expect(loggedOutTextContainer).toBeInTheDocument();

    user.click(loginButton);

    const loggedInTextContainer = screen.queryByText(/logged in/i);
    expect(loggedInTextContainer).toBeInTheDocument();
  });

  test("should render message after user click logout", () => {
    render(<LoggedIn initialLoginState={true} />);
    const logoutButton = screen.getByRole("button", {
      name: /logout/i,
    });
    const loggedInTextContainer = screen.queryByText(/logged in/i);
    expect(loggedInTextContainer).toBeInTheDocument();

    user.click(logoutButton);

    const loggedOutTextContainer = screen.queryByText(/logged out/i);
    expect(loggedOutTextContainer).toBeInTheDocument();
  });
});
