import prismaCliente from '../../database/prismaCliente';

const ListCommentService = async () => {
  const comments = await prismaCliente.message.findMany();

  return comments;
};

export default ListCommentService;
