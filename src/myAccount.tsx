import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Header from "./header";
import AccountDropdown from "./accountDropdown";
import Breadcrumb from "./breadcrumb";
import { useState } from "react";
import ProfileForm from "./profileForm";
import type {User} from "./AuthRoot";

type AccountTab = "profile"| "address"| "payment" | "returns" | "cancellations";
interface AccountProps {
    currentUser: User | null;
    onSignUpClick: () => void;
    onAboutClick:()=>void
    onHomeClick:()=>void;
    onLoginClick:()=>void;
    onMyAccountClick:()=>void
    

}



const MyAccount=({ currentUser,onSignUpClick,onAboutClick,onHomeClick,onLoginClick,onMyAccountClick }:AccountProps)=>{
   
const [activeTab, setActiveTab] = useState<AccountTab>("profile");

   
    return(
        <>
        <Header onHomeClick={onHomeClick} onSignUpClick={onSignUpClick}
            onAboutClick={onAboutClick}
                currentScreen="contact"
            >
                <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
                <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
                <AccountDropdown onLogout={() => onLoginClick()}  onMyAccountClick={onMyAccountClick} />
                
            </Header>
            <div className="flex justify-between w-full px-10 mt-6 text-sm text-gray-500">
  <Breadcrumb currentScreen="myAccount" onHomeClick={onHomeClick} />

  {currentUser && (
    <span>
      Welcome!{" "}
      <span className="text-red-500 font-medium">
        {currentUser.firstName}
      </span>
    </span>
  )}
</div>
<div className="grid grid-cols-1 md:grid-cols-3 mt-30 p-10 items-center justify-center gap-4">
<div className="md:col-span-1 space-y-4 pl-8">
  <div className="space-y-2 pb-3 ">
      <h3 className="font-bold">Manage My Account</h3>
    <p      onClick={() => setActiveTab("profile")}
      className={`pl-6 text-sm cursor-pointer ${
        activeTab === "profile" ? "text-red-500 font-medium" : "text-gray-500"
      }`}>My Profile</p>

    <p      onClick={() => setActiveTab("address")}
      className={`pl-6 text-sm cursor-pointer ${
        activeTab === "address" ? "text-red-500 font-medium" : "text-gray-500"
      }`}>Address Book</p>

    <p      onClick={() => setActiveTab("payment")}
      className={`pl-6 text-sm cursor-pointer ${
        activeTab === "payment" ? "text-red-500 font-medium" : "text-gray-500"
      }`}>My Payment Options</p>


  </div>
    <div className="space-y-2 pb-3">
        <h3 className="font-bold"> My Orders</h3>
    <p      onClick={() => setActiveTab("returns" )}
      className={`pl-6 text-sm cursor-pointer ${
        activeTab === "returns" ? "text-red-500 font-medium" : "text-gray-500"
      }`}>My Returns</p>
    <p      onClick={() => setActiveTab("cancellations")}
      className={`pl-6 text-sm cursor-pointer ${
        activeTab === "cancellations" ? "text-red-500 font-medium" : "text-gray-500"
      }`}>My Cancellations</p>
    </div>
    
    <div>
        <h3 className="font-bold">My Wishlist</h3>
    </div>
    
    </div>

    <div className="md:col-span-2 bg-white shadow-md rounded p-8">
  {activeTab === "profile" && <ProfileForm />}
  
</div>

</div>
        </>
    )
}
export default MyAccount;