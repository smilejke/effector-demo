import { ShopLocation } from "src/shared/types";

export const SHOP_ITEM_LOCATION: Omit<ShopLocation, "id"> = {
  name: "",
  location: {
    lat: 0,
    lng: 0,
  },
  address: "",
  description: "",
  workingHours: {
    open: "",
    close: "",
  },
  phone: "",
  picture: "",
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
      location: { lat: 59.955413, lng: 30.337844 },
      id: 2,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #3",
      location: { lat: 59.955413, lng: 30.337844 },
      id: 3,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #4",
      location: { lat: 59.955413, lng: 30.337844 },
      id: 4,
    }),
  },
  {
    ...createShopItemLocation({
      name: "Shop #5",
      location: { lat: 59.955413, lng: 30.337844 },
      id: 5,
    }),
  },
];
