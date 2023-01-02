import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../errors/appError';
require('dotenv').config();

const LoginVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(400, 'Token Required');
  }

  token = token.split(' ')[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(401, 'Invalid token');
      }

      req.user = {
        id: decoded.id,
        email: decoded.email,
      };
    }
  );

  next();
};

export default LoginVerifyMiddleware;
