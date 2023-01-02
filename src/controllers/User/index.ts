import { Request, Response } from 'express';
import { IUserCreate } from '../../interfaces/User';
import CreateUserService from '../../services/User/create.user.service';

export const CreateUserController = async (req: Request, res: Response) => {
  const data: IUserCreate = req.body

  const user = await CreateUserService(data)

  res.status(201).json(user);
};