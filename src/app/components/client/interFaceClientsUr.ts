interface IClientsUr {
  fio: string;
  org: string;
  date_create: string;
  last_contact: string;
  name: string;
  phone: string;
  sale: { code: string, name: string };
  source: { name: string, id: number };
  status: number;
  color: string;
  sum_pay: string;
  count_app: string;
  bonus_account: string;
}
