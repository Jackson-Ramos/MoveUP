import { ISession } from './ISession';
import { ITrainer } from './ITrainer';
import { IUser } from './IUser';
import { IWorkout } from './IWorkout';

export interface IStudent {
  id: string;
  goals: string;
  user: IUser;
  trainer: ITrainer;
  trainerId: string;
  workouts: IWorkout[];
  sessions: ISession[];
}
