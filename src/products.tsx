import { FiHeart, FiStar } from "react-icons/fi";

interface ProductProps {
  id: number
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  discountPercentage: number;
  onClick: (id: number) => void;
  onAddToWishlist: () => void;
  onAddToCart: () => void;

}

const Product = ({id,title, price,rating,thumbnail,discountPercentage,onClick, onAddToWishlist, onAddToCart}: ProductProps) => {

  const roundedRating = Math.round(rating);
  const reviewCount = Math.floor(rating * 20);
  const discountPrice = Number(
    (price - (price * discountPercentage) / 100).toFixed(2)
  );

  return (
    <div>
      <div
        onClick={() => onClick(id)}
        className="bg-white p-4 rounded relative group cursor-pointer"
      >



        <FiHeart onClick={(e) => {
          e.stopPropagation();
          onAddToWishlist()
        }} className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500" />

        <div className="bg-gray-100 h-50 flex items-center justify-center rounded">
          <img
            src={thumbnail}
            alt={title}
            className="h-40 w-full object-contain"
          />
        </div>


        <button onClick={(e) => {
          e.stopPropagation();
          onAddToCart();
        }} className="   absolute bottom-0 left-5 right-5 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition  ">
          Add To Cart
        </button>
      </div>

      <h3 className="mt-3 text-sm font-medium">{title}</h3>


      <div className="flex items-center gap-2 mt-1 text-sm">
        <span className="text-red-500 font-semibold">
          ${discountPrice}
        </span>


        <span className="text-gray-400 line-through">
          ${price}
        </span>


        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={i < roundedRating ? "fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>



        <span className="text-gray-500">
          ({reviewCount})
        </span>
      </div>
    </div>

  );
};

export default Product;
