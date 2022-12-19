import prismaCliente from "../../database/prismaCliente";
import { IVehicleUpdate } from "../../interfaces/Vehicle";

const UpdateVehicleService = async (
  vehicle_id: string,
  dataBody: IVehicleUpdate
) => {
  const vehicle = await prismaCliente.vehicle.update({
    where: {
      id: vehicle_id,
    },
    data: dataBody,
  });

  return vehicle;
};

export default UpdateVehicleService;
