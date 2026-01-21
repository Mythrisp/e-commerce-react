import Header from "./header";
import { FiShoppingCart, FiUser, FiDollarSign, FiUsers, FiShoppingBag } from "react-icons/fi";
import AboutSideImage from './assets/AboutSideImage.png'
import Footer from "./footer";
import Breadcrumb from "./breadcrumb";
import WishlistIcon from "./wishlistCount";
import CartIcon from "./cartIcon";


interface AboutProps {
  onSignUpClick: () => void;

  onHomeClick: () => void;
  onContactClick: () => void;
  onWishlistClick: () => void;
  wishlistCount: number;
  onCartClick: () => void;
  cartCount: number;
  onNavigate: (screen: string) => void;
  onLoginClick: () => void;
  onMyAccountClick: () => void;



}


const About = ({ onSignUpClick, onContactClick, onHomeClick, onWishlistClick, wishlistCount, onCartClick, cartCount, onNavigate, onLoginClick, onMyAccountClick }: AboutProps) => {
  return (
    <>
      <Header onHomeClick={onHomeClick} onSignUpClick={onSignUpClick} onContactClick={onContactClick}

        currentScreen="about"
      >
        <WishlistIcon
          count={wishlistCount}
          onClick={onWishlistClick}
        />
        <CartIcon
          count={cartCount}
          onClick={onCartClick}
        />
        <FiUser className="text-xl cursor-pointer hover:text-red-500" />
      </Header>

      <Breadcrumb
        onHomeClick={onHomeClick}
        onNavigate={onNavigate}
        paths={[
          { label: "About", screen: "cart" }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-15 justify-content pl-20 pr-20 md:items-center md:justify-center gap-10">
        <div >
          <h3 className="text-3xl font-bold">Our Story</h3>
          <p className="mt-10">
            Exclusive was created to provide a simple and reliable online shopping experience for everyone. Over time, it has grown into a trusted platform offering fashion, electronics, lifestyle products, and daily essentials in one place.
          </p>    <br></br>
          <p className="mt-2">The website is designed for easy navigation, secure payments, and customer convenience. We focus on quality products, affordable pricing, and fast delivery to ensure a smooth and enjoyable shopping experience for all users.
          </p>


        </div>
        <div>
          <img src={AboutSideImage} alt="Side Image" className="w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-cols-4 gap-8 px-20 mt-20 text-center">
        <div className="border p-6 rounded">
          <div className="w-14 h-14 mx-auto  flex items-center justify-center rounded-full bg-black text-white mb-4">
            <FiShoppingCart size={24} />
          </div>
          <h2 className="text-2xl font-bold">10.5k</h2>
          <p className="text-gray-500 mt-2">Sellers active on site</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-white text-red-500 mb-4">
            <FiDollarSign size={24} />
          </div>
          <h2 className="text-2xl font-bold">33k</h2>
          <p className="mt-2">Monthly Product Sale</p>
        </div>

        <div className="border p-6 rounded">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-black text-white mb-4">
            <FiUsers size={24} />
          </div>
          <h2 className="text-2xl font-bold">45.5k</h2>
          <p className="text-gray-500 mt-2">Customers active on site</p>
        </div>

        <div className="border p-6 rounded">
          <div className="w-14 h-14 mx-auto  flex items-center justify-center rounded-full bg-black text-white mb-4">
            <FiShoppingBag size={24} />
          </div>
          <h2 className="text-2xl font-bold">25k</h2>
          <p className="text-gray-500 mt-2">Annual gross sale</p>
        </div>

      </div>

      <Footer myaccountclick={onMyAccountClick} loginclick={onLoginClick} cartclick={onCartClick} wishlistclick={onWishlistClick} shopclick={onHomeClick} />
    </>
  )
}
export default About;
