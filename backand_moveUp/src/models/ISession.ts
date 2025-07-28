import { IStudent } from './IStudent';
import { ITrainer } from './ITrainer';

export interface ISession {
  id: string;
  title: string;
  dateTime: Date;
  location: string;
  student: IStudent;
  studentId: string;
  trainer: ITrainer;
  trainerId: string;
}
