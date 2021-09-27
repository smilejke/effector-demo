import { MenuPage } from "pages/menu";
import { CartPage } from "pages/cart";
import { StatusPage } from "pages/orders";
import { paths } from "./paths";

export const routes = [
  {
    component: MenuPage,
    path: paths.menu(),
    exact: true,
  },
  {
    component: CartPage,
    path: paths.cart(),
    exact: true,
  },
  {
    component: StatusPage,
    path: paths.status(),
    exact: true,
  },
];
