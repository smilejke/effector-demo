export type ShopLocation = {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  address: string;
  description: string;
  workingHours: { open: string; close: string };
  phone: string;
  picture: string;
}
