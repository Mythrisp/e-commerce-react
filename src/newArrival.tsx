import ps5 from "./assets/ps5.png";
import womenHat from "./assets/womenHat.png";
import speaker from "./assets/speaker.png";
import perfume from "./assets/perfume.png";
import { FiTruck,FiHeadphones,FiShield } from "react-icons/fi";

const NewArrival = () => {
  return (
    <div className="px-12 py-10">

     
      <h2 className="text-4xl font-semibold mb-8">
        New Arrival
      </h2>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       
        <div className="relative bg-black rounded overflow-hidden">
          <img
            src={ps5}
            alt="PlayStation 5"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 text-white max-w-xs">
            <h3 className="text-2xl font-semibold">
              PlayStation 5
            </h3>
            <p className="text-sm mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-3 underline">
              Shop Now
            </button>
          </div>
        </div>

        
        <div className="grid grid-rows-2 gap-6">

          
          <div className="relative bg-black rounded overflow-hidden">
            <img
              src={womenHat}
              alt="Women Collection"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 text-white max-w-xs">
              <h3 className="text-xl font-semibold">
                Women Collections
              </h3>
              <p className="text-sm mt-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-2 underline">
                Shop Now
              </button>
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-6">

           
            <div className="relative bg-black rounded overflow-hidden">
              <img
                src={speaker}
                alt="Speakers"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">
                  Speakers
                </h4>
                <p className="text-xs mt-1">
                  Amazon wireless speakers
                </p>
                <button className="underline text-sm mt-1">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative bg-black rounded overflow-hidden">
              <img
                src={perfume}
                alt="Perfume"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">
                  Perfume
                </h4>
                <p className="text-xs mt-1">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="underline text-sm mt-1">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">

        <div>
          <div className="mx-auto w-14 h-14 rounded-full bg-black flex items-center justify-center text-white">
           <FiTruck size={24} />
          </div>
          <h4 className="font-semibold mt-4">
            FREE AND FAST DELIVERY
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            Free delivery for all orders over $140
          </p>
        </div>

        <div>
          <div className="mx-auto w-14 h-14 rounded-full bg-black flex items-center justify-center text-white">
             <FiHeadphones size={24} />
          </div>
          <h4 className="font-semibold mt-4">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            Friendly 24/7 customer support
          </p>
        </div>

        <div>
          <div className="mx-auto w-14 h-14 rounded-full bg-black flex items-center justify-center text-white">
             <FiShield size={24} />
          </div>
          <h4 className="font-semibold mt-4">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            We return money within 30 days
          </p>
        </div>

      </div>

    </div>
  );
};

export default NewArrival;
