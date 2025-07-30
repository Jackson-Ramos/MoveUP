import { Request, Response } from 'express'
import { createUserService, findAllStudentService } from '../services/user/user-services';

export const createUser = async (request: Request, response: Response) => {
  const user = await createUserService(request.body);
  response.status(user.status).json(user.body);
}

export const findAllStudentController = async (request: Request, response: Response) => {

  const trainerId = request.user.id; // vindo do middleware de autenticação
  const status = (request.query.status as string)
  const responseStudents = await findAllStudentService(trainerId, status)
  response.status(responseStudents.status).json(responseStudents.body);
}