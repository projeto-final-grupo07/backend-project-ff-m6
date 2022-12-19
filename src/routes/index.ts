import { Express } from "express";
import { userRoutes } from "./user.routes";
import { vehicleRoutes } from "./vehicle.router";

const appRoutes = (app: Express) => {
  userRoutes(app);
  vehicleRoutes(app);
};

export default appRoutes;
