export interface Admin {
  _id?: string;
  name: string;
  lastname: string;
  rol: string;
  verified?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
};
