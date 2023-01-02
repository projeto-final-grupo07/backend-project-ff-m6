import { Request, Response } from 'express';
import { IUserCreate } from '../../interfaces/User';
import CreateUserService from '../../services/User/create.user.service';
import LoginService from '../../services/User/login.user.service';

export const LoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await LoginService(email, password);

  res.json({ token });
};

export const CreateUserController = async (req: Request, res: Response) => {
  const data: IUserCreate = req.body;

  const user = await CreateUserService(data);

  res.status(201).json(user);
};
