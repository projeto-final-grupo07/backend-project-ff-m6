import { Express } from "express";
import CreateVehicleController from "../controllers/Vehicle/create.vehicles.controller";

function vehicleRoutes(app: Express) {
  app.post("/vehicle", CreateVehicleController);
}

export { vehicleRoutes };
