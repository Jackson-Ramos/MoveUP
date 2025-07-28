import { Request, Response } from 'express'
import { createUserRepository } from '../repositories/user/user-repository';

export const createUser = async (request: Request, response: Response) => {
    try {
    const user = await createUserRepository(request.body);
    response.status(201).json(user);
  } catch (err) {
    console.error(err);
    response.status(400).json({ error: 'Failed to create user' });
  }
}