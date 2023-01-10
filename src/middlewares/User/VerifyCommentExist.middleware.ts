/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const VerifyCommentExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { commentId } = req.params;

  const commentExists = await prismaCliente.message.findUnique({
    where: { id: commentId },
  });

  if (!commentExists) {
    throw new AppError(404, 'Comment not found');
  }
  next();
};

export default VerifyCommentExistMiddleware;
