import Empty from "antd/lib/empty";
import { EmptyCartLink } from "features/cart/components/empty-cart-link";
import { paths } from "pages/paths";

export const EmptyCart = () => {
  return (
    <Empty
      style={{ transform: "scale(2)" }}
      description={
        <EmptyCartLink
          description={"Your order is empty"}
          linkTo={paths.menu()}
        />
      }
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      imageStyle={{ filter: "brightness(0.8)" }}
    />
  );
};
