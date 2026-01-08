import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import sideImage from "./assets/SideImage.png";
import type {User} from "./AuthRoot";

interface LoginProps {
  users: User[];
  onLogin: () => void;
  onSwitch: () => void;
}

const Login = ({ users, onLogin, onSwitch }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Header onSignUpClick={onSwitch}
  currentScreen="login" />

      <div className="flex max-w-7xl mx-auto px-6 py-20 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <img src={sideImage} className="w-3/4" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-2">
            Log in to Exclusive
          </h2>

          <input
            className="border-b w-full py-2 mb-4"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            className="border-b w-full py-2 mb-2"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="bg-red-500 text-white px-8 py-3 rounded"
          >
            Log In
          </button>

          <p className="text-sm mt-6">
            Don't have an account?{" "}
            <span onClick={onSwitch} className="text-red-500 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
