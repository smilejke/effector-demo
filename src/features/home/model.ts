import { setMenu } from "features/home/controllers";
import { $menu } from "features/home/stores";

$menu.on(setMenu, (_, payload) => payload);
