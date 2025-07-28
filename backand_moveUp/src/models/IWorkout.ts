import { IStudent } from './IStudent';
import { IWorkoutExercise } from './IWorkoutExercise';

export interface IWorkout {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  student: IStudent;
  studentId: string;
  exercises: IWorkoutExercise[];
}