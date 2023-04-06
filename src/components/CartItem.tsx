import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/store/store";

const CartItem = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const qty = product.qty as number;

  const increment = () =>
    dispatch.cart.updateProductQuantity({
      id: product.id,
      qty: qty + 1,
    });
  const decrement = () => {
    if (qty === 1) {
      dispatch.cart.remove(product.id);
      return;
    }
    dispatch.cart.updateProductQuantity({
      id: product.id,
      qty: qty - 1,
    });
  };

  return (
    <div className="custom-bg custom-border p-3 rounded-xl" key={product.id}>
      <p>{product.title}</p>
      <div className="mt-2 flex justify-between gap-2">
        <span className="font-bold">$ {product.price}</span>
        <div className="space-x-2">
          <button className="icon-btn !p-1.5" onClick={decrement}>
            <AiOutlineMinus size={12} />
          </button>
          <span>{product.qty}</span>
          <button className="icon-btn !p-1.5" onClick={increment}>
            <AiOutlinePlus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
