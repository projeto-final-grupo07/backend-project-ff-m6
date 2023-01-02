import { Request, Response } from 'express';
import CreateImgService from '../../services/Img/create.img.service';
import DeleteImgService from '../../services/Img/delete.img.service';
import ListImgService from '../../services/Img/list.img.service';
import ListImgByIdService from '../../services/Img/listOne.img.service';
import UpdateImgService from '../../services/Img/update.img.service';

export const CreateImgController = async (req: Request, res: Response) => {
  const { url } = req.body;
  const { vehicleId } = req.params;

  const img = await CreateImgService({ url, vehicleId });

  res.status(201).json(img);
};

export const ListImgController = async (req: Request, res: Response) => {
  const imgs = await ListImgService();

  res.status(201).json(imgs);
};

export const ListImgByIdController = async (req: Request, res: Response) => {
  const { imgId } = req.params;

  const img = await ListImgByIdService(imgId);

  res.status(201).json(img);
};
export const DeleteImgController = async (req: Request, res: Response) => {
  const { imgId } = req.params;

  const img = await DeleteImgService(imgId);

  res.status(201).json(img);
};
export const UpdateImgController = async (req: Request, res: Response) => {
  const { imgId } = req.params;
  const { url } = req.body;

  const img = await UpdateImgService(imgId, url);

  res.status(201).json(img);
};
