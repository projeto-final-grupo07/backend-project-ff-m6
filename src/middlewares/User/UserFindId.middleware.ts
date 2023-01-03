import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const UserFindIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;

  const userExists = await prismaCliente.user.findUnique({
    where: { id: userId },
  });

  if (!userExists || userExists.is_active == false) {
    throw new AppError(404, 'User not found');
  }
  next();
};

export default UserFindIdMiddleware;
