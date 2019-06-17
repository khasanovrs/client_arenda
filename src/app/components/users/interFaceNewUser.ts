interface InterFaceNewUser {
  id: number;
  fio: string;
  name_lastName: string;
  pass: string;
  user_type: { val: number, name: string };
  branch_id: { val: number, name: string };
  email: string;
  phone: string;
  user_right: any;
  btn: string;
}
