import { customAlphabet } from "nanoid";
import { TMenu } from "features/home/types";
import { TOrder } from "features/orders/types";

const nanoid = customAlphabet("1234567890", 3);

/** FAKE API TO CREATE ORDER **/
export const createOrderRequest = ({
  cart,
  total,
}: {
  cart: TMenu;
  total: number;
}): Promise<TOrder> =>
  new Promise((res) => {
    setTimeout(() => {
      res({
        cart,
        orderId: "000" + nanoid(),
        total,
        status: "accepted",
        date: new Date(),
      });
    }, 1200);
  });
