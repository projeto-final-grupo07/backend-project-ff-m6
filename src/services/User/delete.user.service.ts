import prismaCliente from '../../database/prismaCliente';

const DeleteUserService = async (userId: string) => {
  // const vehicles = await prismaCliente.vehicle.deleteMany({
  //   where: {
  //     user_id: userId,
  //   },
  // });

  const user = await prismaCliente.user.update({
    where: {
      id: userId,
    },
    data: {
      is_active: false,
    },
  });

  console.log(user);

  return;
};

export default DeleteUserService;
