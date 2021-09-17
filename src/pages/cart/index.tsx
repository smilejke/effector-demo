import { GeneralTemplate } from "templates/general-template";
import { CartContainer } from "features/cart/containers/cart-container";
import { PromoCodeModal } from "features/cart/components/promocode-modal";

export const CartPage = () => {
  return (
    <>
      <GeneralTemplate selectedMenu="cart">
        <CartContainer />
      </GeneralTemplate>
      <PromoCodeModal />
    </>
  );
};
