import prismaCliente from '../../database/prismaCliente';

const DeleteUserService = async (userId: string) => {
  const user = await prismaCliente.user.update({
    where: {
      id: userId,
    },
    data: {
      is_active: false,
    },
  });

  return;
};

export default DeleteUserService;
