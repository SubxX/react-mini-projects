import { useAppDispatch, useAppSelector } from "@/store/store";
import { useCallback, useMemo } from "react";
import {
  BsFillCartPlusFill,
  BsFillCartCheckFill,
  BsFillCartDashFill,
} from "react-icons/bs";

type Props = {
  product: any;
};

const AddToCartButton = ({ product }: Props) => {
  const cartItemIds = useAppSelector((state) => state.cart.itemIds);
  const dispatch = useAppDispatch();
  const isAlreadyAdded = cartItemIds.includes(product.id);

  const addProductToCart = useCallback(
    (e: any) => {
      e.stopPropagation();
      !isAlreadyAdded
        ? dispatch.cart.add(product)
        : dispatch.cart.remove(product?.id);
    },
    [product, isAlreadyAdded]
  );

  return (
    <button
      className={`icon-btn ${!isAlreadyAdded ? "btn-default" : "btn-danger"}`}
      aria-label={isAlreadyAdded ? "Remove from cart" : "Add to cart"}
      onClick={addProductToCart}
    >
      {isAlreadyAdded ? <BsFillCartDashFill /> : <BsFillCartPlusFill />}
    </button>
  );
};

export default AddToCartButton;
