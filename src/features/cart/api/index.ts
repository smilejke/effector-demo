import { TPromoCode } from "features/cart/types";
import { MOCK_PROMO_CODES } from "mocks/promo-codes";

/** FAKE API TO GET MENU POSITIONS **/

export const checkPromoCodeRequest = (code: string): Promise<TPromoCode> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      const has = MOCK_PROMO_CODES.find((item) => item.code === code);
      if (has) {
        return res(has);
      }
      return rej("Wrong Code");
    }, 1200);
  });
