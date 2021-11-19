export interface Exam {
  _id?: string;
  image: string;
  patientName: string;
  patientLastName: string;
  age: number;
  phone: string;
  rut: string;
  prediction: string;
  idUser: string;
  updatedAt?: Date;
  createdAt?: Date;
};
