import { hash } from 'bcryptjs';
import prismaCliente from '../../database/prismaCliente';
import { IUserUpdate, IUserUpdateExcludeAddress } from '../../interfaces/User';

const UpdateUserService = async (data: IUserUpdate, userId: string) => {
  if (data.Address) {
    await prismaCliente.user.update({
      where: {
        id: userId,
      },
      data: {
        Address: {
          update: data.Address,
        },
      },
    });

    delete data.Address;
  }

  const newData: IUserUpdateExcludeAddress = data;

  const updatedUser = await prismaCliente.user.update({
    where: {
      id: userId,
    },
    data: newData,
    include: {
      Address: true,
    },
  });

  updatedUser.password = '';

  return updatedUser;
};

export default UpdateUserService;
