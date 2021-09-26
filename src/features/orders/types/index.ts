import { TCart } from "features/cart/types";

export type TOrderStatus =
  | "accepted"
  | "cooking"
  | "ready for delivery"
  | "closed";

export type TOrder = {
  cart: TCart;
  total: number;
  orderId: string;
  status: TOrderStatus;
  date: Date;
};

export type TOrders = TOrder[];
