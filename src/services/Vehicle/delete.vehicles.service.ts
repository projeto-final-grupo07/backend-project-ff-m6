import prismaCliente from '../../database/prismaCliente';

const DeleteVehicleService = async (vehicleId: string): Promise<any> => {
  const imgsVehicle = await prismaCliente.galleryImg.deleteMany({
    where: {
      vehicle_id: vehicleId,
    },
  });

  const vehicleDeleted = await prismaCliente.vehicle.delete({
    where: { id: vehicleId },
  });
  return;
};

export default DeleteVehicleService;
