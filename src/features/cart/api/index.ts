/** FAKE API TO GET MENU POSITIONS **/
import { TPromoCodeResponse } from "features/cart/types";

export const checkPromoCodeRequest = (
  code: string
): Promise<TPromoCodeResponse> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (code.length < 4) rej("Code is too short");
      if (code.length > 9) rej("Code is too long");
      if (code === "effector1") {
        res(20);
      } else {
        rej("Wrong Code");
      }
    }, 1200);
  });
