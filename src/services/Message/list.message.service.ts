import prismaCliente from '../../database/prismaCliente';

const ListCommentService = async () => {
  const comments = await prismaCliente.message.findMany({
    include: { user: true },
  });

  return comments;
};

export default ListCommentService;
