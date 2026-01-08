import { useState, useEffect } from "react";
import App from "./App";
import SignUp from "./signUp";
import Login from "./login";

type Screen = "signup" | "login" | "app";

export interface User {
  id: number;
  firstName: string;
  email: string;
  password: string;
}

const AuthRoot = () => {
  const [screen, setScreen] = useState<Screen>("signup");
  const [users, setUsers] = useState<User[]>([]);

 
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  if (screen === "app") {
    return <App
     
      onSignUpClick={() => setScreen("signup")}
      currentScreen={screen}
 />;
  }

  if (screen === "login") {
    return (
      <Login
        users={users}
        onLogin={() => setScreen("app")}
        onSwitch={() => setScreen("signup")}
      />
    );
  }

  return (
    <SignUp
      onSignup={() => setScreen("app")}
      onSwitch={() => setScreen("login")}
    />
  );
};

export default AuthRoot;
