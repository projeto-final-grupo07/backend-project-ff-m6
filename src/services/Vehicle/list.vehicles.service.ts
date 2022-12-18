import prismaCliente from "../../database/prismaCliente";

const ListVehicleService = async () => {
  return await prismaCliente.vehicle.findMany();
};

export default ListVehicleService;
