import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  setMenu,
} from "features/home/controllers";
import {
  $menu,
  $selectedCategories,
  $selectedCategory,
} from "features/home/stores";

$menu
  .on(setMenu, (state, payload) => [...state, ...payload])
  .on(getAllProductsFx.doneData, (_, payload) => payload);

$selectedCategories
  .on(getProductsByCategoryFx.done, (state, payload) => {
    return {
      ...state,
      [payload.params]: true,
    };
  })
  .on(getAllProductsFx.done, (state, payload) => ({
    soups: true,
    burgers: true,
    salads: true,
  }));

$selectedCategory.on(selectCategory, (_, payload) => payload);
