interface InterFaceNewApplication {
  equipments: { id: number, name: string, count: number, price: string, in_stock: number, photo: string, photo_alias: string, allCount: string, payList: { sum: string, cashBox: string, revertSum: boolean}[] }[];
  typeLease: { val: number, required: boolean, name: string };
  sale: { val: number, required: boolean, name: string };
  status: { val: number, required: boolean, name: string };
  source: { val: number, required: boolean, name: string };
  rent_start: { val: string, required: boolean, name: string };
  rent_end: { val: string, required: boolean, name: string };
  delivery: { val: number, required: boolean, name: string };
  branch: { val: number, required: boolean, name: string };
  client_id: number;
  comment: string;
  client_fio: { val: string, required: boolean, name: string };
  client_email: { val: string, required: boolean, name: string };
  client_phone: { val: string, required: boolean, name: string };
  client_number_passport: { val: string, required: boolean, name: string };
  sum: string;
  client_type: number;
  delivery_sum: string;
  month_sum: { val: string, required: boolean, name: string };
  square: { val: number, required: boolean, name: string };
  address: { val: string, required: boolean, name: string };
}
