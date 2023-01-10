import prismaCliente from '../../database/prismaCliente';

const ListOneService = async (vehicleId: string): Promise<any> => {
  return prismaCliente.vehicle.findUniqueOrThrow({
    where: {
      id: vehicleId,
    },
    include: {
      GalleryImgs: true,
      Message: { include: { user: { select: { name: true } } } },
      user: true,
    },
  });
};
export default ListOneService;
