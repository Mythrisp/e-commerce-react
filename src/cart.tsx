import Header from "./header";
import Footer from "./footer";
import Breadcrumb from "./breadcrumb";
import WishlistIcon from "./wishlistCount";
import { FiShoppingCart } from "react-icons/fi";
import AccountDropdown from "./accountDropdown";

interface CartProps {
    cart: any[];
    onSignUpClick: () => void;
    onAboutClick: () => void
    onHomeClick: () => void;
    onContactClick: () => void;
    onLoginClick: () => void;
    onMyAccountClick: () => void;
    onAddToWishlist: (product: any) => void;
    onWishlistClick: () => void;
    wishlistCount: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onCheckout:()=>void;
    onNavigate: (screen: string) => void;



}

const Cart = ({ cart, onHomeClick, onSignUpClick, onAboutClick, onContactClick, wishlistCount, onWishlistClick, onLoginClick, onMyAccountClick, onIncrease, onDecrease,onCheckout, onNavigate }: CartProps) => {
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
                currentScreen='cart'>
                <WishlistIcon
                    count={wishlistCount}
                    onClick={onWishlistClick}
                />
                <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
                <AccountDropdown onLogout={() => onLoginClick()} onMyAccountClick={onMyAccountClick} />

            </Header>



            <Breadcrumb
  onHomeClick={onHomeClick}
  onNavigate={onNavigate}
  paths={[
    { label: "View Cart", screen: "cart" }
  ]}
/>



            <div className="px-20 py-10">
                <div className="border rounded">

                    <div className="grid grid-cols-4 font-semibold border-b p-4">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>


                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-4 items-center border-b p-4"
                        >
                            {/* Product */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.thumbnail}
                                    className="w-14 h-14 object-contain"
                                />
                                <p>{item.title}</p>
                            </div>

                            {/* Price */}
                            <p>${item.price}</p>

                            {/* Quantity */}
                            <div className="flex items-center gap-2 border w-fit px-2 py-1">
                                <button
                                    onClick={() => onDecrease(item.id)}
                                    className="px-2 text-lg"
                                >
                                    −
                                </button>

                                <span className="w-6 text-center">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => onIncrease(item.id)}
                                    className="px-2 text-lg"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal */}
                            <p>${item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>


                <div className="flex justify-between mt-6">
                    <button
                        onClick={onHomeClick}
                        className="border px-6 py-2"
                    >
                        Return To Shop
                    </button>

                    <button className="border px-6 py-2">
                        Update Cart
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">


                    <div className="flex gap-4">
                        <input
                            placeholder="Coupon Code"
                            className="border px-4 py-2 w-64 h-10"
                        />
                        <button className="bg-red-500 text-white px-6 py-2 h-10">
                            Apply Coupon
                        </button>
                    </div>


                    <div className="border p-6 w-full md:w-80 ml-auto">
                        <h3 className="font-semibold mb-4">Cart Total</h3>

                        <div className="flex justify-between border-b py-2">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>

                        <div className="flex justify-between border-b py-2">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>

                        <div className="flex justify-between font-semibold py-2">
                            <span>Total:</span>
                            <span>${subtotal}</span>
                        </div>

                        <button  onClick={() => onCheckout()} className="bg-red-500 text-white w-full py-3 mt-4">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>

            <Footer myaccountclick={onMyAccountClick} loginclick={onLoginClick}  wishlistclick={onWishlistClick} shopclick={onHomeClick} />
        </>
    );
};

export default Cart;
