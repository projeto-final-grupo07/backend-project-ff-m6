import prismaCliente from '../../database/prismaCliente';
import { IVehicleUpdate } from '../../interfaces/Vehicle';

const UpdateVehicleService = async (
  vehicleId: string,
  dataBody: IVehicleUpdate
) => {

  dataBody.GalleryImg?.forEach(async (elem) => {
    if (elem.id) {
      const img = await prismaCliente.galleryImg.update({
        where: {
          id: elem.id,
        },
        data: {
          url: elem.url,
        },
      });
    } else {
      const img = await prismaCliente.galleryImg.create({
        data: {
          url: elem.url,
          vehicle_id: vehicleId,
        },
      });
    }
  });

  delete dataBody.GalleryImg;

  const vehicle = await prismaCliente.vehicle.update({
    where: {
      id: vehicleId,
    },
    data: dataBody,
    include: {
      GalleryImgs: true,
    },
  });

  return vehicle;
};

export default UpdateVehicleService;
