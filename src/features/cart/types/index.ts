export type TPromoCodeResponse =
  | number
  | "Code is too short"
  | "Wrong Code"
  | "Code is too long";
