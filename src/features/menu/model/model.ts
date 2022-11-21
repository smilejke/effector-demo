import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  setMenu,
} from "features/menu/model/controllers";
import {
  $menu,
  $cachedCategories,
  $selectedCategory,
} from "features/menu/model/stores";

/** Stores subscriptions on different actions. **/

$menu
  .on(setMenu, (state, payload) => [...state, ...payload])
  .on(getAllProductsFx.doneData, (_, payload) => payload);

$cachedCategories
  .on(getProductsByCategoryFx.done, (state, payload) => {
    const categories = ["salads", "burgers", "soups"];
    const updated = {
      ...state,
      [payload.params]: true,
    };

    const isMenuComplete = categories.every((item) => updated[item]);

    if (isMenuComplete) {
      return {
        ...updated,
        all: true,
      };
    }
    return updated;
  })
  .on(getAllProductsFx.done, (_, payload) =>
    payload.result.reduce((acc, item) => {
      if (acc[item.category]) {
        return { ...acc };
      }
      return { ...acc, [item.category]: true, all: true };
    }, {} as Record<string, boolean>)
  );

$selectedCategory.on(selectCategory, (_, payload) => payload);
