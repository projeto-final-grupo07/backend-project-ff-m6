import { Express } from "express";
import CreateVehicleController from "../controllers/Vehicle/create.vehicles.controller";
import ListVehicleController from "../controllers/Vehicle/list.vehicles.controller";

function vehicleRoutes(app: Express) {
  app.post("/vehicle", CreateVehicleController);
  app.get("/vehicle", ListVehicleController);
}

export { vehicleRoutes };
