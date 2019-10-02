interface InterFaceInfoEquipments {
  id: number;
  model: string;
  new_status: number;
  old_status: number;
  old_stock: number;
  new_stock: number;
  mark: number;
  type: number;
  category: number;
  count: number;
  discount: number;
  tool_number: number;
  selling_price: string;
  price_per_day: string;
  rentals: number;
  repairs: number;
  repairs_sum: string;
  revenue: string;
  profit: string;
  degree_wear: number;
  payback_ratio: number;
  power_energy: string;
  length: string;
  network_cord: string;
  photo: string;
  photo_alias: string;
  power: string;
  frequency_hits: string;
  comment: string;
  change_history: {
    date: string;
    new_params: string;
    old_params: string;
    type: string;
    reason: string;
    user: string;
  }[];
  change_history_status: {
    date: string;
    new_params: string;
    old_params: string;
    cashBox: string;
    sum: string;
    reason: string;
    user: string;
  }[];
}
