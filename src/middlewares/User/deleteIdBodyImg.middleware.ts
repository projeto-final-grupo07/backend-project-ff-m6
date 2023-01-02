import { Request, Response, NextFunction } from 'express';

const deleteIdBodyImgMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  if (data.id) {
    delete data.id;
  }

  next();
};

export default deleteIdBodyImgMiddleware;
