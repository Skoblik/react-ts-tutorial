import { useState } from "react";

export const LoggedIn = ({
  initialLoginState = false,
}: {
  initialLoginState?: boolean;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
