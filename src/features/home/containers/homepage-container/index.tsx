import { ProductCard } from "features/common/components/product-card";
import { useProducts } from "features/home/selectors";

import "./style.css";

export const HomePageContainer = () => {
  const products = useProducts();

  return (
    <div className="home-container">
      {products.map((product) => {
        return <ProductCard position={product} page="home" key={product.id} />;
      })}
    </div>
  );
};
