import prismaCliente from '../../database/prismaCliente';

const DeleteImgService = async (img_id: string): Promise<any> => {
  await prismaCliente.galleryImg.delete({
    where: {
      id: img_id,
    },
  });

  return;
};

export default DeleteImgService;
