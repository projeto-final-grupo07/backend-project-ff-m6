import { Express } from "express";
import CreateVehicleController from "../controllers/Vehicle/create.vehicles.controller";
import DeleteVehicleController from "../controllers/Vehicle/delete.vehicles.controller";
import ListVehicleController from "../controllers/Vehicle/list.vehicles.controller";
import UpdateVehicleController from "../controllers/Vehicle/update.vehicles.controller";

function vehicleRoutes(app: Express) {
  app.post("/vehicle", CreateVehicleController);
  app.get("/vehicle", ListVehicleController);
  app.delete("/vehicle/:vehicle_id", DeleteVehicleController);
  app.patch("/vehicle/:vehicle_id", UpdateVehicleController);
}

export { vehicleRoutes };
