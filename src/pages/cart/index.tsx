import { GeneralTemplate } from "templates/general-template";
import { CartContainer } from "features/cart/containers/cart-container";

export const CartPage = () => {
  return (
    <GeneralTemplate selectedMenu="cart">
      <CartContainer />
    </GeneralTemplate>
  );
};
