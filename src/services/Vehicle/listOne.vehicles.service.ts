import prismaCliente from '../../database/prismaCliente';

const ListOneService = async (vehicleId: string): Promise<any> => {
  return prismaCliente.vehicle.findUniqueOrThrow({
    where: {
      id: vehicleId,
    },
    include: { GalleryImgs: true },
  });
};
export default ListOneService;
