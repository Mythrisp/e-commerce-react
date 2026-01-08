import Header from "./header";
import Footer from "./footer";
import sideImage from './assets/SideImage.png'

interface SignUpProps {
  onSignup: () => void;
  onSwitch: () => void;
}

const SignUp = ({ onSignup, onSwitch }: SignUpProps) => {
  return (
    <>
      <Header
  onSignUpClick={onSwitch}
  currentScreen="signup"
/>


      <div className="flex max-w-7xl mx-auto px-6 py-20 gap-10">
        <div className="flex-1 rounded flex items-center justify-center">
          <img src={sideImage} className="w-3/4" />
        </div>

       
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>
        
          <input className="border-b w-full py-2 mb-4" placeholder="Name" />
          <input className="border-b w-full py-2 mb-4" placeholder="Email or Phone Number" />
          <input className="border-b w-full py-2 mb-6" placeholder="Password" type="password" />

          <button
            onClick={onSignup}
            className="bg-red-500 text-white w-full py-3 rounded mb-4"
          >
            Create Account
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <span onClick={onSwitch} className="text-red-500 cursor-pointer">
              Log in
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
