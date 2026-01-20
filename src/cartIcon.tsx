import { FiShoppingCart } from "react-icons/fi";

interface CartIconProps {
  count: number;
  onClick: () => void;
}

const CartIcon = ({ count, onClick }: CartIconProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <FiShoppingCart className="text-xl hover:text-red-500" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                         rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
