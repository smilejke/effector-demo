import update from "immutability-helper";

import { addToCart } from "features/cart/controllers";
import { $cart } from "features/cart/stores";

$cart.on(addToCart, (state, position) => update(state, { $push: [position] }));
