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
  count: number;
  total_paid: string;
  remainder: string;
  hire_state_id: number;
  hire_state: string;
  equipments: {
    equipments_id: string;
    name: string;
    state: string;
    state_id: number;
    photo: string;
    photo_alias: string;
  };
  pay_list: {
    'date': string,
    'user_id': number,
    'sum': string,
    'cash_box': string
  }[];
  extensions: {
    'date': string,
    'user_id': string,
    'count': number;
  }[];
  lesa: string;
  rama_prokhodnaya: number;
  rama_letsnitsey: number;
  diagonalnaya_svyaz: number;
  gorizontalnaya_svyaz: number;
  rigel: number;
  nastil: number;
  month_sum: string;
  square: string;
  address: string;
}
