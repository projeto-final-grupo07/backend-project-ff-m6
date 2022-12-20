import { Express } from 'express';
import {
  CreateVehicleController,
  DeleteVehicleController,
  ListVehicleController,
  UpdateVehicleController,
} from '../controllers/Vehicle';

const vehicleRoutes = (app: Express): void => {
  app.post('/vehicle', CreateVehicleController);
  app.get('/vehicle', ListVehicleController);
  app.delete('/vehicle/:vehicle_id', DeleteVehicleController);
  app.patch('/vehicle/:vehicle_id', UpdateVehicleController);
};

export { vehicleRoutes };
