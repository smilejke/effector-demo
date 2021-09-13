import { createEvent } from "effector-root";
import { TMenuPositionCategory } from "features/home/types";

export const selectCategory =
  createEvent<TMenuPositionCategory>("selectCategory");
