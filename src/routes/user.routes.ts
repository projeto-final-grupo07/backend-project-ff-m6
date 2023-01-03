import { Express } from 'express';
import {
  CreateUserController,
  DeleteUserController,
  ListOneUserController,
  ListUserController,
  LoginController,
} from '../controllers/User';
import LoginVerifyMiddleware from '../middlewares/LoginVerify.middleware';
import serializerUserMiddleware from '../middlewares/User/serializerUser.middleware';
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
    serializerUserMiddleware,
    verifyInputsValuesMiddleware(expectedKeys),
    CreateUserController
  );
  app.get('/users', ListUserController);
  app.get(
    '/user/',
    LoginVerifyMiddleware,
    UserFindIdMiddleware,
    ListOneUserController
  );
  app.delete(
    '/user/',
    LoginVerifyMiddleware,
    UserFindIdMiddleware,
    DeleteUserController
  );
};

export { userRoutes };
