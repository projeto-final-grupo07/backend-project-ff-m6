import { Request, Response } from 'express';
import { IUserCreate, IUserUpdate } from '../../interfaces/User';
import CreateUserService from '../../services/User/create.user.service';
import DeleteUserService from '../../services/User/delete.user.service';
import ListUserService from '../../services/User/list.user.service';
import ListOneUserService from '../../services/User/listOne.user.service';
import LoginService from '../../services/User/login.user.service';
import UpdateUserService from '../../services/User/update.user.service';

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

export const ListUserController = async (req: Request, res: Response) => {
  const users = await ListUserService();

  res.json(users);
};

export const ListOneUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const user = await ListOneUserService(userId);

  res.json(user);
};

export const DeleteUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  await DeleteUserService(userId);

  res.status(204).send();
};

export const UpdateUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const data: IUserUpdate = req.body;

  const updatedUser = await UpdateUserService(data, userId);

  res.json(updatedUser);
};
