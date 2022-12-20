import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const VeichleIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { vehicleId } = req.params;

  const vehicleExists = await prismaCliente.vehicle.findUnique({
    where: { id: vehicleId },
  });

  if (!vehicleExists) {
    throw new AppError(404, 'Vehicle not found');
  }
  next();
};

export default VeichleIdMiddleware;
