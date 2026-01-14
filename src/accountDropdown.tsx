import { useState } from "react";
import { FiUser, FiLogOut,FiPackage,FiXCircle,FiStar } from "react-icons/fi";

interface UserMenuProps {
  onLogout: () => void;
  onMyAccountClick:()=>void;
}

const AccountDropdown = ({ onLogout,onMyAccountClick }: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <FiUser
        className="text-xl cursor-pointer hover:text-red-500"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 mt-2 w-48 shadow-lg rounded text-sm z-50 bg-white/90 backdrop-blur-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer items-center flex gap-2" onClick={() => {
    onMyAccountClick();   
    setOpen(false);      
  }}>
             <FiUser/> Manage My Account
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer items-center flex gap-2">
              <FiPackage/> My Orders
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer items-center flex gap-2">
             <FiXCircle/> My Cancellations
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer items-center flex gap-2">
              <FiStar/>My Reviews
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={onLogout}
            >
              <FiLogOut /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
