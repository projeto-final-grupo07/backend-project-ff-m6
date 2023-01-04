import { Request, Response } from 'express';
import CreateCommentService from '../../services/Message/create.message.service';
import ListCommentService from '../../services/Message/list.message.service';

export const CreateCommentController = async (req: Request, res: Response) => {
  const { message } = req.body;
  const userId = req.user.id;
  const { vehicleId } = req.params;

  const messageCreated = await CreateCommentService(message, userId, vehicleId);

  res.status(201).json(messageCreated);
};

export const ListCommentsController = async (req: Request, res: Response) => {
  const comments = await ListCommentService();

  res.json(comments);
};
