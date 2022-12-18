import { Request, Response } from "express";
import DeleteVehicleService from "../../services/Vehicle/delete.vehicles.service";

const DeleteVehicleController = async (req: Request, res: Response) => {
  const { vehicle_id } = req.params;

  const vehicle = await DeleteVehicleService(vehicle_id);

  return res.status(204).json(vehicle);
};

export default DeleteVehicleController;
