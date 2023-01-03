import { Request, Response } from 'express';

import { IVehicleCreate, IVehicleUpdate } from '../../interfaces/Vehicle';

import CreateVehicleService from '../../services/Vehicle/create.vehicles.service';
import ListVehicleService from '../../services/Vehicle/list.vehicles.service';
import UpdateVehicleService from '../../services/Vehicle/update.vehicles.service';
import DeleteVehicleService from '../../services/Vehicle/delete.vehicles.service';
import ListOneService from '../../services/Vehicle/listOne.vehicles.service';

export const CreateVehicleController = async (
  req: Request,
  res: Response
): Promise<Object> => {
  const data: IVehicleCreate = req.body;
  const userId = req.user.id;

  const vehicle = await CreateVehicleService(data, userId);

  return res.status(201).json(vehicle);
};

export const ListVehicleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const vehicles = await ListVehicleService();

  return res.status(201).json(vehicles);
};

export const UpdateVehicleController = async (
  req: Request,
  res: Response
): Promise<Object> => {
  const { vehicleId } = req.params;
  const data: IVehicleUpdate = req.body;

  const vehicle = await UpdateVehicleService(vehicleId, data);

  return res.status(200).json(vehicle);
};

export const DeleteVehicleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { vehicleId } = req.params;

  const vehicle = await DeleteVehicleService(vehicleId);

  return res.status(204).json(vehicle);
};

export const listOneVehicleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { vehicleId } = req.params;
  const vehicle = await ListOneService(vehicleId);
  return res.status(200).json(vehicle);
};
