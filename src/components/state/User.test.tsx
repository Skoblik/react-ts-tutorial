import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { User } from "./User";
import { roles } from "../../data/rolesStorage";

describe("User Component", () => {
  test("should render the component", () => {
    render(<User name="first" email="first@test.com" />);

    const loginButton = screen.getByRole(roles.buttonRole, { name: /login/i });
    const logoutButton = screen.getByRole(roles.buttonRole, {
      name: /logout/i,
    });
    const userNameTextContainer = screen.queryByText(/user name is/i);
    const userEmailTextContainer = screen.queryByText(/user email is/i);

    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(userNameTextContainer).toBeInTheDocument();
    expect(userEmailTextContainer).toBeInTheDocument();
  });

  test("should be logout by default", () => {
    render(<User name="loggedOutUser" email="userEmail@test.com" />);

    const userNameTextContainer = screen.queryByText(/loggedOutUser/i);
    const userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).not.toBeInTheDocument();
    expect(userEmailTextContainer).not.toBeInTheDocument();
  });

  test("should login user", () => {
    render(<User name="loggedInUser" email="userEmail@test.com" />);

    const loginButton = screen.getByRole(roles.buttonRole, { name: /login/i });

    let userNameTextContainer = screen.queryByText(/loggedInUser/i);
    let userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).not.toBeInTheDocument();
    expect(userEmailTextContainer).not.toBeInTheDocument();

    userEvent.click(loginButton);

    userNameTextContainer = screen.queryByText(/loggedInUser/i);
    userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).toBeInTheDocument();
    expect(userEmailTextContainer).toBeInTheDocument();
  });

  test("should logout user", () => {
    render(<User name="loggedOutUser" email="userEmail@test.com" />);

    const loginButton = screen.getByRole(roles.buttonRole, { name: /login/i });
    const logoutButton = screen.getByRole(roles.buttonRole, {
      name: /logout/i,
    });

    let userNameTextContainer = screen.queryByText(/loggedOutUser/i);
    let userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).not.toBeInTheDocument();
    expect(userEmailTextContainer).not.toBeInTheDocument();

    userEvent.click(loginButton);

    userNameTextContainer = screen.queryByText(/loggedOutUser/i);
    userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).toBeInTheDocument();
    expect(userEmailTextContainer).toBeInTheDocument();

    userEvent.click(logoutButton);

    userNameTextContainer = screen.queryByText(/loggedOutUser/i);
    userEmailTextContainer = screen.queryByText(/userEmail@test.com/i);

    expect(userNameTextContainer).not.toBeInTheDocument();
    expect(userEmailTextContainer).not.toBeInTheDocument();
  });
});
