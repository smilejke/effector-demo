import { TMenuPosition } from "features/home/types";

export type TPromoCode = {
  code: string;
  category: string;
  amount: number;
  description: string;
};

export interface CartItem extends TMenuPosition {
  total: number;
}

export type TCart = CartItem[];
