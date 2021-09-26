import { ProductCardMenu } from "features/common/components/product-card-menu";
import { useProducts } from "features/home/selectors";

import "./style.scss";

export const HomePageContainer = () => {
  const products = useProducts();

  return (
    <div className="home-container">
      {products.map((product) => {
        return <ProductCardMenu position={product} key={product.id} />;
      })}
    </div>
  );
};
