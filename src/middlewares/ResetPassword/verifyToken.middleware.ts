/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';
require('dotenv').config();

const VerifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, token } = req.body;

  const userExists = await prismaCliente.user.findUnique({
    where: { email },
  });

  if (!userExists) {
    throw new AppError(404, 'User not found');
  }

  if (token !== userExists.passwordResetToken) {
    throw new AppError(401, 'token invalid');
  }

  const now = new Date();
  const existDate = userExists.passwordResetExpires
    ? userExists.passwordResetExpires
    : new Date();

  if (now >= existDate) {
    throw new AppError(401, 'token expired');
  }

  next();
};

export default VerifyTokenMiddleware;
