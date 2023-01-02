import prismaCliente from '../../database/prismaCliente';

const UpdateImgService = async (img_id: string, url: string): Promise<any> => {
  const updatedImg = await prismaCliente.galleryImg.update({
    where: {
      id: img_id,
    },
    data: {
      url: url,
    },
    include: {
      vehicle: true,
    },
  });

  return updatedImg;
};

export default UpdateImgService;
