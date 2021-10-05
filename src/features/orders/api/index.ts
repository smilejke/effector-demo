import { customAlphabet } from "nanoid";
import { TCheckOrderData, TOrder } from "features/orders/types";
import { TCart } from "features/cart/types";

const nanoid = customAlphabet("1234567890", 3);

/** FAKE API TO CREATE ORDER **/
export const createOrderRequest = ({
  cart,
  total,
}: {
  cart: TCart;
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

/**
 * FAKE API TO EMULATE STATUS CHANGES (accepted => cooking => ready => closed)
 * **/
export const checkOrderStatusRequest = ({
  orderId,
  status,
}: TCheckOrderData): Promise<TCheckOrderData> => {
  if (status === "accepted") {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          orderId,
          status: "cooking",
        });
      }, 10000);
    });
  }
  if (status === "cooking") {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          orderId,
          status: "ready",
        });
      }, 10000);
    });
  }
  return new Promise((res) => {
    setTimeout(() => {
      res({
        orderId,
        status: "closed",
      });
    }, 10000);
  });
};
