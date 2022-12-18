import { Request, Response } from "express";
import { IVehicleCreate } from "../../interfaces/Vehicle";
import CreateVehicleService from "../../services/Vehicle/create.vehicles.service";

const CreateVehicleController = async (req: Request, res: Response) => {
  const data: IVehicleCreate = req.body;

  const vehicle = await CreateVehicleService(data);

  return res.status(201).json(vehicle);
};

export default CreateVehicleController;
