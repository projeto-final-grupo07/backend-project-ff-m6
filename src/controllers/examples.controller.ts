import { Request, Response } from 'express'
import myService from '../services/examples/getExaple.service'

const myController = async (req: Request, res: Response) => {

  const users = await myService();

  res.json(users);
}

export { myController }
