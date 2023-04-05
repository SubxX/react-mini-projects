import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import ProductCard from "./components/ProductCard";
import Header from "@/components/Header";

const Home = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch.products.loadProducts(controller);

    return () => controller.abort();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
