import { TMenuPosition } from "features/menu/types";

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
