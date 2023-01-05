/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/quotes */
// eslint-disable-next-line @typescript-eslint/quotes
// import nodemailer from 'nodemailer';

import prismaCliente from '../../database/prismaCliente';
import AppError from '../../errors/appError';
import { randomBytes } from 'crypto';

// import prismaCliente from '../../database/prismaCliente';
const nodemailer = require('nodemailer');

const SendEmailService = async (email: string) => {
  const user = await prismaCliente.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError(404, 'User not Found');
  }

  const token = randomBytes(20).toString('hex');

  const now = new Date();
  now.setHours(now.getHours() + 1);

  await prismaCliente.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: token,
      passwordResetExpires: now,
    },
  });

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'toloco747@gmail.com',
      pass: 'kukikhemckmenyav',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const result = await transport.sendMail({
    from: 'Recuperar Senha <toloco747@gmail.com>',
    to: `${user.email}`,
    subject: 'Testando envio de um email',
    html: `
      <h1>Recuperação de Senha</h1>
      Utilize esse token para alterar a senha <b>${token}</b>
    `,
  });

  return result;
};

export default SendEmailService;
