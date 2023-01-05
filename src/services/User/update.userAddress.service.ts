/* eslint-disable @typescript-eslint/explicit-function-return-type */
import prismaCliente from '../../database/prismaCliente';
import { IAddressUpdate } from '../../interfaces/User';

const UpdateUserAddressService = async (
  data: IAddressUpdate,
  userId: string
) => {
  const updatedUser = await prismaCliente.user.update({
    where: {
      id: userId,
    },
    data: {
      Address: {
        update: data,
      },
    },
    include: {
      Address: true,
    },
  });

  updatedUser.password = '';

  return updatedUser;
};

export default UpdateUserAddressService;
