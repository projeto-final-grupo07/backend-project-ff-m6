import { Express } from 'express';
import {
  CreateImgController,
  DeleteImgController,
  ListImgByIdController,
  ListImgController,
  UpdateImgController,
} from '../controllers/Img';
import deleteIdBodyImgMiddleware from '../middlewares/Img/deleteIdBodyImg.middleware';
import imgCreateIdMiddleware from '../middlewares/Img/imgCreateId.middleware';
import VeichleIdMiddleware from '../middlewares/Img/imgId.middleware';
import verifyInputsValuesMiddleware from '../middlewares/verifyInputsValues.middleware';

const expectedKeys = ['url'];
const imgRoutes = (app: Express): void => {
  app.post(
    '/vehicle/img/:vehicleId',
    imgCreateIdMiddleware,
    verifyInputsValuesMiddleware(expectedKeys),
    CreateImgController
  );
  app.get('/imgs', ListImgController);
  app.get('/img/:imgId', VeichleIdMiddleware, ListImgByIdController);
  app.delete('/img/:imgId', VeichleIdMiddleware, DeleteImgController);
  app.patch(
    '/img/:imgId',
    VeichleIdMiddleware,
    deleteIdBodyImgMiddleware,
    UpdateImgController
  );
};

export { imgRoutes };
