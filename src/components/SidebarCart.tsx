import { useAppSelector } from "@/store/store";
import { IoMdClose } from "react-icons/io";
import { useMemo } from "react";
import { BsCartXFill } from "react-icons/bs";
import CartItem from "./CartItem";

type Props = { onClose: () => void };

const SidebarCart = ({ onClose }: Props) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = useMemo(
    () =>
      cartItems.reduce((acc, product) => {
        acc += product.qty * product.price;
        return acc;
      }, 0) as number,
    [cartItems]
  );

  return (
    <div className="w-full sm:w-[350px] bg-gray-900 fixed right-0 top-0 h-screen backdrop-blur-xl z-20 custom-border !border-y-0 !border-r-0 overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between border-b custom-border px-4 h-[65px] !border-x-0 !border-t-0 sticky top-0 left-0 bg-gray-900 z-10">
        <h4 className="text-xl font-medium">My cart</h4>
        <button
          className="icon-btn btn-default"
          aria-label="Close cart sidebar"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
      </div>

      <div className="p-4 space-y-4 flex-1">
        {!Boolean(cartItems.length) && (
          <div className="h-full flex items-center justify-center flex-col gap-2 text-gray-500">
            <BsCartXFill size={24} />
            <span>No products found!</span>
          </div>
        )}
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <div className="px-4 h-[85px] flex items-center justify-between sticky bottom-0 left-0 custom-bg backdrop-blur-xl flex-none">
        <div>
          <span className="text-white text-opacity-50 text-xs">Total</span>
          <h4 className="font-bold text-lg">$ {total.toFixed(2)}</h4>
        </div>
        <button className="btn btn-default">Checkout</button>
      </div>
    </div>
  );
};

export default SidebarCart;
