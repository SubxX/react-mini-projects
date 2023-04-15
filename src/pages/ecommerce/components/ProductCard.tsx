import AddToCartButton from "./AddToCartButton";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card">
      <div className="w-full h-40 bg-white rounded-xl p-2">
        <img
          src={product.thumbnail}
          className="w-full h-full object-contain"
          alt={product.title}
        />
      </div>
      <div className="flex-1">
        <p className="font-bold">{product.title}</p>
        <span className="mt-2 text-gray-400 line-clamp-3 text-sm">
          {product.description}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">${product.price}</span>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
