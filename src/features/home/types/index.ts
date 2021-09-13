export type TMenuPositionCategory = "soups" | "salads" | "burgers" | "all";

export type TMenuPosition = {
  title: string;
  description: string;
  src: string;
  category: TMenuPositionCategory;
  price: number;
};

export type TMenu = TMenuPosition[];
