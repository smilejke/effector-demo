import { ProductCardMenu } from "features/menu/components/product-card-menu";
import { useProducts } from "features/menu/selectors";

import "./styles.css";

export const MenuPageContainer = () => {
  const products = useProducts();

  return (
    <div className="menu-container">
      {products.map((product) => {
        return <ProductCardMenu position={product} key={product.id} />;
      })}
    </div>
  );
};
