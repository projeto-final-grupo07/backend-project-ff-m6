/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const VerifyOwnerCommentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const { commentId } = req.params;

  const userExists = await prismaCliente.user.findUnique({
    where: { id: userId },
  });

  if (!userExists || userExists.is_active === false) {
    throw new AppError(404, 'User not found');
  }

  const commentExists = await prismaCliente.message.findUnique({
    where: { id: commentId },
  });

  if (!commentExists) {
    throw new AppError(404, 'Comment not found');
  }

  if (commentExists.user_id !== userExists.id) {
    throw new AppError(404, 'User not Owner Comment');
  }

  next();
};

export default VerifyOwnerCommentMiddleware;
