import Header from "./header";
import { FiHeart, FiShoppingCart, FiUser,FiPhone,FiMail} from "react-icons/fi";

import Footer from "./footer";
import Breadcrumb from "./breadcrumb";

interface ContactProps {
    onSignUpClick: () => void;
    onAboutClick:()=>void
    onHomeClick:()=>void;
    
    

}

const Contact=({ onSignUpClick,onAboutClick,onHomeClick }:ContactProps)=>{
    return(
        <>
        <Header onHomeClick={onHomeClick} onSignUpClick={onSignUpClick}
            onAboutClick={onAboutClick}
                currentScreen="contact"
            >
                <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
                <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
                <FiUser className="text-xl cursor-pointer hover:text-red-500" />
            </Header>

<Breadcrumb currentScreen="contact"  onHomeClick={onHomeClick}/>


  <div className=" grid grid-cols-1 md:grid-cols-3 mt-15 justify-content pl-20 pr-20 md:items-center md:justify-center gap-8 ">
    
    <div className="bg-white rounded shadow-md p-6 h-100 w-100 ml-10 md:col-span-1">
        <div className="flex gap-3 mb-3">
            <FiPhone className="flex  bg-red-400 justify-center items-center rounded-full text-white h-8 w-8 p-1 "/>
<h3 className="font-semibold ">Call To Us</h3>
        </div>
        <p className="mb-3">We are available 24/7,7 days a week</p>
        <p>Phone:+8801611112222</p>

        <div className="mt-6 mb-6 pl-20 pr-20 w-65 bg-gray-200 h-[2px] "></div>
        
        <div className="flex gap-3 mb-3">
            <FiMail className="flex  bg-red-400 justify-center items-center rounded-full text-white h-8 w-8 p-1 "/>
<h3 className="font-semibold ">Write To Us</h3>
        </div>
        <p className="mb-3">Fill out our form and we will contact you within 24 hours.</p>
        <p className="mb-3">Emails:customer@exclusive.com</p>
        <p className="mb-3">Emails:support@exclusive.com</p>
    </div>
    

    <div className="bg-white rounded relative shadow-md h-100 p-6 mr-20  md:col-span-2 ml-10">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 w-full">
            <div className="relative ">
  <input type="text" placeholder="Your Name" required className="w-full bg-gray-100 px-4 py-2 rounded pr-6"/>
  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">*</span>
</div>
<div className="relative">
  <input type="text" placeholder="Your Email" required className="w-full bg-gray-100 px-4 py-2 rounded pr-6"/>
  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">*</span>
</div>
<div className="relative">
  <input type="text" placeholder="Your Phone" required className="w-full bg-gray-100 px-4 py-2 rounded pr-6"/>
  <span className="absolute right-3 top-1/2 -translate-y-1/2  text-red-500">*</span>
</div>
        </div>

      <div className="mt-4">
  <textarea
    placeholder="Your Message"
    className="mt-2 h-50 w-full bg-gray-100 px-4 py-3 rounded resize-none"
  ></textarea>
</div>
        <button className="absolute bottom-6 right-6 bg-red-500 text-white px-6 py-2 rounded">
            Send Message
        </button>

    </div>
    


  </div>
  <Footer />
        </>

    )
}
export default Contact;