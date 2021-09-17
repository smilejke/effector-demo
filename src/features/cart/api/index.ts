/** FAKE API TO GET MENU POSITIONS **/

export const checkPromoCodeRequest = (code: string): Promise<number> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (code === "effector1") {
        res(20);
      } else {
        rej("Wrong Code");
      }
    }, 1200);
  });
