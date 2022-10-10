import { forward, guard, sample, split } from "effector";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  selectProduct,
  setMenu,
} from "features/menu/model/controllers";
import { addToCart, deleteFromCart } from "features/cart/model/controllers";
import { $products, $selectedCategories } from "features/menu/model/stores";
import { TProductGuard } from "features/menu/types";

import "./model";

/**
 * 1. FORWARD is effector's function which can be read as:
 * when FROM happens, call TO with value returned from FROM as params.
 *
 * 2. SPLIT is effector's variation of switch/case construction.
 *
 * 3. SAMPLE is effector's function which can be read as:
 * when CLOCK triggers, take value from SOURCE and value returned from CLOCK,
 * pass them as FN's arguments and call TARGET with the value returned from FN.
 *
 * 4. GUARD is effector's function which can be read as:
 * When CLOCK triggers, check if FILTER is true and call TARGET with SOURCE as props.
 *
 * Separately, it should be said that ".map" method here is not native JS array method. It's effector's function
 * which does data extraction / transformation.
 *
 * Most of the fields are not required and are optional, for example here are sample's types:
 * sample({source?, clock?, fn?, target?}): target.
 * Depending on what is used, the meaning of other fields can be changed.
 * In description above I have listed only "full" variations for all functions.
 * You can learn more in the Effector documentation. (https://github.com/effector/effector).
 * **/

/** ========================================================= **/

/**
 * Read as:
 * 1. When selectCategory called, take it's params.
 * 2. Also take data from SOURCE ($selectedCategories store),
 * 3. Pass them through FN (data from SOURCE - 1st arg of FN, data from CLOCK - 2nd)
 * 4. The result of FN (Object { is: state[category], category }) assign into getProductCategorySample variable.
 * **/
const getProductCategorySample = sample({
  source: $selectedCategories,
  clock: selectCategory,
  fn: (state, category) => ({
    is: state[category],
    category,
  }),
});

/**
 * Read as:
 * 1. Take data from getProductCategorySample
 * 2. Check (in FILTER function) if it has "is" property.
 * **/
const getProductCategoryGuard = guard({
  source: getProductCategorySample,
  filter: (state) => !state.is,
});
/**
 * Read as: Take data from getProductCategoryGuard and create two scenarios:
 * 1. effectToUse.category - keep any category instead of "all",
 * 2. effectToUse.all - keep "all" value
 * **/
const effectToUse = split(getProductCategoryGuard, {
  category: ({ category }) => category !== "all",
  all: ({ category }) => category === "all",
});

/**
 * After all the work above, last 2 forwards checks what category was selected by user and calls the corresponding effect.
 * From this point of view, if user clicked on "all" category, getAllProductsFx will be called.
 * In other case, getProductsByCategoryFx will be called.
 * **/
forward({
  from: effectToUse.category.map(({ category }) => category),
  to: getProductsByCategoryFx,
});

forward({
  from: effectToUse.all.map(({ category }) => category),
  to: getAllProductsFx,
});

/**
 * When getProductsByCategoryFx done successful (if effect fails, .done is unavailable ),
 * get it's response, destructure data and call SetMenu event with this data as props.
 * **/
forward({
  from: getProductsByCategoryFx.done.map(({ result }) => result),
  to: setMenu,
});

/** ========================================================= **/

/**
 * Read as:
 * 1. After selectProduct is called, take $products and selectProduct's params and pass them as FN's args,
 * 2. Return { product, action } in FN
 * **/
const selectProductSample = sample({
  source: $products,
  clock: selectProduct,
  fn: (products, { id, action }) => {
    const product = products.find((prod) => prod.id === id) ?? null;

    return {
      product,
      action,
    };
  },
});

/**
 * Because of .find JavaScript method in selectProductSample,
 * we should check if product was found by id and not to do extra work if not.
 * That means that if selectProductGuard will return false, further code won't be executed.
 * **/
const selectProductGuard = guard({
  source: selectProductSample,
  filter: (actionResult): actionResult is TProductGuard =>
    actionResult.product !== null,
});

/**
 * If product in selectProductSample was found (that means that selectProductGuard returned true),
 * we will create two cases on "add product to cart" and "remove product from cart", depending on action type
 * and save them into selectProductSplit.add / selectProductSplit.remove
 * **/
const selectProductSplit = split(selectProductGuard, {
  add: ({ action }) => action === "add",
  remove: ({ action }) => action === "remove",
});

/**
 * Depending on selectProductSplit, call the appropriate method.
 * **/
forward({
  from: selectProductSplit.add.map(({ product }) => product),
  to: addToCart,
});

forward({
  from: selectProductSplit.remove.map(({ product }) => product),
  to: deleteFromCart,
});
