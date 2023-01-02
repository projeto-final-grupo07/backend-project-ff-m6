import prismaCliente from '../../database/prismaCliente';

const ListImgByIdService = async (img_id: string): Promise<any> => {
  const img = await prismaCliente.galleryImg.findUnique({
    where: {
      id: img_id,
    },
    include: {
      vehicle: true,
    },
  });

  return img;
};

export default ListImgByIdService;
