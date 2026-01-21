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
import Cart from "./cart";
import Checkout from "./checkout";

type Screen = "signup" | "login" | "app" | "about" | "contact" | 'myAccount' | 'wishlist' | 'cart'|'checkout';

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
  const [cart, setCart] = useState<any[]>([]);


const wishlistIds = wishlist.map(item => item.id);

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };






  const wishlistCount = wishlist.length;
  const cartCount = cart.length;


  const goToMyAccount = () => {
    setScreen("myAccount");
  };

  const addToWishlist = (product: any) => {
     setWishlist((prev) => {
    const exists = prev.some(item => item.id === product.id);
    if (exists) {
      return prev.filter(item => item.id !== product.id);
    } else {
      return [...prev, product];
    }
  });


    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
       toast.info("Removed from wishlist");
    } else {
      toast.success("Added to wishlist ");
    }
  };

  
  
const addToCart = (product: any) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    
   
  };






  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>



      {screen === "app" && (
        <App
          onContactClick={() => setScreen("contact")}
          onHomeClick={() => setScreen("app")}
          onAboutClick={() => setScreen("about")}
          onSignUpClick={() => setScreen("signup")}
          onLoginClick={() => setScreen("login")}
          onMyAccountClick={goToMyAccount}
          onAddToWishlist={addToWishlist}
          onWishlistClick={() => setScreen("wishlist")}
          wishlistCount={wishlistCount}
          onAddToCart={addToCart}
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}
          wishlistIds={wishlistIds}

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
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}
           onNavigate={(screen) => setScreen(screen as any)}
        />
      )}

      {screen === "contact" && (
        <Contact
          onAboutClick={() => setScreen("about")}
          onSignUpClick={() => setScreen("signup")}
          onHomeClick={() => setScreen("app")}
          onLoginClick={() => setScreen("login")}
          onMyAccountClick={goToMyAccount}
          onWishlistClick={() => setScreen("wishlist")}
          wishlistCount={wishlistCount}
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}
           onNavigate={(screen) => setScreen(screen as any)}

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
          onWishlistClick={() => setScreen("wishlist")}
          wishlistCount={wishlistCount}
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}
           onNavigate={(screen) => setScreen(screen as any)}
        />
      )}

      {screen === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          onHomeClick={() => setScreen("app")}
          onSignUpClick={() => setScreen("signup")}
          onAboutClick={() => setScreen("about")}
          onLoginClick={() => setScreen("login")}
          onMyAccountClick={goToMyAccount}
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}


        />
      )}

      {screen === "cart" && (
        <Cart
          cart={cart}
          onHomeClick={() => setScreen("app")}
          onContactClick={() => setScreen("contact")}

          onAboutClick={() => setScreen("about")}
          onSignUpClick={() => setScreen("signup")}
          onLoginClick={() => setScreen("login")}
          onMyAccountClick={goToMyAccount}
          onAddToWishlist={addToWishlist}
          onWishlistClick={() => setScreen("wishlist")}
          wishlistCount={wishlistCount}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onCheckout={() => setScreen("checkout")}
           onNavigate={(screen) => setScreen(screen as any)}
        />
      )}

      {screen === "checkout" && (
  <Checkout
    cart={cart}
    onHomeClick={() => setScreen("app")}
     onNavigate={(screen) => setScreen(screen as any)}
     onAboutClick={() => setScreen("about")}
          onSignUpClick={() => setScreen("signup")}
          onLoginClick={() => setScreen("login")}
          onMyAccountClick={goToMyAccount}
          onWishlistClick={() => setScreen("wishlist")}
          wishlistCount={wishlistCount}
          onCartClick={() => setScreen("cart")}
          cartCount={cartCount}
          onContactClick={() => setScreen("contact")}
          

    
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


