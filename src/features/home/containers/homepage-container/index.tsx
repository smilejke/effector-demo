import { ProductCard } from "features/home/components/product-card";
import { useMenu } from "features/home/selectors";
import "./style.css";

export const HomePageContainer = () => {
  const menu = useMenu();

  return (
    <div className="home-container">
      {menu.map((product) => {
        return <ProductCard position={product} key={product.title} />;
      })}
    </div>
  );
};
