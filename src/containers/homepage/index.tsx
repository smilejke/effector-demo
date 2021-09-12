import { ProductCard } from "features/homepage/product-card";
import "./style.css";
import { MOCK_MENU } from "../../mocks/menu";

export const HomePageContainer = () => {
  return (
    <div className="home-container">
      {MOCK_MENU.map((product, index) => {
        return (
          <ProductCard
            title={product.title}
            description={product.description}
            src={product.src}
            key={product.title}
          />
        );
      })}
    </div>
  );
};
