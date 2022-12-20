import { IVehicleCreate } from '../../interfaces/Vehicle';
import prismaCliente from '../../database/prismaCliente';

const CreateVehicleService = async (data: IVehicleCreate): Promise<any> => {
  const {
    GalleryImg,
    coverImg,
    describe,
    mileage,
    price,
    title,
    typeOffer,
    typeVehicles,
    year,
  }: IVehicleCreate = data;

  const vehicle = await prismaCliente.vehicle.create({
    data: {
      coverImg,
      describe,
      mileage,
      price,
      title,
      year,
      typeOffer,
      typeVehicles,
      GalleryImgs: {
        createMany: {
          data: GalleryImg,
          skipDuplicates: true,
        },
      },
    },
    include: {
      GalleryImgs: true,
    },
  });

  return vehicle;
};

export default CreateVehicleService;
