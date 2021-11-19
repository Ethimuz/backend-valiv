export interface User {
  _id?: string;
  name: string;
  lastname: string;
  speciality: string;
  institution: string;
  phone: number;
  verified?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
};
