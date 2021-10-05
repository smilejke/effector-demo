import { TCart } from "features/cart/types";

export type TOrderStatus = "accepted" | "cooking" | "ready" | "closed";

export type TOrder = {
  cart: TCart;
  total: number;
  orderId: string;
  status: TOrderStatus;
  date: Date;
};

export type TOrders = TOrder[];

export type TCheckOrderData = {
  orderId: string;
  status: TOrderStatus;
};
