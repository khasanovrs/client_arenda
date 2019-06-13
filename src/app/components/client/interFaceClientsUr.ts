interface IClientsUr {
  date_create: string;
  dohod: number;
  last_contact: string;
  name: string;
  phone: string;
  rentals: number;
  sale: { code: string, name: string };
  source: { name: string, id: number };
  status: number;
}
