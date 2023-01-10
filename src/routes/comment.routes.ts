import { Express } from 'express';
import {
  CreateCommentController,
  DeleteCommentsController,
  ListCommentsController,
  UpdateCommentsController
} from '../controllers/Message';
import LoginVerifyMiddleware from '../middlewares/LoginVerify.middleware';
import VerifyCommentExistMiddleware from '../middlewares/User/VerifyCommentExist.middleware';
import VerifyOwnerCommentMiddleware from '../middlewares/User/VerifyOwnerComment.middleware';
import verifyInputsValuesMiddleware from '../middlewares/verifyInputsValues.middleware';

const expectedKeys = ['message'];
const commentRoutes = (app: Express): void => {
  app.post(
    '/comment/:vehicleId',
    LoginVerifyMiddleware,
    verifyInputsValuesMiddleware(expectedKeys),
    CreateCommentController
  );
  app.get('/comments', ListCommentsController);
  app.patch(
    '/comment/:commentId',
    LoginVerifyMiddleware,
    VerifyOwnerCommentMiddleware,
    UpdateCommentsController
  );
  app.delete(
    '/comment/:commentId',
    LoginVerifyMiddleware,
    VerifyCommentExistMiddleware,
    DeleteCommentsController
  );
};

export { commentRoutes };
