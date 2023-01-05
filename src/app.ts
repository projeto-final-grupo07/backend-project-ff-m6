import 'express-async-errors';
import express, { Request, Response } from 'express';
import { errorMiddleware } from './middlewares/error.middleware';
import appRoutes from './routes';
import AppError from './errors/appError';
import cors from 'cors';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Testing :^)',
  });
});

app.get('/error', (req: Request, res: Response) => {
  throw new AppError(400, 'Error is working');
});

const options: cors.CorsOptions = {
  methods: 'GET,POST,PATCH,DELETE',
  origin: '*',
};

app.use(cors(options));

appRoutes(app);
app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`Server running at localhost:${process.env.PORT}`)
);
