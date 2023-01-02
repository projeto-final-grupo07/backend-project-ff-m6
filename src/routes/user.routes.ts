import { Express } from 'express';
import { CreateUserController } from '../controllers/User';
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
  app.post(
    '/user',
    verifyInputsValuesMiddleware(expectedKeys),
    CreateUserController
  );
};

export { userRoutes };
