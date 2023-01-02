import { Express } from 'express';
import {
  CreateVehicleController,
  DeleteVehicleController,
  ListVehicleController,
  UpdateVehicleController,
  listOneVehicleController,
} from '../controllers/Vehicle';
import serializerInputsPatchMiddleware from '../middlewares/Vehicle/serializerInputsPatch.middleware';
import VeichleIdMiddleware from '../middlewares/Vehicle/veichleId.middleware';
import verifyInputsValuesMiddleware from '../middlewares/verifyInputsValues.middleware';

const expectedKeys = [
  'typeOffer',
  'title',
  'year',
  'mileage',
  'price',
  'describe',
  'typeVehicles',
  'coverImg',
  'GalleryImg',
];
const vehicleRoutes = (app: Express): void => {
  app.post(
    '/vehicle/:userId',
    verifyInputsValuesMiddleware(expectedKeys),
    CreateVehicleController
  );
  app.get('/vehicle', ListVehicleController);
  app.delete(
    '/vehicle/:vehicleId',
    VeichleIdMiddleware,
    DeleteVehicleController
  );
  app.patch(
    '/vehicle/:vehicleId',
    VeichleIdMiddleware,
    serializerInputsPatchMiddleware,
    UpdateVehicleController
  );
  app.get('/vehicle/:vehicleId', VeichleIdMiddleware, listOneVehicleController);
};

export { vehicleRoutes };
