import { IWorkout } from './IWorkout';

export interface IWorkoutExercise {
  id: string;
  name: string;
  sets: number;
  repetitions: number;
  weight: number;
  notes?: string;
  mediaUrl: string;
  workout: IWorkout;
  workoutId: string;
}
