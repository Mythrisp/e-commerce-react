import { FiSend } from "react-icons/fi";
import QrCode from "./assets/QrCode.png" ;
import GooglePlay from "./assets/GooglePlay.png";
import AppStore from "./assets/AppStore.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="px-12 py-10">

        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Exclusive
            </h3>
            <p className="text-sm mb-4">
              Subscribe
            </p>
            <p className="text-sm mb-4">
              Get 10% off your first order
            </p>

            <div className="flex items-center border border-gray-600 rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 text-sm  w-full"
              />
              <button className="px-3">
                <FiSend />
              </button>
            </div>
          </div>

       
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Support
            </h3>
            <div className="*:text-sm">
            <p >111 Bijoy sarani, Dhaka,</p>
            <p >DH 1515, Bangladesh.</p>
            <p className=" mt-2">exclusive@gmail.com</p>
            <p >+88015-88888-9999</p>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Download App
            </h3>
            <p className="text-sm mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex gap-3">
              <div className="bg-white p-2">
                <img
                  src={QrCode}
                  alt="QR"
                  className="w-20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <img
                  src={GooglePlay}
                  className="w-28"
                />
                <img
                  src={AppStore}
                  className="w-28"
                />
              </div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
         &copy; Copyright Rimel 2022. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;


