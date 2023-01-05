/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import ResetPasswordService from '../../services/Email/resetPassword.service';
import SendEmailService from '../../services/Email/senEmail.service';

const SendEmailController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const sendEmail = await SendEmailService(email);

  res.json(sendEmail);
};

const ResetPasswordController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await ResetPasswordService(email, password);

  res.json(user);
};

export { SendEmailController, ResetPasswordController };
