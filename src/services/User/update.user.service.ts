import prismaCliente from '../../database/prismaCliente';
import { IUserUpdate } from '../../interfaces/User';

const UpdateUserService = async (data: IUserUpdate, userId: string) => {
  const updatedUser = await prismaCliente.user.update({
    where: {
      id: userId,
    },
    data,
    include: {
      Address: true,
    },
  });

  updatedUser.password = '';

  return updatedUser;
};

export default UpdateUserService;
