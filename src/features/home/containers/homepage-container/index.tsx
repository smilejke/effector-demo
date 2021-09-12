import { ProductCard } from "features/home/components/product-card";
import { useMenu } from "features/home/selectors";
import "./style.css";

export const HomePageContainer = () => {
  const menu = useMenu();

  return (
    <div className="home-container">
      {menu.map((product) => {
        return (
          <ProductCard
            title={product.title}
            description={product.description}
            src={product.src}
            price={product.price}
            key={product.title}
          />
        );
      })}
    </div>
  );
};
