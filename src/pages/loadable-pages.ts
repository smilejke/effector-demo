import loadable from "@loadable/component";

export const MenuPage = loadable(
  () =>
    import(
      /* webpackChunkName: "menu-page-lazy" */
      /* webpackPrefetch: true */
      "./menu"
    ),
  {
    resolveComponent: ({ MenuPage }) => MenuPage,
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
  }
);
