import prismaCliente from '../../database/prismaCliente';

const ListImgService = async (): Promise<any> => {
  const imgs = await prismaCliente.galleryImg.findMany();

  return imgs;
};

export default ListImgService;
