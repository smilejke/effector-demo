import { createStore } from "effector-root";
import { TMenu } from "features/home/types";
import { MOCK_MENU } from "mocks/menu";

export const $menu = createStore<TMenu>(MOCK_MENU, { name: "$menu" });
