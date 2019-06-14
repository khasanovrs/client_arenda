interface InterFaceNewApplication {
  equipments: { id: number, name: string, count: number, price: string, stock: number, photo: string }[];
  typeLease: { val: number, required: true, name: string };
  sale: { val: number, required: true, name: string };
  status: { val: number, required: true, name: string };
  source: { val: number, required: true, name: string };
  rent_start: { val: number, required: true, name: string };
  rent_end: { val: number, required: true, name: string };
  delivery: { val: number, required: true, name: string };
  branch: { val: number, required: true, name: string };
  client_id: number;
  comment: string;
  client_fio: { val: string, required: true, name: string };
  client_email: { val: string, required: false, name: string };
  client_phone: { val: string, required: true, name: string };
  client_number_passport: { val: string, required: true, name: string };
  client_where_passport: { val: string, required: true, name: string };
  client_date_passport: { val: string, required: true, name: string };
  client_address_passport: { val: string, required: true, name: string };
  sum: string;
  delivery_sum: string;
}
