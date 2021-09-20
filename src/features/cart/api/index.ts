import { TPromoCode } from "features/cart/types";

/** FAKE API TO GET MENU POSITIONS **/

export const checkPromoCodeRequest = (code: string): Promise<TPromoCode> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      switch (code) {
        case "effector1":
          return res({
            category: "all",
            amount: 0.2,
            description: "20% discount on all menu positions",
          });
        case "soups12":
          return res({
            category: "soups",
            amount: 0.15,
            description: "15% discount on soups",
          });
        case "salads12":
          return res({
            category: "salads",
            amount: 0.25,
            description: "25% discount on salads",
          });
        case "burgers12":
          return res({
            category: "burgers",
            amount: 0.1,
            description: "10% discount on burgers",
          });
        default:
          return rej("Wrong Code");
      }
    }, 1200);
  });
