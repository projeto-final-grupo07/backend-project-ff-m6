/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import CreateCommentService from '../../services/Message/create.message.service';
import DeleteCommentService from '../../services/Message/delete.message.service';
import ListCommentService from '../../services/Message/list.message.service';
import UpdateCommentService from '../../services/Message/update.message.service';

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

export const UpdateCommentsController = async (req: Request, res: Response) => {
  const { message } = req.body;

  const { commentId } = req.params;

  const comment = await UpdateCommentService(message, commentId);

  res.json(comment);
};

export const DeleteCommentsController = async (req: Request, res: Response) => {
  const { commentId } = req.params;

  await DeleteCommentService(commentId);

  res.status(204).send();
};
