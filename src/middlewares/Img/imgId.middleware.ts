import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const VeichleIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgId } = req.params;

  const imgExists = await prismaCliente.galleryImg.findUnique({
    where: { id: imgId },
  });

  if (!imgExists) {
    throw new AppError(404, 'Img not found');
  }
  next();
};

export default VeichleIdMiddleware;
