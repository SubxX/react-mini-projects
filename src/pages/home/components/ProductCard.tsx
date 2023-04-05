import { BsFillCartPlusFill } from "react-icons/bs";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card">
      <div className="w-full h-40 bg-white rounded-xl p-2">
        <img
          src={product.image}
          className="w-full h-full object-contain"
          alt={product.image}
        />
      </div>
      <div className="flex-1">
        <p className="text-lg font-bold">{product.title}</p>
        <span className="mt-2 text-gray-400 line-clamp-3">
          {product.description}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">${product.price}</span>
        <button className="icon-btn" aria-label="Add to cart">
          <BsFillCartPlusFill />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
