import Header from "./header";
import Footer from "./footer";
import Breadcrumb from "./breadcrumb";
import AccountDropdown from "./accountDropdown";
import WishlistIcon from "./wishlistCount";
import CartIcon from "./cartIcon";

interface CheckoutProps {
  cart: any[];
  onHomeClick: () => void;
  onNavigate: (screen: string) => void;
   onSignUpClick: () => void;
    onAboutClick: () => void
    onLoginClick: () => void;
    onMyAccountClick: () => void;
    onWishlistClick: () => void;
    wishlistCount: number;
    onCartClick: () => void;
    cartCount: number;
    onContactClick: () => void;
}

const Checkout = ({ onSignUpClick, onAboutClick, onHomeClick, onLoginClick, onMyAccountClick, onWishlistClick, wishlistCount, onCartClick, cartCount, cart, onContactClick,onNavigate}: CheckoutProps) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
       <Header onSignUpClick={onSignUpClick}
                onHomeClick={onHomeClick}
                onAboutClick={onAboutClick}
                onContactClick={onContactClick}
                currentScreen='checkout'>
            
                <WishlistIcon
                    count={wishlistCount}
                    onClick={onWishlistClick}
                />
                <CartIcon
                    count={cartCount}
                    onClick={onCartClick}
                />
                <AccountDropdown onLogout={() => onLoginClick()} onMyAccountClick={onMyAccountClick} />

            </Header>
     
     <Breadcrumb
  onHomeClick={onHomeClick}
  onNavigate={onNavigate}
  paths={[
    { label: "My Account", screen: "myAccount" },
    { label: "Product", screen: "app" },
    { label: "View Cart", screen: "cart" },
    { label: "Checkout", screen: "checkout" }
  ]}
/>


      <div className="px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

       
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Billing Details
          </h2>

          <div className="space-y-4">
            <input className="w-full bg-gray-100 p-3" placeholder="First Name*" />
            <input className="w-full bg-gray-100 p-3" placeholder="Company Name" />
            <input className="w-full bg-gray-100 p-3" placeholder="Street Address*" />
            <input className="w-full bg-gray-100 p-3" placeholder="Apartment, floor, etc. (optional)" />
            <input className="w-full bg-gray-100 p-3" placeholder="Town / City*" />
            <input className="w-full bg-gray-100 p-3" placeholder="Phone Number*" />
            <input className="w-full bg-gray-100 p-3" placeholder="Email Address*" />
          </div>

          <label className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" />
            Save this information for faster check-out next time
          </label>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="space-y-6">

          {/* Products */}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} className="w-12 h-12 object-contain" />
                <span>{item.title}</span>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between border-b pb-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-b pb-4 pt-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Bank
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className="flex gap-4">
            <input
              placeholder="Coupon Code"
              className="border px-4 py-2 flex-1"
            />
            <button className="bg-red-500 text-white px-6">
              Apply Coupon
            </button>
          </div>

          <button className="bg-red-500 text-white px-8 py-3">
            Place Order
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
