import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';

import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const LoginService = async (email: string, password: string) => {
  const user = await prismaCliente.user.findFirst({
    where: { email },
  });

  if (!user) {
    throw new AppError(401, 'Invalid credentials');
  }

  // console.log(!compareSync(password, user.password));
  if (!compareSync(password, user.password)) {
    throw new AppError(401, 'Invalid credentials');
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: '1d',
    }
  );

  return token;
};

export default LoginService;
