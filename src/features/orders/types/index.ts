import { TMenu } from "features/home/types";

export type TOrderStatus =
  | "accepted"
  | "cooking"
  | "ready for delivery"
  | "closed";

export type TOrder = {
  cart: TMenu;
  total: number;
  orderId: string;
  status: TOrderStatus;
  date: Date;
};

export type TOrders = TOrder[];
