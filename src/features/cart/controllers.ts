import { createEvent } from "effector-root";
import { TMenuPosition } from "features/home/types";

export const addToCart = createEvent<TMenuPosition>("addToCart");
export const deleteFromCart = createEvent<TMenuPosition>("deleteFromCart");
