interface InterFaceApplicationInfo {
  id: number;
  branch: { val: number, required: true, name: string };
  delivery: { val: number, required: true, name: string };
  typeLease: { val: number, required: true, name: string };
  sale: { val: number, required: true, name: string };
  source: { val: number, required: true, name: string };
  comment: string;
  rent_start: { val: number, required: true, name: string };
  rent_end: { val: number, required: true, name: string };
  client_id: number;
  client_fio: string;
  client_phone: string;
  delivery_sum: string;
  sum: string;
  equipments: {
    id: number,
    name: string,
    count: number,
    status: number,
    stock: number,
    photo: string,
    price: string,
  };
  pay_list: {
    'date': string,
    'user_id': number,
    'sum': string
  }[];
}
