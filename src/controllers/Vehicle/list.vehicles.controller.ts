import { Request, Response } from "express";
import { IVehicleCreate } from "../../interfaces/Vehicle";
import ListVehicleService from "../../services/Vehicle/list.vehicles.service";

const ListVehicleController = async (req: Request, res: Response) => {

  const vehicles = await ListVehicleService();

  return res.status(201).json(vehicles);
};

export default ListVehicleController;
