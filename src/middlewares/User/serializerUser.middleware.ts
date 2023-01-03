import { Request, Response, NextFunction } from 'express';
import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

const serializerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const userExists = await prismaCliente.user.findUnique({
    where: { email: data.email },
  });

  if (userExists) {
    throw new AppError(404, 'User already exists');
  }

  const inputs = ['cep', 'state', 'city', 'street', 'number', 'complement'];

  const keys = Object.keys(data.Address);
  const output: string[] = [...inputs];
  const outputEmpty: string[] = [];

  if (Object.keys(data).length == 0) {
    throw new AppError(400, {
      MissingsKeys: output,
      EmptyKeys: outputEmpty,
    });
  }

  inputs.forEach((elem) => {
    keys.forEach((element) => {
      if (elem == element) {
        let index = output.indexOf(elem);
        if (index !== -1) {
          output.splice(index, 1);
        }
      }
    });

    if (data[elem] === '') {
      outputEmpty.push(elem);
    }
  });

  if (
    (output.length !== inputs.length && output.length !== 0) ||
    (outputEmpty.length !== inputs.length && outputEmpty.length !== 0)
  ) {
    throw new AppError(400, {
      MissingsKeys: output,
      EmptyKeys: outputEmpty,
    });
  }

  next();
};

export default serializerUserMiddleware;
