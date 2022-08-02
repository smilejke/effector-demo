export const countTotalPriceWithCode = (
  currentPrice: number,
  discount: number,
  count: number = 1
) => {
  return Number(((currentPrice - currentPrice * discount) * count).toFixed(2));
};
