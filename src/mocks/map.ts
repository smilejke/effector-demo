import { ShopLocation } from "src/shared/types";

export const SHOP_ITEM_LOCATION: Omit<ShopLocation, "id"> = {
  name: "Shop Item Location",
  location: {
    lat: 0,
    lng: 0,
  },
  address: "some address",
  description: "some description",
  workingHours: {
    open: "08:00",
    close: "20:00",
  },
  phone: "123456789",
  picture: "https://img.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_181624-1669.jpg?t=st=1654693296~exp=1654693896~hmac=dfc1968a0ea6143f49decf59d70e9db47d141392619161e96679edfdddb766d0&w=1380",
};

function createShopItemLocation(params: {
  id: number;
  name?: string;
  location?: { lat: number; lng: number };
  address?: string;
  description?: string;
  workingHours?: { open: string; close: string };
  phone?: string;
  picture?: string;
}): ShopLocation {
  return {
    ...SHOP_ITEM_LOCATION,
    ...params,
    id: String(params.id),
  };
}

export const SHOP_ITEM_LOCATIONS = [
  {
    ...createShopItemLocation({
      name: "Shop #1",
      location: { lat: 53.677026, lng: 23.840449 },
      id: 1,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #2",
      location: { lat: 53.677026, lng: 23.850449 },
      picture: "https://img.freepik.com/free-photo/couple-enjoying-food-restaurant_23-2149269177.jpg?w=1380&t=st=1654697168~exp=1654697768~hmac=7a9334736797641a4c408ab59488ba81ce9db3d959ea19a8d8acd25b685e6d65",
      id: 2,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #3",
      location: { lat: 53.677026, lng: 23.800449 },
      picture: "https://img.freepik.com/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16130.jpg?t=st=1654663141~exp=1654663741~hmac=137c77f21347fcf55efc5958bdf9e9f7ece2eed70a85d6565708fac686611c6e&w=1380",
      id: 3,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #4",
      location: { lat: 53.697026, lng: 23.820449 },
      id: 4,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #5",
      location: { lat: 53.647026, lng: 23.830449 },
      id: 5,
    }),
  },
];
