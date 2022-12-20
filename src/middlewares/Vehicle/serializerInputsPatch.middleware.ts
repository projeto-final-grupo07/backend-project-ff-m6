import { Request, Response, NextFunction } from 'express';
import { IVehicleUpdate } from '../../interfaces/Vehicle';

const serializerInputsPatchMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: IVehicleUpdate = req.body;

  if (data.id) {
    delete data.id;
  }

  next();
};

export default serializerInputsPatchMiddleware;
