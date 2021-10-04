import loadable from "@loadable/component";
import { GeneralTemplate } from "templates/general-template";

export const MenuPage = loadable(
  () =>
    import(
      /* webpackChunkName: "menu-page-lazy" */
      /* webpackPrefetch: true */
      "./menu"
    ),
  {
    resolveComponent: ({ MenuPage }) => MenuPage,
    fallback: <GeneralTemplate loading />,
  }
);
export const OrdersPage = loadable(
  () =>
    import(
      /* webpackChunkName: "orders-page-lazy" */
      /* webpackPrefetch: true */
      "./orders"
    ),
  {
    resolveComponent: ({ OrdersPage }) => OrdersPage,
    fallback: <GeneralTemplate loading />,
  }
);
export const CartPage = loadable(
  () =>
    import(
      /* webpackChunkName: "cart-page-lazy" */
      /* webpackPrefetch: true */
      "./cart"
    ),
  {
    resolveComponent: ({ CartPage }) => CartPage,
    fallback: <GeneralTemplate loading />,
  }
);
