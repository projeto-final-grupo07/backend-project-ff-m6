import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';

const verifyInputsValuesMiddleware = (inputsValues: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const inputs = inputsValues;

    const keys = Object.keys(data);
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
};

export default verifyInputsValuesMiddleware;
