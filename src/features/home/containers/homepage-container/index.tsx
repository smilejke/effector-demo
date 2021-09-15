import { ProductCard } from "features/common/components/product-card";
import { useProducts } from "features/home/selectors";

import "./style.css";
import { addToCart } from "features/cart/controllers";

export const HomePageContainer = () => {
  const products = useProducts();

  return (
    <div className="home-container">
      {products.map((product) => {
        return (
          <ProductCard
            position={product}
            onClick={() => addToCart(product)}
            page="home"
            key={product.title}
          />
        );
      })}
    </div>
  );
};
