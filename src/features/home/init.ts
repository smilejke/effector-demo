import { forward } from "effector";
import { getProductsByCategoryFx, setMenu } from "features/home/controllers";

import "./model";

forward({
  from: getProductsByCategoryFx.done.map(({ result }) => result),
  to: setMenu,
});
