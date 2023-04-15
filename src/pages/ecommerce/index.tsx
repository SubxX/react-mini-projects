import { useEffect } from "react";
import store, { useAppDispatch, useAppSelector } from "./store/store";
import ProductCard from "./components/ProductCard";
import Header from "@/pages/ecommerce/components/Header";
import { Provider } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "./components/Pagination";

const Ecommerce = () => {
  const { items: products, total } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const currentPage = parseInt(params.get("page") ?? "1");

  useEffect(() => {
    const controller = new AbortController();
    dispatch.products.loadProducts({ controller, page: currentPage });

    return () => controller.abort();
  }, [currentPage]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination currentPage={currentPage} total={total} />
      </div>
    </>
  );
};

export default function Wrapper() {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  );
}
