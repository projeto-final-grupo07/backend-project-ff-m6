import prismaCliente from '../../database/prismaCliente';
import { IImgCreate } from '../../interfaces/Img';

const CreateImgService = async ({
  url,
  vehicleId,
}: IImgCreate): Promise<any> => {
  const img = await prismaCliente.galleryImg.create({
    data: {
      url: url,
      vehicle_id: vehicleId,
    },
    include: {
      vehicle: true,
    },
  });

  return img;
};

export default CreateImgService;
