import prismaCliente from '../../database/prismaCliente';

const CreateCommentService = async (
  message: string,
  userId: string,
  vehicleId: string
) => {
  const messageCreated = await prismaCliente.message.create({
    data: {
      comment: message,
      user_id: userId,
      vehicle_id: vehicleId,
    },
  });

  return messageCreated;
};

export default CreateCommentService;
