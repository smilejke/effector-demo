import { useIsCartEmpty } from "features/cart/selectors";
import { EmptyCart } from "features/cart/containers/empty-cart";
import { Cart } from "features/cart/containers/not-empty-cart";

import "./styles.scss";

export const CartContainer = () => {
  const cartEmpty = useIsCartEmpty();

  return (
    <div className="cart-container" data-empty={cartEmpty}>
      {cartEmpty && <EmptyCart />}
      {!cartEmpty && <Cart />}
    </div>
  );
};
