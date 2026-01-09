import { useState, useEffect } from "react";
import App from "./App";
import SignUp from "./signUp";
import Login from "./login";
import About from "./about";
import Contact from "./contact";

type Screen = "signup" | "login" | "app" | "about" | "contact";

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
      onContactClick={() => setScreen("contact")}
      onHomeClick={() => setScreen("app")}
      onAboutClick={() => setScreen("about")}
      onSignUpClick={() => setScreen("signup")}

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

  if (screen === "about") {
    return (
      <About
        onContactClick={() => setScreen("contact")}
        onSignUpClick={() => setScreen("signup")}
        onHomeClick={() => setScreen("app")}

      />
    );
  }

  if (screen === "contact") {
    return (
      <Contact

        onAboutClick={() => setScreen("about")}
        onSignUpClick={() => setScreen("signup")}
        onHomeClick={() => setScreen("app")}

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
