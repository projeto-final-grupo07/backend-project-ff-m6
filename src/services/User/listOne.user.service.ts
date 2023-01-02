import prismaCliente from '../../database/prismaCliente';

const ListOneUserService = async (userId: string) => {
  const user = prismaCliente.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      Address: true,
      Vehicle: true,
    },
  });

  return user;
};

export default ListOneUserService;
