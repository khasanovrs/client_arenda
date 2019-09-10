interface InterFaceHireInfo {
  id: number;
  app_id: number;
  branch: string;
  delivery: number;
  typeLease: string;
  typeLease_id: number;
  sale: number;
  source: number;
  comment: string;
  rent_start: string;
  rent_end: string;
  client_fio: string;
  client_phone: string;
  delivery_sum: string;
  sum: string;
  sum_sale: string;
  count: number;
  total_paid: string;
  remainder: string;
  equipments: {
    equipments_id: string;
    name: string;
    state: string;
    photo: number;
  };
  pay_list: {
    'date': string,
    'user_id': number,
    'sum': string
  };
}
