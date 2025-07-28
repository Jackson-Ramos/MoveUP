import { Role } from "@prisma/client";
import { IStudent } from './IStudent';
import { ITrainer } from './ITrainer';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  student?: IStudent;
  trainer?: ITrainer;
  active: boolean
}
