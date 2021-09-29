export type TMenuPositionCategory = "soups" | "salads" | "burgers" | "all";

export type TMenuPosition = {
  title: string;
  description: string;
  src: string;
  category: TMenuPositionCategory;
  price: number;
  count: number;
  id: number;
};

export type TMenu = TMenuPosition[];

export type TProductActions = "add" | "remove";

export type TSelectProduct = {
  id: number;
  action: TProductActions;
};

export type TProductGuard = {
  product: TMenuPosition;
  action: TProductActions;
};
