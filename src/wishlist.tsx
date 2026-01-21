import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Header from "./header";
import AccountDropdown from "./accountDropdown";
import Footer from "./footer";
import CartIcon from "./cartIcon";

interface WishlistProps {
  onSignUpClick: () => void;
  onAboutClick: () => void
  onHomeClick: () => void;
  onLoginClick: () => void;
  onMyAccountClick: () => void;
  wishlist: any[];
  onCartClick: () => void;
  cartCount: number;
   onAddToCart: (product: any) => void;




}
const Wishlist = ({ onSignUpClick, onAboutClick, onHomeClick, onLoginClick, onMyAccountClick, wishlist, onCartClick, cartCount,onAddToCart }: WishlistProps) => {
  return (
    <>
      <Header onHomeClick={onHomeClick} onSignUpClick={onSignUpClick}
        onAboutClick={onAboutClick}
        currentScreen="wishlist"
      >
        <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
        <CartIcon
          count={cartCount}
          onClick={onCartClick}
        />
        <AccountDropdown onLogout={() => onLoginClick()} onMyAccountClick={onMyAccountClick} />

      </Header>

      <div className="px-10 py-8">
        <h2 className="text-xl font-semibold mb-6">
          Wishlist ({wishlist.length})
        </h2>

        {wishlist.length === 0 && (
          <p className="text-gray-500">Your wishlist is empty</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded p-4">
              <img
                src={item.thumbnail}
                className="w-full h-40 object-contain"
              />
              
              <h3 className="mt-3 text-sm">{item.title}</h3>
              <p className="text-red-500 font-semibold">${item.price}</p>
              <button
    onClick={() => onAddToCart(item)}
    className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
  >
    Add To Cart
  </button>
            </div>
          ))}
          
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Wishlist;
