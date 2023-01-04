import { Express } from 'express';
import { commentRoutes } from './comment.routes';
import { imgRoutes } from './img.router';
import { userRoutes } from './user.routes';
import { vehicleRoutes } from './vehicle.router';

const appRoutes = (app: Express) => {
  userRoutes(app);
  vehicleRoutes(app);
  imgRoutes(app);
  commentRoutes(app);
};

export default appRoutes;
