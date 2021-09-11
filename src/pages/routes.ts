import { HomePage } from "./home";
import { CartPage } from "./cart";
import { StatusPage } from "./status";
import { paths } from "./paths";

export const routes = [
    {
        component: HomePage,
        path: paths.home()
    },
    {
        component: CartPage,
        path: paths.cart()
    },
    {
        component: StatusPage,
        path: paths.status()
    }
]