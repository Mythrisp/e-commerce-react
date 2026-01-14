import { useState, useEffect } from "react";
import App from "./App";
import SignUp from "./signUp";
import Login from "./login";
import About from "./about";
import Contact from "./contact";
import MyAccount from "./myAccount";
import Wishlist from "./wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Screen = "signup" | "login" | "app" | "about" | "contact"|'myAccount'|'wishlist';

export interface User {
  id: number;
  firstName: string;
  email: string;
  password: string;
}

const AuthRoot = () => {
  const [screen, setScreen] = useState<Screen>("signup");
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [wishlist, setWishlist] = useState<any[]>([]);

  const wishlistCount = wishlist.length;


  const goToMyAccount = () => {
  setScreen("myAccount");
};

const addToWishlist = (product: any) => {
  setWishlist((prev) => {
    const alreadyExists = prev.some(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      return prev;
    }

    return [...prev, product];
  });

  
  const exists = wishlist.some(
    (item) => item.id === product.id
  );

  if (exists) {
    toast.info("Already added to wishlist ");
  } else {
    toast.success("Added to wishlist ");
  }
};


  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return(
    <>
    {screen === "app" && (
      <App
       onContactClick={() => setScreen("contact")}
      onHomeClick={() => setScreen("app")}
      onAboutClick={() => setScreen("about")}
      onSignUpClick={() => setScreen("signup")}
      onLoginClick={()=>setScreen("login")}
      onMyAccountClick={goToMyAccount}
      onAddToWishlist={addToWishlist}
       onWishlistClick={() => setScreen("wishlist")}
       wishlistCount={wishlistCount}
    
      />
    )}

    {screen === "login" && (
      <Login
       users={users}
        onLogin={(user) => {
  setCurrentUser(user);
  setScreen("app");
}}
        onSwitch={() => setScreen("signup")}
      />
    )}

    {screen === "about" && (
      <About
       onContactClick={() => setScreen("contact")}
        onSignUpClick={() => setScreen("signup")}
        onHomeClick={() => setScreen("app")}
        onWishlistClick={() => setScreen("wishlist")}
        wishlistCount={wishlistCount}
      />
    )}

    {screen === "contact" && (
      <Contact
         onAboutClick={() => setScreen("about")}
        onSignUpClick={() => setScreen("signup")}
        onHomeClick={() => setScreen("app")}
       onLoginClick={()=>setScreen("login")}
       onMyAccountClick={goToMyAccount}
       onWishlistClick={() => setScreen("wishlist")}
       wishlistCount={wishlistCount}
       
      />
    )}

    {screen === "myAccount" && (
      <MyAccount
       currentUser={currentUser}
      onHomeClick={() => setScreen("app")}
      onAboutClick={() => setScreen("about")}
      onSignUpClick={() => setScreen("signup")}
      onLoginClick={() => {
        setCurrentUser(null);
        setScreen("login");
        
      }}
      onMyAccountClick={goToMyAccount}
      />
    )}

    {screen === "wishlist" && (
      <Wishlist
        wishlist={wishlist}
      onHomeClick={() => setScreen("app")}
      onSignUpClick={() => setScreen("signup")}
      onAboutClick={() => setScreen("about")}
      onLoginClick={()=>setScreen("login")}
      onMyAccountClick={goToMyAccount}
      wishlistCount={wishlistCount}
      />
    )}

    {screen === "signup" && (
     <SignUp

      onSignup={() => setScreen("app")}
      onSwitch={() => setScreen("login")}
    />
    )}

   
    <ToastContainer position="top-right" autoClose={2000} />

    </>
  )
}
export default AuthRoot;
