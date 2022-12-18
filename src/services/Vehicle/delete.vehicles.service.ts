import prismaCliente from "../../database/prismaCliente";

const DeleteVehicleService = async (vehicle_id: string) => {
  const imgsVehicle = await prismaCliente.galleryImg.deleteMany({
    where: {
      vehicle_id,
    },
  });

  const vehicleDeleted = await prismaCliente.vehicle.delete({
    where: { id: vehicle_id },
  });
  return;
};

export default DeleteVehicleService;
