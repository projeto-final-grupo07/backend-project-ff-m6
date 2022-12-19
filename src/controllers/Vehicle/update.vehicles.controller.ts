import { Request, Response } from "express";
import { IVehicleUpdate } from "../../interfaces/Vehicle";
import UpdateVehicleService from "../../services/Vehicle/update.vehicles.service";

const UpdateVehicleController = async (req: Request, res: Response) => {
  const { vehicle_id } = req.params;
  const data: IVehicleUpdate = req.body;

  const vehicle = await UpdateVehicleService(vehicle_id, data);

  return res.status(200).json(vehicle);
};

export default UpdateVehicleController;
