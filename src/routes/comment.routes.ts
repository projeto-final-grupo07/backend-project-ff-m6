import { Express } from 'express';
import { CreateCommentController, ListCommentsController } from '../controllers/Message';
import LoginVerifyMiddleware from '../middlewares/LoginVerify.middleware';
import verifyInputsValuesMiddleware from '../middlewares/verifyInputsValues.middleware';

const expectedKeys = ['message'];
const commentRoutes = (app: Express): void => {
  app.post(
    '/comment/:vehicleId',
    LoginVerifyMiddleware,
    verifyInputsValuesMiddleware(expectedKeys),
    CreateCommentController
  );
  app.get('/comments', ListCommentsController)
};

export { commentRoutes };
