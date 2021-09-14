import { MOCK_MENU } from "mocks/menu";
import { TMenu } from "features/home/types";

/** FAKE API TO GET MENU POSITIONS **/
export const getProductsByCategoryRequest = (
  category: string = "all"
): Promise<TMenu> =>
  new Promise((res) => {
    setTimeout(() => {
      if (category === "all") {
        res(MOCK_MENU);
      } else {
        res(MOCK_MENU.filter((item) => item.category === category));
      }
    }, 1200);
  });
