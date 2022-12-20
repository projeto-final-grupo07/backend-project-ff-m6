import { Express } from 'express';
import {
  CreateVehicleController,
  DeleteVehicleController,
  ListVehicleController,
  UpdateVehicleController,
  listOneVehicleController,
} from '../controllers/Vehicle';

const vehicleRoutes = (app: Express): void => {
  app.post('/vehicle', CreateVehicleController);
  app.get('/vehicle', ListVehicleController);
  app.delete('/vehicle/:vehicleId', DeleteVehicleController);
  app.patch('/vehicle/:vehicleId', UpdateVehicleController);
  app.get('/vehicle/:vehicleId', listOneVehicleController);
};

export { vehicleRoutes };
