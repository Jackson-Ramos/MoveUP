import { IUser } from './IUser';
import { IStudent } from './IStudent';
import { ISession } from './ISession';

export interface ITrainer {
  id: string;
  bio: string;
  user: IUser;
  students: IStudent[];
  sessions: ISession[];
}
