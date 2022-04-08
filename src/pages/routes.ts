import { paths } from "./paths";
import { MenuPage, CartPage, OrdersPage, MapPage } from "pages/loadable-pages";

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
    component: OrdersPage,
    path: paths.orders(),
    exact: true,
  },
{
    component: MapPage,
    path: paths.map(),
    exact: true,
  },
];
