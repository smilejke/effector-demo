import { ProductCard } from "features/home/components/product-card";
import { useMenu, useSelectedMenuCategory } from "features/home/selectors";
import "./style.css";
import { useMemo } from "react";

export const HomePageContainer = () => {
  const menu = useMenu();
  const category = useSelectedMenuCategory();

  const menuWithFilters = useMemo(() => {
    if (category !== "all") {
      return menu
        .filter((item) => item.category === category)
        .map((product) => {
          return <ProductCard position={product} key={product.title} />;
        });
    }
    return menu.map((product) => {
      return <ProductCard position={product} key={product.title} />;
    });
  }, [category, menu]);

  return <div className="home-container">{menuWithFilters}</div>;
};
