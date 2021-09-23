import { HomePage } from "pages/home";
import { CartPage } from "pages/cart";
import { StatusPage } from "pages/orders";
import { paths } from "./paths";

export const routes = [
  {
    component: HomePage,
    path: paths.home(),
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
