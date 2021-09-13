import { createStore } from "effector-root";
import { TMenu } from "features/home/types";

export const $menu = createStore<TMenu>([], { name: "$menu" });
