import { ProductCard } from "features/homepage/product-card";
import "./style.css";

export const HomePageContainer = () => {
  const MOCK_CARD = {
    title: "title",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  };

  return (
    <div className="home-container">
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
      <ProductCard {...MOCK_CARD} />
    </div>
  );
};
