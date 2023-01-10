/* eslint-disable @typescript-eslint/explicit-function-return-type */
import prismaCliente from '../../database/prismaCliente';

const UpdateCommentService = async (message: string, commentId: string) => {
  const commentUpdated = await prismaCliente.message.update({
    where: {
      id: commentId,
    },
    data: {
      comment: message,
    },
  });

  return commentUpdated;
};

export default UpdateCommentService;
