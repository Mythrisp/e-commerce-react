import { FiHeart } from "react-icons/fi";

interface WishlistIconProps {
  count: number;
  onClick: () => void;
}

const WishlistIcon = ({ count, onClick }: WishlistIconProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <FiHeart className="text-xl hover:text-red-500" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                         rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
