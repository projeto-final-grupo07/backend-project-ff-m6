import { Express } from 'express';
import {
  ResetPasswordController,
  SendEmailController
} from '../controllers/Email';
import {
  CreateUserController,
  DeleteUserController,
  ListOneUserController,
  ListUserController,
  LoginController,
  UpdateUserAddressController,
  UpdateUserController
} from '../controllers/User';
import LoginVerifyMiddleware from '../middlewares/LoginVerify.middleware';
import VerifyTokenMiddleware from '../middlewares/ResetPassword/verifyToken.middleware';
import deleteIdBodyUpdateUserMiddleware from '../middlewares/User/deleteIdBodyUpdateUser.middleware';
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
  'Address'
];

const expectedKeysEmail = ['email'];
const expectedKeysPassword = ['email', 'password'];

const userRoutes = (app: Express): void => {
  app.post('/login', LoginController);
  app.post(
    '/user',
    serializerUserMiddleware,
    verifyInputsValuesMiddleware(expectedKeys),
    CreateUserController
  );
  app.get('/users', ListUserController);
  app.get('/user/:userId', ListOneUserController);
  app.delete(
    '/user',
    LoginVerifyMiddleware,
    UserFindIdMiddleware,
    DeleteUserController
  );
  app.patch(
    '/user',
    LoginVerifyMiddleware,
    UserFindIdMiddleware,
    deleteIdBodyUpdateUserMiddleware,
    UpdateUserController
  );
  app.patch(
    '/user/address',
    LoginVerifyMiddleware,
    UserFindIdMiddleware,
    deleteIdBodyUpdateUserMiddleware,
    UpdateUserAddressController
  app.post(
    '/sendEmail',
    verifyInputsValuesMiddleware(expectedKeysEmail),
    SendEmailController
  );
  app.post(
    '/resetPassword',
    verifyInputsValuesMiddleware(expectedKeysPassword),
    VerifyTokenMiddleware,
    ResetPasswordController
  );
};

export { userRoutes };
