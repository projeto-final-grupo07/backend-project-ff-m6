import { Express } from 'express';
import {
  CreateUserController,
  DeleteUserController,
  ListOneUserController,
  ListUserController,
  LoginController,
} from '../controllers/User';
import UserFindIdMiddleware from '../middlewares/User/UserFindId.middleware';
import verifyInputsValuesMiddleware from '../middlewares/verifyInputsValues.middleware';

const expectedKeys = [
  'name',
  'email',
  'password',
  'cpf',
  'phone',
  'birthDate',
  'describe',
  'typeAccount',
  'is_active',
  'Address',
];

const userRoutes = (app: Express): void => {
  app.post('/login', LoginController);
  app.post(
    '/user',
    verifyInputsValuesMiddleware(expectedKeys),
    CreateUserController
  );
  app.get('/users', ListUserController);
  app.get('/user/:userId', UserFindIdMiddleware, ListOneUserController);
  app.delete('/user/:userId', UserFindIdMiddleware, DeleteUserController);
};

export { userRoutes };
