interface InterFaceFilter {
  type: string;
  like: string;
  source: { val: number; name: string };
  status: { val: number; name: string };
  date_start: string;
  date_end: string;
  rentals_start: string;
  rentals_end: string;
  dohod_start: string;
  dohod_end: string;
}
