/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { hash } from 'bcryptjs';
import prismaCliente from '../../database/prismaCliente';

const ResetPasswordService = async (email: string, password: string) => {
  const user = await prismaCliente.user.update({
    where: {
      email,
    },
    data: {
      password: await hash(password, 10),
    },
  });
  return user;
};

export default ResetPasswordService;
