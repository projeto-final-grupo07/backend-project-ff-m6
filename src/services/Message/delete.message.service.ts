/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import prismaCliente from '../../database/prismaCliente';

const DeleteCommentService = async (commentId: string) => {
  await prismaCliente.message.delete({
    where: {
      id: commentId,
    },
  });

  return;
};

export default DeleteCommentService;
