import { GeneralTemplate } from "templates/general-template";
import { CartContainer } from "features/cart/containers/cart-container";
import { ConfirmOrderModal } from "features/cart/components/confirm-order-modal";

export const CartPage = () => {
  return (
    <>
      <GeneralTemplate selectedMenu="cart">
        <CartContainer />
      </GeneralTemplate>
      <ConfirmOrderModal />
    </>
  );
};
