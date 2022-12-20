import prismaCliente from '../../database/prismaCliente';
import { IVehicleUpdate } from '../../interfaces/Vehicle';

const UpdateVehicleService = async (
  vehicleId: string,
  dataBody: IVehicleUpdate
): Promise<any> => {
  const vehicle = await prismaCliente.vehicle.update({
    where: {
      id: vehicleId,
    },
    data: dataBody,
  });

  return vehicle;
};

export default UpdateVehicleService;
