import prismaCliente from '../../database/prismaCliente';

const ListVehicleService = async (): Promise<any> => {
  return await prismaCliente.vehicle.findMany({
    include: { GalleryImgs: true },
  });
};

export default ListVehicleService;
