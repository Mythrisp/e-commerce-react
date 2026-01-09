
import { FiSearch } from "react-icons/fi";
import type { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  onSignUpClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onContactClick?: () => void

  currentScreen?: "signup" | "login" | "app" | "about" | "contact";
}


const Header = ({ children, onSignUpClick, onHomeClick, onContactClick, onAboutClick, currentScreen }: HeaderProps) => {
  return (
    <header className="bg-white shadow px-4 md:px-10 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-center md:text-left">Exclusive</h1>
        <nav className="flex justify-center md:justify-start gap-6 text-sm font-medium *:hover:text-red-800">
          <a
            onClick={onHomeClick} className={`cursor-pointer ${currentScreen === "app"
                ? "underline underline-offset-4 font-semibold"
                : ""
              }`}>Home</a>
          <a onClick={onContactClick}
            className={`cursor-pointer ${currentScreen === "contact"
                ? "underline underline-offset-4 font-semibold"
                : ""
              }`}>Contact</a>
          <a
            onClick={onAboutClick}
            className={`cursor-pointer ${currentScreen === "about"
                ? "underline underline-offset-4 font-semibold"
                : ""
              }`}>About</a>
          <a onClick={onSignUpClick}
            className={`cursor-pointer ${currentScreen === "signup"
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
