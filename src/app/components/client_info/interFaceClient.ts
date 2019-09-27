interface InterFaceClient {
  sale: number;
  branch: number;
  status: number;
  source: number;
  name: string;
  inn: number;
  kpp: number;
  name_chief: string;
  fio: string;
  phone_1: string;
  phone_2: string;
  phone_3: string;
  email: string;
  number_passport: string;
  count_application: number;
  all_total_paid: string;
  application_list: {
    rent_start: string;
    rent_end: string;
    sum: string;
    total_paid: string;
    equipments: string;
  }[];
  pay_list: {
    sum: string;
    date: string;
    equipments: string;
    cashBox: string;
  }[];
  change_status_list: {
    date: string;
    old_status: string;
    new_status: string;
    text: string;
    user: string;
  }[];

}
