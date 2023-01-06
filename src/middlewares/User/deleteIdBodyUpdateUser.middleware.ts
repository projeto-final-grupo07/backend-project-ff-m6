import { Request, Response, NextFunction } from 'express';

const deleteIdBodyUpdateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  if (data.id) {
    delete data.id;
  }

  if (data.password) {
    delete data.password;
  }

  if (data.Address) {
    delete data.Address;
  }

  next();
};

export default deleteIdBodyUpdateUserMiddleware;
