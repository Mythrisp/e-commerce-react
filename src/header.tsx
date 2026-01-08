
import { FiSearch } from "react-icons/fi";
import type { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  onSignUpClick?: () => void;
  currentScreen?: "signup" | "login" | "app";
}


const Header=({ children,onSignUpClick ,currentScreen}:HeaderProps)=>{
    return(
        <header className="bg-white shadow px-4 md:px-10 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl font-bold text-center md:text-left">Exclusive</h1>
           <nav className="flex justify-center md:justify-start gap-6 text-sm font-medium">
          <a >Home</a>
          <a >Contact</a>
          <a >About</a>
          <a onClick={onSignUpClick}
          className={`cursor-pointer ${
            currentScreen === "signup"
              ? "underline underline-offset-4 font-semibold"
              : ""
          }`}>Sign Up</a>
        </nav>

        <div className="relative w-full md:w-64">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full border rounded px-4 py-2"
        />
        <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
      </div>

<div className="flex items-center justify-center md:justify-end gap-4">
        {children}
      </div>
            
        </div>
        </header>
        

    )
}
export default Header