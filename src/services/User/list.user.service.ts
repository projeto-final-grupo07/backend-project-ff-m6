import prismaCliente from '../../database/prismaCliente';

const ListUserService = async () => {
  const users = prismaCliente.user.findMany({
    where: {
      is_active: true,
    },
    include: { Address: true, Vehicle: true },
  });

  return users;
};

export default ListUserService;
